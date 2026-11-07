# Shree Ganesha Clay Works

A mobile-first digital showroom for traditional clay products, based in Mancherial, Telangana.

## Website

A dependency-free static website built with HTML, CSS and vanilla JavaScript.

- Responsive storefront and category-led discovery for clay idols and pooja pieces, diyas, agul, stand agul, simini lamps, cooking vessels and water pots.
- Product search with English, Telugu and common item-name aliases; category filtering and live result counts.
- A four-image hero gallery and seven dedicated category/catalogue illustrations, each exported as its own 1024 × 1024 square image on a coordinated warm beige studio canvas. Product edges are preserved with `object-fit: contain`; there are no sprite sheets, embedded labels, or zoom crops.
- The standalone illustrations are AI-generated product references, not photographs of the shop's exact current stock. Product descriptions direct customers to confirm actual designs, finishes, sizes and availability with the shop.
- The original shop/store photograph remains in the story section. The supplied logo remains unchanged.
- English / Telugu language toggle.
- Shop-supplied diya and pottery rate chart, with item-specific WhatsApp enquiry links.
- Product-specific WhatsApp enquiries; no checkout, customer accounts or payment collection.
- Store address, directions, two printed contact numbers, responsive navigation and custom 404 page.
- Original store photograph supplied by the shop; the category and catalogue cards use individual generated square illustrations with consistent framing.
- Basic security headers, static smoke checks, and automated Playwright browser checks for desktop and mobile interactions.

## Approved brand artwork

- The owner approved the clean high-resolution logo artwork for website use.
- Source image: 1774 × 887 PNG. The same image is used in the desktop header, mobile header and footer.
- Layout preserves the artwork's 2:1 aspect ratio with `object-fit: contain`; no stretching or cropping.
- Automated smoke and browser checks pin this exact image URL and verify both placements load without CSS filters or masks.

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
4. Both contact numbers are transcribed from the shop-supplied flyer and linked for calls and WhatsApp.
5. Use the owner-confirmed flyer address on the website: Near Collectorate, Opp. Govt. Dispensary, Mancherial–Chennur Highway, Naspur, Mancherial, Telangana – 504208. A third-party listing differs; the shop-supplied flyer takes precedence unless the owner later provides an updated address.
6. Display the owner-requested store hours as 9:00 AM–7:00 PM. No additional weekday/weekend schedule is implied.
7. No official social profile was verified during launch review. Add social links only after the shop supplies or confirms the exact accounts. Delivery/pickup information also remains unconfirmed.
8. Complete the final Android and desktop visual review, then test every WhatsApp and map link.
9. The seven square category illustrations are visual references only. For exact product matching to current inventory, replace them later only when the shop supplies approved individual product photographs.

## Automated review

GitHub Actions runs syntax checks, static content checks, and Playwright interaction tests in Chromium. The workflow also saves desktop and mobile full-page screenshots as a downloadable workflow artifact for visual review.

## Local preview

Open `index.html` in a modern browser. No build step or package installation is required.

## Hosting

The repository is not connected to a domain or hosting provider. Hosting and domain setup will happen only after the website is reviewed and approved.
