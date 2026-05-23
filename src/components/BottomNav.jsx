import { Link, useLocation } from 'react-router-dom'

const C = {
  primary: '#4c6457',
  surface: '#fcf9f3',
  onSurface: '#1c1c18',
  outline: '#c2c8c2',
  onSurfaceVariant: '#727974',
}

const links = [
  { icon: 'home', label: 'Home', to: '/' },
  { icon: 'restaurant_menu', label: 'Menu', to: '/menu' },
  { icon: 'auto_stories', label: 'Story', to: '/#story' },
  { icon: 'location_on', label: 'Find Us', to: '/#locations' },
]

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 430,
      background: C.surface,
      borderTop: `1px solid ${C.outline}`,
      display: 'flex',
      zIndex: 50,
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {links.map(({ icon, label, to }) => {
        const active = pathname === to || (to === '/' && pathname === '/')
        return (
          <Link
            key={label}
            to={to}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '10px 0 8px',
              textDecoration: 'none',
              color: active ? C.primary : C.onSurfaceVariant,
            }}
          >
            <span style={{ fontFamily: 'Material Icons', fontSize: 24 }}>{icon}</span>
            <span style={{ fontFamily: 'CobblerSans', fontSize: 11, fontWeight: 600, marginTop: 2 }}>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
