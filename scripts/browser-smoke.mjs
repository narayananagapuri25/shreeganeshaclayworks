import assert from "node:assert/strict";
import { createServer } from "node:http";
import { mkdir, readFile, stat } from "node:fs/promises";
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

  async function assertAllProductImagesLoad() {
    const images = page.locator(".category-card img, .product-card img, .story-image-wrap img, .brand-logo");
    const count = await images.count();
    assert.ok(count >= 17, "Expected all category, product, story and logo images to be present");
    for (let i = 0; i < count; i += 1) {
      const image = images.nth(i);
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => element.decode());
      const details = await image.evaluate((element) => {
        const canvas = document.createElement("canvas");
        canvas.width = 16;
        canvas.height = 16;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        context.drawImage(element, 0, 0, canvas.width, canvas.height);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
        let min = 255;
        let max = 0;
        for (let i = 0; i < pixels.length; i += 4) {
          if (pixels[i + 3] < 16) continue;
          for (let channel = 0; channel < 3; channel += 1) {
            min = Math.min(min, pixels[i + channel]);
            max = Math.max(max, pixels[i + channel]);
          }
        }
        return {
          src: element.getAttribute("src"),
          naturalWidth: element.naturalWidth,
          naturalHeight: element.naturalHeight,
          complete: element.complete,
          pixelVariation: max - min
        };
      });
      assert.ok(
        details.complete && details.naturalWidth >= 120 && details.naturalHeight >= 60,
        "Image is missing, too small or broken: " + JSON.stringify(details)
      );
      assert.ok(
        details.pixelVariation >= 12,
        "Image appears blank or has no visible product detail: " + JSON.stringify(details)
      );
    }
  }

  await mkdir(path.join(root, "artifacts"), { recursive: true });
  const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(response.status(), 200, "Home page must load");
  const floatingWhatsapp = page.locator(".floating-whatsapp");
  assert.equal(await floatingWhatsapp.isVisible(), false, "Floating WhatsApp must stay out of the opening announcement/hero");
  await page.evaluate(() => window.scrollTo(0, 420));
  await page.waitForFunction(() => document.querySelector(".floating-whatsapp").classList.contains("is-visible"));
  assert.equal(await floatingWhatsapp.isVisible(), true, "Floating WhatsApp should appear after scrolling");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForFunction(() => !document.querySelector(".floating-whatsapp").classList.contains("is-visible"));
  assert.match(await page.title(), /Shree Ganesha Clay Works/);
  const heroPhotoStyle = await page.locator(".hero-photo").evaluate((element) => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return { image: style.backgroundImage, width: rect.width, height: rect.height, left: rect.left };
  });
  assert.match(heroPhotoStyle.image, /cooking-vessels\.jpg/, "Hero should use the clean original cooking-vessel photograph");
  assert.ok(heroPhotoStyle.width > 250 && heroPhotoStyle.height > 200, "Hero photograph should have a substantial visible area");
  assert.ok(heroPhotoStyle.left > (await page.evaluate(() => window.innerWidth)) * 0.45, "Desktop hero photograph should sit to the right of the copy");
  assert.equal(await page.locator(".hero-note, .hero-index").count(), 0, "Hero should not contain redundant overlay captions");
  const desktopCategoryColumns = await page.locator(".category-grid").evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
  assert.equal(desktopCategoryColumns, 4, "Desktop categories should use a balanced four-column grid");
  const diyaImageStyle = await page.locator('.category-card[data-category-link="diyas"] img').evaluate((element) => {
    const style = getComputedStyle(element);
    const open = style.transform.indexOf("(");
    const zoom = open >= 0 ? Number(style.transform.slice(open + 1).split(",")[0]) : 1;
    return { zoom, clipPath: style.clipPath, objectFit: style.objectFit };
  });
  assert.ok(diyaImageStyle.zoom >= 1.2 && diyaImageStyle.zoom <= 1.35, "The heart-diya image should use a modest natural crop");
  assert.equal(diyaImageStyle.clipPath, "none", "Do not reshape the original heart-diya photograph with an artificial mask");
  assert.equal(diyaImageStyle.objectFit, "cover", "The original heart-diya photo should stay in a natural rectangular frame");
  const storeAddress = await page.locator("address").innerText();
  assert.match(storeAddress, /Near Collectorate/i, "Store address should include the supplied landmark");
  assert.match(storeAddress, /Govt\. Dispensary/i, "Store address should include the supplied dispensary landmark");
  assert.match(storeAddress, /Naspur/i, "Store address should include Naspur");
  assert.match(storeAddress, /504208/, "Store address should include the supplied PIN code");
  const directionsLink = page.locator('a[href^="https://www.google.com/maps/search/"]');
  assert.equal(await directionsLink.count(), 1, "Store directions link should be present");
  const directionsHref = await directionsLink.getAttribute("href");
  assert.match(new URL(directionsHref).searchParams.get("query"), /Shree Ganesha Clay Works/i, "Directions should search for the correct shop name");
  const generalWhatsAppLinks = page.locator('[data-whatsapp="general"]');
  assert.ok(await generalWhatsAppLinks.count() >= 4, "Header, hero, footer and floating WhatsApp shortcuts should be available");
  for (let i = 0; i < await generalWhatsAppLinks.count(); i += 1) {
    const link = generalWhatsAppLinks.nth(i);
    assert.match(await link.getAttribute("href"), /^https:\/\/wa\.me\/919493404602\?text=/, "General WhatsApp shortcuts should target the primary shop number");
    assert.equal(await link.getAttribute("target"), "_blank", "General WhatsApp shortcuts should open in a new tab");
    assert.match(await link.getAttribute("rel"), /noopener/, "New-tab WhatsApp links should be protected");
  }
  assert.equal(await page.locator(".brand-logo").count(), 2, "The supplied logo should appear in header and footer");
  await page.locator(".site-footer .brand-logo").scrollIntoViewIfNeeded();
  await page.waitForFunction(() => {
    const footerLogo = document.querySelector(".site-footer .brand-logo");
    return footerLogo && footerLogo.complete && footerLogo.naturalWidth > 0;
  });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForFunction(() => !document.querySelector(".floating-whatsapp").classList.contains("is-visible"));
  const logoUsage = await page.locator(".brand-logo").evaluateAll((images) => images.map((image) => {
    const style = getComputedStyle(image);
    return {
      src: image.getAttribute("src"),
      fit: style.objectFit,
      filter: style.filter,
      clipPath: style.clipPath,
      loaded: image.complete && image.naturalWidth > 0
    };
  }));
  assert.deepEqual(logoUsage.map((logo) => logo.src), [
    "assets/brand/official-logo.jpg",
    "assets/brand/official-logo.jpg"
  ], "Header and footer must use the exact same supplied logo file");
  for (const logo of logoUsage) {
    assert.equal(logo.fit, "contain", "The original logo must never be cropped");
    assert.equal(logo.filter, "none", "The original logo must not be recoloured or filtered");
    assert.equal(logo.clipPath, "none", "The original logo must not be masked or reshaped");
    assert.equal(logo.loaded, true, "The original logo must load in both placements");
  }
  assert.equal(await page.locator(".brand-logo").first().evaluate((image) => image.complete && image.naturalWidth > 0), true, "The original shop logo should load");
  const logoLayout = await page.locator(".site-header .brand-logo").evaluate((image) => {
    const rect = image.getBoundingClientRect();
    const style = getComputedStyle(image);
    return { width: rect.width, height: rect.height, display: style.display, visibility: style.visibility, opacity: Number(style.opacity) };
  });
  assert.ok(logoLayout.width >= 130 && logoLayout.height >= 50, "The original shop logo must have a visible header-sized footprint");
  assert.notEqual(logoLayout.display, "none", "The original shop logo must not be hidden");
  assert.equal(logoLayout.visibility, "visible", "The original shop logo must be visible");
  assert.ok(logoLayout.opacity > 0, "The original shop logo must not be transparent");
  assert.equal(await page.locator(".category-card").count(), 7, "All seven shop categories should render");
  assert.equal(await page.locator("#product-grid .product-card").count(), 7, "Seven shop collections should render");
  await assertAllProductImagesLoad();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: path.join(root, "artifacts/site-desktop.png"), fullPage: true });

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
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const mobileRateOverflow = await page.locator("#rate-chart").evaluate((element) => element.scrollWidth > element.clientWidth);
  assert.equal(mobileRateOverflow, false, "Mobile rate chart should fit without a sideways scrolling table");
  assert.equal(await page.locator(".rate-enquire").first().isVisible(), true, "Mobile WhatsApp rate actions should remain visible");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const rateHref = await page.locator(".rate-enquire").first().getAttribute("href");
  assert.match(rateHref, /^https:\/\/wa\.me\/919493404602\?text=/, "Rate enquiry should target the primary WhatsApp number");

  await page.locator('[data-lang="te"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "te");
  assert.match(await page.locator("#product-grid h3").first().innerText(), /మట్టి|దీపం/);
  assert.match(await page.locator(".rate-enquire").first().innerText(), /అడగండి/);
  await page.locator('[data-lang="en"]').click();

  assert.equal(await page.locator('a[href="tel:+919493404602"]').count(), 1, "Primary number should have a call link");
  assert.equal(await page.locator('a[href="https://wa.me/919493404602"]').count(), 1, "Primary number should have a direct WhatsApp link");
  assert.equal(await page.getByText("+91 85558 96577", { exact: true }).count(), 1, "Alternate number should remain visible");
  assert.equal(await page.locator('a[href="tel:+918555896577"]').count(), 1, "Alternate number should have a direct phone link");
  assert.equal(await page.locator('a[href="https://wa.me/918555896577"]').count(), 1, "Alternate number should have a direct WhatsApp link");

  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert.equal(desktopOverflow, false, "Desktop page must not overflow horizontally");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".floating-whatsapp").isVisible(), false, "Mobile opening view must not have an overlay over the announcement strip");
  await assertAllProductImagesLoad();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: path.join(root, "artifacts/site-mobile.png"), fullPage: true });
  const toggle = page.locator(".menu-toggle");
  await toggle.click();
  assert.equal(await toggle.getAttribute("aria-expanded"), "true", "Mobile menu should open");
  await page.keyboard.press("Escape");
  assert.equal(await toggle.getAttribute("aria-expanded"), "false", "Escape should close the mobile menu");
  await toggle.click();
  assert.equal(await toggle.getAttribute("aria-expanded"), "true", "Mobile menu should reopen");
  await page.locator(".site-header .brand").click();
  assert.equal(await toggle.getAttribute("aria-expanded"), "false", "Mobile menu should close after tapping outside");
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert.equal(mobileOverflow, false, "Mobile page must not overflow horizontally");

  await page.locator('[data-filter="all"]').click();
  await page.locator("#product-search").fill("not-a-real-product");
  assert.equal(await page.locator("#product-grid .product-card").count(), 0);
  assert.equal(await page.locator("#empty-state").isVisible(), true, "No-results state should be visible");
  await page.locator("#product-search").clear();
  assert.equal(await page.locator("#product-grid .product-card").count(), 7);

  // Sweep common phone, compact-phone, tablet, and desktop widths for hidden overflow and header overlap.
  for (const width of [320, 360, 390, 430, 700, 701, 768, 820, 860, 861, 900, 980, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const layout = await page.evaluate(() => {
      const header = document.querySelector(".site-header");
      const logo = document.querySelector(".site-header .brand-logo");
      const toggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector(".primary-nav");
      const rect = (element) => {
        const box = element.getBoundingClientRect();
        return { left: box.left, right: box.right, top: box.top, bottom: box.bottom };
      };
      return {
        scrollWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
        header: rect(header),
        logo: rect(logo),
        toggle: rect(toggle),
        nav: rect(nav),
        toggleDisplay: getComputedStyle(toggle).display,
        navDisplay: getComputedStyle(nav).display
      };
    });
    assert.ok(layout.scrollWidth <= layout.viewportWidth, "Horizontal overflow at viewport width " + width + ": " + JSON.stringify(layout));
    assert.ok(layout.logo.left >= layout.header.left && layout.logo.right <= layout.header.right, "Logo escapes header at viewport width " + width);
    if (width <= 860) {
      assert.notEqual(layout.toggleDisplay, "none", "Mobile/tablet menu button should be visible at width " + width);
      assert.equal(layout.navDisplay, "none", "Mobile/tablet navigation should be collapsed initially at width " + width);
    } else {
      assert.equal(layout.toggleDisplay, "none", "Desktop menu button should be hidden at width " + width);
      assert.notEqual(layout.navDisplay, "none", "Desktop navigation should be visible at width " + width);
      assert.ok(layout.nav.left >= layout.logo.right, "Desktop navigation must not overlap the logo at width " + width);
    }
  }

  await page.locator('[data-filter="idols"]').click();
  assert.equal(await page.locator("#product-grid .product-card").count(), 1, "Clay idol enquiry collection should be filterable");
  assert.match(await page.locator("#product-grid h3").first().innerText(), /Clay idols/);

  assert.deepEqual(pageErrors, [], "Page should not produce uncaught JavaScript errors");
  console.log("Browser checks passed: desktop, mobile, image detail, search, filters, English/Telugu, rate enquiries, store address/directions, primary and alternate call/WhatsApp links, menu Escape/outside-click and floating WhatsApp.");
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
