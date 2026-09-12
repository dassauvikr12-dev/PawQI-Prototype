# PawQi visual refinement - 12 September 2026

This is a visual and positioning revision of the customer-story website, not a change to product availability.

## Direction

- Replace the previous mixed serif/handwritten treatment with a consistent Inter-based type system, controlled headline breaks, tighter hierarchy and more readable supporting copy.
- Lead with the pet-parent relationship. The main scene is illustrative artwork; the compact sample-product card does not cover the faces.
- Use clearer next actions: Find a record, Plan a clearer day, Explore care.
- Preserve the narrative, Bring it together interaction, sample day, six-scene optional narrated walkthrough, all 26 feature/partner pathways and the species assistants.
- Keep Emergency at the top right. Milo stays the supporting dog guide; selecting Cats brings in Mili.
- Refine service imagery, card proportions, whitespace, borders, buttons, FAQs and responsive layouts.

## Files

The active page additionally loads refinement.css and refinement.js. The presentation layer does not change story.js or story-features.js. New image assets are under assets/refined. Existing approved species portraits are reused where appropriate.

The new bond, cat and service scenes are crops from generated project concept artwork. They are not customer photographs, real provider images, testimonials or rigged animation. Their native raster resolution is finite; no 4K or photographic-resolution claim is made. Only the artwork is extracted, not the concept mockups' invented reviews, counts, medical statuses or UI. No external stock-photo hotlinks are used.

Inter is requested through the Google Fonts CSS API with display=swap, with a system-font fallback. Font files are not bundled. Google Fonts is a third-party request; unlike previous entirely local versions, the page can now contact that service. The local test used installed Inter and did not validate external font delivery on every browser.

## Validation

75 checks passed in a local Chromium fixture containing the actual HTML, CSS, JavaScript and image bytes. These covered image decoding, all six species, nine viewport widths (320, 360, 390, 600, 650, 768, 860, 1024 and 1440), emergency access, sample records and tasks, reset, journal favourite, representative catalogue entries, all four service dialogs, six story scenes, literal input rendering and mobile navigation. No JavaScript errors or horizontal document overflow were observed in those checks. Node syntax checks passed.

These are local fixture checks, not a claim of hosted end-to-end testing or human evaluation of browser speech quality. The original product boundaries remain: no live AI answers, clinical advice, saved website records, confirmed bookings, payments or dispatch. Existing beta links still lead to the owner-provided development application.
