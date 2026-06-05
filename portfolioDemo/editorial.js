const ITEMS = [
  {nm:"Dinopirates from Inner Space", yr:2025, role:"Designer · Dev · Art Dir.", place:"Tokyo, JP", img:"../assets/dp-main.png", feat:true},
  {nm:"Storymoon", yr:2025, role:"UX/UI · Brand", place:"Spain", img:"../assets/storymoon-main.png"},
  {nm:"Brave UP!", yr:2023, role:"UX/UI · Frontend", place:"United States", img:"../assets/braveup-main.png"},
  {nm:"Deviants' Factions", yr:2022, role:"Frontend Developer", place:"Worldwide", img:"../assets/deviantsfactions-main.png"},
  {nm:"Clever by BICE", yr:2021, role:"UI Frontend", place:"Santiago, CL", img:"../assets/clever-main.png"},
  {nm:"Baufest", yr:2019, role:"UI · Design System", place:"Santiago, CL", img:"../assets/baufest-ds.png"},
  {nm:"McKinsey & Company", yr:2017, role:"Sr. Visual Designer", place:"Santiago, CL", img:""},
  {nm:"DeNA West", yr:2014, role:"UI Artist", place:"Santiago, CL", img:""},
];

(function(){
  const idx=document.getElementById('idx');
  document.getElementById('cnt').textContent='('+ITEMS.length+')';
  ITEMS.forEach((p,i)=>{
    const a=document.createElement('a');a.href='#';a.className='irow'+(p.feat?' feat':'');
    a.dataset.img=p.img;
    a.innerHTML=`<span class="no">${p.feat?'<span class="star">★</span>':String(i+1).padStart(2,'0')}</span>
      <span class="ttl">${p.nm}<span class="yr">${p.yr}</span></span>
      <span class="right">${p.role}<span class="pl">${p.place}</span></span>`;
    idx.appendChild(a);
  });

  const peek=document.getElementById('peek'),peekimg=document.getElementById('peekimg');
  idx.addEventListener('pointermove',e=>{
    const row=e.target.closest('.irow');
    if(row&&row.dataset.img){
      if(peekimg.getAttribute('src')!==row.dataset.img)peekimg.src=row.dataset.img;
      peek.classList.add('on');
      let x=e.clientX+26,y=e.clientY-110;
      if(x+360>innerWidth)x=e.clientX-366;
      if(y<14)y=14; if(y+220>innerHeight)y=innerHeight-228;
      peek.style.left=x+'px';peek.style.top=y+'px';
    }else peek.classList.remove('on');
  });
  idx.addEventListener('pointerleave',()=>peek.classList.remove('on'));
})();

// ---- generative flow-field (thin ink lines on cream) ----
(function(){
  const cv=document.getElementById('flow'),ctx=cv.getContext('2d');
  let w,h,dpr,mx=-999,my=-999;
  const N=70, parts=[];
  function resize(){
    dpr=Math.min(devicePixelRatio||1,2);
    w=cv.width=innerWidth*dpr;h=cv.height=innerHeight*dpr;
    cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';
  }
  resize();addEventListener('resize',resize);
  addEventListener('pointermove',e=>{mx=e.clientX*dpr;my=e.clientY*dpr;});
  addEventListener('pointerleave',()=>{mx=-999;my=-999;});
  function noise(x,y,t){return Math.sin(x*0.0016+t)+Math.cos(y*0.0019-t*0.8)+Math.sin((x+y)*0.0011+t*0.5);}
  for(let i=0;i<N;i++)parts.push({x:Math.random(),y:Math.random(),px:0,py:0,sp:0.4+Math.random()*0.9});
  let t=0;
  function draw(){
    t+=0.0016;
    ctx.fillStyle='rgba(236,234,225,0.06)';ctx.fillRect(0,0,w,h);
    for(const p of parts){
      let x=p.x*w,y=p.y*h;
      const ang=noise(x,y,t)*Math.PI;
      let vx=Math.cos(ang),vy=Math.sin(ang);
      // cursor repel
      const dx=x-mx,dy=y-my,d=Math.hypot(dx,dy),R=170*dpr;
      let red=false;
      if(d<R){const f=(1-d/R);vx+=dx/d*f*2.4;vy+=dy/d*f*2.4;red=f>0.4;}
      x+=vx*p.sp*dpr*1.1;y+=vy*p.sp*dpr*1.1;
      ctx.beginPath();ctx.moveTo(p.px||x,p.py||y);ctx.lineTo(x,y);
      ctx.strokeStyle=red?'rgba(216,58,43,0.5)':'rgba(24,21,19,0.16)';
      ctx.lineWidth=(red?1.2:0.8)*dpr;ctx.stroke();
      p.px=x;p.py=y;
      if(x<0||x>w||y<0||y>h){p.x=Math.random();p.y=Math.random();p.px=p.x*w;p.py=p.y*h;}
      else{p.x=x/w;p.y=y/h;}
    }
    requestAnimationFrame(draw);
  }
  // seed prev positions
  for(const p of parts){p.px=p.x*w;p.py=p.y*h;}
  draw();
})();
