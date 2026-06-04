/* ===== screens2.jsx — Loading, Plan+Pricing (merged), Success, ExitModal ===== */

/* ---------- Screen 6 · Loading / plan generation ---------- */
const REVIEWS=[
  {n:'Daria K.', r:'Marketing Lead', t:'Coursiv helped me understand how to use AI in my daily work.', a:'D'},
  {n:'Marcus T.', r:'Sales Manager', t:'I automated my weekly reports and saved hours every week.', a:'M'},
  {n:'Aigerim S.', r:'Project Manager', t:'The role-based workflows were exactly what my team needed.', a:'A'},
  {n:'Liam O.', r:'Financial Analyst', t:'Finally I can show my manager real, measurable AI impact.', a:'L'},
];
function ScreenLoading({go}){
  const [p,setP]=React.useState(0);
  const [ri,setRi]=React.useState(0);
  React.useEffect(()=>{
    const start=Date.now();
    const pts=[[0,0],[1200,29],[2200,29],[3400,64],[4400,64],[5400,100]];
    const id=setInterval(()=>{
      const t=Date.now()-start;
      let v=100;
      for(let i=0;i<pts.length-1;i++){
        const [t0,v0]=pts[i],[t1,v1]=pts[i+1];
        if(t<=t1){ v=v0+(v1-v0)*((t-t0)/(t1-t0||1)); break; }
      }
      setP(Math.round(Math.max(0,Math.min(100,v))));
      if(t>=pts[pts.length-1][0]){ setP(100); clearInterval(id); }
    }, 45);
    return ()=>clearInterval(id);
  },[]);
  React.useEffect(()=>{
    const id=setInterval(()=>setRi(i=>(i+1)%REVIEWS.length), 2400);
    return ()=>clearInterval(id);
  },[]);
  const done=p>=100;
  const r=70, C=2*Math.PI*r;
  const rev=REVIEWS[ri];
  return (
    <div className="screen center" style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',paddingTop:16}}>
      <div style={{position:'relative',width:172,height:172,marginTop:10}}>
        <svg width="172" height="172" style={{transform:'rotate(-90deg)'}}>
          <circle cx="86" cy="86" r={r} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="12"/>
          <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6E6BF7"/><stop offset="1" stopColor="#574DE8"/>
          </linearGradient></defs>
          <circle cx="86" cy="86" r={r} fill="none" stroke="url(#pg)" strokeWidth="12" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C*(1-p/100)} style={{transition:'stroke-dashoffset .2s linear',filter:'drop-shadow(0 0 10px rgba(99,102,241,.7))'}}/>
        </svg>
        <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontSize:40,fontWeight:800,letterSpacing:'-1px'}}>{p}%</span>
          <span className="faint" style={{fontSize:12,fontWeight:700}}>{done?'Ready':'Analyzing'}</span>
        </div>
      </div>
      <h1 className="h1" style={{fontSize:23,margin:'20px 0 8px',maxWidth:300}}>{done?'Your plan is ready':'Creating your AI Career Growth Plan…'}</h1>
      <div className="chip" style={{marginTop:2}}>⭐ 1M+ learners use Coursiv to master AI</div>

      <div style={{display:'flex',alignItems:'center',gap:8,marginTop:20,marginBottom:10}}>
        <div style={{display:'flex',gap:2,color:'var(--gold)'}}>{[0,1,2,3,4].map(i=><IconStar key={i} size={15}/>)}</div>
        <span style={{fontSize:13,fontWeight:800}}>4.8</span>
        <span className="faint" style={{fontSize:12.5,fontWeight:600}}>· 12,480 reviews</span>
      </div>

      <div key={ri} className="card rise" style={{textAlign:'left',width:'100%',background:'var(--card-grad)',padding:16}}>
        <p style={{fontSize:14.5,fontWeight:600,lineHeight:1.45}}>“{rev.t}”</p>
        <div style={{display:'flex',alignItems:'center',gap:9,marginTop:12}}>
          <div style={{width:30,height:30,borderRadius:'50%',background:'var(--cta)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:800}}>{rev.a}</div>
          <span className="faint" style={{fontSize:13,fontWeight:700}}>{rev.n} · {rev.r}</span>
        </div>
      </div>
      <div style={{display:'flex',gap:6,marginTop:14}}>
        {REVIEWS.map((_,i)=><div key={i} style={{width:i===ri?20:7,height:7,borderRadius:99,background:i===ri?'var(--accent-bright)':'var(--surface-2)',transition:'.3s'}}/>)}
      </div>

      <div className="cta-dock" style={{width:'100%',marginTop:'auto'}}>
        <Button onClick={go} disabled={!done}>{done?'View my plan':'Please wait…'}</Button>
      </div>
    </div>
  );
}

/* ---------- card-brand chips ---------- */
function PayIcons(){
  const Brand=({bg,children,color='#fff'})=>(
    <div style={{height:24,minWidth:38,borderRadius:6,background:bg,display:'flex',alignItems:'center',justifyContent:'center',
      padding:'0 8px',fontSize:11,fontWeight:800,color,letterSpacing:'.3px'}}>{children}</div>
  );
  return (
    <div style={{display:'flex',gap:7,flexWrap:'wrap',justifyContent:'center'}}>
      <Brand bg="#000">Pay</Brand>
      <Brand bg="#fff" color="#003087">Pay<span style={{color:'#009cde'}}>Pal</span></Brand>
      <Brand bg="#1a1f71">VISA</Brand>
      <Brand bg="#fff" color="#eb001b">●●</Brand>
    </div>
  );
}

const PLANS=[
  {id:'1w', name:'1-WEEK PLAN', price:'6.93', was:'13.86', term:'1-week'},
  {id:'4w', name:'4-WEEK PLAN', price:'19.99', was:'39.99', term:'4-week', popular:true},
  {id:'12w',name:'12-WEEK PLAN',price:'39.99', was:'79.99', term:'12-week'},
];

/* ---------- Screen 7 · Plan summary + Pricing (merged) ---------- */
function ScreenPlan({go, back, state}){
  const [sel,setSel]=React.useState('1w');
  const [agree,setAgree]=React.useState(false);
  const [warn,setWarn]=React.useState(false);
  const [left,setLeft]=React.useState(593);
  const scrollRef=React.useRef(null);
  const agreeRef=React.useRef(null);

  React.useEffect(()=>{
    const start=Date.now(), init=593;
    const id=setInterval(()=>setLeft(Math.max(0,init-Math.floor((Date.now()-start)/1000))),1000);
    return ()=>clearInterval(id);
  },[]);
  const mm=String(Math.floor(left/60)).padStart(2,'0'), ss=String(left%60).padStart(2,'0');

  const q=(state&&state.quiz)||{};
  const role=q.role||'Product / Project Management';
  const goal=q.improve||'Save time on routine tasks';

  const days=[
    ['✍️','Automate writing'],['📝','Summarize meetings'],['📊','Analyze data'],['📄','Create reports'],['⚙️','Build workflow'],
    ['🤖','Smart assistants'],['💬','Better prompts'],['🔁','Automations'],['📈','Show impact'],['🎯','Role playbook'],
  ];
  const enroll=['david.le*** · 4-week plan','emily.yo*** · 12-week plan','john.ki*** · 1-week plan','sarah.da*** · 4-week plan','michael*** · 12-week plan'];
  const cur=PLANS.find(p=>p.id===sel);

  const onUnlock=()=>{
    if(!agree){ setWarn(true); if(agreeRef.current) agreeRef.current.scrollIntoView({block:'center'}); return; }
    go();
  };

  const Pill=({children})=> <span style={{display:'inline-flex',alignItems:'center',gap:6,padding:'9px 16px',borderRadius:99,background:'var(--cta)',color:'#fff',fontWeight:800,fontSize:14}}>{children}</span>;

  return (
    <div ref={scrollRef} className="screen" style={{padding:0,display:'flex',flexDirection:'column'}}>
      {/* sticky header */}
      <div style={{position:'sticky',top:0,zIndex:20,background:'rgba(14,10,22,.92)',backdropFilter:'blur(12px)',
        borderBottom:'1px solid var(--border)',padding:'12px 16px',display:'flex',alignItems:'center',gap:12}}>
        <button className="iconbtn" onClick={back} aria-label="Back" style={{width:36,height:36}}><IconBack/></button>
        <div style={{lineHeight:1}}>
          <div className="faint" style={{fontSize:11,fontWeight:700,marginBottom:3}}>Discount expires in</div>
          <div style={{display:'flex',alignItems:'baseline',gap:4}}>
            <span style={{fontSize:21,fontWeight:800,fontVariantNumeric:'tabular-nums',letterSpacing:'.5px'}}>{mm}<span className="faint" style={{margin:'0 2px'}}>:</span>{ss}</span>
          </div>
        </div>
        <button onClick={onUnlock} style={{marginLeft:'auto',border:'none',background:'var(--cta)',color:'#fff',fontWeight:800,fontFamily:'var(--font)',
          fontSize:14,padding:'13px 20px',borderRadius:13,boxShadow:'var(--cta-glow)',cursor:'pointer',whiteSpace:'nowrap'}}>GET MY PLAN</button>
      </div>

      <div style={{padding:'18px 20px 28px'}}>
        {/* hero */}
        <div className="card" style={{background:'linear-gradient(160deg,#231f52,#15111f)',borderColor:'var(--border-strong)',textAlign:'center',padding:'22px 20px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:9,marginBottom:10}}>
            <span style={{fontSize:22}}>🎁</span>
            <span style={{fontWeight:700,fontSize:15}}>Special discount:</span>
            <span className="badge" style={{background:'#FF5C5C',color:'#fff',fontSize:13,padding:'5px 10px'}}>50%</span>
          </div>
          <h1 className="h1" style={{fontSize:26}}>Your AI Career Growth Plan is ready!</h1>
          <div style={{marginTop:16}}><Pill>★ Become more valuable at work</Pill></div>
        </div>

        {/* goal / role chips */}
        <div style={{display:'flex',gap:11,marginTop:14}}>
          <div className="card" style={{flex:1,padding:'13px 15px',background:'var(--surface)'}}>
            <div className="faint" style={{display:'flex',alignItems:'center',gap:6,fontSize:12.5,fontWeight:700,marginBottom:5}}><IconShield size={15} style={{color:'var(--accent-2)'}}/> Your role</div>
            <div style={{fontWeight:800,fontSize:14.5,lineHeight:1.2}}>{role}</div>
          </div>
          <div className="card" style={{flex:1,padding:'13px 15px',background:'var(--surface)'}}>
            <div className="faint" style={{display:'flex',alignItems:'center',gap:6,fontSize:12.5,fontWeight:700,marginBottom:5}}><IconBolt size={14} style={{color:'var(--accent-2)'}}/> Your goal</div>
            <div style={{fontWeight:800,fontSize:14.5,lineHeight:1.2}}>{goal}</div>
          </div>
        </div>

        {/* 14-day plan grid */}
        <div className="card" style={{marginTop:14,padding:'18px 16px',background:'var(--surface)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <h2 style={{fontSize:17,fontWeight:800}}>Your 14-day plan</h2>
            <span className="chip" style={{fontSize:12,padding:'5px 11px'}}>🗓️ 14 days</span>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'14px 8px'}}>
            {days.map(([e,t],i)=>(
              <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
                <div style={{width:'100%',aspectRatio:'1',borderRadius:14,background:'var(--surface-2)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22}}>{e}</div>
                <span style={{fontSize:9.5,fontWeight:800,letterSpacing:'.3px',color:'var(--text-dim)'}}>DAY {i+1}</span>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:14}} className="faint"><span style={{fontSize:12.5,fontWeight:700}}>+ Days 11–14 unlock with your plan</span></div>
        </div>

        {/* social proof */}
        <div style={{textAlign:'center',margin:'24px 0 12px'}}>
          <p style={{fontSize:16,fontWeight:800,lineHeight:1.3}}>203 people enrolled in the AI Career Program in the last hour</p>
        </div>
        <div style={{display:'flex',gap:9,overflowX:'auto',paddingBottom:4,margin:'0 -20px',padding:'0 20px 4px'}} className="noscrollbar">
          {enroll.map((e,i)=>(
            <div key={i} className="chip" style={{flex:'none',fontSize:12,fontWeight:600,background:'var(--surface)'}}>
              <span style={{width:7,height:7,borderRadius:99,background:'var(--green)',display:'inline-block'}}></span>{e}
            </div>
          ))}
        </div>

        {/* choose plan */}
        <h2 className="h1" style={{fontSize:26,textAlign:'center',margin:'30px 0 18px'}}>Choose the best plan for you</h2>

        <div className="card" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,
          background:'linear-gradient(135deg,rgba(84,224,168,.16),rgba(84,224,168,.05))',borderColor:'rgba(84,224,168,.3)',padding:'14px 16px'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,minWidth:0}}>
            <span style={{flex:'none',width:26,height:26,borderRadius:99,background:'var(--green)',color:'#06301f',display:'flex',alignItems:'center',justifyContent:'center'}}><IconCheck size={16}/></span>
            <div style={{minWidth:0}}>
              <div style={{fontWeight:800,fontSize:13.5}}>Promo code applied!</div>
              <div className="faint" style={{fontSize:12,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>OLZHAS_50OFF</div>
            </div>
          </div>
          <div style={{flex:'none',textAlign:'center',background:'rgba(84,224,168,.2)',borderRadius:10,padding:'6px 12px'}}>
            <div style={{fontWeight:800,fontSize:16,color:'var(--green)',fontVariantNumeric:'tabular-nums'}}>{mm}:{ss}</div>
            <div className="faint" style={{fontSize:9.5,fontWeight:700}}>min · sec</div>
          </div>
        </div>

        {/* pricing plans */}
        <div className="stack" style={{gap:13,marginTop:18}}>
          {PLANS.map(pl=>{
            const on=sel===pl.id;
            return (
              <div key={pl.id} style={{position:'relative',marginTop:pl.popular?10:0}}>
                {pl.popular && <div style={{position:'absolute',top:-11,left:0,right:0,display:'flex',justifyContent:'center',zIndex:1}}>
                  <span className="badge" style={{background:'var(--cta)',color:'#fff',fontSize:11,padding:'5px 14px'}}>👍 MOST POPULAR</span>
                </div>}
                <button onClick={()=>setSel(pl.id)} style={{width:'100%',display:'flex',alignItems:'center',gap:14,cursor:'pointer',
                  fontFamily:'var(--font)',color:'var(--text)',textAlign:'left',padding:'16px 17px',borderRadius:16,
                  border:'2px solid '+(on?'var(--accent-bright)':'var(--border)'),
                  background:on?'linear-gradient(135deg,rgba(99,102,241,.18),rgba(99,102,241,.05))':'var(--surface)',
                  boxShadow:on?'0 0 0 3px rgba(99,102,241,.14)':'none'}}>
                  <span style={{flex:'none',width:24,height:24,borderRadius:99,border:'2px solid '+(on?'var(--accent-bright)':'var(--text-faint)'),
                    display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {on && <span style={{width:12,height:12,borderRadius:99,background:'var(--accent-bright)'}}></span>}
                  </span>
                  <div>
                    <div style={{fontWeight:800,fontSize:16,letterSpacing:'.2px'}}>{pl.name}</div>
                    <span className="badge" style={{background:'var(--cta)',color:'#fff',fontSize:10.5,marginTop:6}}>50% OFF</span>
                  </div>
                  <div style={{marginLeft:'auto',textAlign:'right'}}>
                    <div style={{fontWeight:800,fontSize:21,letterSpacing:'-.5px'}}>${pl.price}</div>
                    <div className="faint" style={{fontSize:13,textDecoration:'line-through'}}>${pl.was}</div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* agree */}
        <div ref={agreeRef} onClick={()=>{setAgree(a=>!a);setWarn(false);}} style={{display:'flex',gap:11,alignItems:'flex-start',margin:'20px 2px 0',cursor:'pointer'}}>
          <span style={{flex:'none',marginTop:1,width:24,height:24,borderRadius:7,border:'2px solid '+(warn?'#ff6b9a':agree?'var(--accent-bright)':'var(--text-faint)'),
            background:agree?'var(--accent-bright)':'transparent',display:'flex',alignItems:'center',justifyContent:'center',transition:'.18s'}}>
            {agree&&<IconCheck size={15} style={{color:'#fff'}}/>}
          </span>
          <span style={{fontSize:13,lineHeight:1.45,color:warn?'#ff6b9a':'var(--text-dim)',fontWeight:600}}>
            I agree to the <u style={{color:'var(--accent-2)'}}>Terms and Conditions</u>, <u style={{color:'var(--accent-2)'}}>Privacy Policy</u>, <u style={{color:'var(--accent-2)'}}>Subscription Policy</u> and <u style={{color:'var(--accent-2)'}}>Refund Policy</u>.
          </span>
        </div>

        <div style={{marginTop:18}}>
          <Button onClick={onUnlock}>Get My Plan</Button>
        </div>

        <p className="faint" style={{fontSize:11,lineHeight:1.5,marginTop:14}}>
          By clicking Get My Plan, I agree to pay <b style={{color:'var(--text-dim)'}}>${cur.price}</b> for my <b style={{color:'var(--text-dim)'}}>{cur.term}</b> plan and that if I do not cancel before the end of the {cur.term} introductory plan, it will convert to a 4-week subscription at $39.99. Cancel anytime.
        </p>

        {/* trust */}
        <div className="card" style={{marginTop:16,display:'flex',gap:12,alignItems:'center',padding:'14px 16px',borderColor:'rgba(84,224,168,.28)'}}>
          <span style={{color:'var(--green)',flex:'none'}}><IconShield size={26}/></span>
          <div>
            <div style={{fontWeight:800,fontSize:14}}>30-day money-back guarantee</div>
            <div className="faint" style={{fontSize:12.5}}>Not satisfied? Get a full refund, no questions asked.</div>
          </div>
        </div>
        <div className="center" style={{gap:12,marginTop:16}}>
          <div className="faint" style={{display:'flex',alignItems:'center',gap:6,fontSize:12.5,fontWeight:700}}><IconLock size={14}/> Pay safe &amp; secure</div>
          <PayIcons/>
        </div>
      </div>
    </div>
  );
}

/* ---------- Screen 8 · Success ---------- */
function ScreenSuccess({go}){
  return (
    <div className="screen center" style={{display:'flex',flexDirection:'column'}}>
      <Confetti/>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
        <div className="pop" style={{width:118,height:118,borderRadius:'50%',background:'var(--cta)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 60px -8px rgba(99,102,241,.8)'}}>
          <IconCheck size={58} sw={2.6}/>
        </div>
        <h1 className="h1" style={{margin:'26px 0 10px'}}>Career Assistant unlocked</h1>
        <p className="sub" style={{maxWidth:310}}>Your personalized AI Career Growth plan is ready. Start with your first workflow and apply AI to a real work task today.</p>
        <div className="badge pop" style={{marginTop:18,background:'linear-gradient(135deg,#6E6BF7,#574DE8)',color:'#fff',fontSize:12.5,padding:'7px 15px',animationDelay:'.15s'}}>✦ Career Growth Assistant Activated</div>

        <div className="card rise" style={{width:'100%',marginTop:24,textAlign:'left',animationDelay:'.2s',borderColor:'var(--border-strong)'}}>
          <div className="eyebrow" style={{marginBottom:8}}>First workflow</div>
          <div style={{display:'flex',gap:13,alignItems:'center'}}>
            <div style={{width:48,height:48,borderRadius:14,flex:'none',background:'var(--surface-2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>✍️</div>
            <div>
              <div style={{fontWeight:800,fontSize:16}}>Automate writing tasks</div>
              <div style={{fontSize:13,fontWeight:700,color:'var(--green)',marginTop:2}}>⏱ Saves 2–3 hours / week</div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-dock" style={{width:'100%'}}>
        <Button onClick={go}>Start with my first workflow</Button>
      </div>
    </div>
  );
}

/* ---------- Exit-intent modal ---------- */
function ExitModal({onUnlock, onLater}){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    const t=setTimeout(()=>ref.current&&ref.current.classList.add('exitmodal--settled'),440);
    return ()=>clearTimeout(t);
  },[]);
  return (
    <div ref={ref} className="exitmodal exitmodal--in">
      <div className="exit-sheet" style={{width:'100%',background:'linear-gradient(180deg,#231f52,#13101d)',borderRadius:'28px 28px 0 0',
        border:'1px solid var(--border-strong)',borderBottom:'none',padding:'26px 22px 30px'}}>
        <div style={{width:42,height:5,borderRadius:99,background:'rgba(255,255,255,.18)',margin:'0 auto 22px'}}/>
        <div className="center">
          <div className="floaty" style={{fontSize:48}}>🎁</div>
          <h2 className="h2" style={{margin:'14px 0 8px'}}>Your career plan is ready</h2>
          <p className="sub" style={{maxWidth:300}}>Don’t lose your personalized AI workflows. Unlock now and start applying AI at work today.</p>
        </div>
        <div style={{marginTop:22}}>
          <Button onClick={onUnlock}>Unlock my plan</Button>
          <button className="btn btn--ghost" onClick={onLater} style={{marginTop:4}}>Maybe later</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window,{ScreenLoading,ScreenPlan,ScreenSuccess,ExitModal,PLANS,PayIcons});
