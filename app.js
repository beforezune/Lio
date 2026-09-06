const KEY='lio-profile-v1';
const modal=document.getElementById('onboarding');
const startButtons=[document.getElementById('startBtn'),document.getElementById('heroStart')].filter(Boolean);
const close=document.getElementById('closeBtn');
const save=document.getElementById('saveBtn');
const choices=[...document.querySelectorAll('#choices button')];

function getProfile(){
  try{return JSON.parse(localStorage.getItem(KEY))||{version:1,interests:[],read:[],completed:[]};}
  catch{return {version:1,interests:[],read:[],completed:[]};}
}
function openModal(){modal?.classList.remove('hidden');modal?.setAttribute('aria-hidden','false');}
function closeModal(){modal?.classList.add('hidden');modal?.setAttribute('aria-hidden','true');}
startButtons.forEach(button=>button.addEventListener('click',openModal));
close?.addEventListener('click',closeModal);
modal?.addEventListener('click',event=>{if(event.target===modal)closeModal();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();});

choices.forEach(button=>button.addEventListener('click',()=>button.classList.toggle('selected')));
save?.addEventListener('click',()=>{
  const interests=choices.filter(button=>button.classList.contains('selected')).map(button=>button.dataset.value);
  const old=getProfile();
  localStorage.setItem(KEY,JSON.stringify({version:1,interests,startedAt:old.startedAt||new Date().toISOString(),read:old.read||[],completed:old.completed||[]}));
  closeModal();
  const start=document.getElementById('startBtn');
  if(start)start.innerHTML='Continue learning <span>↗</span>';
  document.getElementById('learn')?.scrollIntoView({behavior:'smooth'});
});

const profile=getProfile();
if(profile.interests?.length){const start=document.getElementById('startBtn');if(start)start.innerHTML='Continue learning <span>↗</span>';}

document.querySelectorAll('a[href^="articles/"]').forEach(link=>link.addEventListener('click',()=>{
  const current=getProfile();
  const id=link.getAttribute('href');
  if(id&&!current.read.includes(id))current.read.push(id);
  localStorage.setItem(KEY,JSON.stringify(current));
}));

document.querySelectorAll('[data-topic]').forEach(button=>button.addEventListener('click',()=>{
  const current=getProfile();
  const topic=button.dataset.topic;
  if(!current.interests.includes(topic))current.interests.push(topic);
  current.version=1;
  localStorage.setItem(KEY,JSON.stringify(current));
  openModal();
  choices.forEach(choice=>choice.classList.toggle('selected',current.interests.includes(choice.dataset.value)));
}));
