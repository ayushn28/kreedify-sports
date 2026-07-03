import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { C } from '../../constants/theme'
import { SPORTS_KIDS } from '../../data/siteData'

import HomeSportCard from '../ui/HomeSportCard'

export default function ProgramsSection() {

  const navigate = useNavigate()

  const [viewAllHov, setViewAllHov] = useState(false)
  const [cardHov,    setCardHov]    = useState(false)

  return (
    <section
      id="programs"
      style={{
        background:'#080c12',
        padding:'80px 40px 140px',
        position:'relative',
        overflow:'hidden'
      }}
    >

      {/* Diagonal stripe */}
      <div
        style={{
          position:'absolute',
          inset:0,
          pointerEvents:'none',
          background:`linear-gradient(
            115deg,
            transparent 50%,
            rgba(232,118,42,0.05) 50%
          )`,
        }}
      />

      {/* Halftone */}
      <div
        className="ku-halftone"
        style={{
          position:'absolute',
          right:0,
          top:0,
          width:'45%',
          height:'100%',
          opacity:0.22,
          pointerEvents:'none'
        }}
      />

      {/* Left orange line */}
      <div
        style={{
          position:'absolute',
          left:40,
          top:0,
          bottom:0,
          width:1,
          background:`linear-gradient(to bottom, transparent, ${C.og}, transparent)`,
          opacity:0.2,
          pointerEvents:'none'
        }}
      />

      {/* Ghost word — vertical left */}
      <div
        className="ku-hide-mob"
        style={{
          position:'absolute',
          left:-80,
          top:'10%',
          fontFamily:C.FD,
          fontWeight:900,
          fontStyle:'italic',
          fontSize:400,
          color:'rgba(255,255,255,0.015)',
          lineHeight:1,
          userSelect:'none',
          pointerEvents:'none',
          writingMode:'vertical-rl',
        }}
      >
        SPORTS
      </div>

      {/* Ghost word — bottom right */}
      <div
        className="ku-hide-mob"
        style={{
          position:'absolute',
          right:-40,
          bottom:-40,
          fontFamily:C.FD,
          fontWeight:900,
          fontStyle:'italic',
          fontSize:260,
          color:'rgba(255,255,255,0.02)',
          lineHeight:1,
          userSelect:'none',
          pointerEvents:'none'
        }}
      >
        KIDS
      </div>

      {/* Bottom slash */}
      <div
        style={{
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          height:80,
          background:C.og,
          clipPath:'polygon(0 100%, 100% 100%, 100% 30%, 0 70%)',
          opacity:0.06,
          pointerEvents:'none'
        }}
      />

      {/* ── CONTENT ── */}
      <div
        style={{
          maxWidth:1280,
          margin:'0 auto',
          position:'relative',
          zIndex:2
        }}
      >

        {/* Label */}
        <div
          className="ku-line-label"
          style={{ marginBottom:24 }}
        >
          <span
            style={{
              fontFamily:C.FM,
              color:C.og,
              fontSize:10,
              letterSpacing:3
            }}
          >
            02 — KIDS PROGRAMS
          </span>
        </div>

        {/* Heading row */}
        <div
          style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'flex-end',
            marginBottom:48,
            flexWrap:'wrap',
            gap:24
          }}
        >

          <div>
            <h2
              style={{
                fontFamily:C.FD,
                fontWeight:900,
                fontStyle:'italic',
                fontSize:'clamp(56px,7vw,110px)',
                color:'#fff',
                lineHeight:0.88,
                letterSpacing:-3,
                textTransform:'uppercase',
                marginBottom:20
              }}
            >
              SPORTS
              <br />
              TRAINING
              <br />
              <span
                style={{
                  color:C.og,
                  textShadow:'0 0 80px rgba(232,118,42,0.3)'
                }}
              >
                FOR KIDS
              </span>
            </h2>

            <div style={{ width:70, height:3, background:C.og }} />
          </div>

          {/* Subtext */}
          <div
            style={{
              display:'flex',
              alignItems:'flex-start',
              gap:20,
              maxWidth:390
            }}
          >
            <div
              style={{
                width:60,
                height:2,
                background:C.og,
                flexShrink:0,
                marginTop:10
              }}
            />
            <p
              style={{
                fontFamily:C.FB,
                color:C.mt,
                fontSize:15,
                lineHeight:1.8,
                fontWeight:300,
                margin:0
              }}
            >
              Age-appropriate sports programs delivered by certified coaches
              directly inside your residential complex and schools. Learn, grow and compete
              in a safe and professional environment.
            </p>
          </div>

        </div>

        {/* ── STATS STRIP ── */}
        <div
          style={{
            display:'flex',
            gap:0,
            marginBottom:52,
            borderTop:`1px solid rgba(255,255,255,0.06)`,
            borderBottom:`1px solid rgba(255,255,255,0.06)`,
          }}
        >
          {[
            ['15+', 'SPORTS OFFERED'],
            ['500+','ACTIVE MEMBERS'],
            ['20+', 'EXPERT COACHES'],
            ['5+',  'COMPLEXES'],
          ].map(([num, label], i) => (
            <div
              key={label}
              style={{
                flex:1,
                padding:'22px 0',
                display:'flex',
                alignItems:'center',
                gap:16,
                borderRight: i < 3
                  ? '1px solid rgba(255,255,255,0.06)'
                  : 'none',
                paddingLeft: i === 0 ? 0 : 32,
              }}
            >
              <div
                style={{
                  width:2,
                  height:36,
                  background:C.og,
                  flexShrink:0
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily:C.FD,
                    fontWeight:900,
                    fontStyle:'italic',
                    fontSize:36,
                    color:C.og,
                    lineHeight:1,
                    letterSpacing:-1
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily:C.FM,
                    fontSize:8,
                    color:C.mt,
                    letterSpacing:2,
                    marginTop:4
                  }}
                >
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CARDS ── */}
 {/* ── CARDS ── */}
        <div className="ku-bento">
 
          {/* First 4 sports: Cricket(large), Chess, Football, Karate */}
          {SPORTS_KIDS.slice(0, 4).map((s) => (
            <HomeSportCard key={s.name} sport={s} />
          ))}
 
          

          {/* View All Card */}
          <div
            data-cur
            className="ku-bento-small"
            onClick={() => navigate('/sports')}
            onMouseEnter={() => setCardHov(true)}
            onMouseLeave={() => setCardHov(false)}
            style={{
              background: cardHov
                ? C.og
                : 'rgba(13,21,32,0.95)',
              boxShadow: cardHov
                ? `0 0 60px rgba(232,118,42,0.35)`
                : `0 0 40px rgba(232,118,42,0.08)`,
              border:`2px solid ${C.og}`,
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              cursor:'pointer',
              gap:8,
              transition:'all .35s cubic-bezier(.16,1,.3,1)',
              position:'relative',
              overflow:'hidden'
            }}
          >

            {/* Big background number */}
            <div
              style={{
                position:'absolute',
                fontFamily:C.FD,
                fontWeight:900,
                fontStyle:'italic',
                fontSize:120,
                color: cardHov
                  ? 'rgba(0,0,0,0.12)'
                  : 'rgba(232,118,42,0.06)',
                lineHeight:1,
                userSelect:'none',
                pointerEvents:'none',
                transition:'all .35s'
              }}
            >
              15+
            </div>

            <div
              style={{
                fontFamily:C.FD,
                color: cardHov ? '#000' : C.og,
                fontSize:13,
                fontWeight:900,
                letterSpacing:3,
                textTransform:'uppercase',
                transition:'color .35s',
                position:'relative'
              }}
            >
              EXPLORE
            </div>

            <div
              style={{
                fontFamily:C.FD,
                color: cardHov ? '#000' : '#fff',
                fontSize:38,
                fontWeight:900,
                fontStyle:'italic',
                lineHeight:1,
                textShadow: cardHov ? 'none' : '0 0 40px rgba(232,118,42,0.3)',
                transition:'all .35s',
                position:'relative'
              }}
            >
              ALL SPORTS
            </div>

            <div
              style={{
                fontFamily:C.FM,
                color: cardHov ? 'rgba(0,0,0,0.6)' : C.mt,
                fontSize:9,
                letterSpacing:3,
                marginTop:4,
                transition:'color .35s',
                position:'relative'
              }}
            >
              VIEW 15+ PROGRAMS →
            </div>

          </div>

        </div>

        {/* Divider */}
        <div
          style={{
            height:1,
            background:`linear-gradient(90deg, transparent, ${C.og}, transparent)`,
            marginTop:60,
            marginBottom:45,
            opacity:0.4
          }}
        />

        {/* CTA */}
        <div style={{ display:'flex', justifyContent:'center' }}>
          <button
            onClick={() => navigate('/sports')}
            className="ku-btn-slash"
            onMouseEnter={() => setViewAllHov(true)}
            onMouseLeave={() => setViewAllHov(false)}
            style={{
              fontFamily:C.FD,
              fontWeight:800,
              fontSize:13,
              letterSpacing:2,
              textTransform:'uppercase',
              color: viewAllHov ? '#fff' : '#000',
              background:C.og,
              border:`2px solid ${C.og}`,
              padding:'16px 56px',
              borderRadius:2,
              transition:'all .35s cubic-bezier(.16,1,.3,1)',
              cursor:'pointer'
            }}
          >
            <span>View All Sports →</span>
          </button>
        </div>

      </div>

    </section>
  )
}