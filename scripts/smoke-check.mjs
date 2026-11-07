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
];
for (const file of requiredFiles) await access(path.join(root, file));

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "HTML must not contain duplicate IDs");

const idSet = new Set(ids);
const sectionLinks = [...html.matchAll(/href="#([^"]+)"/g)]
  .map((match) => match[1])
  .filter((fragment) => fragment.length > 0);
for (const fragment of sectionLinks) {
  assert.ok(idSet.has(fragment), "Broken in-page link: #" + fragment);
}

for (const requiredId of ["home", "categories", "collections", "rate-chart", "story", "visit", "product-grid", "empty-state", "product-search", "rate-groups"]) {
  assert.ok(idSet.has(requiredId), "Missing required page element: " + requiredId);
}

for (const asset of ["styles.css", "app.js", "favicon.svg"]) {
  assert.ok(html.includes(asset), "HTML must link local asset " + asset);
}
assert.doesNotMatch(html, /images\.unsplash\.com/, "Product pages should use the shop's real photos");

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
assert.equal(productCount, 6, "Expected six shop catalogue entries");

assert.match(app, /whatsappNumber:\s*"919493404602"/, "Primary WhatsApp number is not configured");
assert.match(app, /https:\/\/wa\.me\//, "WhatsApp link builder is missing");
assert.match(app, /encodeURIComponent\(message\)/, "WhatsApp message must be URL encoded");
assert.match(app, /const rateGroups = \[/, "Shop price chart data is missing");
assert.match(app, /"Diya No\. 1", "₹1\.50", "₹15"/, "The listed No. 1 diya rate is missing");
assert.match(app, /"B\/Simini", "₹60\.00", "₹600"/, "The listed B/Simini rate is missing");
assert.match(app, /"Ranjan", "₹250–₹300", ""/, "The Ranjan rate is missing");
assert.match(app, /class="rate-enquire"/, "Rate rows must link to item-specific WhatsApp enquiries");
assert.match(app, /rateEnquire: "Ask on WhatsApp"/, "English rate enquiry action is missing");
assert.match(app, /rateEnquire: "వాట్సాప్‌లో అడగండి"/, "Telugu rate enquiry action is missing");
assert.match(app, /addEventListener\("click"/, "Interactive controls must use event listeners");
assert.doesNotMatch(app, /onerror\s*=/i, "Avoid inline event handlers");

assert.match(css, /@media\s*\(max-width:\s*700px\)/, "Mobile layout breakpoint is missing");
assert.match(css, /\.rate-table/, "Price chart styling is missing");
assert.match(css, /prefers-reduced-motion/, "Reduced-motion support is missing");
assert.match(css, /:focus-visible/, "Visible keyboard focus styling is missing");
assert.match(css, /scroll-margin-top/, "Sticky-header anchor offset is missing");
assert.match(html, /\+91 85555896577/, "The second poster number must remain displayed");
assert.doesNotMatch(html, /tel:\+9185555896577|wa\.me\/9185555896577/, "Do not create a clickable link for the unverified 11-digit alternate number");

console.log("Site smoke checks passed.");
console.log("- Required site files and real shop product photos exist");
console.log("- In-page links and category filters are connected");
console.log("- English/Telugu translation coverage is complete");
console.log("- Product catalogue and WhatsApp enquiry generation are present");
console.log("- Supplied diya, stand, simini, cooking and water pot rates are represented");
console.log("- Responsive price tables and mobile CSS are present");
