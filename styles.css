/* ===== Coursiv — AI Career Growth funnel · design tokens ===== */
:root{
  --bg:#0E0A16;
  --bg-2:#15111F;
  --surface:#191325;
  --surface-2:#211b38;
  --surface-3:#2D2747;
  --border:rgba(176,109,255,.16);
  --border-strong:rgba(176,109,255,.42);
  --text:#F3F1FA;
  --text-dim:#A9A5C2;
  --text-faint:#75718F;
  --accent:#6366F1;
  --accent-bright:#7B79FF;
  --accent-2:#9B9AFF;
  --gold:#FFC95C;
  --green:#54E0A8;
  --cta:linear-gradient(135deg,#6E6BF7 0%,#574DE8 100%);
  --cta-glow:0 12px 30px -8px rgba(99,102,241,.6);
  --card-grad:linear-gradient(160deg,#211b38 0%,#14101e 100%);
  --radius:22px;
  --radius-lg:28px;
  --font:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
}

*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}

html,body{height:100%;}
body{
  font-family:var(--font);
  background:#08060e;
  color:var(--text);
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:100vh;
  padding:24px;
  background:
    radial-gradient(900px 600px at 50% -10%, rgba(84,74,214,.26), transparent 60%),
    radial-gradient(700px 500px at 90% 110%, rgba(56,48,150,.30), transparent 55%),
    #08060e;
}

/* ===== phone frame ===== */
.frame{
  position:relative;
  width:392px;
  height:852px;
  background:#050409;
  border-radius:50px;
  padding:11px;
  transform-origin:center center;
  box-shadow:
    0 0 0 2px #241f44,
    0 0 0 11px #100c1c,
    0 40px 90px -20px rgba(0,0,0,.8),
    0 0 120px -30px rgba(99,102,241,.45);
  flex:none;
}
.frame__screen{
  position:relative;
  width:100%;
  height:100%;
  border-radius:40px;
  overflow:hidden;
  background:
    radial-gradient(120% 80% at 50% -5%, #231e52 0%, transparent 55%),
    linear-gradient(180deg,#15111F 0%, #0E0A16 60%);
  display:flex;
  flex-direction:column;
}
.notch{
  position:absolute;top:11px;left:50%;transform:translateX(-50%);
  width:118px;height:30px;background:#050409;border-radius:18px;z-index:60;
}

/* ===== status bar ===== */
.statusbar{
  flex:none;height:50px;display:flex;align-items:flex-end;justify-content:space-between;
  padding:0 26px 6px;font-size:14px;font-weight:700;color:var(--text);z-index:55;
}
.statusbar__icons{display:flex;align-items:center;gap:6px;}

/* ===== scroll viewport ===== */
.viewport{position:relative;flex:1;overflow:hidden;}
.screen{
  position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;
  padding:6px 20px 28px;
  scrollbar-width:none;
}
.screen::-webkit-scrollbar{display:none;}
.screen--nav{padding-bottom:96px;}

/* ===== transitions ===== */
@keyframes inRight{from{opacity:0;transform:translateX(34px);}to{opacity:1;transform:translateX(0);}}
@keyframes inLeft{from{opacity:0;transform:translateX(-34px);}to{opacity:1;transform:translateX(0);}}
@keyframes inFade{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
.anim-fwd{animation:inRight .42s cubic-bezier(.22,.9,.27,1);}
.anim-back{animation:inLeft .42s cubic-bezier(.22,.9,.27,1);}
.anim-fade{animation:inFade .42s cubic-bezier(.22,.9,.27,1);}

@keyframes rise{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
.rise{animation:rise .5s both cubic-bezier(.22,.9,.27,1);}
@keyframes qEnter{from{transform:translateX(26px);}to{transform:translateX(0);}}
.q-enter{animation:qEnter .4s both cubic-bezier(.22,.9,.27,1);}

/* page transition wrapper */
.page{position:absolute;inset:0;}
.page--in{animation:inFade .42s both cubic-bezier(.22,.9,.27,1);}
/* force-settle: guarantees content is never stuck hidden even if the
   compositor throttles animations in a backgrounded iframe */
.page--settled,
.page--settled .rise,
.page--settled .pop,
.page--settled .q-enter,
.page--settled .anim-fade,
.page--settled .anim-fwd{
  animation:none !important;opacity:1 !important;transform:none !important;
}

/* ===== topbar ===== */
.topbar{display:flex;align-items:center;gap:14px;padding:8px 0 18px;min-height:44px;}
.iconbtn{
  width:40px;height:40px;border-radius:13px;flex:none;
  background:var(--surface-2);border:1px solid var(--border);
  display:flex;align-items:center;justify-content:center;color:var(--text);
  cursor:pointer;transition:.18s;
}
.iconbtn:active{transform:scale(.92);}
.topbar__title{font-size:15px;font-weight:700;color:var(--text-dim);white-space:nowrap;}

/* ===== buttons ===== */
.btn{
  width:100%;border:none;border-radius:17px;padding:17px;font-family:var(--font);
  font-size:16.5px;font-weight:800;color:#fff;background:var(--cta);
  box-shadow:var(--cta-glow);cursor:pointer;transition:.16s;letter-spacing:.1px;white-space:nowrap;
  display:flex;align-items:center;justify-content:center;gap:9px;
}
.btn:active{transform:scale(.975);box-shadow:0 6px 18px -8px rgba(99,102,241,.6);}
.btn--ghost{background:transparent;box-shadow:none;color:var(--text-dim);font-weight:700;}
.btn--soft{background:var(--surface-2);box-shadow:none;border:1px solid var(--border);color:var(--text);}
.btn:disabled{opacity:.45;box-shadow:none;cursor:default;}

/* sticky footer CTA inside a screen */
.cta-dock{
  position:sticky;bottom:0;margin:18px -20px -28px;padding:18px 20px 26px;
  background:linear-gradient(180deg,transparent,#0E0A16 30%);
}

/* ===== cards ===== */
.card{
  background:var(--card-grad);border:1px solid var(--border);
  border-radius:var(--radius);padding:18px;
}

/* ===== headings ===== */
.h1{font-size:30px;line-height:1.08;font-weight:800;letter-spacing:-.6px;text-wrap:balance;}
.h2{font-size:23px;line-height:1.12;font-weight:800;letter-spacing:-.4px;text-wrap:balance;}
.eyebrow{font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--accent-2);}
.sub{font-size:15px;line-height:1.5;color:var(--text-dim);font-weight:500;}

/* ===== progress bar ===== */
.bar{height:9px;border-radius:99px;background:rgba(255,255,255,.09);overflow:hidden;}
.bar__fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#6366F1,#9B9AFF);transition:width .6s cubic-bezier(.3,.8,.3,1);}

/* ===== chips ===== */
.chip{
  display:inline-flex;align-items:center;gap:6px;padding:7px 13px;border-radius:99px;white-space:nowrap;
  font-size:13px;font-weight:700;background:var(--surface-2);border:1px solid var(--border);
}
.badge{
  display:inline-flex;align-items:center;gap:5px;padding:5px 11px;border-radius:99px;white-space:nowrap;
  font-size:11.5px;font-weight:800;letter-spacing:.3px;
}

/* ===== bottom nav ===== */
.bottomnav{
  position:absolute;left:0;right:0;bottom:0;z-index:40;
  display:flex;justify-content:space-around;align-items:center;
  padding:12px 14px calc(12px + env(safe-area-inset-bottom));
  background:linear-gradient(180deg,rgba(20,8,32,.4),rgba(13,3,22,.96));
  backdrop-filter:blur(16px);border-top:1px solid var(--border);
}
.navitem{
  display:flex;flex-direction:column;align-items:center;gap:4px;
  color:var(--text-faint);font-size:10.5px;font-weight:700;cursor:pointer;
  background:none;border:none;font-family:var(--font);flex:1;transition:.18s;
}
.navitem--active{color:var(--accent-2);}
.navitem:active{transform:scale(.9);}

/* ===== option selectable rows ===== */
.opt{
  display:flex;align-items:center;gap:14px;width:100%;text-align:left;
  background:var(--surface);border:1.5px solid var(--border);border-radius:16px;
  padding:16px;font-family:var(--font);font-size:15.5px;font-weight:700;color:var(--text);
  cursor:pointer;transition:.18s;
}
.opt:active{transform:scale(.985);}
.opt--sel{border-color:var(--accent-bright);background:linear-gradient(135deg,rgba(99,102,241,.22),rgba(99,102,241,.06));box-shadow:0 0 0 3px rgba(99,102,241,.14);}
.opt__emoji{font-size:21px;width:26px;text-align:center;flex:none;}
.opt__radio{margin-left:auto;width:22px;height:22px;border-radius:99px;border:2px solid var(--text-faint);flex:none;display:flex;align-items:center;justify-content:center;transition:.18s;}
.opt--sel .opt__radio{border-color:var(--accent-bright);background:var(--accent-bright);}

/* utility */
.center{display:flex;flex-direction:column;align-items:center;text-align:center;}
.stack{display:flex;flex-direction:column;}
.muted{color:var(--text-dim);}
.faint{color:var(--text-faint);}
.glow-ring{box-shadow:0 0 60px -10px rgba(99,102,241,.7);}
.noscrollbar{scrollbar-width:none;}
.noscrollbar::-webkit-scrollbar{display:none;}

/* confetti dots */
@keyframes pop{0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}}
.pop{animation:pop .6s both cubic-bezier(.2,1.2,.3,1);}
@keyframes float-y{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.floaty{animation:float-y 3.4s ease-in-out infinite;}
@keyframes spin{to{transform:rotate(360deg)}}

/* exit-intent modal — force-settles so it's never stuck hidden */
.exitmodal{position:absolute;inset:0;z-index:80;display:flex;align-items:flex-end;
  background:rgba(6,0,12,.66);backdrop-filter:blur(4px);}
.exitmodal--in{animation:inFade .25s both;}
.exitmodal--in .exit-sheet{animation:rise .38s both cubic-bezier(.22,.9,.27,1);}
.exitmodal--settled,.exitmodal--settled .exit-sheet{animation:none !important;opacity:1 !important;transform:none !important;}
