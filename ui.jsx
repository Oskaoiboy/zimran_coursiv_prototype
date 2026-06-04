/* ===== ui.jsx — shared chrome & primitives ===== */

function StatusBar(){
  return (
    <div className="statusbar">
      <span>9:41</span>
      <div className="statusbar__icons">
        <IconSignal/><IconWifi/><IconBattery/>
      </div>
    </div>
  );
}

function TopBar({onBack, title, onClose, light}){
  return (
    <div className="topbar">
      {onBack && <button className="iconbtn" onClick={onBack} aria-label="Back"><IconBack/></button>}
      {title && <span className="topbar__title">{title}</span>}
      {onClose && <button className="iconbtn" style={{marginLeft:'auto'}} onClick={onClose} aria-label="Close"><IconClose/></button>}
    </div>
  );
}

function Button({children, onClick, variant, disabled, style}){
  const cls = 'btn' + (variant ? ' btn--'+variant : '');
  return <button className={cls} onClick={onClick} disabled={disabled} style={style}>{children}</button>;
}

function ProgressBar({value, style}){
  return <div className="bar" style={style}><div className="bar__fill" style={{width:Math.max(0,Math.min(100,value))+'%'}}/></div>;
}

function BottomNav({active='Courses', onNav}){
  const items=[
    {k:'Courses', I:IconEasel},
    {k:'AI Tools', I:IconSparkle},
    {k:'Games', I:IconGame},
    {k:'Profile', I:IconUser},
  ];
  return (
    <nav className="bottomnav">
      {items.map(({k,I})=>(
        <button key={k} className={'navitem'+(active===k?' navitem--active':'')} onClick={()=>onNav&&onNav(k)}>
          <I size={25} sw={active===k?2.2:1.9}/>
          <span style={{fontSize:11.5}}>{k}</span>
        </button>
      ))}
    </nav>
  );
}

/* decorative badge medallion */
function Medallion({emoji='🤖', label, level, size=128}){
  return (
    <div className="center" style={{gap:14}}>
      <div className="floaty" style={{position:'relative',width:size,height:size}}>
        <div className="glow-ring" style={{
          position:'absolute',inset:0,borderRadius:'50%',
          background:'conic-gradient(from 220deg,#6E6BF7,#574DE8,#9B9AFF,#6E6BF7)',
          display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{position:'absolute',inset:7,borderRadius:'50%',background:'linear-gradient(160deg,#211b38,#13101d)',
            display:'flex',alignItems:'center',justifyContent:'center',fontSize:size*0.42,
            boxShadow:'inset 0 2px 14px rgba(199,125,255,.4)'}}>{emoji}</div>
        </div>
      </div>
      {label && <div className="badge" style={{background:'linear-gradient(135deg,#6E6BF7,#574DE8)',color:'#fff',fontSize:13,padding:'7px 15px'}}>
        <IconStar size={13}/> {label}{level?` · Level ${level}`:''}
      </div>}
    </div>
  );
}

/* sparkle confetti burst (CSS dots) */
function Confetti(){
  const dots = React.useMemo(()=>Array.from({length:18}).map((_,i)=>({
    l:Math.random()*100, t:Math.random()*42,
    c:['#6E6BF7','#9B9AFF','#FFC95C','#54E0A8','#fff'][i%5],
    s:5+Math.random()*7, d:Math.random()*.5, r:Math.random()*360
  })),[]);
  return (
    <div style={{position:'absolute',inset:0,top:0,height:'46%',pointerEvents:'none',overflow:'hidden'}}>
      {dots.map((o,i)=>(
        <span key={i} className="pop" style={{
          position:'absolute',left:o.l+'%',top:o.t+'%',width:o.s,height:o.s,
          background:o.c,borderRadius:i%3?'2px':'50%',transform:`rotate(${o.r}deg)`,
          animationDelay:o.d+'s',opacity:.9}}/>
      ))}
    </div>
  );
}

Object.assign(window, {StatusBar,TopBar,Button,ProgressBar,BottomNav,Medallion,Confetti});
