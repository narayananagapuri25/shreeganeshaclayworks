# Google Search visibility check

## Purpose

The Playwright check searches Google from an India-English browser context for five queries related to the shop:

- "Shree Ganesha Clay Works"
- "Shree Ganesha Clay Works" Mancherial
- clay diyas Mancherial
- clay pots Mancherial
- pottery shop Mancherial

It records the query, observed organic results, whether the official `pages.dev` domain appeared, and its position in the returned organic list. It also notes whether the business name was visible elsewhere on the results page.

## Run it

- GitHub Actions → **Google Search visibility** → **Run workflow** runs it on demand.
- The workflow also runs every Monday at 09:00 India Standard Time.
- Download the **google-search-visibility** artifact to review the Markdown summary, JSON data and screenshots.

For a local run, install Playwright and Chromium, then run:

```sh
npm install --no-save playwright
npx playwright install chromium
node scripts/google-search-visibility.mjs
```

## Interpreting the report

- `found`: the official domain appeared in the organic links returned for the query; the report gives its observed position.
- `not_found_in_scanned_results`: no organic link to the domain appeared in the results the browser could read.
- `consent_required`, `blocked`, `http_error`, or `error`: the run is inconclusive and must not be interpreted as a ranking of zero.

This is a lightweight diagnostic, not a guaranteed rank tracker. Google varies results by location, device, language, time and personalization; Google may also present consent pages or block automated traffic. The report records the observed response rather than failing the storefront's main CI checks. It does not replace Search Console's impressions, clicks, queries, indexing or canonical reports.

## SEO improvement loop

Review the report alongside Search Console Performance data. Prioritize queries with relevant local intent and weak impressions/click-through, then improve accurate page content, titles and descriptions, internal navigation, business-profile consistency and useful local information. Do not add keyword repetition, invented products, fabricated reviews or unverified business details merely to influence a test result.
