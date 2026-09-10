'use strict';
// Visual enhancement only. No new accounts, saved data, AI or service claims.
(() => {
  const selector = document.getElementById('petSpecies');
  const scenes = {
    dog: {file:'dog', alt:'Milo the beagle in a sunlit garden, illustrative PawQi artwork'},
    cat: {file:'cat', alt:'Mili the cat in a cosy indoor scene, illustrative PawQi artwork'},
    fish: {file:'fish', alt:'Nemo the fish in an aquatic scene, illustrative PawQi artwork'},
    bird: {file:'bird', alt:'Mithu the bird in a leafy aviary scene, illustrative PawQi artwork'},
    rabbit: {file:'rabbit', alt:'Popi the rabbit in a garden scene, illustrative PawQi artwork'},
    small: {file:'small', alt:'Tiku the guinea pig in a cosy habitat, illustrative PawQi artwork'}
  };
  function updateImages() {
    const key = selector?.value || 'dog';
    const scene = scenes[key];
    if (!scene) return;
    document.querySelectorAll('[data-scene-pet]').forEach(img => {
      img.classList.remove('image-unavailable');
      img.src = 'assets/visuals/' + scene.file + '.webp';
      if (img.alt) img.alt = scene.alt;
    });
    document.querySelectorAll('[data-service-art]').forEach(img => {
      const speciesSpecific = key !== 'dog';
      img.classList.remove('image-unavailable');
      img.classList.toggle('species-service-image', speciesSpecific);
      img.src = 'assets/visuals/' + (speciesSpecific ? scene.file : img.dataset.serviceArt) + '.webp';
    });
  }
  if (selector) selector.addEventListener('change', updateImages);
  // Failed images never hide navigation or the service CTA.
  document.querySelectorAll('img[src^="assets/visuals/"]').forEach(img => {
    img.addEventListener('error', () => img.classList.add('image-unavailable'));
    img.addEventListener('load', () => img.classList.remove('image-unavailable'));
  });
  updateImages();
})();
