import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/HLT_Logo_2.0_Update.png'
import OrderModal from '../components/OrderModal'

const C = {
  primary: '#4c6457',
  onPrimary: '#ffffff',
  primaryContainer: '#8fa899',
  onPrimaryContainer: '#273d32',
  secondary: '#8c4e37',
  secondaryContainer: '#feae91',
  surface: '#fcf9f3',
  surfaceContainerLow: '#f6f3ed',
  surfaceContainerHigh: '#ebe8e2',
  onSurface: '#1c1c18',
  onSurfaceVariant: '#424844',
  outline: '#c2c8c2',
  tertiaryContainer: '#b6a06e',
}

// ── Floating leaf SVGs ─────────────────────────────────────────────────────
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

function BobaBubble({ style }) {
  return (
    <div style={{
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.12,
      ...style,
    }} />
  )
}

// ── Scroll-reveal hook ────────────────────────────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

// ── Reveal wrapper ────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = 'up' }) {
  const [ref, visible] = useReveal()
  const transforms = { up: 'translateY(32px)', left: 'translateX(-32px)', right: 'translateX(32px)', none: 'none' }
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

// ── Marquee ticker ────────────────────────────────────────────────────────
const tickerItems = [
  '🧋 Brown Sugar Boba', '🍵 Ceremonial Matcha', '🥭 Mango Sunshine', '☁️ Matcha Cloud',
  '🍓 Strawberry Bliss', '🌸 Lychee Rose', '🐯 Brown Sugar Tiger', '☕ Oolong Roast Drip',
  '🫐 Taro Velvet', '🍑 Peach Oolong Slush', '🧋 Brown Sugar Boba', '🍵 Ceremonial Matcha',
  '🥭 Mango Sunshine', '☁️ Matcha Cloud', '🍓 Strawberry Bliss', '🌸 Lychee Rose',
]

function Marquee() {
  return (
    <div style={{
      overflow: 'hidden', background: C.primary, color: C.onPrimary,
      padding: '12px 0', userSelect: 'none',
    }}>
      <div style={{ display: 'flex', animation: 'marquee 32s linear infinite', width: 'max-content' }}>
        {tickerItems.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14,
            padding: '0 32px', whiteSpace: 'nowrap', opacity: 0.9,
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Featured drinks carousel ──────────────────────────────────────────────
const featuredDrinks = [
  { icon: '🧋', name: 'Classic Brown Sugar', desc: 'Signature Assam black tea with rich milk and slow-cooked brown sugar boba.', tag: 'Bestseller', bg: '#c8ddd3', color: C.onPrimaryContainer },
  { icon: '🍵', name: 'Matcha Cloud',         desc: 'Ceremonial grade matcha topped with our signature sweet cream foam cloud.',       tag: 'Staff Pick', bg: '#d4e8d0', color: '#1a4a28' },
  { icon: '🥭', name: 'Mango Sunshine',       desc: 'Jasmine green tea shaken with fresh mango purée and real fruit chunks.',          tag: 'Recommended', bg: '#fde8b8', color: '#7a4a00' },
  { icon: '🫐', name: 'Taro Velvet',          desc: 'Real taro root blended into a velvety, caffeine-free evening treat.',             tag: 'New', bg: '#e4dcf0', color: '#3b2060' },
  { icon: '🍓', name: 'Strawberry Bliss',     desc: 'Crushed strawberries, fresh mint, and lightly sweetened green tea.',              tag: 'Popular', bg: '#fce0e0', color: '#7a1a1a' },
  { icon: '☁️', name: 'Coconut Cold Brew',    desc: 'Smooth 18-hour cold brew finished with coconut milk and a hint of vanilla.',      tag: 'New', bg: '#e8f0f0', color: '#1a3a3a' },
]

function DrinkCarousel({ onOrder }) {
  const [active, setActive] = useState(0)
  const total = featuredDrinks.length
  const trackRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % total), 4000)
    return () => clearInterval(t)
  }, [total])

  const d = featuredDrinks[active]

  return (
    <div style={{ position: 'relative' }}>
      {/* Main card */}
      <div style={{
        borderRadius: 28, overflow: 'hidden',
        background: d.bg,
        minHeight: 340,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '48px 40px',
        textAlign: 'center',
        transition: 'background 0.5s ease',
        position: 'relative',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: d.color, opacity: 0.06 }} />
        <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: d.color, opacity: 0.08 }} />

        <div style={{ fontSize: 72, marginBottom: 16, animation: 'floatBob 3s ease-in-out infinite' }}>{d.icon}</div>

        <span style={{
          display: 'inline-block', padding: '4px 14px', borderRadius: 9999,
          background: 'rgba(255,255,255,0.55)', marginBottom: 12,
          fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 12,
          color: d.color, textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>
          {d.tag}
        </span>

        <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(22px, 3vw, 32px)', color: d.color, margin: '0 0 12px', lineHeight: 1.2 }}>
          {d.name}
        </h3>
        <p style={{ fontFamily: 'CobblerSans', fontSize: 15, color: d.color, opacity: 0.8, lineHeight: 1.65, maxWidth: 360, margin: '0 auto 24px' }}>
          {d.desc}
        </p>
        <button
          onClick={onOrder}
          style={{
            padding: '13px 32px', borderRadius: 9999,
            background: d.color, color: '#fff', border: 'none',
            fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 14,
            cursor: 'pointer', boxShadow: `0 4px 16px ${d.color}55`,
          }}
        >
          Order Now
        </button>
      </div>

      {/* Dot navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
        {featuredDrinks.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 28 : 8, height: 8, borderRadius: 9999, border: 'none',
              background: i === active ? C.primary : C.outline,
              cursor: 'pointer', padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Prev / Next */}
      {['←','→'].map((arrow, dir) => (
        <button
          key={arrow}
          onClick={() => setActive(a => dir === 0 ? (a - 1 + total) % total : (a + 1) % total)}
          style={{
            position: 'absolute', top: '42%',
            [dir === 0 ? 'left' : 'right']: -20,
            width: 40, height: 40, borderRadius: '50%',
            background: C.surface, border: `1px solid ${C.outline}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'CobblerSans', fontSize: 18, color: C.onSurface,
            cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
            transition: 'transform 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {arrow}
        </button>
      ))}
    </div>
  )
}

// ── Reviews ───────────────────────────────────────────────────────────────
const reviews = [
  { initials: 'SJ', name: 'Sarah J.',   role: 'Local Guide',     text: '"The Classic Milk Tea is literally the best I\'ve ever had. The boba is so fresh and warm when you get it!"' },
  { initials: 'MT', name: 'Michael T.', role: 'Tea Enthusiast',  text: '"Such a cozy vibe and the Matcha Cloud is out of this world. Highly recommend stopping by if you\'re in the area."' },
  { initials: 'EL', name: 'Emily L.',   role: 'Regular',         text: '"Friendly staff and great seasonal specials. The environment is perfect for getting a little work done."' },
]

function Container({ children, style, className }) {
  return (
    <div className={className} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', ...style }}>
      {children}
    </div>
  )
}

// ── HomePage ──────────────────────────────────────────────────────────────
export default function HomePage() {
  const navigate = useNavigate()
  const [showOrder, setShowOrder] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ background: C.surface, overflowX: 'hidden' }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(145deg, #c8ddd3 0%, #deeae3 35%, ${C.surface} 70%)`,
        position: 'relative', overflow: 'hidden',
        padding: '80px 0 72px',
      }}>

        {/* Floating botanical decorations */}
        <Leaf style={{ position: 'absolute', top: '-5%', left: '3%',  width: 120, color: C.primary, animation: 'leafFloat1 9s ease-in-out infinite' }} />
        <Leaf style={{ position: 'absolute', top: '10%', right: '5%', width: 90,  color: C.primary, animation: 'leafFloat2 11s ease-in-out infinite', transform: 'rotate(-30deg)' }} />
        <SmallLeaf style={{ position: 'absolute', bottom: '8%',  left: '12%', width: 60, color: C.primary, animation: 'leafFloat3 7s ease-in-out infinite', transform: 'rotate(20deg)' }} />
        <SmallLeaf style={{ position: 'absolute', top: '30%', right: '2%', width: 50, color: C.primary, animation: 'leafFloat1 8s ease-in-out infinite 2s', transform: 'rotate(-50deg)' }} />
        <SmallLeaf style={{ position: 'absolute', bottom: '15%', right: '18%', width: 45, color: C.primary, animation: 'leafFloat2 10s ease-in-out infinite 1s' }} />
        <SmallLeaf style={{ position: 'absolute', top: '55%', left: '7%', width: 40, color: C.secondary, animation: 'leafFloat3 12s ease-in-out infinite 3s', transform: 'rotate(40deg)' }} />

        {/* Boba bubbles background */}
        {[
          { w: 80,  top: '15%', left: '20%',  anim: '14s' },
          { w: 50,  top: '60%', right: '25%', anim: '10s' },
          { w: 100, bottom: '10%', left: '40%', anim: '16s' },
          { w: 40,  top: '40%', right: '40%', anim: '8s' },
        ].map((b, i) => (
          <BobaBubble key={i} style={{ position: 'absolute', width: b.w, height: b.w, color: C.primaryContainer, ...b, animation: `bobaBob ${b.anim} ease-in-out infinite ${i * 2}s` }} />
        ))}

        <Container className="hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center',
        }}>
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, position: 'relative', zIndex: 2 }}>
            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}>
              <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 30, color: C.secondary, margin: '0 0 10px' }}>
                Artisanal Boba & Tea
              </p>
              <h1 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(34px, 5vw, 60px)', color: C.primary, margin: 0, lineHeight: 1.1 }}>
                Steeped in Joy,<br />Poured with Love.
              </h1>
            </div>

            <p style={{
              fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant,
              lineHeight: 1.8, maxWidth: 480, margin: 0,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s',
            }}>
              Discover artisanal teas and boba crafted for cozy moments. Hand-blended, ethically sourced, and served with a smile.
            </p>

            <div style={{
              display: 'flex', gap: 12, flexWrap: 'wrap',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s',
            }}>
              <button
                onClick={() => setShowOrder(true)}
                style={{
                  padding: '15px 36px', borderRadius: 9999,
                  background: C.primary, color: C.onPrimary, border: 'none',
                  fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15,
                  cursor: 'pointer', boxShadow: '0 4px 20px rgba(76,100,87,0.3)',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(76,100,87,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(76,100,87,0.3)' }}
              >
                Order Now
              </button>
              <button
                onClick={() => navigate('/menu')}
                style={{
                  padding: '15px 36px', borderRadius: 9999,
                  background: 'rgba(255,255,255,0.6)', border: `2px solid ${C.primary}`, color: C.primary,
                  fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15,
                  cursor: 'pointer', backdropFilter: 'blur(4px)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.85)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.6)'}
              >
                Explore Menu
              </button>
            </div>
          </div>

          {/* Logo orb */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2,
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'scale(1)' : 'scale(0.85)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.34,1.3,0.64,1) 0.2s',
          }}>
            {/* Concentric rings */}
            {[300, 240, 190].map((s, i) => (
              <div key={s} style={{
                position: 'absolute',
                width: s, height: s, borderRadius: '50%',
                border: `${2 - i * 0.5}px solid ${C.primaryContainer}`,
                opacity: 0.3 - i * 0.07,
                animation: `spin ${18 + i * 6}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
              }} />
            ))}
            <div style={{
              width: 200, height: 200, borderRadius: '50%',
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              border: `3px solid ${C.primaryContainer}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 12px 56px rgba(76,100,87,0.18)',
              animation: 'floatBob 4s ease-in-out infinite',
            }}>
              <img src={logo} alt="Happy Little Teas" style={{ width: 160, height: 'auto' }} />
            </div>
          </div>
        </Container>
      </section>

      {/* ══ MARQUEE TICKER ════════════════════════════════════════════════ */}
      <Marquee />

      {/* ══ FEATURED CAROUSEL ═════════════════════════════════════════════ */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <Reveal>
            <div style={{ marginBottom: 40, textAlign: 'center' }}>
              <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 28, color: C.secondary, margin: '0 0 8px' }}>
                Our favourites
              </p>
              <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(24px, 3vw, 40px)', color: C.onSurface, margin: 0 }}>
                Featured Drinks
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <DrinkCarousel onOrder={() => setShowOrder(true)} />
          </Reveal>
        </Container>
      </section>

      {/* ══ COLOR BLOCK — ABOUT STRIP ═════════════════════════════════════ */}
      <section style={{
        background: C.primary,
        padding: '72px 0',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative leaves on dark bg */}
        <Leaf style={{ position: 'absolute', top: '-10%', right: '5%', width: 160, color: '#fff', animation: 'leafFloat2 12s ease-in-out infinite', opacity: 0.06 }} />
        <SmallLeaf style={{ position: 'absolute', bottom: '-5%', left: '8%', width: 80, color: '#fff', animation: 'leafFloat1 9s ease-in-out infinite', opacity: 0.07 }} />

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-strip" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'center', textAlign: 'center' }}>
            <Reveal direction="left">
              <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 28, color: C.primaryContainer, margin: '0 0 10px' }}>
                Since 2019
              </p>
              <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#ffffff', margin: '0 0 16px', lineHeight: 1.15 }}>
                Tea rooted in tradition,<br />served with joy.
              </h2>
              <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, margin: '0 auto 28px', maxWidth: 560 }}>
                Born from a family tradition of artisanal blending, every leaf is hand-sorted and every batch slow-brewed. We partner directly with sustainable farms so every sip celebrates the earth.
              </p>
              <button
                onClick={() => navigate('/story')}
                style={{
                  padding: '13px 32px', borderRadius: 9999,
                  background: 'rgba(255,255,255,0.15)', color: '#ffffff',
                  border: '2px solid rgba(255,255,255,0.4)',
                  fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15,
                  cursor: 'pointer', backdropFilter: 'blur(4px)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                Read Our Story →
              </button>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
                {[
                  { icon: '🌱', stat: '100%', label: 'Ethically sourced' },
                  { icon: '☕', stat: '50+',  label: 'Drinks on the menu' },
                  { icon: '🌍', stat: '3',    label: 'Countries of origin' },
                ].map(s => (
                  <div key={s.label} style={{
                    background: 'rgba(255,255,255,0.1)', borderRadius: 20,
                    padding: '24px 16px', textAlign: 'center',
                  }}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                    <div style={{ fontFamily: 'ArtSchoolDropout', fontSize: 28, color: '#ffffff', lineHeight: 1 }}>{s.stat}</div>
                    <div style={{ fontFamily: 'CobblerSans', fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ══ REVIEWS ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: C.surfaceContainerLow, borderTop: `1px solid ${C.outline}` }}>
        <Container>
          <Reveal>
            <div style={{ marginBottom: 40, textAlign: 'center' }}>
              <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 28, color: C.secondary, margin: '0 0 8px' }}>
                What people say
              </p>
              <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(24px, 3vw, 40px)', color: C.onSurface, margin: 0 }}>
                Community Love
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 20 }}>
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <div style={{
                  background: C.surface, borderRadius: 20, padding: 28,
                  border: `1px solid ${C.outline}`, height: '100%',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(76,100,87,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ fontFamily: 'Material Icons', fontSize: 18, color: '#f0a500' }}>star</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: 'CobblerSans', fontSize: 15, color: C.onSurface, lineHeight: 1.7, margin: '0 0 20px', fontStyle: 'italic' }}>
                    {r.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                      background: C.primaryContainer,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'ArtSchoolDropout', fontSize: 15, color: C.onPrimaryContainer,
                    }}>
                      {r.initials}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 14, color: C.onSurface, margin: 0 }}>{r.name}</p>
                      <p style={{ fontFamily: 'CobblerSans', fontSize: 12, color: C.onSurfaceVariant, margin: 0 }}>{r.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ LEAF DIVIDER ══════════════════════════════════════════════════ */}
      <div style={{
        background: `linear-gradient(135deg, #e8f3ec 0%, ${C.surfaceContainerHigh} 100%)`,
        padding: '56px 0',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
        borderTop: `1px solid ${C.outline}`,
      }}>
        <SmallLeaf style={{ position: 'absolute', left: '10%', top: '10%', width: 52, color: C.primary, animation: 'leafFloat1 8s ease-in-out infinite', opacity: 0.5 }} />
        <SmallLeaf style={{ position: 'absolute', right: '12%', bottom: '10%', width: 40, color: C.primary, animation: 'leafFloat2 10s ease-in-out infinite 1s', opacity: 0.4, transform: 'rotate(-30deg)' }} />
        <SmallLeaf style={{ position: 'absolute', right: '28%', top: '20%', width: 36, color: C.secondary, animation: 'leafFloat3 9s ease-in-out infinite 2s', opacity: 0.35, transform: 'rotate(20deg)' }} />
        <Reveal>
          <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 'clamp(28px, 5vw, 48px)', color: C.primary, margin: '0 0 20px' }}>
            Every sip tells a story.
          </p>
          <button
            onClick={() => setShowOrder(true)}
            style={{
              padding: '16px 44px', borderRadius: 9999,
              background: C.primary, color: C.onPrimary, border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
              cursor: 'pointer', boxShadow: '0 6px 24px rgba(76,100,87,0.3)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(76,100,87,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(76,100,87,0.3)' }}
          >
            Order Now
          </button>
        </Reveal>
      </div>

      {/* ══ LOCATIONS PREVIEW ═════════════════════════════════════════════ */}
      <section id="locations" style={{ padding: '80px 0', borderTop: `1px solid ${C.outline}` }}>
        <Container>
          <Reveal>
            <div style={{ marginBottom: 36, textAlign: 'center' }}>
              <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 28, color: C.secondary, margin: '0 0 8px' }}>
                Come visit us
              </p>
              <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(24px, 3vw, 40px)', color: C.onSurface, margin: 0 }}>
                Find Us
              </h2>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
            {[
              { name: 'Downtown', address: '123 Blossom St, Suite 4', hours: 'Mon–Sat 9am–8pm · Sun 10am–6pm', icon: '🌿' },
              { name: 'Eastside',  address: '456 Garden Ave',          hours: 'Mon–Fri 8am–7pm · Sat–Sun 10am–7pm', icon: '🍃' },
            ].map((loc, i) => (
              <Reveal key={loc.name} delay={i * 100}>
                <div
                  onClick={() => navigate('/find-us')}
                  style={{
                    background: C.surfaceContainerLow, border: `1px solid ${C.outline}`,
                    borderRadius: 20, padding: 28,
                    display: 'flex', gap: 18, alignItems: 'flex-start',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(76,100,87,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                >
                  <span style={{ fontSize: 32, flexShrink: 0 }}>{loc.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: C.onSurface, margin: '0 0 6px' }}>{loc.name}</h3>
                    <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, margin: '0 0 4px' }}>{loc.address}</p>
                    <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: C.onSurfaceVariant, margin: '0 0 12px' }}>{loc.hours}</p>
                    <span style={{ fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 13, color: C.primary }}>Get directions →</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════ */}
      <footer style={{ background: C.onSurface, padding: '48px 0' }}>
        <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <div>
            <p style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: C.primaryContainer, margin: '0 0 4px' }}>Happy Little Teas</p>
            <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 20, color: 'rgba(179,205,189,0.7)', margin: '0 0 8px' }}>Steeped in joy, poured with love.</p>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: '#6b7280', margin: 0 }}>© 2026 Happy Little Teas. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {[['Home','/'],['Menu','/menu'],['Our Story','/story'],['Find Us','/find-us']].map(([l,href]) => (
              <a key={l} href={href} style={{ fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14, color: '#9ca3af', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = C.primaryContainer}
                onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
              >{l}</a>
            ))}
          </div>
        </Container>
      </footer>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}

      {/* ══ KEYFRAMES ═════════════════════════════════════════════════════ */}
      <style>{`
        @keyframes leafFloat1 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          33%      { transform: translateY(-14px) rotate(4deg); }
          66%      { transform: translateY(6px) rotate(-3deg); }
        }
        @keyframes leafFloat2 {
          0%,100% { transform: translateY(0px) rotate(-30deg); }
          40%      { transform: translateY(-18px) rotate(-24deg); }
          70%      { transform: translateY(8px) rotate(-34deg); }
        }
        @keyframes leafFloat3 {
          0%,100% { transform: translateY(0px) rotate(20deg); }
          50%      { transform: translateY(-10px) rotate(25deg); }
        }
        @keyframes floatBob {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes bobaBob {
          0%,100% { transform: translateY(0); opacity: 0.12; }
          50%      { transform: translateY(-20px); opacity: 0.08; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (min-width: 768px) {
          .hero-grid    { grid-template-columns: 1fr 1fr !important; }
          .about-strip  { grid-template-columns: 1fr 1fr !important; text-align: left !important; }
        }
        @media (min-width: 900px) {
          .story-split         { grid-template-columns: 1fr 1fr !important; }
          .story-split-reverse { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}
