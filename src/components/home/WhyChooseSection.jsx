import { C } from '../../constants/theme'
import { WHY_CHOOSE } from '../../data/siteData'

import WhyRow from './WhyChooseCard'

export default function WhyChooseSection() {
  return (
    <section
      style={{
        background:C.bg1,
        padding:'140px 40px',
        position:'relative'
      }}
    >
      <div
        style={{
          maxWidth:1280,
          margin:'0 auto'
        }}
      >
        <div
          className="ku-line-label"
          style={{ marginBottom:32 }}
        >
          <span
            style={{
              fontFamily:C.FM,
              color:C.og,
              fontSize:10,
              letterSpacing:3
            }}
          >
            05 — WHY KREEDIFY
          </span>
        </div>

        <h2
          style={{
            fontFamily:C.FD,
            fontWeight:900,
            fontStyle:'italic',
            fontSize:'clamp(56px,7vw,110px)',
            color:'#fff',
            lineHeight:0.9,
            letterSpacing:-3,
            textTransform:'uppercase',
            marginBottom:60
          }}
        >
          WHY
          <br />

          <span style={{ color:C.og }}>
            CHOOSE US
          </span>
        </h2>

        <div>
          {WHY_CHOOSE.map((item, idx) => (
            <WhyRow
              key={item.num}
              item={item}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}