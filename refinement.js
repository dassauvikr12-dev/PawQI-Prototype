'use strict';
// Presentation only. Private data, release gates and the existing story controls are unchanged.
(() => {
  const hero=document.getElementById('heroBond');
  const art={dog:['assets/refined/bond.webp','Illustrative pet-parent moment with a beagle; not a customer testimonial'],cat:['assets/refined/cat.webp','Illustrative PawQi cat companion'],fish:['assets/refined/fish.webp','Nemo in an illustrative aquatic setting'],bird:['assets/refined/bird.webp','Mithu in an illustrative aviary setting'],rabbit:['assets/refined/rabbit.webp','Popi, the illustrative rabbit companion'],small:['assets/refined/small.webp','Tiku, the illustrative small-pet companion']};
  const portraits={dog:'assets/refined/dog.webp',cat:'assets/refined/cat.webp',fish:'assets/refined/fish.webp',bird:'assets/refined/bird.webp',rabbit:'assets/refined/rabbit.webp',small:'assets/refined/small.webp'};
  function refresh(){const k=document.body.dataset.pet||'dog';if(hero&&art[k]){hero.src=art[k][0];hero.alt=art[k][1];}document.querySelectorAll('[data-pet-image]').forEach(i=>{if(portraits[k])i.src=portraits[k];});}
  new MutationObserver(refresh).observe(document.body,{attributes:true,attributeFilter:['data-pet']});refresh();
  function dynamic(){const k=document.body.dataset.pet||'dog';document.querySelectorAll('.journal-sample img,.film-pet img').forEach(i=>{if(portraits[k]&&i.getAttribute('src')!==portraits[k])i.src=portraits[k];});}
  for(const id of ['demoPanel','storyStage']){const e=document.getElementById(id);if(e)new MutationObserver(dynamic).observe(e,{childList:true,subtree:true});}dynamic();
  document.querySelectorAll('img').forEach(i=>{i.addEventListener('load',()=>{i.style.opacity='';delete i.dataset.failed;});i.addEventListener('error',()=>{if(i.dataset.retried)return;i.dataset.retried='true';if(i===hero){i.src='assets/visuals/dog.webp';i.alt='Illustrative PawQi beagle';}});});
})();
