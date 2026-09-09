# PawQi 3D Launch Site

Static responsive launch website for PawQi.

## What is included
- 3D companion artwork for Milo, Mili, Nemo, Mithu, Popi and Tiku
- Species-based theme switching: dog/home, cat/cozy, fish/aquatic, bird/aviary, rabbit/meadow, small-pet/habitat
- Contextual companion roles for health, training, grooming, services, community, emergency, nutrition and vault
- Pet Command Center demo
- Need-first provider finder demo
- PawQi World community section
- Firebase Hosting config

## Preview
Open `index.html` locally or serve the folder with any static server.

## Firebase Hosting
From this folder, after authenticating Firebase CLI and selecting the correct project:

```bash
firebase deploy --only hosting
```

## Production checklist
- Replace dev-app login links with production PawQi URLs when ready.
- Connect provider search to the verified provider dataset/API.
- Connect companion chat to the approved PawQi AI backend.
- Add final Privacy Policy, Terms, cookie/analytics consent, contact and legal/clinical disclaimers.
- Review all "Available" / "Coming next" labels against the release branch before public launch.
