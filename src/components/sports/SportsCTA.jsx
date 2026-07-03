/* ─── CTA — mirrors App.jsx CTA exactly ──────────────────────────────────── */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { C } from '../../constants/theme'
export default function CTA() {
  const navigate = useNavigate()
  const [backHov, setBackHov] = useState(false)
  return (
    <section style={{ background:C.og, padding:'120px 40px', position:'relative', overflow:'hidden' }}>
      {/* Diagonal lines */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 16px)', pointerEvents:'none' }} />
      {/* Halftone left */}
      <div style={{ position:'absolute', left:0, top:0, width:'35%', height:'100%', opacity:0.4, pointerEvents:'none', backgroundImage:'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)', backgroundSize:'18px 18px' }} />
      {/* Ghost text */}
      <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', pointerEvents:'none' }}>
        <div style={{ fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:'clamp(120px,22vw,300px)', color:'rgba(0,0,0,0.06)', letterSpacing:-8, whiteSpace:'nowrap', userSelect:'none' }}>KREEDIFY</div>
      </div>

      <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
        <div style={{ fontFamily:C.FM, fontSize:9, letterSpacing:4, color:'rgba(0,0,0,0.5)', marginBottom:28 }}>JOIN TODAY</div>
        <h2 style={{
          fontFamily:C.FD, fontWeight:900, fontStyle:'italic',
          fontSize:'clamp(44px,7vw,92px)', color:'#000',
          lineHeight:0.88, letterSpacing:-2, marginBottom:28, textTransform:'uppercase',
        }}>
          READY TO START<br />YOUR SPORTS<br />JOURNEY?
        </h2>
        <p style={{ fontFamily:C.FB, color:'rgba(0,0,0,0.62)', fontSize:16, lineHeight:1.8, maxWidth:500, margin:'0 auto 56px', fontWeight:300 }}>
          Join Kreedify Sports and turn your residential complex into a thriving fitness hub. Elite coaching, right at your doorstep.
        </p>
        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <a href="mailto:info@kreedifysports.com"
            style={{ fontFamily:C.FD, fontWeight:800, fontSize:13, letterSpacing:2, textTransform:'uppercase', color:C.og, background:'#000', padding:'18px 44px', borderRadius:2, textDecoration:'none', display:'inline-block', transition:'background 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.background=C.bg1}
            onMouseLeave={e => e.currentTarget.style.background='#000'}>
            Contact Us Today
          </a>
          <button onClick={() => navigate('/')}
            style={{ fontFamily:C.FD, fontWeight:800, fontSize:13, letterSpacing:2, textTransform:'uppercase', color:'#000', background:'transparent', border:'2px solid rgba(0,0,0,0.3)', padding:'16px 44px', borderRadius:2, cursor:'pointer', transition:'border-color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor='#000'}
            onMouseLeave={e => e.currentTarget.style.borderColor='rgba(0,0,0,0.3)'}>
            ← Back to Home
          </button>
        </div>
      </div>
    </section>
  )
}