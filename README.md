# Shree Ganesha Clay Works

A mobile-first digital showroom for traditional clay products, based in Mancherial, Telangana.

## Website

This repository contains a dependency-free static website built with HTML, CSS and vanilla JavaScript.

- Responsive storefront and category-led product discovery.
- Search and category filtering.
- English / Telugu language toggle.
- Product-specific WhatsApp enquiries; no checkout, customer accounts or payment collection.
- Store address, contact numbers, Google Maps directions and a friendly 404 page.
- Basic security headers for Cloudflare Pages.

## Configuration

Open app.js and update the SHOP object. Set whatsappNumber to the primary WhatsApp destination in international digits-only format (India: 91 + 10-digit mobile). Verify the alternate contact number in index.html before publishing.

The first contact number printed on the supplied poster is currently used for WhatsApp enquiries. Confirm this is the correct WhatsApp account before the site is promoted.

## Before public launch

1. Replace all illustrative stock photos with photographs of the shop's actual products and store.
2. Confirm product categories, names, designs, sizes, prices (or enquiry-only pricing), stock and delivery/pickup details.
3. Confirm the WhatsApp number, alternate phone number and Telugu wording with the shop.
4. Add the shop's approved logo, social links, domain and any verified opening hours.
5. Test the live website on Android and iPhone, including every WhatsApp link and map directions.

**Important:** Catalogue names and images in this first release are representative examples, not a verified live inventory. No prices, health benefits, stock quantities or delivery promises are asserted.

## Local preview

Open index.html in a modern browser. No build step or package installation is required.

## Deployment: Cloudflare Pages

Connect this repository to Cloudflare Pages and use:

- Production branch: main (after the website changes are reviewed and merged).
- Build command: leave empty.
- Build output directory: /.

The site is also suitable for other static hosting providers. A custom domain has not been configured in this repository.

## Image credits

Illustrative photos are linked from Unsplash and are covered by the Unsplash License. They are temporary visual placeholders and should be replaced with real shop photography before public launch.

- Clay pottery display — https://unsplash.com/photos/a-wooden-table-topped-with-lots-of-brown-pottery-Y9Da9DSYK6U
- Clay diyas — https://unsplash.com/photos/several-clay-diyas-arranged-on-a-textured-surface-TeFCd6ZmpHo
- Clay pot on a fire — https://unsplash.com/photos/a-pot-is-cooking-over-fire-A_TitYdsG-E
- Potter shaping clay — https://unsplash.com/photos/person-molding-clay-pot-xgBjdpCpmnA
