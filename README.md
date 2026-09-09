# PawQi website - interactive preview

This is the public website preview, not the production PawQi care application.

## Included in this update

- Six validated WebP portraits: Milo, Mili, Nemo, Mithu, Popi and Tiku.
- Categories labelled Dogs, Cats, Fish, Birds, Rabbits and Small pets.
- Species-driven page atmosphere and character handovers.
- Sticky top-right Emergency entry with a no-login external Maps search.
- Service-led landing page, guest tools, product differentiators and dashboard demo.
- Optional live 3D motion-rig pilot: head/gaze response, blinking, greeting, jaw gestures, cap/glasses and coat states.
- Optional browser speech; text remains available without voice.
- Responsive layout, focus indicators, keyboard tabs, native dialogs and motion controls.

The default character display preserves the approved portrait artwork. Select **Try live 3D** to inspect the separate, simple articulated model. It is not the final cinematic character, not a video generated for the reply, and not phoneme-accurate lip sync.

## Test the interaction

Choose a species, select Try live 3D, then use Say hello, Training or Health records. Move the pointer over the model. Voice is off until explicitly enabled. Pause motion stops the animated gestures; reduced-motion preferences are respected.

## Run

Serve the directory as an ordinary static website. There is no build step, package install or API key. GitHub Pages can publish main from /(root). Relative asset references support the project subdirectory. Firebase Hosting configuration is also included but does not deploy or configure a project by itself.

## Boundaries

Replies are local scripted product explanations. There is no generative AI backend, microphone, diagnosis, medicine-dose calculation, checkout, tele-vet consultation or emergency dispatch. Guest tasks and questions remain in page memory. Optional speech is provided by the browser/OS; some voices may use an online voice service.

External Maps results are not PawQi-verified. The visitor must confirm opening hours and suitability. Private contacts, records and reminders are not exposed to guests. PawQi Next links open the development beta supplied by the project owner, not a confirmed production application. Community posting, public lost-pet alerts and legal guardian appointment are not represented as active.

## Validation performed

JavaScript syntax checked with Node. All six WebP files decoded successfully. A Chromium inline fixture rendered the same CSS, JavaScript and image bytes and exercised all six rigs, service/guest dialogs, emergency query priority, URL encoding, dashboard tabs/tasks and mobile navigation. No document overflow was observed at 320, 390, 768, 1024 and 1440 pixels.

This did not validate hosted CDN delivery, real OS voice playback, physical phones, other browser engines or the production backend. Do not treat the preview as clinical or production-launch certification.

See ANIMATION_BRIEF.md for the remaining cinematic character work. No internal workbooks or account data are included in this repository update.
