'use strict';
// No input is uploaded, persisted or sent to an AI service by this public preview.
(() => {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const features = window.PAWQI_FEATURES || {};
  const beta = 'https://pawqi-next-dev-2026.web.app/#/home';
  const pets = {
    dog:{guide:'Milo',label:'Dogs',singular:'dog',image:'assets/visuals/dog.webp',avatar:'assets/dog.webp',description:'Illustrated beagle in a sunlit garden'},
    cat:{guide:'Mili',label:'Cats',singular:'cat',image:'assets/visuals/cat.webp',avatar:'assets/cat.webp',description:'Illustrated cat in a cosy home'},
    fish:{guide:'Nemo',label:'Fish',singular:'fish',image:'assets/visuals/fish.webp',avatar:'assets/fish.webp',description:'Illustrated fish in an aquatic setting'},
    bird:{guide:'Mithu',label:'Birds',singular:'bird',image:'assets/visuals/bird.webp',avatar:'assets/bird.webp',description:'Illustrated bird in an aviary-inspired setting'},
    rabbit:{guide:'Popi',label:'Rabbits',singular:'rabbit',image:'assets/visuals/rabbit.webp',avatar:'assets/rabbit-popi.webp',description:'Illustrated rabbit in a garden'},
    small:{guide:'Tiku',label:'Small pets',singular:'small pet',image:'assets/visuals/small.webp',avatar:'assets/smallpet.webp',description:'Illustrated small-pet companion in a cosy habitat'}
  };
  let pet = 'dog', demo = 'records', toastTimer, lastTrigger = null;
  const completed = new Set(), liked = new Set();
  const serviceArtwork = [...document.querySelectorAll('.service-image img')].map(img=>({img,src:img.getAttribute('src'),alt:img.alt}));
  const el = (tag, text, cls) => {const x=document.createElement(tag); if(text!==undefined)x.textContent=text; if(cls)x.className=cls; return x;};
  const button = (text, callback, cls='text-link') => {const b=el('button',text,cls); b.type='button'; b.addEventListener('click',callback); return b;};
  const betaLink = (text='Explore the PawQi beta ↗') => {const a=el('a',text,'button primary'); a.href=beta; a.target='_blank'; a.rel='noopener'; return a;};
  function toast(text){clearTimeout(toastTimer); $('#toast').textContent=text; $('#toast').hidden=false; toastTimer=setTimeout(()=>$('#toast').hidden=true,5000);}
  const dismissWelcome = () => $('#welcome').hidden=true;
  function openDialog(d){
    const a=document.activeElement;
    if(a && !a.closest('dialog'))lastTrigger=a;
    $$('dialog[open]').forEach(x=>x.close()); dismissWelcome(); d.showModal();
  }
  function closeDialog(d){d.close(); if(lastTrigger?.isConnected)lastTrigger.focus();}
  $$('[data-close]').forEach(b=>b.addEventListener('click',()=>closeDialog(b.closest('dialog'))));
  $$('dialog').forEach(d=>{
    d.addEventListener('click',e=>{if(e.target!==d)return; const r=d.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog(d);});
    d.addEventListener('cancel',()=>{if(lastTrigger?.isConnected)setTimeout(()=>lastTrigger.focus(),0);});
  });
  function info(title,kicker){$('#infoTitle').textContent=title; $('#infoEyebrow').textContent=kicker; $('#infoContent').replaceChildren(); return $('#infoContent');}
  function go(id){$$('dialog[open]').forEach(d=>d.close()); dismissWelcome(); const s=document.getElementById(id); if(!s)return; s.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}); s.setAttribute('tabindex','-1'); s.focus({preventScroll:true});}
  const destinations={know:'try',care:'try',services:'services',life:'life',future:'future'};
  function showFeature(id){
    const f=features[id]; if(!f){toast('This feature detail is unavailable. Please try the catalogue.');return;}
    const box=info(f.title,'THE PAWQI PRODUCT JOURNEY');
    box.append(el('span',f.status,'feature-status'),el('p',f.benefit),el('h3','What you can explore in the beta'),el('p',f.current),el('div',f.boundary,'boundary'));
    const actions=el('div',undefined,'actions');actions.append(betaLink(),button('Back to the journey ↓',()=>go(destinations[f.chapter]||'try'),'button secondary'));box.append(actions,el('p','Development status follows the supplied product plan through 7 September 2026, not a guarantee of public availability.','micro'));openDialog($('#infoDialog'));
  }
  $$('[data-feature]').forEach(b=>b.addEventListener('click',()=>showFeature(b.dataset.feature)));
  function renderCatalog(){const q=$('#featureSearch').value.trim().toLowerCase(); const found=Object.entries(features).filter(([,f])=>(f.title+' '+f.benefit).toLowerCase().includes(q)); $('#catalogCount').textContent=found.length+' features and pathways · Open any for availability details'; const root=$('#catalogResults');root.replaceChildren();for(const [id,f] of found){const b=button('',()=>showFeature(id),'catalog-row'),label=el('span');label.append(el('b',f.title),el('small',f.status));b.append(label,el('span','↗'));root.append(b);}if(!found.length)root.append(el('p','No matching feature. Try records, training or travel.'));}
  function openCatalog(){openDialog($('#catalogDialog')); $('#featureSearch').value='';renderCatalog();$('#featureSearch').focus();}
  $$('[data-catalog]').forEach(b=>b.addEventListener('click',openCatalog));$('#featureSearch').addEventListener('input',renderCatalog);
  function showAbout(){const box=info('A little clarity, before you start.','ABOUT THIS WEBSITE PREVIEW');box.append(el('p','This is PawQi’s public product-story preview. The linked PawQi Next application is a separate development beta. Sample tasks, questions, species choices and checklists are kept only in this page’s memory and disappear on reload.'),el('h3','Your choice to watch and listen'),el('p','The walkthrough uses animated web scenes, not a recorded character film. Narration is optional and uses your browser or device voice. Some device voices may use an online speech service. Only the fixed story script is narrated; the website does not send your questions for narration.'),el('h3','Illustrations, not customer testimonials'),el('p','The pet artwork was created and approved for the PawQi project. Luna is a fictional sample profile. No provider depicted in an illustration is a real or endorsed veterinarian.'),el('div','There is no microphone capture, analytics, account creation, record upload, checkout, live AI or emergency dispatch on this page. External destinations have their own privacy terms. Formal service terms and privacy notices must be approved before a production launch.','boundary'));openDialog($('#infoDialog'));}
  $$('[data-about]').forEach(b=>b.addEventListener('click',showAbout));
  function emergency(){
    const box=info('Need urgent help?','EMERGENCY · NO LOGIN REQUIRED');box.append(el('p','Contact a qualified veterinarian directly for urgent health concerns. Do not wait for this website’s guide to assess your pet.'),el('div','This opens an external map search, not PawQi emergency dispatch. Check opening hours, contact the clinic and confirm they can treat your species. Results are not PawQi-verified.','boundary'));
    const form=el('form',undefined,'service-form'),label=el('label','City or area'),input=el('input');label.htmlFor='emergencyArea';input.id='emergencyArea';input.name='area';input.placeholder='e.g. Salt Lake, Kolkata';input.maxLength=120;input.required=true;input.autocomplete='address-level2';const submit=el('button','Find emergency vets on Maps ↗','button primary');submit.type='submit';const actions=el('div',undefined,'actions');actions.append(submit);form.append(label,input,actions);form.addEventListener('submit',e=>{e.preventDefault();const area=input.value.trim();if(!area){input.setCustomValidity('Enter a city or area.');input.reportValidity();return;}const query='emergency veterinarian '+pets[pet].singular+' '+area;const url='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query);window.open(url,'_blank','noopener,noreferrer');});input.addEventListener('input',()=>input.setCustomValidity(''));box.append(form,el('p','Your location is not detected automatically. Private saved contacts remain in the signed-in PawQi beta.','micro'));openDialog($('#infoDialog'));
  }
  $$('[data-emergency]').forEach(b=>b.addEventListener('click',emergency));
  $('#menuButton').addEventListener('click',()=>{const open=$('.header').classList.toggle('menu-open');$('#menuButton').setAttribute('aria-expanded',String(open));$('#menuButton').setAttribute('aria-label',open?'Close navigation':'Open navigation');});
  $('#navigation').addEventListener('click',()=>{$('.header').classList.remove('menu-open');$('#menuButton').setAttribute('aria-expanded','false');});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('.header').classList.remove('menu-open');$('#menuButton').setAttribute('aria-expanded','false');}});
  $('#dismissWelcome').addEventListener('click',dismissWelcome);
  setTimeout(dismissWelcome,8500);
  // One interaction shows the problem-to-solution transition without scroll hijacking.
  $('#gatherButton').addEventListener('click',()=>{const together=$('#scatterStage').classList.toggle('is-gathered');$('#gatherButton').setAttribute('aria-pressed',String(together));$('#gatherButton').textContent=together?'See the scattered view ↶':'Bring it together ↗';$('#gatherCaption').textContent=together?'Less searching. One example pet profile. Now try the day below.':'A little preview of a simpler way. No uploads or account needed.';});
  const demoText={
    records:{feature:'vault',label:'PET MEDICAL VAULT',title:'Their records.\nReady when you need them.',description:'Keep prescriptions, reports and care history with the right pet—not scattered across your phone.',cta:'Explore the Medical Vault ↗'},
    day:{feature:'command',label:'PET COMMAND CENTER',title:'A little less in your head.\nA little more in your day.',description:'Bring your saved routines and the reminders you choose together. The source stays clear; the next step is yours.',cta:'Explore the Command Center ↗'},
    moments:{feature:'journal',label:'PET LIFE JOURNAL',title:'Some things are too good\nto forget.',description:'First days, favourite places and little milestones. Keep a life story beside the care story.',cta:'Explore the Life Journal ↗'}
  };
  function sampleRecord(kind){
    const names={report:'Check-up notes',prescription:'Saved prescription',history:'Care history'};const title=names[kind]||names.report;const root=info(title,'ILLUSTRATIVE MEDICAL VAULT RECORD');const paper=el('div',undefined,'document-sample');paper.append(el('span','LUNA · SAMPLE '+pets[pet].singular.toUpperCase()+' PROFILE','eyebrow'),el('h3',title));const rows=el('div',undefined,'document-lines');for(const pair of [['Added by','Pet parent'],['Source','Owner-saved record'],['Contents','Demonstration only']]){const r=el('div');r.append(el('span',pair[0]),el('b',pair[1]));rows.append(r);}paper.append(rows,el('p','This is where the document and your notes would stay together. No real diagnosis, medicine, dose or medical record is shown.'));root.append(paper,el('div','An owner-saved record is not a clinically verified assessment. This preview does not upload, share or save medical data.','boundary'),button('Explore the Medical Vault ↗',()=>showFeature('vault')));openDialog($('#infoDialog'));
  }
  function renderDemo(){
    const p=$('#demoPanel'),copy=demoText[demo];p.replaceChildren();p.setAttribute('aria-labelledby','tab-'+demo);$('#demoFeature').textContent=copy.label;$('#demoHeadline').textContent=copy.title;$('#demoHeadline').style.whiteSpace='pre-line';$('#demoDescription').textContent=copy.description;$('#demoDetails').textContent=copy.cta;
    const intro=el('div',undefined,'panel-intro');intro.append(el('h3',demo==='records'?'A little less searching.':demo==='day'?'A little more organised.':'A little moment, kept.'),el('p',demo==='records'?'Open any sample record below.':demo==='day'?'Tap a task to try completing it.':'An illustrative Life Journal entry.'));p.append(intro);
    if(demo==='records')for(const [id,title,caption,symbol] of [['report','Check-up notes','Owner-saved document','+'],['prescription','Prescription & notes','Kept with the right pet','Rx'],['history','Care history','Your records, together','≡']]){const b=button('',()=>sampleRecord(id),'record-row');const t=el('span');t.append(el('b',title),el('small',caption));b.append(el('span',symbol),t,el('i','↗'));p.append(b);}
    if(demo==='day')for(const [id,title,source] of [['record','Review a saved care note','Owner-saved record'],['routine',pet==='fish'?'Review a habitat note':'Review a routine note','Owner-entered routine'],['reminder','Check a reminder you set','Customer reminder']]){const key=pet+':'+id;const b=button('',()=>{completed.has(key)?completed.delete(key):completed.add(key);renderDemo();$('#demoPanel').querySelector('[data-task="'+id+'"]').focus();},'task-row');b.dataset.task=id;b.setAttribute('aria-pressed',String(completed.has(key)));const t=el('span');t.append(el('b',title),el('small','Illustrative task · No care advice'));b.append(el('span','✓','task-tick'),t,el('span',source,'task-source'));p.append(b);}
    if(demo==='moments'){const scene=el('div',undefined,'journal-sample'),img=el('img');img.src=pets[pet].image;img.alt='Illustrative pet memory';const text=el('div');text.append(el('small','SAMPLE MEMORY / LUNA'),el('b','The first week home.'));scene.append(img,text);const cap=el('div',undefined,'journal-caption');cap.append(el('span','The start of a little world.'));const b=button(liked.has(pet)?'♥ Favourite':'♡ Favourite',()=>{liked.has(pet)?liked.delete(pet):liked.add(pet);renderDemo();$('#demoPanel .journal-caption button').focus();},'');b.setAttribute('aria-pressed',String(liked.has(pet)));cap.append(b);p.append(scene,cap);}
    const count=['record','routine','reminder'].filter(id=>completed.has(pet+':'+id)).length;$('#demoStatus').textContent=demo==='day'?count+' of 3 sample tasks complete · Not saved':'Sample data · Nothing is saved';
  }
  function setDemo(next,focus=false){if(!demoText[next])return;demo=next;$$('[data-demo]').forEach(b=>{const yes=b.dataset.demo===demo;b.setAttribute('aria-selected',String(yes));b.tabIndex=yes?0:-1;if(focus&&yes)b.focus();});renderDemo();}
  $$('[data-demo]').forEach(b=>{b.addEventListener('click',()=>setDemo(b.dataset.demo));b.addEventListener('keydown',e=>{const keys=['records','day','moments'],i=keys.indexOf(demo);let n;if(e.key==='ArrowRight')n=(i+1)%3;if(e.key==='ArrowLeft')n=(i+2)%3;if(e.key==='Home')n=0;if(e.key==='End')n=2;if(n!==undefined){e.preventDefault();setDemo(keys[n],true);}});});
  $$('[data-need]').forEach(a=>a.addEventListener('click',()=>setDemo(a.dataset.need)));
  $('#demoDetails').addEventListener('click',()=>showFeature(demoText[demo].feature));$('#resetDemo').addEventListener('click',()=>{['record','routine','reminder'].forEach(id=>completed.delete(pet+':'+id));liked.delete(pet);renderDemo();toast('Luna’s sample has been reset. No real records were changed.');});
  function setPet(key){
    if(!pets[key]||key===pet)return;const old=pets[pet].guide;pet=key;const p=pets[pet];document.body.dataset.pet=key;$$('[data-species]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.species===key)));$$('[data-pet-image]').forEach(img=>{img.src=p.image;img.alt=p.description;});$$('[data-guide-name]').forEach(n=>n.textContent=p.guide);$('#guideImage').src=p.avatar;$('#guideImage').alt=p.guide+' the '+p.singular+' guide';$('#chatImage').src=p.avatar;$('#guideTitle').textContent=p.guide;$('#sampleSpecies').textContent='Example '+p.singular+' profile';$('#speciesHint').textContent=p.label+' journey · '+p.guide+' is here to help';$('#messages').replaceChildren();serviceArtwork.forEach(({img,src,alt})=>{img.src=key==='dog'?src:p.image;img.alt=key==='dog'?alt:p.description;});renderDemo();dismissWelcome();toast(old+' → '+p.guide+'. Your '+p.singular+' journey, with the right guide.');$('#liveStatus').textContent=p.guide+' is now your '+p.singular+' guide. No pet files have been transferred.';
  }
  $$('[data-species]').forEach(b=>b.addEventListener('click',()=>setPet(b.dataset.species)));
  function service(id){
    const names={vet:'Veterinary care',grooming:'Grooming',training:'Training',sitting:'Sitting & day care'};const f=features[id]||features.services;const root=info(names[id]||'Care services','START WITH WHAT YOUR PET NEEDS');root.append(el('p',f.benefit),el('div','Explore a pathway, not a confirmed booking. Provider qualifications, species suitability and availability must be checked. No appointment or payment is made here.','boundary'));
    const form=el('form',undefined,'service-form'),label=el('label','City or area (for an optional external search)'),input=el('input');label.htmlFor='serviceArea';input.id='serviceArea';input.placeholder='e.g. Kolkata';input.maxLength=120;input.required=true;const search=el('button','Search externally on Maps ↗','button secondary');search.type='submit';const actions=el('div',undefined,'actions');actions.append(betaLink('Explore in PawQi beta ↗'),search);form.append(label,input,actions);input.addEventListener('input',()=>input.setCustomValidity(''));form.addEventListener('submit',e=>{e.preventDefault();const value=input.value.trim();if(!value){input.setCustomValidity('Enter a city or area.');input.reportValidity();return;}const labelMap={vet:'veterinarian',grooming:'pet grooming',training:'pet trainer',sitting:'pet sitting day care'};const q=(labelMap[id]||'pet care')+' '+pets[pet].singular+' '+value;window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q),'_blank','noopener,noreferrer');});root.append(form,el('p','External search results are not PawQi-verified or endorsed. The beta link opens the existing development application; select your pet and service there.','micro'),button('What is ready, and what is still planned? ↗',()=>showFeature(id)));openDialog($('#infoDialog'));
  }
  $$('[data-service]').forEach(b=>b.addEventListener('click',()=>service(b.dataset.service)));
  function message(text,who='assistant',feature){const m=el('div',text,'chat-message '+who);if(feature)m.append(button('Explore '+features[feature].title+' ↗',()=>showFeature(feature)));$('#messages').append(m);while($('#messages').children.length>30)$('#messages').firstElementChild.remove();$('#messages').scrollTop=$('#messages').scrollHeight;}
  function openGuide(){if(!$('#messages').children.length)message('Hi, I’m '+pets[pet].guide+'. I’ll help you find your way around PawQi. Would you like to explore records, a simpler day, or care services?');openDialog($('#guideDialog'));}
  $('#openGuide').addEventListener('click',openGuide);$$('[data-open-guide]').forEach(b=>b.addEventListener('click',openGuide));
  function guideTo(id){if(!features[id])return;message(features[id].benefit+' This is a product preview; open the details for current availability.','assistant',id);}
  $$('[data-guide-topic]').forEach(b=>b.addEventListener('click',()=>guideTo(b.dataset.guideTopic)));
  $('#guideForm').addEventListener('submit',e=>{e.preventDefault();const q=$('#guideQuestion').value.trim();if(!q)return;$('#guideQuestion').value='';message(q,'user');const t=q.toLowerCase();if(/emergency|urgent|poison|chok|seizure|collapse|can't breathe|cannot breathe|not breathing|bleeding/.test(t)){message('For urgent health concerns, contact a qualified veterinarian directly. This guide cannot assess symptoms or dispatch help. Use Emergency at the top-right to search externally.');$('#messages').lastElementChild.append(button('Open emergency search ↗',emergency));return;}if(/symptom|diagnos|dose|dosage|pain|sick|fever|vomit|illness|treatment|medication/.test(t)){message('I can help you organise information for a vet, but I cannot diagnose, prescribe or calculate a dose. A qualified veterinarian should assess health concerns.','assistant','vet');return;}const routes=[[/prescription|record|report|document|vault/,'vault'],[/routine|remind|plan|today|schedule/,'command'],[/train|behav|puppy/,'training'],[/food|meal|nutrition|feed/,'nutrition'],[/groom|bath|coat/,'grooming'],[/vet|clinic/,'vet'],[/sit|board|day care/,'sitting'],[/service|provider|walk/,'services'],[/memory|journal|photo/,'journal'],[/community|group|friend/,'community'],[/travel|trip/,'travel'],[/guardian/,'guardian'],[/lost|missing/,'lost'],[/adopt|new pet|match/,'match']];const r=routes.find(([re])=>re.test(t));if(r)guideTo(r[1]);else message('I’m a scripted PawQi website guide, not a live AI assistant yet. Try “records”, “daily plan”, “grooming” or “travel”, or explore All features.');});
  // User-controlled, captioned visual story. Sound is OFF until a deliberate tap.
  const scenes=[
    {title:'You bring the love.',caption:'Looking after a pet is a hundred little things. You’re trying to do them right.',kind:'pet',headline:'For the little things.',emphasis:'And the life between them.'},
    {title:'There’s a lot to keep track of.',caption:'A prescription saved somewhere. A date to remember. A note you want to find when it matters.',kind:'scatter'},
    {title:'What if it lived in one place?',caption:'PawQi began with a simple thought: bring your pet’s records, routines and care journey together.',kind:'records'},
    {title:'A clearer next step.',caption:'See the reminder you set. Find the record you saved. Make a little more room in your day.',kind:'day'},
    {title:'An extra pair of hands.',caption:'Explore veterinary care, grooming, training and sitting pathways. Real service availability still depends on the rollout.',kind:'services'},
    {title:'More time being there.',caption:'Because better pet care starts with understanding your pet better. Less keeping track. More being together.',kind:'pet',headline:'Less keeping track.',emphasis:'More being together.'}
  ];
  let scene=0, playing=false, sound=false, timer=null, due=0, remaining=9000, speechToken=0, currentUtterance=null, speechStarted=false;
  const synth=('speechSynthesis'in window&&'SpeechSynthesisUtterance'in window)?window.speechSynthesis:null;
  function clearStoryTimer(){if(timer!==null){clearTimeout(timer);timer=null;}}
  function stopSpeech(){speechToken++;currentUtterance=null;speechStarted=false;if(synth)synth.cancel();}
  function arm(ms,action=advance){clearStoryTimer();remaining=ms;due=performance.now()+ms;timer=setTimeout(()=>{timer=null;action();},ms);}
  function controls(){$('#storyPlay').textContent=playing?'Pause':scene===scenes.length-1?'Replay':'Play story';$('#storyPrev').disabled=scene===0;$('#storyNext').disabled=scene===scenes.length-1;$('#storySound').textContent=sound?'Sound on':'Sound off';$('#storySound').setAttribute('aria-pressed',String(sound));}
  function filmRow(root,text){const r=el('div',undefined,'film-row');r.append(el('span','✓'),el('b',text));root.append(r);}
  function renderScene(){
    const s=scenes[scene],root=$('#storyStage');root.replaceChildren();root.dataset.scene=String(scene);$('#sceneNumber').textContent=String(scene+1).padStart(2,'0')+' / 06';$('#storyTitle').textContent=s.title;$('#storyCaption').textContent=s.caption;
    if(s.kind==='pet'){const block=el('div',undefined,'film-pet'),img=el('img');img.src=pets[pet].image;img.alt=pets[pet].description;const words=el('div',s.headline,'film-title');words.append(el('em',s.emphasis));block.append(img,words);root.append(block);}
    else if(s.kind==='scatter'){const group=el('div',undefined,'film-scatter');for(const [source,text] of [['CAMERA ROLL','That prescription.'],['MENTAL NOTE','That date.'],['MESSAGES','That care note.']]){const card=el('div');card.append(el('small',source),el('span',text));group.append(card);}root.append(group);}
    else{const card=el('div',undefined,'film-card');card.append(el('span','LUNA’S SAMPLE JOURNEY','eyebrow'),el('h3',s.kind==='records'?'Their records, together.':s.kind==='day'?'A little more organised.':'The help you need.'));const items=s.kind==='records'?['Check-up notes','Saved prescription','Care history']:s.kind==='day'?['Your recorded routine','The reminder you set','The next step you choose']:['Vet Connect','Grooming & training','Sitting & day care'];items.forEach(x=>filmRow(card,x));root.append(card);}
    $$('#storyProgress button').forEach((b,i)=>{if(i===scene)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});controls();
  }
  function scheduleScene(){
    clearStoryTimer(); stopSpeech(); if(!playing)return;
    if(!sound||!synth){arm(9000);return;}
    const text=scenes[scene].caption, token=++speechToken,utterance=new SpeechSynthesisUtterance(text);currentUtterance=utterance;utterance.lang='en-IN';utterance.rate=.93;utterance.pitch=1;
    const voices=synth.getVoices();utterance.voice=voices.find(v=>v.localService&&v.lang.startsWith('en'))||voices.find(v=>v.lang.startsWith('en'))||null;
    utterance.onstart=()=>{if(token!==speechToken)return;speechStarted=true;$('#audioStatus').textContent='Browser narration playing · Captions always on';arm(Math.max(18000,text.split(/\s+/).length*650+6000));};
    utterance.onend=()=>{if(token!==speechToken||!playing)return;clearStoryTimer();arm(1000);};
    utterance.onerror=()=>{if(token!==speechToken)return;sound=false;controls();$('#audioStatus').textContent='Voice is unavailable on this device. The captioned visual story will continue silently.';if(playing)arm(9000);};
    try{arm(6000,()=>{sound=false;stopSpeech();controls();$('#audioStatus').textContent='No device voice responded. Continuing the visual story with captions.';arm(9000);});synth.speak(utterance);}catch(error){sound=false;controls();$('#audioStatus').textContent='Narration is unavailable. You can still watch and read the story.';arm(9000);}
  }
  function advance(){if(!playing)return;if(scene<scenes.length-1){scene++;renderScene();scheduleScene();}else{playing=false;clearStoryTimer();stopSpeech();controls();$('#audioStatus').textContent='Your next step: try Luna’s sample day below. Replay any time.';}}
  function pauseStory(){if(!playing)return;playing=false;remaining=Math.max(500,due-performance.now());clearStoryTimer();if(synth&&sound&&currentUtterance)synth.pause();controls();}
  function resumeStory(){if(scene===scenes.length-1&&!currentUtterance){scene=0;renderScene();}playing=true;controls();if(sound&&synth&&currentUtterance&&speechStarted){synth.resume();arm(remaining);}else scheduleScene();}
  function jumpScene(i){if(i<0||i>=scenes.length)return;clearStoryTimer();stopSpeech();scene=i;renderScene();if(playing)scheduleScene();}
  scenes.forEach((s,i)=>{$('#storyProgress').append(button('',()=>jumpScene(i),'scene-dot'));const b=$('#storyProgress').lastElementChild;b.setAttribute('aria-label','Scene '+(i+1)+': '+s.title);$('#storyTranscript').append(el('p',s.caption));});
  function openStory(){scene=0;playing=false;sound=false;clearStoryTimer();stopSpeech();$('#audioStatus').textContent='Visual walkthrough · Optional browser narration · Captions always on';openDialog($('#storyDialog'));renderScene();playing=true;controls();scheduleScene();}
  $$('[data-watch]').forEach(b=>b.addEventListener('click',openStory));
  $('#storyPlay').addEventListener('click',()=>playing?pauseStory():resumeStory());$('#storyPrev').addEventListener('click',()=>jumpScene(scene-1));$('#storyNext').addEventListener('click',()=>jumpScene(scene+1));
  $('#storySound').addEventListener('click',()=>{if(!synth){$('#audioStatus').textContent='Narration is not supported by this browser. The visual story and captions are available.';return;}sound=!sound;stopSpeech();controls();$('#audioStatus').textContent=sound?'Using your browser/device voice; some voices may use an online service.':'Sound off · Captions always on';if(playing)scheduleScene();});
  $('#storyDialog').addEventListener('close',()=>{playing=false;clearStoryTimer();stopSpeech();controls();});
  $('#tryFromStory').addEventListener('click',e=>{e.preventDefault();go('try');});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseStory();});
  // Passive scroll feedback does not change the chosen species or interrupt reading.
  let scrollPending=false;function updateScroll(){if(scrollPending)return;scrollPending=true;requestAnimationFrame(()=>{scrollPending=false;const total=document.documentElement.scrollHeight-innerHeight;$('#scrollProgress').style.width=(total>0?Math.min(100,Math.max(0,scrollY/total*100)):0)+'%';if(scrollY>150)dismissWelcome();let hint='Your PawQi guide';for(const [id,text] of [['story','A simpler way to begin'],['try','Records, routines & memories'],['services','Explore care services'],['life','Make room for memories'],['future','The next chapter']])if(document.getElementById(id).getBoundingClientRect().top<innerHeight*.4)hint=text;$('#guideContext').textContent=hint;});}
  addEventListener('scroll',updateScroll,{passive:true});addEventListener('resize',updateScroll);
  if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('seen');io.unobserve(e.target);}}),{threshold:.1});$$('.section-heading,.experience-title,.why-grid article').forEach(n=>{n.classList.add('reveal');io.observe(n);});}
  // Broken artwork must not conceal controls or text.
  $$('img').forEach(img=>img.addEventListener('error',()=>{img.style.opacity='0';img.dataset.failed='true';}));
  renderDemo();renderScene();updateScroll();
})();
