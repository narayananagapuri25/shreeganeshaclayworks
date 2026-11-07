import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFile(path.join(root, file), "utf8");
const [html, app, css] = await Promise.all([
  read("index.html"),
  read("app.js"),
  read("styles.css")
]);

const requiredFiles = [
  "favicon.svg", "404.html", "_headers", "robots.txt",
  "assets/products/heart-diya.jpg",
  "assets/products/plain-agul.jpg",
  "assets/products/stand-agul.jpg",
  "assets/products/store-stock.jpg",
  "assets/products/simini.jpg",
  "assets/products/cooking-vessels.jpg",
  "assets/products/water-pots.jpg",
];
for (const file of requiredFiles) await access(path.join(root, file));

const officialLogoUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_3JhHYSnxjWx3r7xsCRdqAg9xlbY/aad0e2a4-b1b1-4aaa-b859-bee5aded603d.png";
assert.equal(
  html.split(officialLogoUrl).length - 1,
  2,
  "Header and footer must use the exact logo crop from the supplied flyer"
);


const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "HTML must not contain duplicate IDs");

const idSet = new Set(ids);
const sectionLinks = [...html.matchAll(/href="#([^"]+)"/g)]
  .map((match) => match[1])
  .filter((fragment) => fragment.length > 0);
for (const fragment of sectionLinks) {
  assert.ok(idSet.has(fragment), "Broken in-page link: #" + fragment);
}

for (const requiredId of ["home", "categories", "collections", "rate-chart", "story", "how-to-shop", "visit", "product-grid", "product-result-count", "empty-state", "product-search", "rate-groups"]) {
  assert.ok(idSet.has(requiredId), "Missing required page element: " + requiredId);
}
assert.match(html, /Store hours · 9 AM–7 PM/, "The requested store hours should be visible in the opening announcement");
assert.match(html, /9:00 AM–7:00 PM/, "The requested 9 AM–7 PM store hours must be visible");
assert.match(html, /Near Collectorate, Opp\. Govt\. Dispensary/, "The flyer address must remain on the page");
assert.match(html, /Mancherial–Chennur Highway, Naspur/, "The complete flyer street address must remain on the page");
assert.match(html, /504208/, "The flyer PIN code must remain on the page");
assert.match(html, /class="[^"]*store-facts[^"]*"/, "The quick store information bar must appear after the hero");
assert.match(html, /href="tel:\+919493404602"/, "The quick store facts must include a working call action");
assert.match(html, /class="hero-gallery"/, "The hero should show real shop product photographs");
assert.match(html, /assets\/products\/plain-agul\.jpg/, "Hero should use the original plain-agul photo");
assert.match(html, /assets\/products\/stand-agul\.jpg/, "Hero should use the original stand-agul photo");
assert.doesNotMatch(html.slice(html.indexOf('class="hero-gallery"'), html.indexOf('</div>', html.indexOf('class="hero-gallery"'))), /heart-diya\.jpg|water-pots\.jpg/, "Hero should avoid the notebook diya photo and low-resolution water-pot photo");
assert.equal((html.match(/class="how-to-step"/g) || []).length, 3, "The page should have three practical shopping steps");
assert.match(app, /searchTerms: \["diya"/, "Diyas should be discoverable through common search terms");
assert.match(app, /searchTerms: \["water pot", "matka"/, "Water pots should be discoverable through common search terms");

for (const asset of ["styles.css", "app.js", "favicon.svg"]) {
  assert.ok(html.includes(asset), "HTML must link local asset " + asset);
}
assert.doesNotMatch(html, /images\.unsplash\.com/, "Product pages should use the shop's real photos");
assert.equal(html.split(officialLogoUrl).length - 1, 2, "The supplied flyer logo must be used in header and footer");

const categoryLinks = new Set([...html.matchAll(/data-category-link="([^"]+)"/g)].map((m) => m[1]));
const filters = new Set([...html.matchAll(/data-filter="([^"]+)"/g)].map((m) => m[1]));
for (const category of categoryLinks) {
  assert.ok(filters.has(category), "Category link has no matching filter: " + category);
}

const dictionary = app.match(/const translations = \{\s*en:\s*\{([\s\S]*?)\n  \},\s*te:\s*\{([\s\S]*?)\n  \}\s*\};/);
assert.ok(dictionary, "Could not locate English and Telugu translation dictionaries");
const englishDictionary = dictionary[1];
const teluguDictionary = dictionary[2];
const translationKeys = new Set([
  ...[...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]),
  ...[...html.matchAll(/data-i18n-placeholder="([^"]+)"/g)].map((m) => m[1])
]);
for (const key of translationKeys) {
  assert.match(englishDictionary, new RegExp("\\b" + key + "\\s*:"), "Missing English translation: " + key);
  assert.match(teluguDictionary, new RegExp("\\b" + key + "\\s*:"), "Missing Telugu translation: " + key);
}

const productsBlock = app.match(/const products = \[([\s\S]*?)\n\];\s*\n\nconst rateGroups/);
assert.ok(productsBlock, "Could not locate product catalogue");
const productCount = [...productsBlock[1].matchAll(/\bid:\s*["'][a-z-]+["']/g)].length;
assert.equal(productCount, 7, "Expected seven shop catalogue entries including clay idol enquiries");
assert.match(productsBlock[1], /id: "clay-idols"/, "Clay idol enquiry collection is missing");
assert.match(productsBlock[1], /name: \{ en: "Traditional clay diya"/, "Diya card name must match the real product photograph");
assert.match(productsBlock[1], /name: \{ en: "Pooja & other clay items"/, "The shop-stock photograph must not be labelled as a specific idol");
assert.equal([...productsBlock[1].matchAll(/price: \{\s*en:/g)].length, 7, "Every product card must have an English and Telugu price/availability label");
assert.match(app, /product\.price\.en, product\.price\.te/, "Search must include translated product price guidance");
assert.match(app, /product\.price\[language\]/, "Product price guidance must follow the selected language");
assert.doesNotMatch(app, /class="product-tag"/, "Do not repeat category labels over product images");
assert.match(css, /\.product-card-body\s*\{\s*display:\s*flex/, "Product cards should use equal-height body layout");
assert.match(css, /object-fit:\s*contain\s*!important/, "All product photos must use full-item contain framing");
assert.match(css, /\.category-label\s*\{[\s\S]*?position:\s*static/, "Category labels must sit below the photo, not over the product");
assert.match(css, /\.category-card::after,[\s\S]*?display:\s*none/, "The photo-overlay gradient must not obscure products");
assert.match(css, /\.hero-photo\s*\{\s*display:\s*none\s*\}/, "Do not crop the old stock photo as a full hero background");
assert.match(app, /visible\.length === 1[\s\S]*oneResult/, "Single-result search copy must use the singular form");
assert.match(app, /oneResult: "Showing 1 result"/, "English singular result translation is missing");
assert.match(app, /oneResult: "1 ఫలితం"/, "Telugu singular result translation is missing");
assert.doesNotMatch(app, /Heart-shaped diya/, "The notebook photograph must not be described as a heart-shaped diya");
assert.ok(app.includes('id: "cooking-vessels"') && app.includes('image: "assets/products/cooking-vessels.jpg"'), "Cooking vessels should use their own shop product photo");
assert.ok(app.includes('id: "water-pots"') && app.includes('image: "assets/products/water-pots.jpg"'), "Water pots should use their own shop product photo");
assert.ok(html.includes('assets/products/cooking-vessels.jpg'), "Cooking vessel category image is missing");
assert.ok(html.includes('assets/products/water-pots.jpg'), "Water pot category image is missing");

assert.match(app, /whatsappNumber:\s*"919493404602"/, "Primary WhatsApp number is not configured");
assert.match(app, /https:\/\/wa\.me\//, "WhatsApp link builder is missing");
assert.match(app, /encodeURIComponent\(message\)/, "WhatsApp message must be URL encoded");
assert.match(app, /const rateGroups = \[/, "Shop price chart data is missing");
assert.match(app, /"Diya No\. 1", "₹1\.50", "₹15"/, "The listed No. 1 diya rate is missing");
assert.match(app, /"B\/Simini", "₹60\.00", "₹600"/, "The listed B/Simini rate is missing");
assert.match(app, /"Ranjan", "₹250–₹300", ""/, "The Ranjan rate is missing");
assert.match(app, /class="rate-enquire"/, "Rate rows must link to item-specific WhatsApp enquiries");
assert.match(app, /rateEnquire: "WhatsApp"/, "English WhatsApp rate column header is missing");
assert.match(app, /rateEnquireAction: "Ask"/, "English rate enquiry action is missing");
assert.match(app, /rateEnquire: "WhatsApp"/, "Telugu WhatsApp rate column header is missing");
assert.match(app, /rateEnquireAction: "అడగండి"/, "Telugu rate enquiry action is missing");
assert.match(app, /addEventListener\("click"/, "Interactive controls must use event listeners");
assert.doesNotMatch(app, /onerror\s*=/i, "Avoid inline event handlers");

assert.match(css, /@media\s*\(max-width:\s*700px\)/, "Mobile layout breakpoint is missing");
assert.match(css, /\.rate-table/, "Price chart styling is missing");
assert.match(css, /prefers-reduced-motion/, "Reduced-motion support is missing");
assert.match(css, /:focus-visible/, "Visible keyboard focus styling is missing");
assert.match(css, /scroll-margin-top/, "Sticky-header anchor offset is missing");
assert.match(html, /\+91 85558 96577/, "The confirmed alternate number must remain displayed");
assert.match(html, /tel:\+918555896577/, "Alternate contact must be clickable for phone calls");
assert.match(html, /https:\/\/wa\.me\/918555896577/, "Alternate contact must be clickable for WhatsApp");
assert.match(html, /\+91 85558 96577/, "Alternate contact must be displayed in the confirmed format");
assert.doesNotMatch(html, /85555896577/, "The old misprinted alternate number must not remain");

console.log("Site smoke checks passed.");
console.log("- Required site files and real shop product photos exist");
console.log("- In-page links and category filters are connected");
console.log("- English/Telugu translation coverage is complete");
console.log("- Product catalogue and WhatsApp enquiry generation are present");
console.log("- Supplied diya, stand, simini, cooking and water pot rates are represented");
console.log("- Responsive price tables and mobile CSS are present");
