/* ─── GRID + FILTER SECTION ──────────────────────────────────────────────── */
import { useState } from 'react'

import { C } from '../../constants/theme'
import SportCard from './SportCard'

import {
  ALL_SPORTS,
  CATEGORY_MAP
} from '../../data/sportsData'
export default function SportsGrid() {
  const [filter, setFilter] = useState('All')
  const filters = ['All','Physical','Mind','Wellness']
  const filtered = filter === 'All' ? ALL_SPORTS : ALL_SPORTS.filter(s => CATEGORY_MAP[filter]?.includes(s.name))

  return (
    <section id="grid" style={{ background:C.bg0, padding:'120px 40px', position:'relative', overflow:'hidden' }}>
      {/* Ghost number bg */}
      <div className="sp-hide-mob" style={{
        position:'absolute', right:-120, top:'0%',
        fontFamily:C.FD, fontWeight:900, fontStyle:'italic', fontSize:500,
        color:'rgba(255,255,255,0.012)', lineHeight:1, userSelect:'none', pointerEvents:'none',
      }}>{ALL_SPORTS.length}</div>

      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        {/* Section label */}
        <div className="sp-line-label" style={{ marginBottom:52 }}>
          <span style={{ fontFamily:C.FM, color:C.og, fontSize:10, letterSpacing:3 }}>ALL PROGRAMS — FILTER &amp; EXPLORE</span>
        </div>

        {/* Heading + filter row */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:24, marginBottom:48 }}>
          <h2 style={{
            fontFamily:C.FD, fontWeight:900, fontStyle:'italic',
            fontSize:'clamp(52px,6vw,96px)', color:'#fff',
            lineHeight:0.88, letterSpacing:-3, textTransform:'uppercase',
          }}>
            CHOOSE YOUR<br /><span style={{ color:C.og }}>SPORT</span>
          </h2>

          {/* Filter tabs */}
          <div style={{ display:'flex', gap:0, flexWrap:'wrap' }}>
            {filters.map(f => (
              <button key={f} className={`sp-tab${filter===f?' active':''}`} onClick={() => setFilter(f)}>
                {f}
                {f !== 'All' && (
                  <span style={{ fontFamily:C.FM, fontSize:8, marginLeft:6, opacity:0.55 }}>
                    {CATEGORY_MAP[f]?.length || 0}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Orange gradient rule */}
        <div style={{ height:2, background:`linear-gradient(90deg, ${C.og}, transparent)`, marginBottom:4 }} />
        {/* Count */}
        <div style={{ fontFamily:C.FM, color:C.dm, fontSize:9, letterSpacing:2, marginBottom:40, textAlign:'right' }}>
          {filtered.length} PROGRAMS
        </div>

        {/* Grid */}
        <div className="sp-grid">
          {filtered.map((sport,i) => <SportCard key={sport.name} sport={sport} delayIdx={i} />)}
        </div>
      </div>
    </section>
  )
}