// ---- shared project data ----
const PROJECTS = [
  {nm:"Dinopirates from Inner Space", yr:2025, role:"Game Designer · Developer · Art Director", place:"Tokyo", img:"../assets/dp-main.png", tags:["Lua","Playdate","Unity","Pixel Art"], feat:true},
  {nm:"Storymoon", yr:2025, role:"UX/UI Designer · Brand", place:"Spain", img:"../assets/storymoon-main.png", tags:["Brand","Expo","iOS"]},
  {nm:"Brave UP!", yr:2023, role:"UX/UI · Frontend Developer", place:"United States", img:"../assets/braveup-main.png", tags:["D3.js","SASS","SwiftUI"]},
  {nm:"Deviants' Factions", yr:2022, role:"Frontend Developer", place:"Worldwide", img:"../assets/deviantsfactions-main.png", tags:["CSS3","web3","Mobile-first"]},
  {nm:"Clever by BICE", yr:2021, role:"UI Frontend Developer", place:"Santiago", img:"../assets/clever-main.png", tags:["SwiftUI","iOS","Figma"]},
  {nm:"Baufest", yr:2019, role:"UI Designer · Design System", place:"Santiago", img:"../assets/baufest-ds.png", tags:["Design System","Abstract"]},
  {nm:"McKinsey & Company", yr:2017, role:"Senior Visual Designer", place:"Santiago", img:"", tags:["Sketch","Principle"]},
  {nm:"DeNA West", yr:2014, role:"UI Artist", place:"Santiago", img:"", tags:["Game UI"]},
];

// ---- reactive dot field ----
(function(){
  const cv = document.getElementById('field');
  const ctx = cv.getContext('2d');
  let w,h,dpr,cols,rows,mx=-999,my=-999;
  const GAP=34;
  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    w=cv.width=innerWidth*dpr; h=cv.height=innerHeight*dpr;
    cv.style.width=innerWidth+'px'; cv.style.height=innerHeight+'px';
    cols=Math.ceil(innerWidth/GAP)+1; rows=Math.ceil(innerHeight/GAP)+1;
  }
  resize(); addEventListener('resize',resize);
  addEventListener('pointermove',e=>{mx=e.clientX*dpr;my=e.clientY*dpr;});
  addEventListener('pointerleave',()=>{mx=-999;my=-999;});
  let t=0;
  function draw(){
    ctx.clearRect(0,0,w,h);
    t+=0.012;
    const R=150*dpr;
    for(let i=0;i<cols;i++){
      for(let j=0;j<rows;j++){
        const x=i*GAP*dpr, y=j*GAP*dpr;
        const dx=x-mx, dy=y-my, d=Math.hypot(dx,dy);
        const wave=Math.sin(i*0.4+j*0.4+t)*0.5+0.5;
        let r=0.7*dpr+wave*0.7*dpr;
        let a=0.12+wave*0.10;
        let col='138,130,144';
        if(d<R){
          const f=1-d/R;
          r+=f*2.6*dpr; a=0.12+f*0.7;
          col= f>0.55?'6,210,255': f>0.3?'139,123,232':'249,91,167';
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
  const line=(html,cls='')=>{const d=document.createElement('div');d.className='ln '+cls;d.innerHTML=html;body.appendChild(d);return d;};
  const promptStr='<span class="prompt"><span class="u">dactrtr</span><span class="at">@</span><span class="h">tokyo</span><span class="at">:</span><span class="p">~</span><span class="at">$</span></span> ';
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));

  async function typeInto(el,text,speed=26){
    for(let i=0;i<text.length;i++){el.innerHTML+=text[i];await sleep(speed);}
  }
  async function typeText(el,text,speed=26){
    for(let i=0;i<text.length;i++){el.textContent+=text[i];await sleep(speed);}
  }
  async function run(){
    // whoami
    const l1=line(promptStr);await sleep(380);
    await typeInto(l1,'whoami',40);await sleep(220);
    line('<span class="big name-xl">Sebastian Zúñiga</span>');
    line('<span class="muted">aka</span> <span class="cy">dactrtr</span> <span class="muted">— UI Designer · Illustrator · Indie Game Developer</span>');
    await sleep(260);
    // role
    const l2=line(promptStr);await sleep(120);
    await typeInto(l2,'cat role.txt',34);await sleep(180);
    const r=line('<span class="role-xl"></span>').firstChild;
    await typeText(r,'> ',20);
    const rotate=[
      {t:'I design the interaction.  '},
      {t:'then I '},
      {t:'code it',hl:true},
      {t:'.  '},
      {t:'Lua. SwiftUI. CSS. D3.  '},
      {t:'games, tools & systems.'}
    ];
    for(const ph of rotate){
      const span=document.createElement('span');
      if(ph.hl)span.className='hl';
      r.appendChild(span);
      await typeText(span,ph.t,22);await sleep(ph.hl?40:90);
    }
    await sleep(200);
    // chips
    const c=line('<div class="chips"></div>').firstChild;
    const chips=['🗼 Tokyo, JP','10 yrs','Design ↔ Engineering','Playdate · Unity','open to work'];
    for(const t of chips){const s=document.createElement('span');s.className='chip';s.innerHTML=t;c.appendChild(s);await sleep(90);}
    // run commands
    const lr=line(promptStr);await sleep(140);
    await typeInto(lr,'ls --help',30);
    const run=line('<div class="run"></div>').firstChild;
    const cmds=[['cd ','work','#work'],['cat ','about','#about'],['open ','dinopirates','#work'],['./','contact','#contact']];
    for(const [pre,word,href] of cmds){
      const a=document.createElement('a');a.className='cmd';a.href=href;a.innerHTML=`<span class="pre">${pre}</span>${word}`;run.appendChild(a);await sleep(80);
    }
    const fin=line(promptStr);fin.innerHTML+='<span class="cursor"></span>';
  }
  run();
})();

// ---- project list render ----
(function(){
  const list=document.getElementById('plist');
  document.getElementById('projcount').textContent=PROJECTS.length+' projects';
  PROJECTS.forEach((p,i)=>{
    const a=document.createElement('a');
    a.className='prow'+(p.feat?' feat':'');
    a.href='#';
    a.dataset.img=p.img;
    a.innerHTML=`
      ${p.feat?'<span class="tag-feat">★ FEATURED</span>':''}
      <span class="idx">${String(i+1).padStart(2,'0')}</span>
      <span class="nm">${p.nm}<span class="yr">${p.yr}</span></span>
      <span class="rl">${p.role}<br><span style="opacity:.6">${p.place}</span></span>
      <span class="tg">${p.tags.map(t=>`<span>${t}</span>`).join('')}</span>
      <span class="arr">→</span>`;
    list.appendChild(a);
  });

  // hover peek
  const peek=document.getElementById('peek'), peekimg=document.getElementById('peekimg');
  list.addEventListener('pointermove',e=>{
    const row=e.target.closest('.prow');
    if(row && row.dataset.img){
      peekimg.src=row.dataset.img;peek.classList.add('on');
      let x=e.clientX+22,y=e.clientY-60;
      if(x+300>innerWidth)x=e.clientX-300;
      if(y<10)y=10;
      peek.style.left=x+'px';peek.style.top=y+'px';
    }else peek.classList.remove('on');
  });
  list.addEventListener('pointerleave',()=>peek.classList.remove('on'));
})();
