# Google Search Console setup

This website is hosted on Cloudflare Pages. The current official public URL is:

- Website: https://shreeganeshaclayworks.pages.dev/
- Sitemap: https://shreeganeshaclayworks.pages.dev/sitemap.xml
- Crawler policy: https://shreeganeshaclayworks.pages.dev/robots.txt

## 1. Add the correct property

1. Sign in to [Google Search Console](https://search.google.com/search-console/) using the Google account that should own the website's search reporting.
2. Choose **Add property**.
3. Select **URL prefix** (not Domain).
4. Enter the exact URL, including HTTPS and the final slash:

   `https://shreeganeshaclayworks.pages.dev/`

A URL-prefix property is the suitable choice for a hosted `pages.dev` hostname. A Domain property requires DNS verification and is intended for a domain you control in DNS.

## 2. Verify ownership using the HTML tag

1. In the verification methods, select **HTML tag**.
2. Copy the complete Google-provided `<meta name="google-site-verification" ...>` tag.
3. Send that exact tag to the website maintainer so it can be inserted into the homepage `<head>` and deployed.
4. After the deployment finishes, open the public homepage and use **View page source** to confirm the exact tag appears inside `<head>`.
5. Return to Search Console and click **Verify**.

Do not create a token yourself or edit the Google-provided value. The tag is specific to the Google account/property verification. Keep it on the homepage after verification because Google periodically checks for it.

## 3. Submit the sitemap

After ownership is verified:

1. Open the property's **Sitemaps** report.
2. Enter `sitemap.xml` in **Add a new sitemap** and submit.
3. Check the resulting status and the last-read date. Investigate any fetch or parsing errors.

The sitemap currently contains the single canonical homepage. The storefront uses section anchors for its collections, rate chart, story and contact information; these are not separate HTML pages and are intentionally not listed as separate sitemap URLs.

## 4. Request an initial URL inspection

1. Use the URL Inspection field at the top of Search Console.
2. Inspect `https://shreeganeshaclayworks.pages.dev/`.
3. Run **Test Live URL**.
4. If the live test is successful and the page is eligible, select **Request Indexing**.
5. Review the **Page indexing** and **Performance** reports over time.

Submitting a sitemap or requesting indexing is a discovery/crawl hint. Neither guarantees that Google will index the page or rank it for a particular search.

## 5. Keep these details consistent

- Business name: Shree Ganesha Clay Works
- Website: https://shreeganeshaclayworks.pages.dev/
- Public contact numbers: +91 94934 04602 and +91 85558 96577
- Owner-confirmed flyer address: Near Collectorate, Opp. Govt. Dispensary, Mancherial–Chennur Highway, Naspur, Mancherial, Telangana 504208

Do not add review stars, aggregate ratings, opening weekdays or other claims unless the shop has verified those details and they are visible/accurate for customers.
