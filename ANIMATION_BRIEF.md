# PawQi cinematic companion brief

## Goal

Preserve the approved realistic, warm 3D-style character identity while making the companion respond naturally to visitor actions. The present optional procedural rig tests behaviour; it is not the intended final visual quality.

## Characters

Milo: tricolour beagle. Mili: cat. Nemo: fish. Mithu: bird. Popi: rabbit. Tiku: small pet. Fish and Birds are the public category labels; aquatic and aviary describe the environments.

## Production assets still required

Choose an approach after testing a single complete Milo journey:

1. A licensed custom rigged 3D model with materials, textures, articulated body parts, eyelids and facial/jaw controls. Export a web-compatible GLB plus distinct animation clips. Integrate an appropriate renderer; the current software pilot is not a GLB loader.
2. Pre-rendered character clips for defined states, with coordinated timing, transitions, poster fallback and web-video formats tested on the target browsers. Such clips can be interactive at the state level but do not alone create accurate lip sync for arbitrary replies.

Retain source files, asset ownership/licensing documentation and a consistent character/style sheet. A flat PNG is not a rigged model. Automated conversion should not be presented as equivalent to a finished facial rig.

## Behaviour states

- Idle: subtle breathing and occasional blinking; no distracting infinite greeting.
- Attention: turns toward the conversation as a user focuses or types.
- Waiting: visibly awaits the response without implying actual veterinary review.
- Speaking: voice timing drives the character. Accurate lip sync requires speech timings and facial shapes, not a looping mouth animation.
- Greeting: wave, expression and return to idle.
- Handover: Milo introduces the selected species companion; cancel stale responses when users change selection quickly.
- Trainer: coordinated cap, glasses and smart polo outfit.
- Health-records guide: white coat and stethoscope, with clear AI/product-guide identification, never a claim of veterinary credentials.
- Emergency: stop playful motion and voice, present the urgent pathway immediately.

## Integration contract

The preview exposes PawQiAvatar.setSpecies, setRole, setState, setPaused, setEnabled and greet. Preserve this small controller interface when replacing the experimental renderer.

Product answers need an approved server-side AI service, governed knowledge, safety routing, latency/error handling and privacy controls. Keep keys out of browser code. Avatar rendering and intelligence are separate components. A character handover must not silently share medical files or authenticate a user.

## Acceptance checks

Validate a complete question-to-answer sequence, interruption/cancellation, all outfits, gestures and mobile crop at the intended frame rate on real target devices. Measure asset size, load delay, battery usage and frame rate rather than assuming performance. Pause offscreen animation, respect reduced motion, keep audio opt-in and preserve text/image fallbacks. Obtain approval of the actual moving Milo before producing the other five final characters.
