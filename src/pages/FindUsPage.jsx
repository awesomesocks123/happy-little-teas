import { useState } from 'react'
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
}

const locations = [
  {
    name: 'Downtown',
    address: '123 Blossom Street, Suite 4',
    city: 'Your City, ST 00000',
    phone: '(555) 123-4567',
    hours: [
      { days: 'Monday – Friday', time: '8:00 am – 8:00 pm' },
      { days: 'Saturday',        time: '9:00 am – 9:00 pm' },
      { days: 'Sunday',          time: '10:00 am – 6:00 pm' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ3LjMiTiA3NMKwMDAnMTMuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus',
  },
  {
    name: 'Eastside',
    address: '456 Garden Avenue',
    city: 'Your City, ST 00000',
    phone: '(555) 765-4321',
    hours: [
      { days: 'Monday – Friday', time: '8:00 am – 7:00 pm' },
      { days: 'Saturday – Sunday', time: '10:00 am – 7:00 pm' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ3LjMiTiA3NMKwMDAnMTMuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus',
  },
]

export default function FindUsPage() {
  const [showOrder, setShowOrder] = useState(false)

  return (
    <div style={{ background: C.surface, minHeight: '100%' }}>

      {/* ── Hero ── */}
      <div style={{
        background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 60%)`,
        borderBottom: `1px solid ${C.outline}`,
        padding: '64px 0 48px',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: '0 0 8px' }}>
          Come find us
        </p>
        <h1 style={{
          fontFamily: 'ArtSchoolDropout',
          fontSize: 'clamp(30px, 4vw, 52px)',
          color: C.onSurface, margin: '0 0 16px',
        }}>
          Our Locations
        </h1>
        <p style={{
          fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant,
          maxWidth: 480, margin: '0 auto',
        }}>
          Two cozy spots to find your perfect cup. Walk in, or order ahead.
        </p>
      </div>

      {/* ── Location cards ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className="location-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 0,
                borderRadius: 24,
                overflow: 'hidden',
                border: `1px solid ${C.outline}`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              {/* Map */}
              <div style={{ position: 'relative', minHeight: 300, background: C.surfaceContainerHigh }}>
                <iframe
                  title={`Map for ${loc.name}`}
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: 300 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info */}
              <div style={{ padding: '36px 36px 40px', background: C.surface }}>
                <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 28, color: C.primary, margin: '0 0 24px' }}>
                  {loc.name}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Address */}
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Material Icons', fontSize: 24, color: C.primary, flexShrink: 0, marginTop: 1 }}>location_on</span>
                    <div>
                      <p style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15, color: C.onSurface, margin: '0 0 2px' }}>{loc.address}</p>
                      <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, margin: 0 }}>{loc.city}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Material Icons', fontSize: 24, color: C.primary, flexShrink: 0 }}>phone</span>
                    <a
                      href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}
                      style={{ fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 15, color: C.primary, textDecoration: 'none' }}
                    >
                      {loc.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'Material Icons', fontSize: 24, color: C.primary, flexShrink: 0, marginTop: 1 }}>schedule</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {loc.hours.map(h => (
                        <div key={h.days} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <span style={{ fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14, color: C.onSurface }}>{h.days}</span>
                          <span style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant }}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
                  <button
                    onClick={() => setShowOrder(true)}
                    style={{
                      padding: '13px 28px', borderRadius: 9999,
                      background: C.primary, color: C.onPrimary, border: 'none',
                      fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 14,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                    }}
                  >
                    <span style={{ fontFamily: 'Material Icons', fontSize: 18 }}>shopping_bag</span>
                    Order Now
                  </button>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address + ' ' + loc.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '13px 28px', borderRadius: 9999,
                      background: 'transparent', border: `1.5px solid ${C.primary}`, color: C.primary,
                      fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14,
                      textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
                    }}
                  >
                    <span style={{ fontFamily: 'Material Icons', fontSize: 18 }}>directions</span>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}

      <style>{`
        @media (min-width: 768px) {
          .location-card { grid-template-columns: 1fr 1fr !important; }
          .location-card > div:first-child { min-height: 400px !important; }
        }
      `}</style>
    </div>
  )
}
