import { useState } from 'react'
import { C } from '../../constants/theme'
export default function WhyRow({ item, idx }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      data-cur
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:'grid', gridTemplateColumns:'100px 1fr auto',
        gap:40, alignItems:'center',
        padding:'40px 0',
        borderBottom:'1px solid rgba(255,255,255,0.04)',
        paddingLeft: hov ? 20 : 0,
        background: hov ? 'rgba(232,118,42,0.02)' : 'transparent',
        transition:'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        cursor:'pointer',
      }}>
      <div style={{ fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:64, color: hov ? C.og : 'rgba(232,118,42,0.12)', lineHeight:1, transition:'color 0.3s' }}>{item.num}</div>
      <div>
        <h3 style={{ fontFamily:C.FD, fontStyle:'italic', fontSize:'clamp(22px,2.5vw,36px)', fontWeight:800, color:'#fff', letterSpacing:-0.5, marginBottom:6 }}>{item.title}</h3>
        <p style={{ fontFamily:C.FB, color:C.mt, fontSize:14, lineHeight:1.7, fontWeight:300, maxWidth:480 }}>{item.desc}</p>
      </div>
      <div style={{ fontFamily:C.FM, fontSize:24, color: hov ? C.og : 'transparent', transition:'all 0.3s', transform: hov ? 'translateX(0)' : 'translateX(-10px)' }}>→</div>
    </div>
  )
}