// shared projects (excl. featured Dinopirates)
const CARTS = [
  {nm:"Storymoon", yr:2025, role:"UX/UI · Brand", img:"../assets/storymoon-main.png", tags:["Brand","Expo","iOS"]},
  {nm:"Brave UP!", yr:2023, role:"UX/UI · Frontend", img:"../assets/braveup-main.png", tags:["D3.js","SASS","SwiftUI"]},
  {nm:"Deviants' Factions", yr:2022, role:"Frontend Dev", img:"../assets/deviantsfactions-main.png", tags:["CSS3","web3"]},
  {nm:"Clever by BICE", yr:2021, role:"UI Frontend", img:"../assets/clever-main.png", tags:["SwiftUI","iOS"]},
  {nm:"Baufest", yr:2019, role:"UI · Design System", img:"../assets/baufest-ds.png", tags:["Design System"]},
  {nm:"McKinsey & Co.", yr:2017, role:"Sr. Visual Designer", img:"", logo:"../assets/logos/mckinsey-logo.png", tags:["Sketch","Principle"]},
];

(function(){
  const grid=document.getElementById('grid');
  document.getElementById('cnt').textContent=(CARTS.length+1)+' projects';
  CARTS.forEach(c=>{
    const a=document.createElement('a');a.href='#';a.className='cart'+(c.img?'':' np');
    const thumb=c.img?`<img src="${c.img}" alt="${c.nm}">`:`<img class="logo" src="${c.logo}" alt="${c.nm}">`;
    a.innerHTML=`<div class="thumb">${thumb}</div>
      <div class="body"><div class="role">${c.role}</div><h4>${c.nm}</h4><div class="yr">${c.yr}</div>
      <div class="tg">${c.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>`;
    grid.appendChild(a);
  });
})();

// ---- 1-bit cursor-reactive dither field ----
(function(){
  const cv=document.getElementById('dither'),ctx=cv.getContext('2d');
  let w,h,dpr,mx=-999,my=-999,tx=-999,ty=-999;
  const GAP=20;
  // 4x4 bayer matrix
  const bayer=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(v=>v/16);
  function resize(){
    dpr=Math.min(devicePixelRatio||1,2);
    w=cv.width=innerWidth*dpr;h=cv.height=innerHeight*dpr;
    cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';
  }
  resize();addEventListener('resize',resize);
  addEventListener('pointermove',e=>{tx=e.clientX*dpr;ty=e.clientY*dpr;});
  addEventListener('pointerleave',()=>{tx=-999;ty=-999;});
  let t=0;
  function draw(){
    t+=0.01;
    mx+=(tx-mx)*0.12;my+=(ty-my)*0.12;
    ctx.clearRect(0,0,w,h);
    const step=GAP*dpr;
    const cols=Math.ceil(w/step),rows=Math.ceil(h/step);
    const R=240*dpr;
    for(let i=0;i<cols;i++){
      for(let j=0;j<rows;j++){
        const x=i*step,y=j*step;
        const d=Math.hypot(x-mx,y-my);
        // base ambient wave value (low = sparse)
        let val=0.04+0.03*(Math.sin(i*0.5+t)*0.5+0.5);
        if(d<R){val+=(1-d/R)*0.85;}
        const th=bayer[(i%4)*4+(j%4)];
        if(val>th){
          const r=Math.min(val,1)*step*0.46;
          // color: near cursor -> accent, else ink
          let col='#1b1620';
          if(d<R*0.45){const f=1-d/(R*0.45);col= f>0.6?'#f95ba7':f>0.3?'#06d2ff':'#1b1620';}
          ctx.fillStyle=col;
          ctx.beginPath();ctx.arc(x+step/2,y+step/2,Math.max(0.5,r),0,6.28);ctx.fill();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
