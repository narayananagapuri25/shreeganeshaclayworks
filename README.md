# Shree Ganesha Clay Works

A mobile-first digital showroom for traditional clay products, based in Mancherial, Telangana.

## Website

A dependency-free static website built with HTML, CSS and vanilla JavaScript.

- Responsive storefront and category-led discovery for clay idols and pooja pieces, diyas, agul, stand agul, simini lamps, cooking vessels and water pots.
- Product search with English, Telugu and common item-name aliases; category filtering and live result counts.
- A four-image hero gallery and seven category/catalogue cards using checked-in shop product photographs. Product edges are preserved with `object-fit: contain`; there are no sprite sheets, embedded labels, or zoom crops.
- Catalogue photos are authentic source images from the shop website. The general store-stock photo is used for the pooja-and-other category without claiming it depicts one specific idol. Product descriptions direct customers to confirm actual designs, finishes, sizes and availability with the shop.
- The original shop/store photograph remains in the story section. The supplied logo remains unchanged.
- English / Telugu language toggle.
- Shop-supplied diya and pottery rate chart, with item-specific WhatsApp enquiry links.
- Product-specific WhatsApp enquiries; no checkout, customer accounts or payment collection.
- Store address, directions, two printed contact numbers, responsive navigation and custom 404 page.
- Original store photograph supplied by the shop; product photos use local files checked into the repository and are displayed with full-image framing.
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
9. The product cards use the shop’s available source photographs. Replace any low-resolution original with an owner-approved single-item photo when one is available; do not substitute unverified online stock imagery.

## Automated review

GitHub Actions runs syntax checks, static content checks, and Playwright interaction tests in Chromium. The workflow also saves desktop and mobile full-page screenshots as a downloadable workflow artifact for visual review.

## Local preview

Open `index.html` in a modern browser. No build step or package installation is required.

## Cloudflare Pages deployment

This is a plain static HTML/CSS/JavaScript site. It has no framework, server runtime, build dependencies, or environment variables.

Recommended Git-connected Pages settings:

| Setting | Value |
|---|---|
| Git repository | `narayananagapuri25/shreeganeshaclayworks` |
| Production branch | `main` |
| Framework preset | `None` |
| Root directory | Repository root (leave blank/default) |
| Build command | `exit 0` (or leave blank if the dashboard accepts no build command) |
| Build output directory | `.` |
| Environment variables | None |

### Connect GitHub to Cloudflare

1. Sign in to the Cloudflare dashboard and open **Workers & Pages**.
2. Choose **Create application → Pages → Connect to Git**.
3. Connect GitHub and authorize the repository `narayananagapuri25/shreeganeshaclayworks`.
4. Select the repository and enter the settings in the table above.
5. Keep `main` as the production branch. Enable preview deployments for non-production branches so the open `feat/first-showcase` pull request can be inspected without publishing it to the production branch.
6. Save and start the deployment. Cloudflare will provide a `*.pages.dev` address.

Do not attach the custom domain until the pull request has been reviewed, the final code has been merged into `main`, and the Pages preview has passed the final desktop/mobile and contact-link review. With Git integration, new commits to the configured production branch trigger deployments automatically.

### Add the custom domain

After the production deployment is verified, open **Workers & Pages → your Pages project → Custom domains → Set up a domain**, enter the exact domain you own, and follow Cloudflare's activation instructions. An apex/root domain requires the domain to be added to Cloudflare and its nameservers pointed to Cloudflare; a subdomain can use the DNS record Cloudflare provides. Do not change existing DNS records until the exact domain and current email/DNS requirements have been checked.

### Post-deployment checks

- Open the `pages.dev` URL on desktop and Android.
- Confirm the logo and every local product photo load.
- Test English/Telugu switching, catalogue search, rates, both phone numbers, WhatsApp links, directions, and the 9 AM–7 PM opening hours.
- Check that the flyer address appears exactly as supplied and that there is no horizontal overflow or missing image.
- Add the custom domain only after those checks pass.
