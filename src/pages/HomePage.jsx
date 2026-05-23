import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/HLT_Logo_2.0_Update.png'
import OrderModal from '../components/OrderModal'

const C = {
  primary: '#4c6457',
  onPrimary: '#ffffff',
  primaryContainer: '#8fa899',
  onPrimaryContainer: '#273d32',
  secondary: '#8c4e37',
  surface: '#fcf9f3',
  surfaceContainerLow: '#f6f3ed',
  surfaceContainerHigh: '#ebe8e2',
  onSurface: '#1c1c18',
  onSurfaceVariant: '#424844',
  outline: '#c2c8c2',
  tertiaryContainer: '#b6a06e',
}

const drinks = [
  {
    tag: 'Bestseller', tagIcon: 'star',
    name: 'Classic Milk Tea',
    desc: 'Our signature black tea blend with creamy organic milk and slow-cooked brown sugar boba.',
    price: '$5.50',
    bg: C.primaryContainer, color: C.onPrimaryContainer,
  },
  {
    tag: 'Staff Pick', tagIcon: 'favorite',
    name: 'Matcha Cloud',
    desc: 'Ceremonial grade goodness topped with our signature sweet cream cloud.',
    price: '$6.00',
    bg: '#dce8e0', color: C.onPrimaryContainer,
  },
  {
    tag: 'New', tagIcon: 'new_releases',
    name: 'Taro Velvet',
    desc: 'Real taro root blended into a velvety, caffeine-free treat perfect for evenings.',
    price: '$5.75',
    bg: '#e8e0f0', color: '#3b2d5c',
  },
  {
    tag: 'Popular', tagIcon: 'local_fire_department',
    name: 'Brown Sugar Boba',
    desc: 'Fresh boba pearls in a caramel brown sugar milk base. Warm, sweet, irresistible.',
    price: '$5.50',
    bg: '#f5e6d3', color: '#6b3a1f',
  },
]

const reviews = [
  { initials: 'SJ', name: 'Sarah J.', role: 'Local Guide', text: '"The Classic Milk Tea is literally the best I\'ve ever had. The boba is so fresh and warm when you get it!"' },
  { initials: 'MT', name: 'Michael T.', role: 'Tea Enthusiast', text: '"Such a cozy vibe and the Matcha Cloud is out of this world. Highly recommend stopping by if you\'re in the area."' },
  { initials: 'EL', name: 'Emily L.', role: 'Regular', text: '"Friendly staff and great seasonal specials. The environment is perfect for getting a little work done."' },
]

function Container({ children, style, className }) {
  return (
    <div className={className} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', ...style }}>
      {children}
    </div>
  )
}

export default function HomePage() {
  const navigate = useNavigate()
  const [activeReview, setActiveReview] = useState(0)
  const [showOrder, setShowOrder] = useState(false)

  return (
    <div style={{ background: C.surface }}>

      {/* ── Hero ── */}
      <section style={{ background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 55%)` }}>
        <Container className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 40,
          padding: '64px 24px',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 22, color: C.secondary, margin: '0 0 8px' }}>
                Artisanal Boba & Tea
              </p>
              <h1 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(32px, 5vw, 56px)', color: C.primary, margin: 0, lineHeight: 1.15 }}>
                Steeped in Joy,<br />Poured with Love.
              </h1>
            </div>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.7, maxWidth: 500, margin: 0 }}>
              Discover artisanal teas and boba crafted for cozy moments. Hand-blended, ethically sourced, and served with a smile. Every sip is a little pause from the everyday.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowOrder(true)}
                style={{
                  padding: '14px 32px', borderRadius: 9999,
                  background: C.primary, color: C.onPrimary, border: 'none',
                  fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15,
                  cursor: 'pointer', boxShadow: '0 2px 16px rgba(76,100,87,0.25)',
                }}
              >
                Order Now
              </button>
              <button
                onClick={() => navigate('/menu')}
                style={{
                  padding: '14px 32px', borderRadius: 9999,
                  background: 'transparent', border: `2px solid ${C.primary}`, color: C.primary,
                  fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15,
                  cursor: 'pointer',
                }}
              >
                Explore Menu
              </button>
            </div>
          </div>

          {/* Hero visual */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}>
            <div style={{
              width: 260, height: 260, borderRadius: '50%',
              background: 'rgba(255,255,255,0.7)',
              border: `4px solid ${C.primaryContainer}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 48px rgba(76,100,87,0.15)',
            }}>
              <img src={logo} alt="Happy Little Teas" style={{ width: 200, height: 'auto' }} />
            </div>
          </div>
        </Container>

        <style>{`
          @media (min-width: 768px) {
            .hero-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Recommended ── */}
      <section style={{ padding: '72px 0' }}>
        <Container>
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: '0 0 6px' }}>
              Our favourites
            </p>
            <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(24px, 3vw, 36px)', color: C.onSurface, margin: 0 }}>
              Recommended Drinks
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 20,
          }}>
            {drinks.map((d) => (
              <div
                key={d.name}
                style={{
                  borderRadius: 20, background: d.bg,
                  padding: '24px 20px',
                  display: 'flex', flexDirection: 'column', gap: 12,
                }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  background: 'rgba(255,255,255,0.55)', borderRadius: 9999,
                  padding: '3px 10px', width: 'fit-content',
                  fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 11,
                  color: d.color, textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                  <span style={{ fontFamily: 'Material Icons', fontSize: 13 }}>{d.tagIcon}</span>
                  {d.tag}
                </span>
                <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: d.color, margin: 0 }}>{d.name}</h3>
                <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: d.color, margin: 0, lineHeight: 1.55, opacity: 0.85, flex: 1 }}>
                  {d.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: d.color }}>{d.price}</span>
                  <button
                    onClick={() => setShowOrder(true)}
                    style={{
                      borderRadius: 9999, background: 'rgba(255,255,255,0.6)',
                      border: 'none', padding: '8px 18px',
                      fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 13,
                      color: d.color, cursor: 'pointer',
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Reviews ── */}
      <section style={{ background: C.surfaceContainerLow, borderTop: `1px solid ${C.outline}`, borderBottom: `1px solid ${C.outline}`, padding: '72px 0' }}>
        <Container>
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: '0 0 6px' }}>
              What people say
            </p>
            <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(24px, 3vw, 36px)', color: C.onSurface, margin: 0 }}>
              Community Love
            </h2>
          </div>

          {/* Review cards — grid on desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {reviews.map((r, i) => (
              <div
                key={r.name}
                style={{
                  background: C.surface, borderRadius: 20,
                  padding: 24, border: `1px solid ${C.outline}`,
                }}
              >
                <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ fontFamily: 'Material Icons', fontSize: 18, color: '#f0a500' }}>star</span>
                  ))}
                </div>
                <p style={{ fontFamily: 'CobblerSans', fontSize: 15, color: C.onSurface, lineHeight: 1.65, margin: '0 0 18px', fontStyle: 'italic' }}>
                  {r.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: C.primaryContainer,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'ArtSchoolDropout', fontSize: 14, color: C.onPrimaryContainer,
                    flexShrink: 0,
                  }}>
                    {r.initials}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 14, color: C.onSurface, margin: 0 }}>{r.name}</p>
                    <p style={{ fontFamily: 'CobblerSans', fontSize: 12, color: C.onSurfaceVariant, margin: 0 }}>{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Story ── */}
      <section id="story" style={{ padding: '72px 0' }}>
        <Container>
          <div className="story-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 48,
            alignItems: 'center',
          }}>
            <div>
              <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: '0 0 6px' }}>
                Where it all began
              </p>
              <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(24px, 3vw, 36px)', color: C.onSurface, margin: '0 0 20px' }}>
                Our Story
              </h2>
              <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.75, margin: '0 0 14px' }}>
                Happy Little Teas began with a simple belief: that a great cup of tea has the power to pause time. Born from a family tradition of artisanal blending, we hand-sort every leaf to ensure only the highest quality reaches your cup.
              </p>
              <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.75, margin: '0 0 24px' }}>
                We partner directly with sustainable, ethical farms to bring you flavors that celebrate the earth — from our ceremonial matcha to our signature boba.
              </p>
              <button
                onClick={() => navigate('/menu')}
                style={{
                  padding: '12px 28px', borderRadius: 9999,
                  background: 'transparent', border: `2px solid ${C.primary}`, color: C.primary,
                  fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15,
                  cursor: 'pointer',
                }}
              >
                Explore Our Menu
              </button>
            </div>

            <div style={{
              aspectRatio: '4/3', borderRadius: 24,
              background: `linear-gradient(135deg, ${C.primaryContainer}, ${C.tertiaryContainer})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 240,
            }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'Material Icons', fontSize: 64, color: C.onPrimaryContainer, opacity: 0.4 }}>spa</span>
                <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 22, color: C.onPrimaryContainer, margin: '12px 0 0' }}>
                  Hand-sorted, ethically sourced
                </p>
              </div>
            </div>
          </div>
        </Container>

        <style>{`
          @media (min-width: 900px) {
            .story-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Locations ── */}
      <section id="locations" style={{ background: C.surfaceContainerLow, borderTop: `1px solid ${C.outline}`, padding: '72px 0' }}>
        <Container>
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: '0 0 6px' }}>
              Come visit us
            </p>
            <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(24px, 3vw, 36px)', color: C.onSurface, margin: 0 }}>
              Find Us
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { name: 'Downtown', address: '123 Blossom St, Suite 4', hours: 'Mon–Sat 9am–8pm · Sun 10am–6pm' },
              { name: 'Eastside', address: '456 Garden Ave', hours: 'Mon–Fri 8am–7pm · Sat–Sun 10am–7pm' },
            ].map((loc) => (
              <div
                key={loc.name}
                style={{
                  background: C.surface, border: `1px solid ${C.outline}`,
                  borderRadius: 20, padding: 24,
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                }}
              >
                <span style={{ fontFamily: 'Material Icons', fontSize: 32, color: C.primary, marginTop: 2, flexShrink: 0 }}>location_on</span>
                <div>
                  <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: C.onSurface, margin: '0 0 6px' }}>{loc.name}</h3>
                  <p style={{ fontFamily: 'CobblerSans', fontSize: 15, color: C.onSurfaceVariant, margin: '0 0 4px' }}>{loc.address}</p>
                  <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, margin: 0 }}>{loc.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: C.onSurface, padding: '40px 0' }}>
        <Container style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', gap: 24,
        }}>
          <div>
            <p style={{ fontFamily: 'ArtSchoolDropout', fontSize: 18, color: C.primaryContainer, margin: '0 0 4px' }}>
              Happy Little Teas
            </p>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: '#9ca3af', margin: 0 }}>
              © 2026 Happy Little Teas. All rights reserved.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[['Home','/'],['Menu','/menu'],['Our Story','/story'],['Find Us','/find-us']].map(([l, href]) => (
              <a key={l} href={href} style={{ fontFamily: 'CobblerSans', fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </Container>
      </footer>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
    </div>
  )
}
