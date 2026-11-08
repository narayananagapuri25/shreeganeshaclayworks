import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const artifactDir = path.join(root, "artifacts");
const siteHost = "shreeganeshaclayworks.pages.dev";
const requestedResultLimit = 100;
const headedMode = process.env.HEADED === "1";
const searchQueries = [
  '"Shree Ganesha Clay Works"',
  '"Shree Ganesha Clay Works" Mancherial',
  "clay diyas Mancherial",
  "clay pots Mancherial",
  "pottery shop Mancherial"
];

function decodeResultUrl(rawHref) {
  try {
    let parsed = new URL(rawHref, "https://www.google.com");
    if ((parsed.hostname === "www.google.com" || parsed.hostname === "google.com") && parsed.pathname === "/url") {
      const destination = parsed.searchParams.get("q") || parsed.searchParams.get("url");
      if (destination) parsed = new URL(destination);
    }
    return parsed;
  } catch {
    return null;
  }
}

function isTargetSite(url) {
  return Boolean(url && (url.hostname === siteHost || url.hostname.endsWith("." + siteHost)));
}

function classifyGooglePage(url, bodyText, responseStatus) {
  const text = bodyText.toLowerCase();
  if (responseStatus === 403 || responseStatus === 429) return "blocked";
  if (url.includes("consent.google.") || text.includes("before you continue to google")) return "consent_required";
  if (
    text.includes("our systems have detected unusual traffic") ||
    text.includes("unusual traffic from your computer network") ||
    text.includes("automated queries") ||
    text.includes("sorry/index") ||
    text.includes("recaptcha")
  ) return "blocked";
  if (responseStatus && responseStatus >= 400) return "http_error";
  return "search_results";
}

await mkdir(artifactDir, { recursive: true });

const report = {
  generatedAt: new Date().toISOString(),
  searchEngine: "Google Search",
  market: "India",
  language: "English",
  targetWebsite: "https://" + siteHost + "/",
  requestedOrganicResultLimit: requestedResultLimit,
  note: "SERP positions are observations for this run, not fixed rankings. Google results vary by location, device, language, time and personalization. A blocked or consent page is inconclusive, not evidence that the site is absent.",
  queries: []
};

let browser;
try {
  browser = await chromium.launch({ headless: !headedMode, args: ["--no-sandbox"] });
  const context = await browser.newContext({
    locale: "en-IN",
    timezoneId: "Asia/Kolkata",
    viewport: { width: 1365, height: 900 }
  });
  const page = await context.newPage();
  page.setDefaultNavigationTimeout(45000);

  for (let index = 0; index < searchQueries.length; index += 1) {
    const query = searchQueries[index];
    const searchUrl = new URL("https://www.google.com/search");
    searchUrl.searchParams.set("q", query);
    searchUrl.searchParams.set("num", String(requestedResultLimit));
    searchUrl.searchParams.set("hl", "en");
    searchUrl.searchParams.set("gl", "in");
    searchUrl.searchParams.set("pws", "0");

    const entry = {
      query,
      searchUrl: searchUrl.toString(),
      outcome: "error",
      httpStatus: null,
      organicResultsScanned: 0,
      siteOrganicPosition: null,
      siteResultTitle: null,
      siteLinkFoundOutsideOrganicResults: false,
      businessNameMentioned: false,
      organicResults: [],
      diagnostic: null
    };

    try {
      const response = await page.goto(searchUrl.toString(), { waitUntil: "domcontentloaded" });
      entry.httpStatus = response ? response.status() : null;
      await page.locator("body").waitFor({ timeout: 15000 });
      await page.waitForTimeout(1800);

      const currentUrl = page.url();
      const bodyText = await page.locator("body").innerText().catch(() => "");
      entry.businessNameMentioned = bodyText.toLowerCase().includes("shree ganesha clay works");
      let pageState = classifyGooglePage(currentUrl, bodyText, entry.httpStatus);

      if (headedMode && ["blocked", "consent_required"].includes(pageState)) {
        const prompt = createInterface({ input, output });
        console.log("Google is requesting human verification. Complete the CAPTCHA or consent prompt in the open browser window; do not use automated CAPTCHA solving.");
        await prompt.question("After the Google results page is visible, press Enter here to continue...");
        prompt.close();
        const resumedText = await page.locator("body").innerText().catch(() => "");
        entry.businessNameMentioned = resumedText.toLowerCase().includes("shree ganesha clay works");
        pageState = classifyGooglePage(page.url(), resumedText, null);
      }

      if (pageState !== "search_results") {
        entry.outcome = pageState;
        if (pageState === "blocked") {
          entry.diagnostic = "Google presented an anti-automation/CAPTCHA challenge. This run is inconclusive; no ranking is inferred.";
        } else if (pageState === "consent_required") {
          entry.diagnostic = "Google requires a consent choice. This run is inconclusive until the consent screen is completed.";
        } else {
          entry.diagnostic = "Google did not return a normal search-results page. Inspect the screenshot or retry from a normal browser.";
        }
      } else {
        const organic = await page.locator("a:has(h3)").evaluateAll((anchors) =>
          anchors.map((anchor) => ({
            title: anchor.querySelector("h3")?.innerText?.trim() || "",
            href: anchor.getAttribute("href") || ""
          })).filter((item) => item.title && item.href)
        );

        const uniqueResults = [];
        const seen = new Set();
        for (const item of organic) {
          const destination = decodeResultUrl(item.href);
          if (!destination || !["http:", "https:"].includes(destination.protocol)) continue;
          if (destination.hostname === "google.com" || destination.hostname.endsWith(".google.com")) continue;
          const key = destination.href;
          if (seen.has(key)) continue;
          seen.add(key);
          uniqueResults.push({
            title: item.title,
            url: destination.toString(),
            host: destination.hostname
          });
        }

        entry.organicResults = uniqueResults.slice(0, requestedResultLimit);
        entry.organicResultsScanned = entry.organicResults.length;
        const matchIndex = entry.organicResults.findIndex((item) => {
          const destination = decodeResultUrl(item.url);
          return isTargetSite(destination);
        });

        if (matchIndex >= 0) {
          entry.outcome = "found";
          entry.siteOrganicPosition = matchIndex + 1;
          entry.siteResultTitle = entry.organicResults[matchIndex].title;
        } else {
          entry.outcome = "not_found_in_scanned_results";
          entry.diagnostic = "The site was not present among the organic links returned in this page. This does not rule out Maps/local-pack visibility or results beyond those returned.";
        }

        if (matchIndex < 0) {
          const siteLinks = await page.locator("a[href]").evaluateAll((anchors) =>
            anchors.map((anchor) => anchor.href).filter(Boolean)
          );
          entry.siteLinkFoundOutsideOrganicResults = siteLinks.some((href) => isTargetSite(decodeResultUrl(href)));
          if (entry.siteLinkFoundOutsideOrganicResults) {
            entry.diagnostic += " A link to the site was present elsewhere on the results page, but no organic position was identified.";
          }
        }
      }

      await page.screenshot({
        path: path.join(artifactDir, `google-search-${String(index + 1).padStart(2, "0")}.png`),
        fullPage: true
      }).catch(() => {});
    } catch (error) {
      entry.outcome = "error";
      entry.diagnostic = error instanceof Error ? error.message : String(error);
      await page.screenshot({
        path: path.join(artifactDir, `google-search-${String(index + 1).padStart(2, "0")}.png`),
        fullPage: true
      }).catch(() => {});
    }

    report.queries.push(entry);
    console.log(`[${index + 1}/${searchQueries.length}] ${query}: ${entry.outcome}; organic position=${entry.siteOrganicPosition ?? "not observed"}; links scanned=${entry.organicResultsScanned}`);

    // Keep requests sequential and low-volume rather than parallelising Google searches.
    if (index < searchQueries.length - 1) await page.waitForTimeout(3000);
  }

  await context.close();
} finally {
  if (browser) await browser.close();
}

const successfulSearches = report.queries.filter((entry) => entry.outcome === "found").length;
report.summary = {
  queriesRun: report.queries.length,
  siteFoundInOrganicResults: successfulSearches,
  queriesWithNoOrganicSiteResult: report.queries.filter((entry) => entry.outcome === "not_found_in_scanned_results").length,
  inconclusiveOrBlocked: report.queries.filter((entry) => !["found", "not_found_in_scanned_results"].includes(entry.outcome)).length
};

await writeFile(path.join(artifactDir, "google-search-visibility.json"), JSON.stringify(report, null, 2) + "\n");
const markdown = [
  "# Google Search visibility snapshot",
  "",
  `Observed: ${report.generatedAt}`,
  "",
  "| Query | Outcome | Organic position | Organic links scanned |",
  "|---|---|---:|---:|",
  ...report.queries.map((entry) => `| ${entry.query.replace(/\|/g, "\\|")} | ${entry.outcome} | ${entry.siteOrganicPosition ?? "—"} | ${entry.organicResultsScanned} |`),
  "",
  `Site found in organic results for ${successfulSearches} of ${report.queries.length} queries.`,
  "",
  report.note,
  "",
  "Use the screenshots and JSON report to distinguish a genuine no-result observation from a consent screen, CAPTCHA, HTTP block or navigation error."
].join("\n");
await writeFile(path.join(artifactDir, "google-search-visibility.md"), markdown + "\n");

console.log(JSON.stringify(report.summary, null, 2));
assert.equal(report.queries.length, searchQueries.length, "Every configured query should produce a report entry.");
