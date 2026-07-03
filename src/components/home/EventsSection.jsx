/* ─── EVENTS ─────────────────────────────────────────────────────────────── */
import { useState } from 'react'

import { C } from '../../constants/theme'
import { EVENT_FEATURES } from '../../data/siteData'
export default function Events() {
  const [learnHov, setLearnHov] = useState(false)
  return (
    <section id="events" style={{ background:C.bg1, padding:'140px 40px', position:'relative', overflow:'hidden' }}>
      <div className="ku-hide-mob" style={{
        position:'absolute', right:-60, top:'5%',
        fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:400,
        color:'rgba(255,255,255,0.015)', lineHeight:1, userSelect:'none', pointerEvents:'none',
      }}>04</div>

      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div className="ku-line-label" style={{ marginBottom:64 }}>
          <span style={{ fontFamily:C.FM, color:C.og, fontSize:10, letterSpacing:3 }}>04 — COMMUNITY</span>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }} className="ku-grid2">
          <div>
            <h2 style={{
              fontFamily:C.FD, fontWeight:900, fontStyle:'italic',
              fontSize:'clamp(48px,5vw,84px)', color:'#fff',
              lineHeight:0.88, letterSpacing:-2, marginBottom:36, textTransform:'uppercase',
            }}>
              VIBRANT<br />EVENTS &amp;<br />
              <span style={{ color:C.og }}>SENIOR CARE</span>
            </h2>
            <p style={{ fontFamily:C.FB, color:C.mt, lineHeight:1.9, marginBottom:20, fontSize:15, fontWeight:300 }}>
              Experience the thrill of competition with Kreedify Sports regular inter-complex tournaments and community events. From fitness challenges to celebratory gatherings, we create memorable moments.
            </p>
            <p style={{ fontFamily:C.FB, color:C.mt, lineHeight:1.9, marginBottom:48, fontSize:15, fontWeight:300 }}>
              Our Senior Wellness Program targets conditions such as diabetes, hypertension, and arthritis with expert-led, age-appropriate care.
            </p>
            <a href="#contact" className="ku-btn-slash"
              style={{ fontFamily:C.FD, fontWeight:800, fontSize:13, letterSpacing:2, textTransform:'uppercase', color:C.og, background:'transparent', padding:'16px 40px', borderRadius:2, border:`2px solid ${C.og}`, transition:'color 0.4s' }}>
              <span>Learn More →</span>
            </a>
          </div>

          <div>
            <div style={{ position:'relative', marginBottom:32 }}>
              <img src="/images/events.png" alt="Events"
                style={{ width:'100%', height:280, objectFit:'cover', display:'block', borderRadius:2, filter:'brightness(0.8) contrast(1.1)' }} />
              {/* Scanline overlay */}
              <div style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 4px)', pointerEvents:'none' }} />
              {/* Corner brackets */}
              <div style={{ position:'absolute', top:12, left:12, width:30, height:30, borderTop:`3px solid ${C.og}`, borderLeft:`3px solid ${C.og}` }} />
              <div style={{ position:'absolute', bottom:12, right:12, width:30, height:30, borderBottom:`3px solid ${C.og}`, borderRight:`3px solid ${C.og}` }} />
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6 }}>
              {EVENT_FEATURES.map((item,i) => (
                <div key={item} style={{
                  display:'flex', alignItems:'center', gap:10, padding:'14px 16px',
                  background: i%2===0 ? C.bg3 : C.bg2,
                  borderLeft:`3px solid ${C.og}`,
                }}>
                  <span style={{ fontFamily:C.FB, color:C.tx, fontSize:12, fontWeight:500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}