# PawQi - feature-first journey website

The default homepage now markets PawQi's product journey, not its avatar technology.

## Experience

1. Know your pet: profile, Pet Match Advisor, Reality Check and Medical Vault.
2. Plan their day: Pet Command Center, Health Plan, Training Coach, Nutrition Routine and Grooming Plan.
3. Find care: Vet Connect, groomers, trainers, sitters, day care, walking and boarding discovery.
4. Share their life: Pet Life Journal and the planned Community and Events Hub.
5. Look ahead: travel, civic tasks, insurance, emergency, lost-pet preparation, guardian planning, adoption, reproductive records, nutrition marketplace and legacy preparation.

Milo is the default small website assistant. A dismissible initial welcome introduces him. Scrolling changes a short contextual help label; it never opens a dialog or moves the page. Selecting Cats at the start of the journey switches the assistant to Mili; other explicit species choices select Nemo, Mithu, Popi or Tiku. There is no avatar gallery, hero character stage, autoplay voice or animation-control showcase.

The experimental `avatar.js` and previous animation brief remain archived in the repository; the current page deliberately does not load them. The small portraits are 3D-style rendered images, not new talking-video animation.

## Files and run

The active page loads `journey.css?v=journey-1` and `journey.js?v=journey-1`, plus the six existing WebP portraits. It is a static website with no build step. Use GitHub Pages main / (root), or a local static server. Relative asset paths work under /PawQI-Prototype/. Firebase configuration alone does not publish a Firebase site.

## Working website interactions

- Chapter navigation, next-chapter links and reading progress.
- Explicit species selection with a compact companion handoff.
- Sample care tasks, reset, and keyboard-accessible dashboard tabs.
- Service-category selection and meaningful product detail dialogs.
- Searchable feature catalogue with development/release boundaries.
- Optional scripted companion dialog that routes questions to the appropriate feature.
- Top-right no-login emergency search (external Google Maps, not PawQi-verified).
- Mobile menu, native dialog keyboard handling, focus indicators and reduced-motion support.

## Product truthfulness

Content follows the owner-provided feature plan and the original SIFFY v4 product journey. Feature names and status details are mapped in JOURNEY_FEATURE_MAP.md. The public page differentiates beta-tested foundations from gated recommendations and public services. It does not expose the internal workbooks, budgets, personal pet records or credentials.

The beta links point to the development URL supplied by the project owner, not a verified production application. Private profiles, saved plans and records require the beta's sign-in. Website questions and example tasks remain in page memory; no generative AI, record upload, checkout, appointment confirmation, medical diagnosis, dose calculation or emergency dispatch is implemented here. External service search results require independent verification. No microphone or analytics is used by this page.

## Checks for this change

Node JavaScript syntax check passed. An offline Chromium fixture of the same HTML, CSS, JavaScript and WebP bytes exercised species switches, all service selections, catalogue filtering, task completion/reset, keyboard tabs, assistant navigation, emergency query encoding, literal rendering of user text and the mobile menu. Zero horizontal document overflow was observed at 320, 390, 650, 768, 1024 and 1440 px. All six portraits decoded. The sandbox browser blocked localhost navigation; the fixture is not a claim of live end-to-end browser testing. Deployment status should be checked separately after the commit.
