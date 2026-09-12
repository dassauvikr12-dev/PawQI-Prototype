# PawQi - Less keeping track. More being together.

Public customer-story website preview, visually refined on 12 September 2026.

Preview URL: https://dassauvikr12-dev.github.io/PawQI-Prototype/

## Current experience

The page follows the pet parent's experience: scattered information, an organised sample profile, a clearer sample day, relevant care services and the moments in between. The latest refinement changes typography, composition, imagery and call-to-action hierarchy without replacing the story or feature catalogue.

- Consistent Inter-based typography and a restrained cream/green palette.
- Pet-parent hero illustration, a compact interactive-sample card and direct starting points.
- Bring it together demonstration, sample records/tasks/journal, feature search and service detail dialogs.
- Six-scene visual walkthrough with captions, transcript, playback controls and optional browser narration.
- All 26 product-plan feature and partner pathways retained, with their development/release boundaries.
- Milo as a compact supporting dog guide. Explicit species selection introduces Mili, Nemo, Mithu, Popi or Tiku and updates the imagery.
- Top-right no-login external emergency-vet search.

## Active files

index.html loads story.css, story-features.js, story.js, refinement.css and refinement.js. The images are stored locally under assets/. The page needs no build step, API key or package installation. Relative paths support the GitHub Pages /PawQI-Prototype/ subdirectory.

GitHub Pages is configured to publish main from the repository root. Firebase configuration is retained but does not deploy a Firebase project by itself. Earlier journey and animation experiments remain in the repository but are not loaded by the current homepage.

## Typography and images

Inter is requested through the Google Fonts CSS API with display=swap and a system-font fallback. Font binaries are not included. Google Fonts is a third-party request; the previous entirely-local-font statement no longer applies.

Visuals are generated project artwork. The new pet-parent and service scenes are individual crops from concept artwork, not photographs of customers/providers, testimonials, cinematic video or rigged character animation. Existing species artwork is retained where appropriate. Native raster resolution remains finite. No invented testimonials, counts, health scores or availability guarantees from the generated mockups are included.

## Product and privacy boundaries

The underlying feature content retains the owner's plan and release gates; recorded development updates extend through 7 September 2026. Development verification is not a production-availability guarantee. Internal workbooks and private records are not published.

Luna is fictional. Website questions and sample tasks remain in page memory. The assistant is scripted, not live generative AI or a veterinarian. No microphone, record upload, persistent account, real booking, payment, diagnosis, dose calculation or emergency dispatch is implemented on this public site.

The optional walkthrough speaks its fixed script using browser/device speech after opt-in. Sound starts off; captions and the transcript remain available. Voice support and quality vary, and some device voices can use an online service. The separate beta link still opens the development application supplied by the owner. External Maps results are not PawQi-verified; visitors must confirm suitability and opening hours.

## Latest validation

75 local Chromium fixture checks passed: all six species, nine screen widths from 320 to 1440 px, image decoding, emergency visibility, sample records/tasks/reset/favourite, representative catalogue entries, all four service dialogs, six story scenes, literal user-input rendering and mobile navigation. No JavaScript exceptions or document overflow were observed. Node syntax checks passed.

The fixture uses the actual HTML/CSS/JavaScript/image bytes with locally installed Inter. It is not a hosted-device end-to-end test, a validation of external font delivery on every browser, or a human listening test of speech quality. Deployment status is checked separately. Earlier testing notes belong to their respective revisions.

See REFINEMENT.md for this visual update and STORY_UPDATE.md for the original storyboard.
