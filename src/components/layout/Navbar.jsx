import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { C } from '../../constants/theme'

export default function Navbar() {

  const location = useLocation()

  const isSportsPage = location.pathname === '/sports'

  const [scrolled, setScrolled] = useState(false)

  const [open, setOpen] = useState(false)

  const [loginHov, setLoginHov] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  const links = [
    [
      'About',
      isSportsPage ? '/' : '#about'
    ],
    [
      'Programs',
      isSportsPage ? '/' : '#programs'
    ],
    [
      'Contact',
      isSportsPage ? '/' : '#contact'
    ]
  ]

  return (
    <header
      style={{
        position:'fixed',
        inset:'0 0 auto 0',
        zIndex:999,

        background: scrolled
          ? 'rgba(10,15,22,0.92)'
          : 'transparent',

        backdropFilter: scrolled
          ? 'blur(18px)'
          : 'none',

        borderBottom: scrolled
          ? `1px solid rgba(232,118,42,0.15)`
          : '1px solid transparent',

        transition:'all .35s cubic-bezier(.16,1,.3,1)'
      }}
    >

      {/* ORANGE TOP LINE */}
      {scrolled && (
        <div
          style={{
            position:'absolute',
            top:0,
            left:0,
            right:0,
            height:2,
            background:`linear-gradient(90deg, transparent, ${C.og}, transparent)`
          }}
        />
      )}

      <div
        style={{
          maxWidth:1280,
          margin:'0 auto',
          height:72,

          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',

          padding:'0 42px'
        }}
      >

        {/* LOGO */}
{/* LOGO */}
<a
  href={isSportsPage ? '/' : '#hero'}

  style={{
    display:'flex',
    alignItems:'center',
    gap:14,
    textDecoration:'none',

    transition:'transform .3s cubic-bezier(.16,1,.3,1)'
  }}

  onMouseEnter={e => {
    e.currentTarget.style.transform = 'translateY(-2px)'
  }}

  onMouseLeave={e => {
    e.currentTarget.style.transform = 'translateY(0)'
  }}
>

  {/* LOGO CIRCLE */}
  <div
    style={{
      position:'relative',

      width:48,
      height:48,

      borderRadius:'50%',

      overflow:'hidden',

      flexShrink:0,

      border:'2px solid rgba(255,255,255,0.06)',

boxShadow:'none'
    }}
  >

    {/* ORANGE GLOW
    <div
      style={{
        position:'absolute',
        inset:-8,

        background:'radial-gradient(rgba(232,118,42,0.35), transparent 70%)',

        zIndex:0
      }}
    /> */}

    <img
      src="/logo.png"
      alt="Kreedify"

      style={{
        position:'relative',

        width:'100%',
        height:'100%',

        objectFit:'cover',

        display:'block',

        zIndex:2
      }}
    />
  </div>

  {/* TEXT */}
  <div
    style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    }}
  >

    {/* MAIN TITLE */}
    <div
      style={{
        fontFamily:C.FD,
        fontWeight:900,

        fontSize:24,

        lineHeight:0.9,

        letterSpacing:4,

        color:'#fff',

        textTransform:'uppercase',

        textShadow:'0 0 24px rgba(255,255,255,0.08)'
      }}
    >
      KREEDIFY
    </div>

    {/* SUBTITLE */}
    <div
      style={{
        marginTop:4,

        fontFamily:C.FM,

        fontSize:8,

        letterSpacing:3,

        color:C.og,

        textTransform:'uppercase'
      }}
    >
      Elite Sports Performance
    </div>

  </div>
</a>

        {/* DESKTOP NAV */}
        <nav
          className="ku-hide-mob"

          style={{
            display:'flex',
            alignItems:'center',
            gap:42
          }}
        >

          {links.map(([label,href]) => (

            <a
              key={label}
              href={href}

              style={{
                position:'relative',

                fontFamily:C.FD,
                fontWeight:700,
                fontSize:14,
                letterSpacing:2,
                textTransform:'uppercase',

                color:'#fff',
                textDecoration:'none',

                transition:'all .3s'
              }}

              onMouseEnter={e => {
                e.currentTarget.style.color = C.og
              }}

              onMouseLeave={e => {
                e.currentTarget.style.color = '#fff'
              }}
            >
              {label}

              <span
                style={{
                  position:'absolute',
                  left:0,
                  bottom:-10,

                  width:'100%',
                  height:2,

                  background:C.og,

                  transform:'scaleX(0)',
                  transformOrigin:'left',

                  transition:'transform .3s'
                }}

                className="nav-line"
              />
            </a>

          ))}

        </nav>

        {/* RIGHT SIDE */}
        <div
          className="ku-hide-mob"

          style={{
            display:'flex',
            alignItems:'center',
            gap:18
          }}
        >

          <a
            href={isSportsPage ? '/' : '#login'}

            onMouseEnter={() => setLoginHov(true)}
            onMouseLeave={() => setLoginHov(false)}

            style={{
              textDecoration:'none',

              fontFamily:C.FD,
              fontWeight:800,
              fontSize:12,

              letterSpacing:2,
              textTransform:'uppercase',

              padding:'12px 28px',

              border:`2px solid ${C.og}`,

              color: loginHov ? '#000' : C.og,

              background: loginHov
                ? C.og
                : 'transparent',

              transition:'all .3s cubic-bezier(.16,1,.3,1)'
            }}
          >
            Login
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="ku-hamburger"

          onClick={() => setOpen(o=>!o)}

          style={{
            display:'none',

            background:'none',
            border:'none',

            color:'#fff',

            fontSize:28,
            cursor:'pointer'
          }}
        >
          {open ? '✕' : '☰'}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div
          style={{
            background:'rgba(10,15,22,0.98)',
            borderTop:`2px solid ${C.og}`,

            padding:'30px 40px 40px'
          }}
        >

          {links.map(([label,href]) => (

            <a
              key={label}

              href={href}

              onClick={() => setOpen(false)}

              style={{
                display:'block',

                color:'#fff',

                textDecoration:'none',

                fontFamily:C.FD,
                fontWeight:800,
                fontSize:28,

                letterSpacing:3,
                textTransform:'uppercase',

                padding:'18px 0',

                borderBottom:'1px solid rgba(255,255,255,0.06)'
              }}
            >
              {label}
            </a>

          ))}

        </div>

      )}

    </header>
  )
}