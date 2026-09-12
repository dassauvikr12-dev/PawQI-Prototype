# PawQi - the little things, together

Customer-story website refresh, 12 September 2026.

**Live preview:** https://dassauvikr12-dev.github.io/PawQI-Prototype/

The homepage now leads with the pet parent's experience rather than a feature catalogue: scattered information, a simpler day, the help they need, and more life together. It is a public product preview, not the production PawQi care application.

## What to review

- The new opening: **Less keeping track. More being together.**
- **Bring it together:** scattered notes become one sample pet profile; click again to reverse.
- **Watch the story:** six animated web scenes, persistent captions, a transcript, scene navigation, play/pause and optional browser narration.
- **Luna's sample day:** open sample records, complete/reset tasks, and favourite a sample journal memory.
- Illustrated service cards with beta handoff and explicitly external Maps searches.
- All 26 product-plan pathways remain searchable under **All features**, including development and release boundaries.
- Milo is a compact, dismissible dog guide. Explicit species selection switches to Mili, Nemo, Mithu, Popi or Tiku, with matching colours, images and sample context.
- Emergency remains top-right, with no login required for the external search.

## Run and publish

The active page uses `index.html`, `story.css`, `story-features.js`, `story.js`, `favicon.svg` and the existing local artwork under `assets/`. No build step, API key or package installation is required.

GitHub Pages publishes the repository's `main` branch from `/(root)`. Asset paths are relative so the site works under `/PawQI-Prototype/`. The Firebase configuration is retained but does not independently deploy a Firebase project. Earlier journey/animation source files remain in Git history and in the repository; the new homepage does not load them.

For local testing, serve this folder with an ordinary static HTTP server, for example `python -m http.server 8000`.

## Content and product boundaries

The narrative is adapted from the brand story supplied by the owner on 12 September 2026. Product terminology and status descriptions are retained from the supplied PawQi feature plan and existing feature map; recorded development updates extend through 7 September 2026. A development-verified foundation is not a public-production availability guarantee.

Luna is fictional. The illustrations are approved generated project artwork, not customer photographs or endorsements. No competitor artwork is copied and no external image or font CDN is required.

The assistant is a scripted website guide, not live AI. The walkthrough is animated HTML/CSS, not a recorded cinematic film, rigged talking avatar or phoneme-synchronised animation. Narration is off by default and only the fixed story script is spoken after a user opts in. Voice availability and quality depend on the browser/device; some device voices may use an online speech service. Captions and the transcript remain available if narration cannot start.

No microphone, analytics, persistent visitor data, account creation, record upload, payment, appointment confirmation or emergency dispatch is provided here. Sample tasks and questions remain in page memory. External search results are not PawQi-verified; visitors must confirm qualifications, opening hours, availability and species suitability. Private records belong in the separate signed-in beta. Production terms, privacy notices, AI, providers and transactional services require their own integration and release approval.

## Validation

- Node syntax checks passed for both active JavaScript files.
- 153 local automated assertions passed, with zero JavaScript errors in the tested fixture.
- Checks covered all six species, all 26 feature details, sample records/tasks/reset, catalogue search/empty state, service/emergency routing, encoded external queries, literal rendering of user input, keyboard tabs, mobile navigation, and the visual-story controls.
- No horizontal document overflow was observed at widths 320, 360, 390, 600, 768, 1024 and 1440 pixels.
- All required local image references exist and WebP files decode.
- Browser speech lifecycle was tested with a stub. Actual voice quality has not been listening-tested on visitors' devices.

The browser tests used an offline Chromium inline fixture containing the same HTML, CSS, JavaScript and image bytes because this environment blocks local URL navigation. These are not hosted end-to-end browser tests. Deployment is verified separately using GitHub Actions. Source blob hashes are compared before publication.

See `STORY_UPDATE.md` for the content strategy and the short walkthrough script.
