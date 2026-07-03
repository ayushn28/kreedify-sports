import { C } from '../../constants/theme'

import { WHY_ITEMS } from '../../data/sportsData'
import WhyChooseRow from './WhyChooseRow'

export default function WhyChoose() {
  return (
    <section style={{ background:C.bg1, padding:'140px 40px', position:'relative', overflow:'hidden' }}>
      <div className="sp-hide-mob" style={{
        position:'absolute', left:0, top:'50%', transform:'translateY(-50%)',
        fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:400,
        color:'rgba(255,255,255,0.015)', lineHeight:1, userSelect:'none', pointerEvents:'none',
      }}>WHY</div>

      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div className="sp-line-label" style={{ marginBottom:64 }}>
          <span style={{ fontFamily:C.FM, color:C.og, fontSize:10, letterSpacing:3 }}>WHY KREEDIFY</span>
        </div>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:80, flexWrap:'wrap', gap:32 }}>
          <h2 style={{
            fontFamily:C.FD, fontWeight:900, fontStyle:'italic',
            fontSize:'clamp(52px,7vw,108px)', color:'#fff',
            lineHeight:0.88, letterSpacing:-3, textTransform:'uppercase',
          }}>
            WHY CHOOSE<br /><span style={{ color:C.og }}>KREEDIFY</span>
          </h2>
          <p style={{ fontFamily:C.FB, color:C.mt, fontSize:15, lineHeight:1.8, maxWidth:360, alignSelf:'flex-end', fontWeight:300 }}>
            We bring professional sports coaching and wellness directly to your complex — programs for every age and skill level.
          </p>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.04)' }}>
{WHY_ITEMS.map(item => (
  <WhyChooseRow key={item.num} item={item} />
))}
        </div>
      </div>
    </section>
  )
}