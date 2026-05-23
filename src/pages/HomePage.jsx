import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/HLT_Logo_2.0_Update.png'

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
  tertiary: '#6e5c30',
  tertiaryContainer: '#b6a06e',
}

const drinks = [
  {
    tag: 'Bestseller',
    tagIcon: 'star',
    name: 'Classic Milk Tea',
    desc: 'Our signature black tea blend with creamy organic milk and slow-cooked brown sugar boba.',
    price: '$5.50',
    bg: C.primaryContainer,
    color: C.onPrimaryContainer,
  },
  {
    tag: 'Staff Pick',
    tagIcon: 'favorite',
    name: 'Matcha Cloud',
    desc: 'Ceremonial grade goodness topped with our signature sweet cream cloud.',
    price: '$6.00',
    bg: '#dce8e0',
    color: C.onPrimaryContainer,
  },
  {
    tag: 'New',
    tagIcon: 'new_releases',
    name: 'Taro Velvet',
    desc: 'Real taro root blended into a velvety, caffeine-free treat perfect for evenings.',
    price: '$5.75',
    bg: '#e8e0f0',
    color: '#3b2d5c',
  },
]

const reviews = [
  {
    initials: 'SJ',
    name: 'Sarah J.',
    role: 'Local Guide',
    text: '"The Classic Milk Tea is literally the best I\'ve ever had. The boba is so fresh and warm when you get it!"',
  },
  {
    initials: 'MT',
    name: 'Michael T.',
    role: 'Tea Enthusiast',
    text: '"Such a cozy vibe and the Matcha Cloud is out of this world. Highly recommend stopping by if you\'re in the area."',
  },
  {
    initials: 'EL',
    name: 'Emily L.',
    role: 'Regular',
    text: '"Friendly staff and great seasonal specials. The environment is perfect for getting a little work done."',
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [activeReview, setActiveReview] = useState(0)

  return (
    <div style={{ background: C.surface }}>

      {/* ── Hero ── */}
      <section style={{
        background: `linear-gradient(160deg, #e8f0eb 0%, ${C.surface} 60%)`,
        padding: '48px 24px 40px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
        textAlign: 'center',
      }}>
        <div style={{
          width: 120, height: 120, borderRadius: '50%',
          background: '#fff', border: `3px solid ${C.primaryContainer}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(76,100,87,0.12)',
          overflow: 'hidden',
        }}>
          <img src={logo} alt="HLT Logo" style={{ width: 100, height: 'auto' }} />
        </div>

        <div>
          <p style={{
            fontFamily: 'MollicaHandDrawn', fontSize: 22, color: C.secondary,
            margin: '0 0 8px',
          }}>
            Artisanal Boba & Tea
          </p>
          <h1 style={{
            fontFamily: 'ArtSchoolDropout', fontSize: 32, color: C.primary,
            margin: 0, lineHeight: 1.2,
          }}>
            Steeped in Joy,<br />Poured with Love.
          </h1>
        </div>

        <p style={{
          fontFamily: 'CobblerSans', fontSize: 15, color: C.onSurfaceVariant,
          lineHeight: 1.6, maxWidth: 320, margin: 0,
        }}>
          Discover artisanal teas and boba crafted for cozy moments. Hand-blended, ethically sourced, and served with a smile.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/menu')}
            style={{
              padding: '14px 28px', borderRadius: 9999,
              background: C.primary, color: C.onPrimary, border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 2px 12px rgba(76,100,87,0.25)',
            }}
          >
            <span style={{ fontFamily: 'Material Icons', fontSize: 18 }}>shopping_bag</span>
            Order Now
          </button>
          <button
            onClick={() => navigate('/menu')}
            style={{
              padding: '14px 28px', borderRadius: 9999,
              background: 'transparent', border: `2px solid ${C.primary}`, color: C.primary,
              fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15,
              cursor: 'pointer',
            }}
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* ── Recommended ── */}
      <section style={{ padding: '40px 0 0' }}>
        <div style={{ padding: '0 24px', marginBottom: 20 }}>
          <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 18, color: C.secondary, margin: '0 0 4px' }}>
            Our favourites
          </p>
          <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 24, color: C.onSurface, margin: 0 }}>
            Recommended Drinks
          </h2>
        </div>

        {/* Horizontal scroll cards */}
        <div style={{
          display: 'flex', gap: 16, overflowX: 'auto',
          padding: '4px 24px 24px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none', scrollbarWidth: 'none',
        }}>
          {drinks.map((d) => (
            <div
              key={d.name}
              style={{
                minWidth: 220, borderRadius: 20,
                background: d.bg, padding: 20,
                scrollSnapAlign: 'start',
                display: 'flex', flexDirection: 'column', gap: 10,
                flexShrink: 0,
              }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: 'rgba(255,255,255,0.5)', borderRadius: 9999,
                padding: '3px 10px',
                fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 11,
                color: d.color, textTransform: 'uppercase', letterSpacing: '0.05em',
                width: 'fit-content',
              }}>
                <span style={{ fontFamily: 'Material Icons', fontSize: 13 }}>{d.tagIcon}</span>
                {d.tag}
              </span>
              <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: d.color, margin: 0 }}>
                {d.name}
              </h3>
              <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: d.color, margin: 0, lineHeight: 1.5, opacity: 0.85 }}>
                {d.desc}
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 18, color: d.color }}>{d.price}</span>
                <button
                  onClick={() => navigate('/menu')}
                  style={{
                    borderRadius: 9999, background: 'rgba(255,255,255,0.6)',
                    border: 'none', padding: '8px 16px',
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
      </section>

      {/* ── Reviews ── */}
      <section style={{ padding: '40px 24px' }}>
        <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 18, color: C.secondary, margin: '0 0 4px' }}>
          What people say
        </p>
        <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 24, color: C.onSurface, margin: '0 0 20px' }}>
          Community Love
        </h2>

        <div style={{
          background: C.surfaceContainerLow, borderRadius: 20,
          padding: 24, border: `1px solid ${C.outline}`,
        }}>
          <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ fontFamily: 'Material Icons', fontSize: 18, color: '#f0a500' }}>star</span>
            ))}
          </div>
          <p style={{
            fontFamily: 'CobblerSans', fontSize: 15, color: C.onSurface,
            lineHeight: 1.6, margin: '0 0 16px', fontStyle: 'italic',
          }}>
            {reviews[activeReview].text}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: C.primaryContainer,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'ArtSchoolDropout', fontSize: 14, color: C.onPrimaryContainer,
            }}>
              {reviews[activeReview].initials}
            </div>
            <div>
              <p style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 14, color: C.onSurface, margin: 0 }}>
                {reviews[activeReview].name}
              </p>
              <p style={{ fontFamily: 'CobblerSans', fontSize: 12, color: C.onSurfaceVariant, margin: 0 }}>
                {reviews[activeReview].role}
              </p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveReview(i)}
              style={{
                width: i === activeReview ? 24 : 8, height: 8, borderRadius: 9999,
                background: i === activeReview ? C.primary : C.outline,
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 0.2s ease, background 0.2s ease',
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section id="story" style={{
        padding: '40px 24px',
        background: C.surfaceContainerLow,
        borderTop: `1px solid ${C.outline}`,
      }}>
        <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 18, color: C.secondary, margin: '0 0 4px' }}>
          Where it all began
        </p>
        <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 24, color: C.onSurface, margin: '0 0 16px' }}>
          Our Story
        </h2>

        <div style={{
          width: '100%', aspectRatio: '16/9', borderRadius: 16,
          background: `linear-gradient(135deg, ${C.primaryContainer}, ${C.tertiaryContainer})`,
          marginBottom: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <div style={{ textAlign: 'center', padding: 20 }}>
            <span style={{ fontFamily: 'Material Icons', fontSize: 48, color: C.onPrimaryContainer, opacity: 0.5 }}>spa</span>
            <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.onPrimaryContainer, margin: '8px 0 0' }}>
              Hand-sorted, ethically sourced
            </p>
          </div>
        </div>

        <p style={{ fontFamily: 'CobblerSans', fontSize: 15, color: C.onSurfaceVariant, lineHeight: 1.7, margin: '0 0 12px' }}>
          Happy Little Teas began with a simple belief: that a great cup of tea has the power to pause time. Born from a family tradition of artisanal blending, we hand-sort every leaf to ensure only the highest quality reaches your cup.
        </p>
        <p style={{ fontFamily: 'CobblerSans', fontSize: 15, color: C.onSurfaceVariant, lineHeight: 1.7, margin: 0 }}>
          We partner directly with sustainable, ethical farms to bring you flavors that celebrate the earth — from our ceremonial matcha to our signature boba.
        </p>
      </section>

      {/* ── Locations ── */}
      <section id="locations" style={{ padding: '40px 24px' }}>
        <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 18, color: C.secondary, margin: '0 0 4px' }}>
          Come visit us
        </p>
        <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 24, color: C.onSurface, margin: '0 0 20px' }}>
          Find Us
        </h2>

        {[
          { name: 'Downtown', address: '123 Blossom St, Suite 4', hours: 'Mon–Sat 9am–8pm · Sun 10am–6pm' },
          { name: 'Eastside', address: '456 Garden Ave', hours: 'Mon–Fri 8am–7pm · Sat–Sun 10am–7pm' },
        ].map((loc) => (
          <div
            key={loc.name}
            style={{
              background: C.surfaceContainerLow,
              border: `1px solid ${C.outline}`,
              borderRadius: 16, padding: 20, marginBottom: 16,
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}
          >
            <span style={{ fontFamily: 'Material Icons', fontSize: 28, color: C.primary, marginTop: 2 }}>location_on</span>
            <div>
              <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 18, color: C.onSurface, margin: '0 0 4px' }}>
                {loc.name}
              </h3>
              <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, margin: '0 0 4px' }}>
                {loc.address}
              </p>
              <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: C.onSurfaceVariant, margin: 0 }}>
                {loc.hours}
              </p>
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}
