import { useState } from 'react'

import { C } from '../../constants/theme'
import { ADULT_PROGRAMS } from '../../data/siteData'
export default function AdultsSection() {
  const [joinHov, setJoinHov] = useState(false)
  return (
    <section id="adult" style={{ position:'relative' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:640 }} className="ku-grid2">
        {/* LEFT: Orange */}
        <div style={{ background:C.og, padding:'80px 64px', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', overflow:'hidden' }}>
          {/* Diagonal lines texture */}
          <div style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 12px)', pointerEvents:'none' }} />
          <div style={{ fontFamily:C.FM, fontSize:9, letterSpacing:4, color:'rgba(0,0,0,0.5)', marginBottom:20 }}>03 — ADULT PROGRAMS</div>
          <h2 style={{
            fontFamily:C.FD, fontWeight:900, fontStyle:'italic',
            fontSize:'clamp(48px,5vw,80px)', color:'#000',
            lineHeight:0.88, letterSpacing:-2, marginBottom:48, textTransform:'uppercase',
          }}>
            ADULT<br />FITNESS<br />&amp; WELLNESS
          </h2>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {ADULT_PROGRAMS.map((p,i) => (
              <div key={p.name} style={{
                display:'flex', alignItems:'center', gap:20, padding:'18px 0',
                borderTop: i===0 ? '2px solid rgba(0,0,0,0.15)' : '1px solid rgba(0,0,0,0.1)',
                borderBottom: i===ADULT_PROGRAMS.length-1 ? '2px solid rgba(0,0,0,0.15)' : 'none',
              }}>
                <span style={{ fontSize:26 }}>{p.icon}</span>
                <div>
                  <div style={{ fontFamily:C.FD, fontWeight:800, fontStyle:'italic', fontSize:20, color:'#000', letterSpacing:-0.5 }}>{p.name}</div>
                  <div style={{ fontFamily:C.FB, fontSize:12, color:'rgba(0,0,0,0.6)', marginTop:2, fontWeight:300 }}>{p.desc}</div>
                </div>
                <div style={{ marginLeft:'auto', fontFamily:C.FM, fontSize:22, color:'rgba(0,0,0,0.2)' }}>→</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Dark */}
        <div style={{ background:C.bg2, padding:'80px 64px', display:'flex', flexDirection:'column', justifyContent:'flex-start', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:0, left:0, bottom:0, width:4, background:C.og }} />

          {/* Zumba Image */}
          <div
            style={{
              width:'100%',
              height:280,
              marginBottom:40,
              overflow:'hidden',
              borderRadius:6,
              border:`1px solid ${C.ogB}`,
              boxShadow:'0 20px 40px rgba(0,0,0,.35)',
              position:'relative'
            }}
          >
            <img
              src="/images/sports/zumba.jpg"
              alt="Zumba"
              style={{
                width:'100%',
                height:'100%',
                objectFit:'cover',
                display:'block'
              }}
            />
            <div
              style={{
                position:'absolute',
                inset:0,
                background:'linear-gradient(to top, rgba(8,12,18,.75), rgba(8,12,18,.15))'
              }}
            />
          </div>

          <p style={{ fontFamily:C.FB, color:C.mt, lineHeight:1.9, marginBottom:28, fontSize:15, fontWeight:300 }}>
            Elevate your lifestyle with Kreedify Sports — our premier fitness program tailored for the modern professional. Featuring flexible early morning and late evening blocks.
          </p>
          <p style={{ fontFamily:C.FB, color:C.mt, lineHeight:1.9, marginBottom:44, fontSize:15, fontWeight:300 }}>
            Whether you're looking to de-stress or hit new performance peaks, we bring elite coaching to your busy schedule.
          </p>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginBottom:48 }}>
            {['Early Morning', 'Late Evening', 'Weekends'].map(t => (
              <div key={t} style={{ fontFamily:C.FM, fontSize:9, fontWeight:700, letterSpacing:2, color:C.og, border:`1px solid ${C.ogB}`, padding:'8px 16px', textTransform:'uppercase' }}>{t}</div>
            ))}
          </div>
          {/* <a href="#contact" className="ku-btn-slash"
            onMouseEnter={() => setJoinHov(true)}
            onMouseLeave={() => setJoinHov(false)}
            style={{ alignSelf:'flex-start', fontFamily:C.FD, fontWeight:800, fontSize:13, letterSpacing:2, textTransform:'uppercase', color: joinHov ? '#fff' : '#000', background:C.og, padding:'16px 40px', borderRadius:2, border:`2px solid ${C.og}`, transition:'color 0.4s' }}>
            <span>Join Today →</span>
          </a> */}
        </div>
      </div>
    </section>
  )
}