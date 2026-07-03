import { useState, useEffect } from 'react'

import { C } from '../../constants/theme'

export default function HeroSection() {

  const [counter, setCounter] = useState({
    members:0,
    sports:0,
    coaches:0
  })

  const [exploreHov, setExploreHov] = useState(false)

  const [touchHov, setTouchHov] = useState(false)

  useEffect(() => {

    const targets = {
      members:100,
      sports:15,
      coaches:20
    }

    const duration = 1800

    const steps = 60

    let step = 0

    const timer = setInterval(() => {

      step++

      const progress = step / steps

      const ease = 1 - Math.pow(1-progress, 3)

      setCounter({
        members: Math.round(targets.members * ease),
        sports:  Math.round(targets.sports * ease),
        coaches: Math.round(targets.coaches * ease),
      })

      if (step >= steps) {
        clearInterval(timer)
      }

    }, duration / steps)

    return () => clearInterval(timer)

  }, [])

  return (

    <section

      id="hero"

      style={{
        minHeight:'100vh',

        paddingTop:68,

        position:'relative',

        overflow:'hidden',

        backgroundImage:`
          linear-gradient(
            rgba(8,12,18,0.78),
            rgba(8,12,18,0.9)
          ),
          url('/images/hero-bg.jpg')
        `,

        backgroundSize:'cover',

        backgroundPosition:'center',

        backgroundRepeat:'no-repeat',

        backgroundColor:C.bg0
      }}
    >

      {/* DIAGONAL STRIPE */}
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

      {/* HALFTONE */}
      <div
        className="ku-halftone"

        style={{
          position:'absolute',

          right:0,
          top:0,

          width:'45%',
          height:'100%',

          opacity:0.35,

          pointerEvents:'none'
        }}
      />

      {/* LEFT ORANGE LINE */}
      {/* <div
        style={{
          position:'absolute',

          left:40,
          top:0,
          bottom:0,

          width:1,

          background:`linear-gradient(
            to bottom,
            transparent,
            ${C.og},
            transparent
          )`,

          opacity:0.2,

          pointerEvents:'none'
        }}
      /> */}

      {/* HUGE BG WORD */}
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

          lineHeight:1,

          color:'rgba(255,255,255,0.02)',

          pointerEvents:'none',

          userSelect:'none'
        }}
      >
        ATHLETE
      </div>

      <div
        style={{
          maxWidth:1280,

          margin:'0 auto',

          padding:'0 40px',

          display:'flex',

          alignItems:'center',

          minHeight:'calc(100vh - 68px)',

          position:'relative'
        }}
      >

        {/* VERTICAL LABEL */}
        <div
          className="ku-vert-text ku-hide-mob"

          style={{
            position:'absolute',

            left:0,
            top:'50%',

            transform:'translateY(-50%) rotate(180deg)'
          }}
        >
          KREEDIFY SPORTS · KOLKATA · EST.2026
        </div>

        {/* MAIN CONTENT */}
        <div
          style={{
            flex:1,

            paddingLeft:32,

            paddingRight:40
          }}
        >

          {/* BADGE */}
          <div
            className="ku-animate-left"

            style={{
              display:'inline-flex',

              alignItems:'center',

              gap:10,

              background:'rgba(232,118,42,0.1)',

              border:`1px solid ${C.ogB}`,

              borderRadius:2,

              padding:'6px 14px 6px 10px',

              marginBottom:40,

              backdropFilter:'blur(12px)'
            }}
          >

            <div
              style={{
                width:8,
                height:8,

                background:C.og,

                borderRadius:'50%',

                animation:'blinkBar 1.4s ease-in-out infinite'
              }}
            />

            <span
              style={{
                fontFamily:C.FM,

                color:C.og,

                fontSize:10,

                letterSpacing:3
              }}
            >
              ELEVATE YOUR GAME
            </span>

          </div>

          {/* HERO TEXT */}
          <div
            className="ku-animate-left ku-d1"

            style={{
              overflow:'hidden',
              marginBottom:6
            }}
          >

            <h1
              style={{
                fontFamily:C.FD,

                fontWeight:900,

                fontSize:'clamp(82px,13vw,170px)',

                lineHeight:0.82,

                letterSpacing:-5,

                color:'#fff',

                fontStyle:'italic',

                textTransform:'uppercase',

                marginBottom:0,
              }}
            >
              TRAIN
            </h1>

          </div>

          <div
            className="ku-animate-left ku-d2"

            style={{
              overflow:'hidden',
              marginBottom:6
            }}
          >

            <h1
              style={{
                fontFamily:C.FD,

                fontWeight:900,

                fontSize:'clamp(82px,13vw,170px)',

                lineHeight:0.82,

                letterSpacing:-5,

                fontStyle:'italic',

                textTransform:'uppercase',

                WebkitTextStroke:`2px ${C.og}`,

                color:'transparent',
              }}
            >
              WITH
            </h1>

          </div>

          <div
            className="ku-animate-left ku-d3"

            style={{
              overflow:'hidden',
              marginBottom:14
            }}
          >

            <h1
              style={{
                fontFamily:C.FD,

                fontWeight:900,

                fontSize:'clamp(82px,13vw,170px)',

                lineHeight:0.82,

                letterSpacing:-5,

                color:C.og,

                fontStyle:'italic',

                textTransform:'uppercase',

                textShadow:'0 0 80px rgba(232,118,42,0.25)',
              }}
            >
              KREEDIFY
            </h1>

          </div>

          {/* SUBTEXT */}
          <div
            className="ku-animate-left ku-d4"

            style={{
              display:'flex',

              alignItems:'center',

              gap:20,

              marginTop:36,

              marginBottom:52
            }}
          >

            <div
              style={{
                width:60,
                height:2,
                background:C.og
              }}
            />

            <p
              style={{
                fontFamily:C.FB,

                color:C.mt,

                fontSize:15,

                lineHeight:1.75,

                maxWidth:430,

                fontWeight:300
              }}
            >
              Professional sports coaching and wellness programs
              designed to transform your residential complex and schools into a thriving fitness community.
            </p>

          </div>

          {/* BUTTONS */}
          <div
            className="ku-animate-left ku-d5"

            style={{
              display:'flex',

              gap:16,

              flexWrap:'wrap'
            }}
          >

            {/* PRIMARY */}
            <a
              href="#programs"

              className="ku-btn-slash"

              onMouseEnter={() => setExploreHov(true)}
              onMouseLeave={() => setExploreHov(false)}

              style={{
                fontFamily:C.FD,

                fontWeight:800,

                fontSize:13,

                letterSpacing:2,

                textTransform:'uppercase',

                color: exploreHov ? '#fff' : '#000',

                background:C.og,

                padding:'16px 42px',

                borderRadius:2,

                border:`2px solid ${C.og}`,

                transition:'all .35s cubic-bezier(.16,1,.3,1)'
              }}
            >
              <span>
                Explore Programs →
              </span>
            </a>

            {/* SECONDARY */}
            <a
              href="#about"

              onMouseEnter={() => setTouchHov(true)}
              onMouseLeave={() => setTouchHov(false)}

              style={{
                fontFamily:C.FD,

                fontWeight:800,

                fontSize:13,

                letterSpacing:2,

                textTransform:'uppercase',

                color: touchHov ? '#000' : C.og,

                background: touchHov
                  ? C.og
                  : 'transparent',

                padding:'16px 42px',

                borderRadius:2,

                border:`2px solid ${C.og}`,

                transition:'all .35s cubic-bezier(.16,1,.3,1)',

                textDecoration:'none'
              }}
            >
              Learn More
            </a>

          </div>

        </div>

        {/* RIGHT STATS */}
        <div
          className="ku-hide-mob ku-animate-right ku-d2"

          style={{
            width:270,

            flexShrink:0,

            borderLeft:`1px solid ${C.ogB}`,

            paddingLeft:42,

            display:'flex',

            flexDirection:'column'
          }}
        >

          {[
            { n: counter.members + '+', l:'Active Members' },
            { n: counter.sports  + '+', l:'Sports Programs' },
            { n: counter.coaches + '+', l:'Expert Coaches' },
            { n: '5+',                  l:'Complexes Served' },
          ].map((s,i) => (

            <div
              key={s.l}

              style={{
                padding:'24px 0',

                borderBottom:
                  i < 3
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none'
              }}
            >

              <div
                style={{
                  display:'flex',
                  alignItems:'center',
                  gap:14
                }}
              >

                <div
                  style={{
                    width:2,
                    height:46,
                    background:C.og
                  }}
                />

                <div>

                  <div
                    style={{
                      fontFamily:C.FD,

                      fontWeight:900,

                      fontSize:54,

                      color:C.og,

                      lineHeight:1,

                      letterSpacing:-2,

                      fontStyle:'italic'
                    }}
                  >
                    {s.n}
                  </div>

                  <div
                    style={{
                      fontFamily:C.FM,

                      fontSize:9,

                      color:C.mt,

                      letterSpacing:2,

                      marginTop:4
                    }}
                  >
                    {s.l.toUpperCase()}
                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* EST BADGE */}
          <div
            style={{
              marginTop:26,

              display:'flex',

              alignItems:'center',

              gap:12
            }}
          >

            <div
              style={{
                width:48,
                height:48,

                border:`2px solid ${C.og}`,

                borderRadius:'50%',

                display:'flex',

                alignItems:'center',

                justifyContent:'center',

                animation:'rotSlow 12s linear infinite',

                flexShrink:0
              }}
            >

              <div
                style={{
                  fontFamily:C.FD,

                  color:C.og,

                  fontSize:9,

                  fontWeight:700,

                  letterSpacing:1,

                  textAlign:'center',

                  lineHeight:1.2
                }}
              >
                EST
                <br />
                26
              </div>

            </div>

            <span
              style={{
                fontFamily:C.FM,

                color:C.dm,

                fontSize:9,

                letterSpacing:2
              }}
            >
              FOUNDED IN
              <br />
              KOLKATA, IND
            </span>

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="ku-hide-mob"

        style={{
          position:'absolute',

          left:40,
          bottom:34,

          display:'flex',

          flexDirection:'column',

          alignItems:'center',

          gap:8
        }}
      >

        <div
          style={{
            fontFamily:C.FM,

            color:C.mt,

            fontSize:9,

            letterSpacing:3
          }}
        >
          SCROLL
        </div>

        <div
          style={{
            color:C.og,

            fontSize:18,

            animation:'bounceDown 1.5s infinite'
          }}
        >
          ↓
        </div>

      </div>

      {/* BOTTOM SLASH */}
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

    </section>
  )
}