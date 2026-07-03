/* ─── DOUBLE TICKER ──────────────────────────────────────────────────────── */
import { C } from '../../constants/theme'
import { ALL_SPORTS } from '../../data/sportsData'
export default function Ticker() {
  const names = ALL_SPORTS.map(s => s.name)
  const items = [...names, ...names]
  return (
    <div style={{ background:C.og, overflow:'hidden' }}>
      <div style={{ padding:'12px 0', overflow:'hidden' }}>
        <div className="sp-ticker-fwd">
          {items.map((item,i) => (
            <span key={i} style={{ fontFamily:C.FD, fontWeight:900, fontSize:15, color:'#000', letterSpacing:3, textTransform:'uppercase', whiteSpace:'nowrap' }}>
              <span style={{ padding:'0 28px' }}>{item}</span>
              <span style={{ opacity:0.3 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
      <div style={{ padding:'12px 0', overflow:'hidden', borderTop:'1px solid rgba(0,0,0,0.12)', background:'rgba(0,0,0,0.12)' }}>
        <div className="sp-ticker-rev">
          {items.map((item,i) => (
            <span key={i} style={{ fontFamily:C.FD, fontWeight:400, fontStyle:'italic', fontSize:13, color:'rgba(0,0,0,0.5)', letterSpacing:2, textTransform:'uppercase', whiteSpace:'nowrap' }}>
              <span style={{ padding:'0 28px' }}>{item}</span>
              <span style={{ opacity:0.3 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}