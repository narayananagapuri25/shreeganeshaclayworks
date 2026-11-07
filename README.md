# Shree Ganesha Clay Works

A mobile-first digital showroom for traditional clay products, based in Mancherial, Telangana.

## Website

A dependency-free static website built with HTML, CSS and vanilla JavaScript.

- Responsive storefront and category-led discovery for diyas, agul, stand agul, simini lamps, cooking vessels and water pots.
- Product search and category filtering.
- English / Telugu language toggle.
- Shop-supplied rate chart transcribed into accessible, searchable tables.
- Product-specific WhatsApp enquiries; no checkout, customer accounts or payment collection.
- Store address, phone contact, Google Maps directions, mobile navigation and a friendly 404 page.
- Local product photography supplied by the shop.
- Basic security headers for Cloudflare Pages.

## WhatsApp configuration

The primary WhatsApp destination is configured in `app.js`:

```js
whatsappNumber: "919493404602"
```

This is the shop's number shown on its latest rate-chart poster. Product enquiries open a pre-filled message asking the shop to confirm current designs, prices and availability.

## Pricing and inventory notes

The price tables reproduce the values in the rate chart supplied by the shop. Prices may change, and customers are prompted to confirm the current rate and availability before ordering. No live stock count is represented.

Some product photographs show bag or box quantities (for example 500-piece bags or 300-piece boxes). Those are reference pack markings from the submitted photos, not guaranteed current inventory.

## Before public launch

1. Confirm all price-chart entries and product names with the shop.
2. Confirm the exact product range, stock, packaging and bulk-order terms.
3. Review the Telugu wording and all product descriptions.
4. Verify the alternate contact number (the website currently shows the primary number as the clickable contact).
5. Add final opening hours, social media links and any confirmed delivery/pickup information.
6. Test Android and iPhone layouts, all WhatsApp enquiry links, and map directions.

## Local preview

Open `index.html` in a modern browser. No build step or package installation is required.

## Deployment: Cloudflare Pages

Connect this repository to Cloudflare Pages and use:

- Production branch: `main` (after the changes are reviewed and merged).
- Build command: *(leave empty)*.
- Build output directory: `/`.

No production deployment or custom domain has been configured yet.
