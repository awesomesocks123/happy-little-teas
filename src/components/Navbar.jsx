import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/HLT_Logo_2.0_Update.png'

const C = {
  primary: '#4c6457',
  onPrimary: '#ffffff',
  surface: '#fcf9f3',
  onSurface: '#1c1c18',
  overlay: 'rgba(28,28,24,0.6)',
  secondary: '#8c4e37',
}

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
        borderBottom: '1px solid #c2c8c2',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src={logo} alt="HLT" style={{ height: 36, width: 'auto' }} />
          <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 16, color: C.primary, lineHeight: 1 }}>
            Happy Little Teas
          </span>
        </Link>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          <span style={{ fontFamily: 'Material Icons', fontSize: 28, color: C.onSurface }}>menu</span>
        </button>
      </nav>

      {/* Drawer overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: C.overlay,
          }}
        />
      )}

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 101,
        width: 280,
        background: C.surface,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        display: 'flex', flexDirection: 'column',
        padding: '20px 24px',
        gap: 8,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: C.primary }}>Happy Little Teas</span>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ fontFamily: 'Material Icons', fontSize: 24, color: C.onSurface }}>close</span>
          </button>
        </div>

        {[
          { icon: 'home', label: 'Home', to: '/' },
          { icon: 'coffee', label: 'Full Menu', to: '/menu' },
          { icon: 'favorite', label: 'Our Story', to: '/#story' },
          { icon: 'pin_drop', label: 'Locations', to: '/#locations' },
        ].map(({ icon, label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 16px', borderRadius: 12,
              textDecoration: 'none', color: C.onSurface,
              fontFamily: 'CobblerSans', fontWeight: 500, fontSize: 16,
            }}
          >
            <span style={{ fontFamily: 'Material Icons', fontSize: 22, color: C.primary }}>{icon}</span>
            {label}
          </Link>
        ))}

        <div style={{ marginTop: 'auto' }}>
          <button
            onClick={handleOrder}
            style={{
              width: '100%', padding: '16px', borderRadius: 9999,
              background: C.primary, color: C.onPrimary, border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            <span style={{ fontFamily: 'Material Icons', fontSize: 20 }}>shopping_bag</span>
            Order Online
          </button>
        </div>
      </div>
    </>
  )
}
