/* ===== app.jsx — router, state, transitions ===== */
const {useState, useCallback} = React;

const FLOW = ['home','achievement','trigger','intro','quiz','loading','plan','success'];

/* page wrapper: plays entry animation then force-settles to visible
   end-state, so content is never stuck hidden in a throttled iframe */
function Page({idx, children}){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    const el=ref.current; if(!el) return;
    const t=setTimeout(()=>el && el.classList.add('page--settled'), 680);
    return ()=>clearTimeout(t);
  },[idx]);
  return <div ref={ref} className="page page--in">{children}</div>;
}

function App(){
  const frameRef=React.useRef(null);
  React.useEffect(()=>{
    const fit=()=>{
      const el=frameRef.current; if(!el) return;
      const s=Math.min(1,(window.innerHeight-32)/852,(window.innerWidth-32)/392);
      el.style.transform=`scale(${s})`;
    };
    fit(); window.addEventListener('resize',fit);
    return ()=>window.removeEventListener('resize',fit);
  },[]);
  const [idx,setIdx]=useState(0);
  const [exit,setExit]=useState(false);
  const [navTab,setNavTab]=useState('Courses');
  const [state,setState]=useState({quiz:{}});

  const go   = useCallback(()=>setIdx(i=>Math.min(FLOW.length-1,i+1)),[]);
  const back = useCallback(()=>setIdx(i=>Math.max(0,i-1)),[]);
  const goto = useCallback((id)=>setIdx(FLOW.indexOf(id)),[]);
  const set  = setState;

  const screen=FLOW[idx];

  // restart loop from success
  const restart=()=>{ setState({quiz:{}}); goto('home'); };

  let view=null;
  switch(screen){
    case 'home':        view=<ScreenHome go={go} navTab={navTab} onNav={setNavTab}/>; break;
    case 'achievement': view=<ScreenAchievement go={go} back={back}/>; break;
    case 'trigger':     view=<ScreenTrigger go={go} back={back}/>; break;
    case 'intro':       view=<ScreenIntro go={go} back={back}/>; break;
    case 'quiz':        view=<ScreenQuiz go={go} back={back} state={state} set={set}/>; break;
    case 'loading':     view=<ScreenLoading go={go}/>; break;
    case 'plan':        view=<ScreenPlan go={go} back={()=>setExit(true)} state={state}/>; break;
    case 'success':     view=<ScreenSuccess go={restart}/>; break;
    default: view=null;
  }

  return (
    <div className="frame" ref={frameRef}>
      <div className="frame__screen">
        <div className="notch"/>
        <StatusBar/>
        <div className="viewport">
          <Page key={idx} idx={idx}>{view}</Page>
          {screen==='home' && <BottomNav active={navTab} onNav={setNavTab}/>}
        </div>
        {exit && screen==='plan' &&
          <ExitModal
            onUnlock={()=>{ setExit(false); go(); }}
            onLater={()=>{ setExit(false); }}/>}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
