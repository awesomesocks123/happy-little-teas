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

export default function OrderModal({ onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(28,28,24,0.55)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
          animation: 'fadeIn 0.2s ease',
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: C.surface,
            borderRadius: 28,
            padding: '40px 36px',
            width: '100%',
            maxWidth: 440,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            animation: 'popIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: 0 }}>
            Ready to order?
          </p>
          <h2 style={{
            fontFamily: 'ArtSchoolDropout', fontSize: 28, color: C.onSurface,
            margin: '0 0 8px', textAlign: 'center',
          }}>
            How would you like to order?
          </h2>
          <p style={{
            fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant,
            margin: '0 0 24px', textAlign: 'center', lineHeight: 1.6,
          }}>
            Order ahead for pickup on DoorDash, or walk in and order directly at the counter.
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
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
              boxShadow: '0 4px 16px rgba(235,23,0,0.25)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(235,23,0,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(235,23,0,0.25)' }}
          >
            <span style={{ fontSize: 22 }}>🚗</span>
            Order on DoorDash
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
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
              boxShadow: '0 4px 16px rgba(76,100,87,0.25)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(76,100,87,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(76,100,87,0.25)' }}
          >
            <span style={{ fontSize: 22 }}>🏪</span>
            Order In-Store (Clover)
          </a>

          <button
            onClick={onClose}
            style={{
              marginTop: 8, background: 'none', border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14,
              color: C.onSurfaceVariant, cursor: 'pointer',
            }}
          >
            Maybe later
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  )
}
