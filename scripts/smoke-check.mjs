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

const requiredFiles = ["favicon.svg", "404.html", "_headers", "robots.txt"];
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

for (const requiredId of ["home", "categories", "collections", "story", "visit", "product-grid", "empty-state", "product-search"]) {
  assert.ok(idSet.has(requiredId), "Missing required page element: " + requiredId);
}

for (const asset of ["styles.css", "app.js", "favicon.svg"]) {
  assert.ok(html.includes(asset), "HTML must link local asset " + asset);
}

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

const productsBlock = app.match(/const products = \[([\s\S]*?)\n\];\s*\n\nconst translations/);
assert.ok(productsBlock, "Could not locate product catalogue");
const productCount = [...productsBlock[1].matchAll(/\bid:\s*["'][a-z-]+["']/g)].length;
assert.equal(productCount, 6, "Expected six representative collection cards");
assert.match(app, /whatsappNumber:\s*"919493404602"/, "Primary WhatsApp number is not configured");
assert.match(app, /https:\/\/wa\.me\//, "WhatsApp link builder is missing");
assert.match(app, /encodeURIComponent\(message\)/, "WhatsApp message must be URL encoded");
assert.match(app, /addEventListener\("click"/, "Interactive controls must use event listeners");
assert.doesNotMatch(app, /onerror\s*=/i, "Avoid inline event handlers");

assert.match(css, /@media\s*\(max-width:\s*700px\)/, "Mobile layout breakpoint is missing");
assert.match(css, /prefers-reduced-motion/, "Reduced-motion support is missing");
assert.match(css, /:focus/, "A focus state should be defined or inherited explicitly");

console.log("Site smoke checks passed.");
console.log("- Required files and local assets exist");
console.log("- In-page links and category filters are connected");
console.log("- All visible translation keys exist in English and Telugu");
console.log("- Six catalogue entries and WhatsApp URL generation are present");
console.log("- Responsive and reduced-motion CSS is present");
