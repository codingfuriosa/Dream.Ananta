# Ananta at Dream Gurukul: landing page

A static landing page for Ananta at Dream Gurukul by Jain Group. No build step: open `index.html`, or serve the folder with any static server.

## Files that run the site
- `index.html`: the landing page. `thank-you.html`: shown after an enquiry.
- `assets/css/`: `ananta.css` (base), `ananta-luxe.css` (premium layer), `ananta-flow.css` (section flow), `ananta-desktop.css` (fluid desktop layout and Details explorer).
- `assets/js/`: `lead-config.js` (lead destination), `leads.js` (forms, validation, brochure and plan unlock), `refined.js` (menu, plan tabs, image viewer), `revision.js` (progress beam, carousels, floor-level menu, header and bar behaviour), `reveal.js` (scroll reveals, Legacy counters), `specs.js` (Details photo explorer), `smooth.js` (smooth anchor scrolling).
- `assets/images/web/`: right-sized images the page uses; `assets/images/curated/`: the floor-plan sheets and previews and the horizon backdrop. Every file in `assets/` is used by the pages; unused originals were removed before launch.
- `assets/icons/` and `site.webmanifest`: favicon (light and dark) and home-screen icons.
- `assets/brochures/ananta-lifestyle.pdf`: the brochure visitors download.

## Design
Palette from the brochure: midnight navy, rose-amber horizon glow, golden-hour gold, cream and warm brown. Headlines in Cormorant Garamond, text in Jost.

## Enquiries
- The brochure and the floor plans are open: Download brochure saves the PDF at once and every floor sheet shows in full. The enquiry gate is switched off with `gate: false` in `assets/js/lead-config.js` and `var gate=false` in the index.html head script; set both to true to require one enquiry before they open (the forms and the thank-you flow are still in place).
- Phone numbers are accepted from any country. A bare 10-digit number is saved as +91.
- **Leads go to the Jain Group CRM.** `assets/js/lead-config.js` posts each enquiry form-encoded to the realtybucket.com webhook with the API key and project name `Ananta`; `leads.js` also forwards the ad parameters from the landing URL (utm_*, gclid, fbclid and so on) kept in sessionStorage. Clear `endpoint` to stop sending: the form then only unlocks the brochure and shows the thank-you page. `call-tracking.js` swaps every call button to the number in `?contactid=` for the visit. `.htaccess` sends www and plain http to https://dreamananta.com (Apache only).
- The brochure and plan images are public files; the unlock is a lead-generation flow, not secure access.

## Tracking
Google Tag Manager `GTM-K7TTFSDN` loads on both pages. Events pushed: `generate_lead`, `thank_you_view`, `brochure_download`, `image_view`.

## Not in this repository
`ananta-floor-plans.pdf` (167 MB, over GitHub's file limit and not used by the page) and local working folders (`output/`, `tmp/`) are excluded via `.gitignore`.
