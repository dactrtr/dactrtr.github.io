// ---- shared project data ----
const PROJECTS = [
  {nm:"Dinopirates from Inner Space", yr:2025, role:"Game Designer · Developer · Art Director", place:"Tokyo, JP", img:"../assets/dp-main.png", tags:["Lua","Playdate SDK","Unity","SwiftUI","Pixel Art"], feat:true,
   blurb:"A game universe across two platforms — a hand-built 1-bit Playdate adventure (900+ commits, custom SwiftUI level generator, rhythm combat) and a Unity action-roguelike. Demoed at BitSummit 2025, Kyoto."},
  {nm:"Storymoon", yr:2025, role:"UX/UI Designer · Brand", place:"Spain", img:"../assets/storymoon-main.png", tags:["Brand","Expo","iOS"]},
  {nm:"Brave UP!", yr:2023, role:"UX/UI · Frontend Developer", place:"United States", img:"../assets/braveup-main.png", tags:["D3.js","SASS","SwiftUI"]},
  {nm:"Deviants' Factions", yr:2022, role:"Frontend Developer", place:"Worldwide", img:"../assets/deviantsfactions-main.png", tags:["CSS3","web3","Mobile-first"]},
  {nm:"Clever by BICE", yr:2021, role:"UI Frontend Developer", place:"Santiago, CL", img:"../assets/clever-main.png", tags:["SwiftUI","iOS","Figma"]},
  {nm:"Baufest", yr:2019, role:"UI Designer · Design System", place:"Santiago, CL", img:"../assets/baufest-ds.png", tags:["Design System","Abstract"]},
  {nm:"McKinsey & Company", yr:2017, role:"Senior Visual Designer", place:"Santiago, CL", img:"", tags:["Sketch","Principle"]},
  {nm:"DeNA West", yr:2014, role:"UI Artist", place:"Santiago, CL", img:"", tags:["Game UI"]},
];

// ---- reactive dot field (driven by Tweaks: theme colours + atmosphere) ----
(function(){
  const cv = document.getElementById('field');
  const ctx = cv.getContext('2d');
  let w,h,dpr,cols,rows,mx=-999,my=-999;
  const PRESETS={
    calm:{gap:46,R:120,size:0.5,glow:0.5,wave:0.006},
    live:{gap:34,R:150,size:0.7,glow:0.7,wave:0.012},
    hyper:{gap:24,R:230,size:0.95,glow:0.95,wave:0.02}
  };
  function read(){
    const cs=getComputedStyle(document.documentElement);
    const v=k=>(cs.getPropertyValue(k).trim().replace(/["']/g,'')||'138,130,144');
    const a=document.documentElement.dataset.atmosphere||'live';
    const base=PRESETS[a]||PRESETS.live;
    return {...base,base:v('--dot-base'),near:v('--dot-near'),mid:v('--dot-mid'),far:v('--dot-far')};
  }
  let P=read();
  function recalc(){cols=Math.ceil(innerWidth/P.gap)+1;rows=Math.ceil(innerHeight/P.gap)+1;}
  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    w=cv.width=innerWidth*dpr; h=cv.height=innerHeight*dpr;
    cv.style.width=innerWidth+'px'; cv.style.height=innerHeight+'px';
    recalc();
  }
  resize(); addEventListener('resize',resize);
  addEventListener('pf-change',()=>{P=read();recalc();});
  addEventListener('pointermove',e=>{mx=e.clientX*dpr;my=e.clientY*dpr;});
  addEventListener('pointerleave',()=>{mx=-999;my=-999;});
  let t=0;
  function draw(){
    ctx.clearRect(0,0,w,h);
    t+=P.wave;
    const R=P.R*dpr, gap=P.gap*dpr;
    for(let i=0;i<cols;i++){
      for(let j=0;j<rows;j++){
        const x=i*gap, y=j*gap;
        const dx=x-mx, dy=y-my, d=Math.hypot(dx,dy);
        const wave=Math.sin(i*0.4+j*0.4+t)*0.5+0.5;
        let r=P.size*dpr+wave*P.size*dpr;
        let a=0.12+wave*0.10;
        let col=P.base;
        if(d<R){
          const f=1-d/R;
          r+=f*2.6*dpr*(P.size/0.7); a=0.12+f*P.glow;
          col= f>0.55?P.near: f>0.3?P.mid:P.far;
        }
        ctx.beginPath();ctx.arc(x,y,r,0,6.28);
        ctx.fillStyle=`rgba(${col},${a})`;ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ---- terminal boot sequence ----
(function(){
  const body=document.getElementById('termbody');
  const line=(html='',cls='')=>{const d=document.createElement('div');d.className='ln '+cls;d.innerHTML=html;body.appendChild(d);return d;};
  const promptStr='<span class="prompt"><span class="u">dactrtr</span><span class="at">@</span><span class="h">tokyo</span><span class="at">:</span><span class="p">~</span><span class="at">$</span></span> ';
  const sleep=ms=>new Promise(r=>setTimeout(r,ms*(window.__bootSpeed||1)));
  async function typeInto(el,text,speed=26){for(let i=0;i<text.length;i++){el.innerHTML+=text[i];await sleep(speed);}}
  async function typeText(el,text,speed=26){for(let i=0;i<text.length;i++){el.textContent+=text[i];await sleep(speed);}}

  async function run(){
    const l1=line(promptStr);await sleep(240);
    await typeInto(l1,'whoami',28);await sleep(130);
    line('<span class="big name-xl">Sebastian Zúñiga</span>');
    line('<span class="muted">aka</span> <span class="cy">dactrtr</span> <span class="muted">— based in</span> <span class="tokyo-tag"><span class="cy">Tokyo</span><img class="tokyo-img-inline" src="../assets/where.png" alt="Tokyo Tower at night"></span>');
    await sleep(150);
    // roles, colored to match existing site
    const l2=line(promptStr);await sleep(90);
    await typeInto(l2,'cat roles.txt',22);await sleep(110);
    const r=line('<span class="role-xl"></span>').firstChild;
    await typeText(r,'> ',16);
    const segs=[
      {t:'UI Designer',c:'pk'},{t:' · '},
      {t:'Illustrator',c:'pu'},{t:' · '},
      {t:'Indie Game Developer',c:'cy'},
      {t:'  ('},{t:'HTML/CSS/SwiftUI/Lua',hl:true},{t:')'}
    ];
    for(const s of segs){
      const span=document.createElement('span');
      if(s.c)span.className=s.c;else if(s.hl)span.className='hl';
      r.appendChild(span);
      await typeText(span,s.t,14);
    }
    await sleep(130);
    // role one-liner
    const l3=line(promptStr);await sleep(80);
    await typeInto(l3,'cat what.txt',22);await sleep(110);
    const r2=line('<span class="role-xl"></span>').firstChild;
    await typeText(r2,'> ',14);
    const e1=document.createElement('span');r2.appendChild(e1);await typeText(e1,'I design the interaction, then I ',14);
    const e2=document.createElement('span');e2.className='hl';r2.appendChild(e2);await typeText(e2,'code it',14);
    const e3=document.createElement('span');r2.appendChild(e3);await typeText(e3,'.',14);
    await sleep(140);
    // chips
    const c=line('<div class="chips"></div>').firstChild;
    const chips=['10 yrs','Design ↔ Engineering','Playdate · Unity','日本語','● open to work'];
    for(const t of chips){const s=document.createElement('span');s.className='chip';s.innerHTML=t;c.appendChild(s);await sleep(60);}
    // commands
    const lr=line(promptStr);await sleep(90);
    await typeInto(lr,'ls --help',20);
    const runEl=line('<div class="run"></div>').firstChild;
    const cmds=[['cd ','work','#work'],['cat ','about','#about'],['open ','dinopirates','#work'],['./','contact','#contact']];
    for(const [pre,word,href] of cmds){
      const a=document.createElement('a');a.className='cmd';a.href=href;a.innerHTML=`<span class="pre">${pre}</span>${word}`;runEl.appendChild(a);await sleep(55);
    }
    line(promptStr).innerHTML+='<span class="cursor"></span>';
  }
  run();
})();

// ---- featured card + project list ----
(function(){
  const feat=PROJECTS.find(p=>p.feat);
  const others=PROJECTS.filter(p=>!p.feat);
  document.getElementById('projcount').textContent=PROJECTS.length+' projects';

  // featured card
  const fc=document.getElementById('featcard');
  fc.dataset.img=feat.img;
  fc.innerHTML=`
    <div class="shot"><span class="tagf">★ FEATURED</span><img src="${feat.img}" alt="${feat.nm}"></div>
    <div class="meta">
      <div class="ec"><span class="pre">$</span> open ~/work/dinopirates &nbsp;·&nbsp; ${feat.yr} · ${feat.place}</div>
      <h3>${feat.nm}</h3>
      <p>${feat.blurb}</p>
      <div class="tg">${feat.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="go">▶ open case study →</div>
    </div>`;

  // list
  const list=document.getElementById('plist');
  others.forEach((p,i)=>{
    const a=document.createElement('a');
    a.className='prow';a.href='#';a.dataset.img=p.img;
    a.innerHTML=`
      <span class="idx">${String(i+2).padStart(2,'0')}</span>
      <span class="nm">${p.nm}<span class="yr">${p.yr}</span></span>
      <span class="rl">${p.role}<br><span style="opacity:.6">${p.place}</span></span>
      <span class="tg">${p.tags.map(t=>`<span>${t}</span>`).join('')}</span>
      <span class="arr">→</span>`;
    list.appendChild(a);
  });

  // hover peek (list rows only — featured already shows its image)
  const peek=document.getElementById('peek'), peekimg=document.getElementById('peekimg');
  list.addEventListener('pointermove',e=>{
    const row=e.target.closest('.prow');
    if(row && row.dataset.img){
      if(peekimg.getAttribute('src')!==row.dataset.img)peekimg.src=row.dataset.img;
      peek.classList.add('on');
      let x=e.clientX+22,y=e.clientY-60;
      if(x+300>innerWidth)x=e.clientX-300;
      if(y<10)y=10;
      peek.style.left=x+'px';peek.style.top=y+'px';
    }else peek.classList.remove('on');
  });
  list.addEventListener('pointerleave',()=>peek.classList.remove('on'));
})();
