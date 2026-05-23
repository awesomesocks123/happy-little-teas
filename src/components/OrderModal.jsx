const C = {
  primary: '#4c6457',
  onPrimary: '#ffffff',
  surface: '#fcf9f3',
  surfaceContainerLow: '#f6f3ed',
  onSurface: '#1c1c18',
  onSurfaceVariant: '#424844',
  outline: '#c2c8c2',
  secondary: '#8c4e37',
}

// DoorDash logo SVG (official wordmark simplified)
function DoorDashLogo() {
  return (
    <svg width="100" height="22" viewBox="0 0 120 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DoorDash">
      <circle cx="13" cy="13" r="13" fill="#ffffff" fillOpacity="0.25" />
      <text x="30" y="19" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="17" fill="#ffffff" letterSpacing="-0.5">DoorDash</text>
    </svg>
  )
}

export default function OrderModal({ onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(28,28,24,0.6)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
          animation: 'modalFadeIn 0.2s ease',
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: C.surface,
            borderRadius: 28,
            padding: '44px 36px 36px',
            width: '100%',
            maxWidth: 440,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            animation: 'modalPopIn 0.32s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 26, color: C.secondary, margin: 0 }}>
            Ready to order?
          </p>
          <h2 style={{
            fontFamily: 'ArtSchoolDropout', fontSize: 26, color: C.onSurface,
            margin: '0 0 6px', textAlign: 'center', lineHeight: 1.2,
          }}>
            How would you like to order?
          </h2>
          <p style={{
            fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant,
            margin: '0 0 20px', textAlign: 'center', lineHeight: 1.6,
          }}>
            Order ahead for pickup on DoorDash, or walk in and order at the counter.
          </p>

          {/* DoorDash */}
          <a
            href="https://www.doordash.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%', padding: '18px 24px',
              borderRadius: 16, textDecoration: 'none',
              background: '#eb1700', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              boxShadow: '0 4px 16px rgba(235,23,0,0.25)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(235,23,0,0.38)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(235,23,0,0.25)' }}
          >
            {/* DoorDash "D" badge */}
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Arial, sans-serif', fontWeight: 900, fontSize: 18, color: '#fff',
              flexShrink: 0,
            }}>
              D
            </div>
            <span style={{ fontFamily: 'CobblerSans', fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: '0.01em' }}>
              Order on DoorDash
            </span>
          </a>

          {/* Clover / In-store */}
          <a
            href="https://www.clover.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%', padding: '18px 24px',
              borderRadius: 16, textDecoration: 'none',
              background: C.primary, color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              boxShadow: '0 4px 16px rgba(76,100,87,0.25)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(76,100,87,0.38)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(76,100,87,0.25)' }}
          >
            <span style={{ fontSize: 22, flexShrink: 0 }}>🏪</span>
            <span style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16 }}>
              Order In-Store (Clover)
            </span>
          </a>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', margin: '4px 0' }}>
            <div style={{ flex: 1, height: 1, background: C.outline }} />
            <span style={{ fontFamily: 'CobblerSans', fontSize: 13, color: C.onSurfaceVariant }}>or</span>
            <div style={{ flex: 1, height: 1, background: C.outline }} />
          </div>

          {/* Phone call */}
          <a
            href="tel:+15551234567"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              textDecoration: 'none', color: C.primary,
              fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15,
            }}
          >
            <span style={{ fontFamily: 'Material Icons', fontSize: 20 }}>phone</span>
            Give us a call · (555) 123-4567
          </a>

          <button
            onClick={onClose}
            style={{
              marginTop: 6, background: 'none', border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14,
              color: C.onSurfaceVariant, cursor: 'pointer',
            }}
          >
            Maybe later
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalPopIn {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  )
}
