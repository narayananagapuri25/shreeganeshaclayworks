# Shree Ganesha Clay Works

A mobile-first digital showroom for traditional clay products, based in Mancherial, Telangana.

## Website

A dependency-free static website built with HTML, CSS and vanilla JavaScript.

- Responsive storefront and category-led discovery for clay idols and pooja pieces, diyas, agul, stand agul, simini lamps, cooking vessels and water pots.
- Product search and category filtering.
- English / Telugu language toggle.
- Shop-supplied diya and pottery rate chart, with item-specific WhatsApp enquiry links.
- Product-specific WhatsApp enquiries; no checkout, customer accounts or payment collection.
- Store address, directions, two printed contact numbers, responsive navigation and custom 404 page.
- Product and store photographs supplied by the shop.
- Basic security headers, static smoke checks, and automated Playwright browser checks for desktop and mobile interactions.

## Original brand asset

- The canonical logo is the exact upper-left branding crop from the shop flyer supplied in this conversation: gold roof line, Ganesha emblem, shop name and purple “Creating Divine Moments” tagline.
- The artwork is not redrawn, recoloured or reshaped. The flyer logo crop is preserved as a 4× 692 × 312 pixel image, upscaled with Lanczos resampling and mild edge sharpening (no redrawn lettering). The header/footer both use that exact PNG with `object-fit: contain`.
- Static and Playwright checks pin the source URL and verify both placements load without CSS filters or masks. Do not substitute or regenerate the logo.

## Contact numbers

- Primary call / WhatsApp number: **+91 94934 04602**. Website enquiries are directed here.
- Alternate call / WhatsApp number: **+91 85558 96577**. Both direct phone and WhatsApp links are enabled.

## Pricing and inventory notes

The price tables reproduce the values in the rate chart supplied by the shop. Prices may change, and customers are prompted to confirm the current rate and availability before ordering. No live stock count is represented.

Some product photographs show bag or box quantities (for example 500-piece bags or 300-piece boxes). Those are reference pack markings from the submitted photos, not guaranteed current inventory.

## Before public launch

1. Confirm all price-chart entries and product names with the shop.
2. Confirm the exact product range, stock, packaging and bulk-order terms.
3. Review the Telugu wording and all product descriptions.
4. Both contact numbers are confirmed and linked for calls and WhatsApp.
5. Confirm the exact street address and opening hours before publishing. The draft currently uses the Near Collectorate / Govt. Dispensary address. A public business listing associated with the alternate shop contact shows a different Naspur address (Uma Maheswara Colony / Seethrampalli Road) and lists 9:00 AM–7:00 PM daily; do not replace the supplied website details or publish hours until the owner confirms which record is current.
6. Add official social links and confirmed delivery/pickup information; none have been supplied for publication yet.
7. Complete Android and desktop visual review, then test every WhatsApp and map link.
8. Confirm the final heart-diya image against a clean original from the shop; the current source photo is retained with a natural rectangular crop until a better original is supplied.

## Automated review

GitHub Actions runs syntax checks, static content checks, and Playwright interaction tests in Chromium. The workflow also saves desktop and mobile full-page screenshots as a downloadable workflow artifact for visual review.

## Local preview

Open `index.html` in a modern browser. No build step or package installation is required.

## Hosting

The repository is not connected to a domain or hosting provider. Hosting and domain setup will happen only after the website is reviewed and approved.
