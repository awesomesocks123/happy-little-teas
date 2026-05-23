import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/images/HLT_Logo_2.0_Update.png'

const C = {
  primary: '#4c6457',
  onPrimary: '#ffffff',
  surface: '#fcf9f3',
  onSurface: '#1c1c18',
  onSurfaceVariant: '#424844',
  outline: '#c2c8c2',
  overlay: 'rgba(28,28,24,0.55)',
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Our Story', to: '/#story' },
  { label: 'Find Us', to: '/#locations' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  function handleOrder() {
    setOpen(false)
    navigate('/menu')
  }

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: C.surface,
        borderBottom: `1px solid ${C.outline}`,
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <img src={logo} alt="HLT" style={{ height: 40, width: 'auto' }} />
            <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 18, color: C.primary, lineHeight: 1 }}>
              Happy Little Teas
            </span>
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                style={({ isActive }) => ({
                  fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15,
                  color: isActive ? C.primary : C.onSurfaceVariant,
                  textDecoration: 'none',
                  borderBottom: isActive ? `2px solid ${C.primary}` : '2px solid transparent',
                  paddingBottom: 2,
                  transition: 'color 0.15s',
                })}
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={handleOrder}
              style={{
                padding: '10px 22px', borderRadius: 9999,
                background: C.primary, color: C.onPrimary, border: 'none',
                fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 14,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Order Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
          >
            <span style={{ fontFamily: 'Material Icons', fontSize: 28, color: C.onSurface }}>menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 100, background: C.overlay }}
        />
      )}

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 101,
        width: 300,
        background: C.surface,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.28s ease',
        display: 'flex', flexDirection: 'column',
        padding: '20px 24px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 18, color: C.primary }}>Happy Little Teas</span>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ fontFamily: 'Material Icons', fontSize: 24, color: C.onSurface }}>close</span>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setOpen(false)}
              style={{
                padding: '14px 16px', borderRadius: 12,
                textDecoration: 'none', color: C.onSurface,
                fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 17,
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button
            onClick={handleOrder}
            style={{
              width: '100%', padding: 16, borderRadius: 9999,
              background: C.primary, color: C.onPrimary, border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
              cursor: 'pointer',
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
