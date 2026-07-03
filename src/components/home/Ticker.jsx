import { C } from '../../constants/theme'
import { TICKER_ITEMS } from '../../data/siteData'

export default function Ticker() {
  const items = [...TICKER_ITEMS,...TICKER_ITEMS]
  return (
    <div style={{ background:C.og, padding:'0', overflow:'hidden' }}>
      <div style={{ padding:'12px 0', overflow:'hidden' }}>
        <div className="ku-ticker-fwd">
          {items.map((item,i) => (
            <span key={i} style={{ fontFamily:C.FD, fontWeight:900, fontSize:15, color:'#000', letterSpacing:3, textTransform:'uppercase', whiteSpace:'nowrap' }}>
              <span style={{ padding:'0 28px' }}>{item}</span>
              <span style={{ opacity:0.3 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
      <div style={{ padding:'12px 0', overflow:'hidden', borderTop:'1px solid rgba(0,0,0,0.12)', background:'rgba(0,0,0,0.12)' }}>
        <div className="ku-ticker-rev">
          {items.map((item,i) => (
            <span key={i} style={{ fontFamily:C.FD, fontWeight:400, fontSize:13, color:'rgba(0,0,0,0.5)', letterSpacing:2, textTransform:'uppercase', fontStyle:'italic', whiteSpace:'nowrap' }}>
              <span style={{ padding:'0 28px' }}>{item}</span>
              <span style={{ opacity:0.3 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}