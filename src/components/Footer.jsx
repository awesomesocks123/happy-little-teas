import { useNavigate } from 'react-router-dom'

const primary        = '#4c6457'
const primaryContainer = '#8fa899'

// ── Botanical SVGs ─────────────────────────────────────────────────────────
function Leaf({ style }) {
  return (
    <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M30 75 C30 75 5 55 5 30 C5 10 18 2 30 2 C42 2 55 10 55 30 C55 55 30 75 30 75Z"
        fill="currentColor" fillOpacity="0.18" />
      <path d="M30 75 C30 75 30 40 30 2" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 45 C20 38 10 32 5 30" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
      <path d="M30 35 C40 28 50 28 55 30" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
function SmallLeaf({ style }) {
  return (
    <svg viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M20 52 C20 52 3 38 3 20 C3 7 11 1 20 1 C29 1 37 7 37 20 C37 38 20 52 20 52Z"
        fill="currentColor" fillOpacity="0.14" />
      <path d="M20 52 C20 52 20 26 20 1" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
function JasmineFlower({ style }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      {[0,72,144,216,288].map(deg => (
        <ellipse key={deg} cx="24" cy="13" rx="4.5" ry="8"
          fill="currentColor" fillOpacity="0.22"
          transform={`rotate(${deg} 24 24)`} />
      ))}
      <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

// Use brighter contrasting colors so botanicals are visible on the dark footer bg
const G = '#b3cdbd'  // light mint — stands out on #1c1c18
const B = '#d4a57a'  // light warm brown

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer style={{ background: '#1c1c18', padding: '48px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Botanicals — using contrasting mint + warm tones so they're visible on dark bg */}
      <Leaf style={{ position: 'absolute', top: '-20%', right: '3%', width: 110, color: G, animation: 'leafFloat2 13s ease-in-out infinite' }} />
      <Leaf style={{ position: 'absolute', bottom: '-15%', left: '2%', width: 90, color: G, animation: 'leafFloat1 10s ease-in-out infinite 1s', transform: 'rotate(15deg)' }} />
      <SmallLeaf style={{ position: 'absolute', top: '10%', left: '30%', width: 52, color: G, animation: 'leafFloat3 9s ease-in-out infinite 2s', transform: 'rotate(25deg)' }} />
      <SmallLeaf style={{ position: 'absolute', bottom: '5%', right: '25%', width: 44, color: G, animation: 'leafFloat2 11s ease-in-out infinite 0.5s' }} />
      <JasmineFlower style={{ position: 'absolute', top: '15%', right: '18%', width: 48, color: B, animation: 'leafFloat1 12s ease-in-out infinite 1.5s' }} />
      <JasmineFlower style={{ position: 'absolute', bottom: '10%', left: '18%', width: 40, color: B, animation: 'leafFloat3 10s ease-in-out infinite 3s' }} />
      {/* Bottom-edge cluster */}
      <Leaf style={{ position: 'absolute', bottom: '-16%', left: '8%', width: 80, color: G, animation: 'leafFloat1 10s ease-in-out infinite 1s', transform: 'rotate(20deg)' }} />
      <SmallLeaf style={{ position: 'absolute', bottom: '-5%', left: '24%', width: 52, color: G, animation: 'leafFloat2 9s ease-in-out infinite', transform: 'rotate(40deg)' }} />
      <JasmineFlower style={{ position: 'absolute', bottom: '-2%', left: '40%', width: 44, color: B, animation: 'leafFloat3 11s ease-in-out infinite 2s' }} />
      <JasmineFlower style={{ position: 'absolute', bottom: '-3%', right: '28%', width: 38, color: B, animation: 'leafFloat1 13s ease-in-out infinite 0.5s' }} />
      <SmallLeaf style={{ position: 'absolute', bottom: '-7%', right: '12%', width: 48, color: G, animation: 'leafFloat2 8s ease-in-out infinite 1.5s', transform: 'rotate(-25deg)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24, position: 'relative', zIndex: 1 }}>
        <div>
          <p style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: primaryContainer, margin: '0 0 4px' }}>Happy Little Teas</p>
          <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 20, color: 'rgba(179,205,189,0.7)', margin: '0 0 8px' }}>Steeped in joy, poured with love.</p>
          <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: '#6b7280', margin: 0 }}>© 2026 Happy Little Teas. All rights reserved.</p>
        </div>
        {/* Hours */}
        <div>
          <p style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 12, color: primaryContainer, margin: '0 0 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Hours</p>
          {[
            { days: 'Mon – Fri', time: '8am – 8pm' },
            { days: 'Saturday',  time: '9am – 9pm' },
            { days: 'Sunday',    time: '10am – 6pm' },
          ].map(h => (
            <div key={h.days} style={{ display: 'flex', gap: 16, justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'CobblerSans', fontSize: 13, color: '#9ca3af' }}>{h.days}</span>
              <span style={{ fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 13, color: '#d1d5db' }}>{h.time}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {[['Home','/'],['Menu','/menu'],['Our Story','/story'],['Find Us','/find-us']].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={e => { e.preventDefault(); navigate(href) }}
              style={{ fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14, color: '#9ca3af', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = primaryContainer}
              onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
            >{label}</a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes leafFloat1 { 0%,100%{transform:translateY(0px) rotate(0deg)}33%{transform:translateY(-14px) rotate(4deg)}66%{transform:translateY(6px) rotate(-3deg)} }
        @keyframes leafFloat2 { 0%,100%{transform:translateY(0px) rotate(-30deg)}40%{transform:translateY(-18px) rotate(-24deg)}70%{transform:translateY(8px) rotate(-34deg)} }
        @keyframes leafFloat3 { 0%,100%{transform:translateY(0px) rotate(20deg)}50%{transform:translateY(-10px) rotate(25deg)} }
      `}</style>
    </footer>
  )
}
