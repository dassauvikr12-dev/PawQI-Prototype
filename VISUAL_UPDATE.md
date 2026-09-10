# PawQi journey visual refresh

This update restores images without replacing the approved five-chapter feature journey.

## Added

- Layered pet-scene and product-preview hero.
- Pet imagery alongside profile, Medical Vault and daily-care explanations.
- Four illustrated, clickable service cards connected to the existing service selector.
- Illustrative journal photos, community scenes, life-planning art and closing imagery.
- Explicit species selection updates relevant imagery and retains the existing companion handoff.

Milo remains the small default dog assistant. Selecting Cats switches to Mili. Emergency remains at the top-right and does not require login. Original feature catalogue, release boundaries and product interactions are unchanged.

## Artwork and scope

The WebP images reuse owner-approved, generated PawQi concept artwork from this project. They are illustrations, not customer photographs, verified providers, talking videos or rigged animation. No competitor images or external photo hotlinks are used. The bird, fish, rabbit and small-pet scenes reuse the existing approved portraits. The dog, cat and service scenes are additional crops of the approved artwork.

This update does not add a live AI backend, saved care data, bookings, payments or emergency dispatch. The beta destination and its release boundaries are unchanged.

## Validation

Node syntax checks passed for journey.js and journey-images.js. A Chromium inline fixture using the actual HTML, CSS, JavaScript and image bytes tested all six species, image decoding, four service cards, feature dialogs, catalogue search, dashboard tasks/reset, keyboard tabs, emergency dialog, assistant routing and mobile navigation. No JavaScript errors or missing resources were observed. Document width stayed within 320, 390, 650, 768, 1024 and 1440 pixel viewports.

This is local fixture testing, not a hosted-production browser test. Deployment status is checked separately after committing.
