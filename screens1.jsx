/* ===== screens1.jsx — Home, Achievement, Trigger, Intro, Quiz ===== */

function Logo(){
  return (
    <span style={{fontFamily:"'Pacifico',cursive",fontSize:27,color:'var(--accent-bright)',letterSpacing:'.3px',lineHeight:1}}>Coursiv</span>
  );
}

/* ---------- Screen 1 · Home ---------- */
function ScreenHome({go, onNav, navTab}){
  const days=[
    {l:'', st:'done'},
    {l:'', st:'done'},
    {l:'THU', st:'now'},
    {l:'FRI', st:'todo'},
    {l:'SAT', st:'todo'},
    {l:'SUN', st:'todo'},
    {l:'MON', st:'todo'},
  ];
  const progIcons=['🤖','🌀','ℹ️','🎨','🔒'];
  return (
    <div className="screen screen--nav">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 0 22px'}}>
        <Logo/>
        <div className="chip" style={{background:'var(--surface)',borderColor:'var(--border)',color:'var(--text)',padding:'8px 15px',fontSize:15,fontWeight:800,gap:7}}>
          <IconFlame size={18} style={{color:'#FF8A3D'}}/> 2
        </div>
      </div>

      <p style={{fontSize:21,fontWeight:700,letterSpacing:'-.3px'}}>
        Finish <span style={{color:'var(--accent-bright)'}}>1 lesson</span> to begin your streak
      </p>

      <div style={{display:'flex',justifyContent:'space-between',gap:6,marginTop:18}}>
        {days.map((d,i)=>(
          <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:6,flex:1}}>
            <div style={{width:44,height:44,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
              background:d.st==='done'?'#C9F6D5':'transparent',
              border:d.st==='now'?'2px solid var(--accent-bright)':d.st==='todo'?'1px solid var(--border)':'none',
              boxShadow:d.st==='todo'?'inset 0 0 0 100px var(--surface)':'none'}}>
              {d.st==='done'
                ? <IconCheck size={22} sw={3} style={{color:'#1F9D55'}}/>
                : <span style={{fontSize:12.5,fontWeight:800,color:d.st==='now'?'var(--accent-bright)':'var(--text-dim)'}}>{d.l}</span>}
            </div>
          </div>
        ))}
      </div>

      <div style={{height:1,background:'var(--border)',margin:'24px 0 22px'}}></div>

      <h2 className="h2" style={{fontSize:25}}>Pick up where you left off</h2>

      <div className="card" style={{marginTop:18,padding:18}}>
        <div style={{display:'flex',gap:15}}>
          <div style={{width:74,height:74,borderRadius:14,flex:'none',overflow:'hidden',
            background:'linear-gradient(140deg,#F7B267,#E879A6 55%,#9B6BE8)',display:'flex',alignItems:'flex-end',justifyContent:'center',fontSize:38}}>✨</div>
          <div style={{minWidth:0}}>
            <h3 style={{fontSize:21,fontWeight:800,letterSpacing:'-.3px'}}>Claude</h3>
            <p className="muted" style={{fontSize:15.5,lineHeight:1.3,marginTop:2}}>Understanding, Research, and Synthesis</p>
          </div>
        </div>
        <div style={{marginTop:18}}>
          <ProgressBar value={10}/>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:11}}>
          <span style={{fontSize:15,fontWeight:600}}>1/10 lessons completed</span>
          <span style={{color:'var(--accent-bright)',fontWeight:800,fontSize:16}}>10%</span>
        </div>
        <div style={{marginTop:16}}>
          <Button onClick={go}>Continue learning</Button>
        </div>
      </div>

      <div className="card" style={{marginTop:16,padding:18,background:'var(--surface)'}}>
        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:10}}>
          <h3 style={{fontSize:19,fontWeight:800,letterSpacing:'-.3px'}}>AI Mastery Certificate Program</h3>
          <span style={{color:'var(--accent-bright)',fontWeight:800,fontSize:16,flex:'none'}}>0/5</span>
        </div>
        <p className="muted" style={{fontSize:14.5,lineHeight:1.4,marginTop:6}}>Complete 5 courses to earn your professional certificate</p>
        <div style={{display:'flex',gap:11,marginTop:16}}>
          {progIcons.map((e,i)=>(
            <div key={i} style={{width:52,height:52,borderRadius:14,flex:1,maxWidth:54,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,
              background:i===4?'var(--surface-2)':'var(--surface-2)',border:'1px solid var(--border)',opacity:i===4?.55:1}}>{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Screen 2 · Achievement ---------- */
function ScreenAchievement({go, back}){
  return (
    <div className="screen center" style={{paddingTop:0}}>
      <Confetti/>
      <div style={{alignSelf:'stretch',width:'100%'}}><TopBar onBack={back}/></div>
      <div style={{height:6}}/>
      <div className="pop" style={{animationDelay:'.1s'}}><Medallion emoji="🤖" label="AI Novice" level={1}/></div>
      <h1 className="h1" style={{margin:'26px 0 10px'}}>Great start, Olzhas!</h1>
      <p className="sub" style={{maxWidth:300}}>You completed your first AI lesson and unlocked your next growth opportunity.</p>

      <div className="card rise" style={{width:'100%',marginTop:26,textAlign:'left',animationDelay:'.15s'}}>
        <div style={{display:'flex',alignItems:'center',gap:13,marginBottom:14}}>
          <div style={{width:42,height:42,borderRadius:13,background:'var(--cta)',display:'flex',alignItems:'center',justifyContent:'center',flex:'none'}}><IconCheck size={24}/></div>
          <div>
            <div style={{fontWeight:800,fontSize:16}}>1 lesson completed</div>
            <div className="faint" style={{fontSize:13}}>You’re on your way to certification</div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:12.5,fontWeight:700,marginBottom:7}}>
          <span className="muted">Progress to AI Novice · Level 2</span>
          <span style={{color:'var(--accent-2)'}}>20%</span>
        </div>
        <ProgressBar value={20}/>
      </div>

      <div className="cta-dock" style={{width:'100%',marginTop:'auto'}}>
        <Button onClick={go}>See what’s next <IconChevR size={18}/></Button>
      </div>
    </div>
  );
}

/* ---------- Screen 3 · Trigger banner ---------- */
function ScreenTrigger({go, back}){
  return (
    <div className="screen" style={{display:'flex',flexDirection:'column'}}>
      <TopBar onBack={back}/>
      <div style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div className="card rise" style={{padding:0,overflow:'hidden',background:'linear-gradient(160deg,#221c5a,#14101e)',borderColor:'var(--border-strong)'}}>
          <div style={{height:172,position:'relative',display:'flex',alignItems:'center',justifyContent:'center',
            background:'radial-gradient(120% 90% at 50% 0%,rgba(99,102,241,.45),transparent 60%)'}}>
            <span className="floaty" style={{fontSize:74}}>🚀</span>
            <span className="badge" style={{position:'absolute',top:16,left:16,background:'rgba(99,102,241,.22)',color:'var(--accent-2)',border:'1px solid var(--border-strong)'}}>NEW · UNLOCKED FOR YOU</span>
          </div>
          <div style={{padding:'8px 22px 26px'}}>
            <h1 className="h1" style={{fontSize:27,marginBottom:12}}>You’re ready to apply AI at work</h1>
            <p className="sub">Turn your new AI skills into real workplace impact with a personalized Career Growth plan.</p>
            <div style={{marginTop:22}}>
              <Button onClick={go}>Build my career plan</Button>
            </div>
            <button className="btn btn--ghost" onClick={back} style={{marginTop:6}}>Not now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Screen 4 · Intro ---------- */
function ScreenIntro({go, back}){
  const benefits=[
    {e:'🔍', t:'Find tasks you can automate', s:'Spot the routine work AI can take off your plate'},
    {e:'⚙️', t:'Get AI workflows for your role', s:'Ready-to-use playbooks built around your job'},
    {e:'🗓️', t:'Build a 14-day career growth plan', s:'A clear day-by-day path to applying AI'},
    {e:'📈', t:'Learn how to show AI impact at work', s:'Prove your value with measurable results'},
  ];
  return (
    <div className="screen">
      <TopBar onBack={back} title="AI Career Growth"/>
      <div className="center" style={{marginBottom:6}}>
        <div className="floaty" style={{width:78,height:78,borderRadius:22,background:'var(--cta)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:38,boxShadow:'var(--cta-glow)'}}>🧭</div>
      </div>
      <h1 className="h1" style={{textAlign:'center',margin:'18px 0 10px'}}>AI Career Growth Assistant</h1>
      <p className="sub" style={{textAlign:'center',margin:'0 auto'}}>Discover how to use AI in your current role, automate routine tasks, and become more valuable at work.</p>

      <div className="stack" style={{gap:11,marginTop:24}}>
        {benefits.map((b,i)=>(
          <div key={i} className="card rise" style={{display:'flex',gap:14,alignItems:'center',animationDelay:(i*.06)+'s'}}>
            <div style={{width:46,height:46,borderRadius:14,flex:'none',background:'var(--surface-2)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:23}}>{b.e}</div>
            <div>
              <div style={{fontWeight:800,fontSize:15.5}}>{b.t}</div>
              <div className="faint" style={{fontSize:13,marginTop:2,lineHeight:1.35}}>{b.s}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-dock">
        <Button onClick={go}>Start my AI Career Plan</Button>
      </div>
    </div>
  );
}

/* ---------- Screen 5 · Mini personalization quiz ---------- */
const QUIZ=[
  {key:'role', q:'What best describes your role?', opts:[
    ['📣','Marketing / Media'],['💼','Sales'],['📊','Finance / Accounting'],
    ['🗂️','Product / Project Management'],['🎧','Customer Support'],['✨','Other']]},
  {key:'improve', q:'What do you want to improve first?', opts:[
    ['⏱️','Save time on routine tasks'],['🎯','Create better work outputs'],
    ['🔁','Automate repetitive processes'],['💬','Communicate better with AI'],
    ['📈','Show AI impact to my manager']]},
  {key:'time', q:'How much time do you want to save weekly?', opts:[
    ['🟣','2–3 hours'],['🟣','5–7 hours'],['🟣','10+ hours']]},
];
function ScreenQuiz({go, back, state, set}){
  const [step,setStep]=React.useState(0);
  const [picked,setPicked]=React.useState(null);
  const cur=QUIZ[step];
  const choose=(label)=>{
    if(picked) return;
    setPicked(label);
    set(s=>({...s, quiz:{...s.quiz, [cur.key]:label}}));
    setTimeout(()=>{
      if(step<QUIZ.length-1){ setStep(step+1); setPicked(null); }
      else { go(); }
    }, 360);
  };
  const onBack=()=>{ if(step===0) back(); else { setStep(step-1); setPicked(null); } };
  return (
    <div className="screen" style={{display:'flex',flexDirection:'column'}}>
      <TopBar onBack={onBack} title={`Question ${step+1} of ${QUIZ.length}`}/>
      {step===0 && (
        <div style={{marginBottom:22}}>
          <h1 className="h1" style={{fontSize:27,marginBottom:9}}>A few quick questions</h1>
          <p className="sub">We’ll use your answers to tailor your AI career growth plan to your role and goals.</p>
        </div>
      )}
      <div style={{display:'flex',gap:6,marginBottom:26}}>
        {QUIZ.map((_,i)=>(
          <div key={i} className="bar" style={{flex:1}}><div className="bar__fill" style={{width:(i<step?100:i===step?55:0)+'%'}}/></div>
        ))}
      </div>
      <div key={step} className="q-enter" style={{display:'flex',flexDirection:'column',flex:1}}>
        <h1 className="h1" style={{fontSize:26,marginBottom:22}}>{cur.q}</h1>
        <div className="stack" style={{gap:11}}>
          {cur.opts.map(([e,label],i)=>{
            const sel=picked===label;
            return (
              <button key={i} className={'opt'+(sel?' opt--sel':'')} onClick={()=>choose(label)}>
                <span className="opt__emoji">{e}</span>
                <span>{label}</span>
                <span className="opt__radio">{sel && <IconCheck size={14} style={{color:'#fff'}}/>}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window,{Logo,ScreenHome,ScreenAchievement,ScreenTrigger,ScreenIntro,ScreenQuiz,QUIZ});
