import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8"
};

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://127.0.0.1").pathname);
    const requested = pathname === "/" ? "/index.html" : pathname;
    const filename = path.resolve(root, "." + requested);
    if (!filename.startsWith(root + path.sep) && filename !== root) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const info = await stat(filename);
    if (!info.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "Content-Type": mime[path.extname(filename)] || "application/octet-stream" });
    response.end(await readFile(filename));
  } catch {
    response.writeHead(404).end("Not found");
  }
});

let browser;
try {
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  const baseUrl = "http://127.0.0.1:" + address.port;

  browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(response.status(), 200, "Home page must load");
  assert.match(await page.title(), /Shree Ganesha Clay Works/);
  assert.equal(await page.locator(".category-card").count(), 6, "All six shop categories should render");
  assert.equal(await page.locator("#product-grid .product-card").count(), 6, "Six real catalogue categories should render");

  await page.locator('[data-filter="agul"]').click();
  assert.equal(await page.locator("#product-grid .product-card").count(), 1, "Agul filter should show its collection");
  assert.equal(await page.locator('[data-filter="agul"]').getAttribute("aria-pressed"), "true");

  await page.locator('[data-filter="all"]').click();
  await page.locator("#product-search").fill("heart");
  assert.equal(await page.locator("#product-grid .product-card").count(), 1, "Search should find the heart diya");
  assert.match(await page.locator("#product-grid h3").first().innerText(), /Heart-shaped diya/);

  await page.locator('[data-category-link="agul"]').click();
  assert.equal(await page.locator("#product-search").inputValue(), "", "Category navigation should clear stale search text");
  assert.equal(await page.locator("#product-grid .product-card").count(), 1, "Category card should select the matching collection");

  await page.locator('[data-filter="all"]').click();
  assert.equal(await page.locator(".rate-enquire").count(), 42, "Every displayed rate row should have an enquiry action");
  const rateHref = await page.locator(".rate-enquire").first().getAttribute("href");
  assert.match(rateHref, /^https:\/\/wa\.me\/919493404602\?text=/, "Rate enquiry should target the primary WhatsApp number");

  await page.locator('[data-lang="te"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "te");
  assert.match(await page.locator("#product-grid h3").first().innerText(), /మట్టి|దీపం/);
  assert.match(await page.locator(".rate-enquire").first().innerText(), /వాట్సాప్/);
  await page.locator('[data-lang="en"]').click();

  assert.equal(await page.locator('a[href="tel:+919493404602"]').count(), 1, "Primary number should have a call link");
  assert.equal(await page.getByText("+91 85555896577", { exact: true }).count(), 1, "Alternate poster number should remain visible");
  assert.equal(await page.locator('a[href*="85555896577"]').count(), 0, "Unverified alternate number must not be made clickable");

  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert.equal(desktopOverflow, false, "Desktop page must not overflow horizontally");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const toggle = page.locator(".menu-toggle");
  await toggle.click();
  assert.equal(await toggle.getAttribute("aria-expanded"), "true", "Mobile menu should open");
  await page.locator(".hero").click({ position: { x: 8, y: 8 } });
  assert.equal(await toggle.getAttribute("aria-expanded"), "false", "Mobile menu should close after tapping outside");
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert.equal(mobileOverflow, false, "Mobile page must not overflow horizontally");

  await page.locator('[data-filter="all"]').click();
  await page.locator("#product-search").fill("not-a-real-product");
  assert.equal(await page.locator("#product-grid .product-card").count(), 0);
  assert.equal(await page.locator("#empty-state").isVisible(), true, "No-results state should be visible");
  await page.locator("#product-search").clear();
  assert.equal(await page.locator("#product-grid .product-card").count(), 6);

  assert.deepEqual(pageErrors, [], "Page should not produce uncaught JavaScript errors");
  console.log("Browser checks passed: desktop, mobile, search, filters, language, rate enquiries, both contacts and navigation.");
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
