import { useState } from 'react'
import { C } from '../../constants/theme'

export default function SportCard({ sport, delayIdx = 0 }) {

  const [hov, setHov] = useState(false)
  const [btnHov, setBtnHov] = useState(false)
  const delayClass = `sp-d${(delayIdx % 6) + 1}`

  return (
    <div
      data-cur
      className={`sp-card ${delayClass}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? 'linear-gradient(160deg, #0f1a26 0%, #0a1018 100%)'
          : 'linear-gradient(160deg, #0d1520 0%, #080c12 100%)',
        border: `1px solid ${hov ? C.og : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hov
          ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${C.og}, 0 0 40px rgba(232,118,42,0.08)`
          : '0 4px 24px rgba(0,0,0,0.3)',
        minHeight: 520,
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all .4s cubic-bezier(.16,1,.3,1)',
        transform: hov ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >

      {/* Top orange accent line on hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${C.og}, transparent)`,
          opacity: hov ? 1 : 0,
          transition: 'opacity .4s'
        }}
      />

      {/* Diagonal stripe — matches Hero */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            135deg,
            transparent 55%,
            rgba(232,118,42,0.04) 55%
          )`,
          pointerEvents: 'none'
        }}
      />

      {/* Halftone dots */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
          opacity: hov ? 0.18 : 0.08,
          pointerEvents: 'none',
          transition: 'opacity .4s'
        }}
      />

      {/* Watermark sport name */}
      <div
        style={{
          position: 'absolute',
          right: -8,
          bottom: -16,
          fontFamily: C.FD,
          fontWeight: 900,
          fontStyle: 'italic',
          fontSize: 96,
          color: hov
            ? 'rgba(232,118,42,0.06)'
            : 'rgba(255,255,255,0.025)',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          transition: 'color .4s',
          lineHeight: 1
        }}
      >
        {sport.name.toUpperCase()}
      </div>

      {/* Left orange bar — Hero stat style */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: 2,
          background: `linear-gradient(to bottom, transparent, ${C.og}, transparent)`,
          opacity: hov ? 0.6 : 0.15,
          transition: 'opacity .4s'
        }}
      />

      {/* TAG */}
      {sport.tag && (
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 18,
            background: C.og,
            color: '#000',
            fontFamily: C.FM,
            fontSize: 8,
            letterSpacing: 2,
            padding: '5px 10px',
            fontWeight: 700,
            boxShadow: '0 0 20px rgba(232,118,42,0.4)',
            zIndex: 2,
          }}
        >
          {sport.tag}
        </div>
      )}

      {/* AGE badge */}
      <div
        style={{
          position: 'absolute',
          top: 14,
          right: 18,
          border: `1px solid ${C.og}`,
          background: 'rgba(232,118,42,0.08)',
          color: C.og,
          fontFamily: C.FM,
          fontSize: 8,
          letterSpacing: 2,
          padding: '5px 10px',
          fontWeight: 700,
          backdropFilter: 'blur(8px)',
          zIndex: 2,
        }}
      >
        {sport.ageLabel}
      </div>

      {/* ICON */}
      <div
        style={{
          width:'100%',
          height:320,
          marginTop:0,
          marginBottom:0,
          overflow:'hidden',
          borderRadius:0,
          border:`1px solid ${hov ? C.ogB : 'rgba(255,255,255,0.06)'}`,
          position:'relative'
        }}
      >
        <img
          src={sport.image}
          alt={sport.name}
          style={{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            transition:'transform .5s ease',
            transform: hov ? 'scale(1.08)' : 'scale(1)'
          }}
        />

        <div
          style={{
            position:'absolute',
            inset:0,
            background:'linear-gradient(to top, rgba(8,12,18,.92), rgba(8,12,18,.05))'
          }}
        />

        {/* Sport emoji icon badge — bottom-left over image */}
        <div
          style={{
            position: 'absolute',
            left: 18,
            bottom: 14,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(8,12,18,0.85)',
            border: `1px solid ${hov ? C.og : 'rgba(255,255,255,0.12)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            backdropFilter: 'blur(6px)',
            boxShadow: hov ? '0 0 20px rgba(232,118,42,0.35)' : 'none',
            transition: 'all .4s',
          }}
        >
          {sport.icon}
        </div>
      </div>

      {/* Content wrapper */}
      <div
        style={{
          padding: '24px'
        }}
      >

        {/* TITLE */}
        <h3
          style={{
            fontFamily: C.FD,
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 44,
            lineHeight: 0.88,
            color: hov ? '#fff' : 'rgba(255,255,255,0.92)',
            marginBottom: 6,
            letterSpacing: -1,
            textTransform: 'uppercase',
            textShadow: hov ? '0 0 40px rgba(232,118,42,0.15)' : 'none',
            transition: 'all .4s'
          }}
        >
          {sport.name}
        </h3>

        {/* Orange underline */}
        <div
          style={{
            width: hov ? 50 : 30,
            height: 2,
            background: C.og,
            marginBottom: 16,
            transition: 'width .4s'
          }}
        />

        {/* DESC */}
        <p
          style={{
            fontFamily: C.FB,
            color: C.mt,
            fontSize: 13,
            lineHeight: 1.85,
            marginBottom: 20,
            fontWeight: 300
          }}
        >
          {sport.desc}
        </p>

        {/* META tags */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 22
          }}
        >
          <div
            style={{
              border: `1px solid ${C.og}`,
              background: 'rgba(232,118,42,0.06)',
              padding: '6px 12px',
              fontSize: 8,
              letterSpacing: 2,
              color: C.og,
              fontFamily: C.FM
            }}
          >
            {sport.sessions}
          </div>
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              padding: '6px 12px',
              fontSize: 8,
              letterSpacing: 2,
              color: C.dm,
              fontFamily: C.FM
            }}
          >
            {sport.level}
          </div>
        </div>

        {/* BENEFITS */}
        <div style={{ marginBottom: 28 }}>

          <div
            style={{
              fontFamily: C.FM,
              color: C.og,
              fontSize: 8,
              letterSpacing: 4,
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }}
          >
            <div style={{ width: 20, height: 1, background: C.og }} />
            KEY BENEFITS
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10
            }}
          >
            {sport.benefits.map(b => (
              <div
                key={b}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: C.FB,
                  color: C.mt,
                  fontSize: 11,
                  lineHeight: 1.4
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    background: C.og,
                    flexShrink: 0,
                    boxShadow: '0 0 6px rgba(232,118,42,0.5)'
                  }}
                />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* ENROLL BUTTON */}
        <button
          onMouseEnter={() => setBtnHov(true)}
          onMouseLeave={() => setBtnHov(false)}
          style={{
            width: '100%',
            background: btnHov ? C.og : 'transparent',
            border: `1px solid ${C.og}`,
            color: btnHov ? '#000' : C.og,
            padding: '15px',
            fontFamily: C.FD,
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: 2,
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all .3s cubic-bezier(.16,1,.3,1)',
            boxShadow: btnHov ? `0 0 30px rgba(232,118,42,0.3)` : 'none',
          }}
        >
          ENROLL NOW →
        </button>

      </div>

    </div>
  )
}