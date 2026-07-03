import { C } from '../../constants/theme'

export default function AboutSection() {

  return (

    <section
      id="about"

      style={{
        background:'#080c12',

        padding:'140px 40px 80px',

        position:'relative',

        overflow:'hidden'
      }}
    >

      {/* HERO STYLE DIAGONAL STRIPE */}
      <div
        style={{
          position:'absolute',

          inset:0,

          background:`
            linear-gradient(
              115deg,
              transparent 50%,
              rgba(232,118,42,0.035) 50%
            )
          `,

          pointerEvents:'none'
        }}
      />

      {/* HERO STYLE LEFT LINE
      <div
        style={{
          position:'absolute',

          left:40,
          top:0,
          bottom:0,

          width:1,

          background:`
            linear-gradient(
              to bottom,
              transparent,
              ${C.og},
              transparent
            )
          `,

          opacity:0.15,

          pointerEvents:'none'
        }}
      /> */}

      {/* BIG BACKGROUND NUMBER */}
      <div
        className="ku-hide-mob"

        style={{
          position:'absolute',

          right:-60,
          bottom:-40,

          fontFamily:C.FD,

          fontWeight:900,

          fontSize:400,

          fontStyle:'italic',

          color:'rgba(255,255,255,0.015)',

          lineHeight:1,

          userSelect:'none',

          pointerEvents:'none',
        }}
      >
        01
      </div>

      <div
        style={{
          maxWidth:1280,
          margin:'0 auto'
        }}
      >

        {/* LABEL */}
        <div
          className="ku-line-label"

          style={{
            marginBottom:64
          }}
        >

          <span
            style={{
              fontFamily:C.FM,

              color:C.og,

              fontSize:10,

              letterSpacing:3
            }}
          >
            01 — ABOUT US
          </span>

        </div>

        <div
          className="ku-grid2"

          style={{
            display:'grid',

            gridTemplateColumns:'1fr 1fr',

            gap:90,

            alignItems:'center'
          }}
        >

          {/* LEFT */}
          <div>

            {/* HEADING */}
            <h2
              style={{
                fontFamily:C.FD,

                fontWeight:900,

                fontStyle:'italic',

                fontSize:'clamp(62px,7vw,108px)',

                color:'#fff',

                lineHeight:0.84,

                letterSpacing:-4,

                marginBottom:40,

                textTransform:'uppercase',
              }}
            >
              WHO
              <br />

              <span
                style={{
                  WebkitTextStroke:`2px ${C.og}`,

                  color:'transparent'
                }}
              >
                WE
              </span>

              <br />

              ARE

            </h2>

            {/* ORANGE BAR */}
            <div
              style={{
                width:60,
                height:2,
                background:C.og,
                marginBottom:36
              }}
            />

            {/* TEXT */}
            <p
              style={{
                fontFamily:C.FB,

                color:C.mt,

                lineHeight:1.95,

                marginBottom:24,

                fontSize:15,

                fontWeight:300,

                maxWidth:560
              }}
            >
              At
              {' '}
              <strong
                style={{
                  color:C.og,
                  fontWeight:600
                }}
              >
                Kreedify Sports
              </strong>
              ,
              {' '}
              we believe a vibrant community starts with a healthy lifestyle.
              We are a premier sports management and development firm dedicated to transforming residential spaces into thriving fitness hubs.
            </p>

            <p
              style={{
                fontFamily:C.FB,

                color:C.mt,

                lineHeight:1.95,

                fontSize:15,

                fontWeight:300,

                maxWidth:560
              }}
            >
              By bridging the gap between convenience and elite training,
              we bring professional sports coaching and tailored wellness programs directly to your comfort.
            </p>

            {/* VISION BOX */}
            <div
              style={{
                marginTop:44,

                background:'rgba(232,118,42,0.05)',

                border:`1px solid rgba(232,118,42,0.12)`,

                borderLeft:`4px solid ${C.og}`,

                padding:'24px 26px',

                borderRadius:'0 4px 4px 0',

                backdropFilter:'blur(8px)'
              }}
            >

              <div
                style={{
                  fontFamily:C.FM,

                  color:C.og,

                  fontSize:9,

                  letterSpacing:3,

                  marginBottom:12
                }}
              >
                OUR VISION
              </div>

              <p
                style={{
                  fontFamily:C.FB,

                  color:C.tx,

                  fontSize:14,

                  lineHeight:1.85,

                  fontWeight:300
                }}
              >
                To redefine urban living by fostering a culture of active health and wellness.
                We don't just provide classes; we build a vibrant ecosystem where neighbors connect, children excel, and adults rediscover their peak potential.
              </p>

            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div
            style={{
              position:'relative',

              paddingTop:40
            }}
          >

            {/* MAIN IMAGE */}
            <div
              style={{
                position:'relative',

                overflow:'hidden',

                borderRadius:4
              }}
            >

              <img
                src="/images/who-we-are.jpeg"
                alt="Community"

                style={{
                  width:'100%',

                  height:390,

                  objectFit:'cover',

                  borderRadius:4,

                  display:'block',

                  filter:'brightness(0.82) contrast(1.08)',

                  transform:'scale(1.02)'
                }}
              />

              {/* HERO STYLE DARK OVERLAY */}
              <div
                style={{
                  position:'absolute',

                  inset:0,

                  background:`
                    linear-gradient(
                      to top,
                      rgba(0,0,0,0.45),
                      transparent 40%
                    )
                  `,

                  pointerEvents:'none'
                }}
              />

            </div>

            {/* ORANGE FRAME */}
            <div
              style={{
                position:'absolute',

                top:20,
                left:-20,
                right:20,
                bottom:-20,

                border:`2px solid ${C.og}`,

                borderRadius:4,

                pointerEvents:'none',

                zIndex:-1
              }}
            />

            {/* SMALL IMAGE */}
            <div
              style={{
                position:'absolute',

                bottom:-14,
                right:0,

                width:240,
                height:180,

                zIndex:3
              }}
            >

              <img
                src="/images/events.png"
                alt="Events"

                style={{
                  width:'100%',

                  height:'100%',

                  objectFit:'cover',

                  borderRadius:4,

                  border:`3px solid ${C.og}`,

                  boxShadow:'0 16px 45px rgba(0,0,0,0.55)'
                }}
              />

            </div>

            {/* HERO STYLE CORNER BADGE */}
            <div
              style={{
                position:'absolute',

                top:-18,
                right:-18,

                background:C.og,

                padding:'10px 16px',

                borderRadius:2,

                boxShadow:'0 0 40px rgba(232,118,42,0.22)'
              }}
            >

              <div
                style={{
                  fontFamily:C.FD,

                  color:'#000',

                  fontSize:24,

                  fontWeight:900,

                  lineHeight:1
                }}
              >
                5+
              </div>

              <div
                style={{
                  fontFamily:C.FM,

                  color:'rgba(0,0,0,0.72)',

                  fontSize:8,

                  letterSpacing:2
                }}
              >
                COMPLEXES
              </div>

            </div>

            {/* FLOATING TEXT */}
            <div
              className="ku-hide-mob"

              style={{
                position:'absolute',

                left:-40,
                bottom:40,

                transform:'rotate(-90deg)',

                transformOrigin:'left top',

                fontFamily:C.FM,

                color:'rgba(255,255,255,0.18)',

                fontSize:9,

                letterSpacing:4
              }}
            >
              BUILDING ACTIVE COMMUNITIES
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}