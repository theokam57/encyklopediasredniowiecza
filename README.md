# Exovision Games - Website

Static website for Exovision Games with a dark medieval forge aesthetic, ember accents, parchment tones, and clean multilingual URLs.

No framework and no build system are required. The production files are plain HTML, CSS, and JavaScript.

## Folder structure

```txt
exovision_medieval_site/
|-- index.html                  # EN home, /
|-- projects/index.html          # EN projects, /projects/
|-- contact/index.html           # EN contact, /contact/
|-- about/index.html             # EN imprint, /about/
|-- privacy/index.html           # EN privacy policy, /privacy/
|-- de/index.html                # DE home, /de/
|-- de/projects/index.html
|-- de/contact/index.html
|-- de/about/index.html
|-- de/privacy/index.html
|-- pl/index.html                # PL home, /pl/
|-- pl/projects/index.html
|-- pl/contact/index.html
|-- pl/about/index.html
|-- pl/privacy/index.html
|-- css/style.css
|-- js/main.js
|-- assets/images/              # Add ARKEM and OG images here before deploy
|-- icons/                      # Add favicon.svg, icon-192.png, icon-512.png
|-- robots.txt
|-- sitemap.xml
|-- site.webmanifest
`-- README.md
```

The old `pages/*.html` structure has been replaced by folder-based clean URLs so a standard static host can serve each route from an `index.html` file.

## Languages

The site has three manually maintained language versions:

- English: `/`, `/projects/`, `/contact/`, `/about/`, `/privacy/`
- German: `/de/`, `/de/projects/`, `/de/contact/`, `/de/about/`, `/de/privacy/`
- Polish: `/pl/`, `/pl/projects/`, `/pl/contact/`, `/pl/about/`, `/pl/privacy/`

Every page includes:

- the correct `<html lang="">`;
- translated title and meta description;
- canonical URL;
- `hreflang` links for EN, DE, PL, and `x-default`;
- language-specific Open Graph locale;
- a language switcher in desktop and mobile navigation.

To add a new page, create the same folder path in all three language trees, translate the visible content, update the navigation or footer if needed, add canonical and `hreflang` links, and add all three URLs to `sitemap.xml`.

## Contact form endpoint

The contact form logic lives in `js/main.js`.

Set:

```js
const CONTACT_ENDPOINT = 'REPLACE_WITH_YOUR_ENDPOINT';
```

to your real backend, Formspree, Netlify Forms function, or similar endpoint. Until this placeholder is replaced, the form does not pretend to send anything. It shows a translated message asking visitors to email `info@exovision.de` directly.

The current JavaScript:

- validates with `form.checkValidity()` and `form.reportValidity()`;
- sends via `fetch()` only when the endpoint is configured;
- disables the submit button during sending;
- shows translated success and error states;
- never shows success when the endpoint is missing or returns an error.

## SEO

`sitemap.xml` contains all 15 clean URLs and uses `2026-06-13` as `<lastmod>`. Update that date before deployment if content changes again.

`robots.txt` allows crawling and points to:

```txt
https://www.exovision-games.com/sitemap.xml
```

Canonical URLs and `hreflang` tags assume the production domain is `https://www.exovision-games.com`. Change that domain consistently in every HTML file and in `sitemap.xml` if the site is deployed elsewhere.

## Assets before deployment

Add real assets before publishing:

- `assets/images/og-image.jpg` at 1200x630 for social previews;
- `assets/images/arkem-hero.jpg` for the home hero background;
- `assets/images/arkem-screenshot-1.jpg` or other real ARKEM visuals when available;
- `icons/favicon.svg`;
- `icons/icon-192.png`;
- `icons/icon-512.png`.

Do not add invented gameplay screenshots. The current HTML uses styled placeholders so the site remains usable until real images exist.

## Fonts and privacy

The site still loads Google Fonts via `@import` in `css/style.css`:

- Cinzel Decorative;
- Cinzel;
- Crimson Pro.

The privacy policy in all three languages mentions Google Fonts. For stricter privacy, self-host the font files in a `fonts/` directory, replace the Google Fonts import with local `@font-face` rules, and then update all privacy-policy pages to remove the Google Fonts disclosure.

## Deployment checklist

- Configure `CONTACT_ENDPOINT` in `js/main.js`.
- Add production images and icons listed above.
- Update `<lastmod>` dates in `sitemap.xml` if needed.
- Confirm the production domain in canonicals, `hreflang`, OG URLs, `robots.txt`, and `sitemap.xml`.
- Review the German `Impressum` and all privacy-policy text with legal counsel before publishing.
- Test `/`, `/projects/`, `/contact/`, `/about/`, `/privacy/`, `/de/...`, and `/pl/...` on the final static host.
