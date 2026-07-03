import { useState, useEffect } from 'react'

import { C } from '../../constants/theme'
import { ALL_SPORTS } from '../../data/sportsData'
export default function SportsHero() {
  const [counter, setCounter] = useState({ students:0, locations:0, sports:0 })
  useEffect(() => {
    const targets = { students:100, locations:20, sports:15 }
    const steps = 60; let step = 0
    const t = setInterval(() => {
      step++
      const e = 1 - Math.pow(1 - step/steps, 3)
      setCounter({ students:Math.round(targets.students*e), locations:Math.round(targets.locations*e), sports:Math.round(targets.sports*e) })
      if (step >= steps) clearInterval(t)
    }, 1800/steps)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" style={{ background:C.bg0, minHeight:'100vh', paddingTop:68, position:'relative', overflow:'hidden' }}>
      {/* Diagonal stripe */}
      <div style={{ position:'absolute', inset:0, background:`linear-gradient(115deg, transparent 50%, rgba(232,118,42,0.04) 50%)`, pointerEvents:'none' }} />
      {/* Halftone */}
      <div className="sp-halftone" style={{ position:'absolute', right:0, top:0, width:'45%', height:'100%', opacity:0.5, pointerEvents:'none' }} />
      {/* Left accent line */}
      <div style={{ position:'absolute', left:40, top:0, bottom:0, width:1, background:`linear-gradient(to bottom, transparent, ${C.og}, transparent)`, opacity:0.15, pointerEvents:'none' }} />
      {/* Vertical label */}
      <div className="sp-vert sp-hide-mob" style={{ position:'absolute', left:0, top:'50%', transform:'translateY(-50%) rotate(180deg)' }}>ALL SPORTS PROGRAMS · KREEDIFY · 2026</div>

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 40px', display:'flex', alignItems:'center', minHeight:'calc(100vh - 68px)', position:'relative' }}>

        {/* LEFT: heading */}
        <div style={{ flex:1, paddingLeft:32, paddingRight:40 }}>
          {/* Live badge */}
          <div className="sp-left" style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(232,118,42,0.1)', border:`1px solid ${C.ogB}`, borderRadius:2, padding:'6px 14px 6px 10px', marginBottom:40 }}>
            <div style={{ width:8, height:8, background:C.og, borderRadius:'50%', animation:'blinkBar 1.4s ease-in-out infinite' }} />
            <span style={{ fontFamily:C.FM, color:C.og, fontSize:10, letterSpacing:3 }}>{ALL_SPORTS.length} SPORTS AVAILABLE</span>
          </div>

          <div className="sp-left sp-d1" style={{ overflow:'hidden', marginBottom:4 }}>
            <h1 style={{ fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:'clamp(76px,13vw,172px)', lineHeight:0.85, letterSpacing:-4, color:'#fff', textTransform:'uppercase' }}>ALL</h1>
          </div>
          <div className="sp-left sp-d2" style={{ overflow:'hidden', marginBottom:4 }}>
            <h1 style={{ fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:'clamp(76px,13vw,172px)', lineHeight:0.85, letterSpacing:-4, WebkitTextStroke:`2px ${C.og}`, color:'transparent', textTransform:'uppercase' }}>SPORTS</h1>
          </div>
          <div className="sp-left sp-d3" style={{ overflow:'hidden', marginBottom:12 }}>
            <h1 style={{ fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:'clamp(76px,13vw,172px)', lineHeight:0.85, letterSpacing:-4, color:C.og, textTransform:'uppercase', textShadow:`0 0 80px rgba(232,118,42,0.3)` }}>PROGRAMS</h1>
          </div>

          <div className="sp-left sp-d4" style={{ display:'flex', alignItems:'center', gap:20, marginTop:32, marginBottom:48 }}>
            <div style={{ width:60, height:2, background:C.og }} />
            <p style={{ fontFamily:C.FB, color:C.mt, fontSize:15, lineHeight:1.65, maxWidth:400, fontWeight:300 }}>
              Professional coaching for kids ages 5–18 — delivered right inside your residential complex by certified coaches.
            </p>
          </div>

          <div className="sp-left sp-d5" style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="#grid" className="sp-btn-slash"
              style={{ fontFamily:C.FD, fontWeight:800, fontSize:13, letterSpacing:2, textTransform:'uppercase', color:'#000', background:C.og, padding:'16px 40px', border:`2px solid ${C.og}`, transition:'color 0.4s' }}>
              <span>Browse All →</span>
            </a>
<a href="#contact" className="ku-btn-inv"
  style={{ fontFamily:C.FD, fontWeight:800, fontSize:13, letterSpacing:2, textTransform:'uppercase', color:C.og, background:'transparent', padding:'16px 40px', borderRadius:2, border:`2px solid ${C.og}`, transition:'color 0.4s' }}
  onMouseEnter={e => e.currentTarget.style.color='#000'}
  onMouseLeave={e => e.currentTarget.style.color=C.og}>
  <span>Get In Touch</span>
</a>
          </div>
        </div>

        {/* RIGHT: live-counting stat column */}
        <div className="sp-hide-mob sp-right sp-d2" style={{ width:260, flexShrink:0, borderLeft:`1px solid ${C.ogB}`, paddingLeft:40, display:'flex', flexDirection:'column' }}>
          {[
            { n: counter.students+'+', l:'Active Members'   },
            { n: counter.sports+'',    l:'Sports Programs'  },
            { n: counter.locations+'+',l:'Locations Served' },
            { n: '5+',                 l:'Complexes'        },
          ].map((s,i) => (
            <div key={s.l} style={{ padding:'28px 0', borderBottom: i<3 ? `1px solid rgba(255,255,255,0.04)` : 'none' }}>
              <div style={{ fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:54, color:C.og, lineHeight:1, letterSpacing:-2 }}>{s.n}</div>
              <div style={{ fontFamily:C.FM, fontSize:9, color:C.mt, letterSpacing:2, marginTop:4 }}>{s.l.toUpperCase()}</div>
            </div>
          ))}
          {/* Spinning est badge */}
          <div style={{ marginTop:24, display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:44, height:44, border:`2px solid ${C.og}`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', animation:'rotSlow 12s linear infinite', flexShrink:0 }}>
              <div style={{ fontFamily:C.FD, color:C.og, fontSize:9, fontWeight:700, letterSpacing:1, textAlign:'center', lineHeight:1.2 }}>EST<br/>22</div>
            </div>
            <span style={{ fontFamily:C.FM, color:C.dm, fontSize:9, letterSpacing:2 }}>FOUNDED IN<br/>KOLKATA, IND</span>
          </div>
        </div>
      </div>

      {/* Bottom slash decoration */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:80, background:C.og, clipPath:'polygon(0 100%, 100% 100%, 100% 30%, 0 70%)', opacity:0.06, pointerEvents:'none' }} />
    </section>
  )
}