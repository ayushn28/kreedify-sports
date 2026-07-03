import { C } from '../../constants/theme'
export default function Footer() {
  const cols = [
    { title:'Programs',    href:'#programs', links:['Kids Sports Training','Adult Fitness','Yoga & Wellness','Senior Care'] },
    { title:'Company',     href:'#about',    links:['About Us','Who We Are','Our Vision','Contact Us'] },
    { title:'Get Started', href:'#login',    links:['Login','Register','Join a Program','Book a Session'] },
  ]
  return (
    <footer style={{ background:C.bg0, borderTop:`1px solid ${C.ogB}`, padding:'80px 40px 32px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:56, marginBottom:64 }} className="ku-grid2">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
              <div style={{ width:44, height:44, borderRadius:'50%', overflow:'hidden', flexShrink:0 }}>
                <img src="/logo.png" alt="Kreedify" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              </div>
              <div>
                <div style={{ fontFamily:C.FD, color:'#fff', fontSize:19, fontWeight:800, letterSpacing:3, lineHeight:1 }}>KREEDIFY</div>
                <div style={{ fontFamily:C.FM, color:C.og, fontSize:8, letterSpacing:4 }}>SPORTS</div>
              </div>
            </div>
            <p style={{ fontFamily:C.FB, color:C.dm, fontSize:13, lineHeight:1.8, maxWidth:240, fontWeight:300 }}>
              Transform Your Game by turning your residential complex into a thriving fitness hub. Elite coaching at your doorstep.
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:24 }}>
              <div style={{ height:2, width:28, background:C.og }} />
              <span style={{ fontFamily:C.FM, color:C.og, fontSize:9, letterSpacing:3 }}>EST. 2026</span>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily:C.FD, color:'#fff', fontSize:12, fontWeight:700, marginBottom:20, letterSpacing:3, textTransform:'uppercase', fontStyle:'italic' }}>{col.title}</h4>
              {col.links.map(l => (
                <a key={l} href={col.href} style={{ display:'block', fontFamily:C.FB, color:C.dm, textDecoration:'none', fontSize:13, marginBottom:12, fontWeight:300, transition:'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color=C.og}
                  onMouseLeave={e => e.currentTarget.style.color=C.dm}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.04)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontFamily:C.FB, color:C.dm, fontSize:12, fontWeight:300 }}>© 2026 Kreedify Sports. All rights reserved.</p>
          <p style={{ fontFamily:C.FM, color:C.og, fontSize:9, letterSpacing:3 }}>TRANSFORM YOUR GAME · TRANSFORM YOUR LIFE</p>
        </div>
      </div>
    </footer>
  )
}