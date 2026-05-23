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
  tertiaryContainer: '#b6a06e',
}

function PhotoSlot({ label, tall }) {
  return (
    <div style={{
      background: C.surfaceContainerHigh,
      borderRadius: 20,
      border: `2px dashed ${C.outline}`,
      aspectRatio: tall ? '3/4' : '4/3',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 10,
    }}>
      <span style={{ fontFamily: 'Material Icons', fontSize: 36, color: C.outline }}>add_photo_alternate</span>
      <span style={{ fontFamily: 'CobblerSans', fontSize: 13, color: C.onSurfaceVariant, textAlign: 'center', padding: '0 16px' }}>
        {label}
      </span>
    </div>
  )
}

export default function OurStoryPage() {
  const [showOrder, setShowOrder] = useState(false)

  return (
    <div style={{ background: C.surface }}>

      {/* ── Hero ── */}
      <section style={{
        background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 60%)`,
        padding: '72px 0 64px',
        borderBottom: `1px solid ${C.outline}`,
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Dancing Script', fontWeight: 500, fontSize: 22, color: C.secondary, margin: '0 0 12px' }}>
            Where it all began
          </p>
          <h1 style={{
            fontFamily: 'ArtSchoolDropout',
            fontSize: 'clamp(32px, 5vw, 56px)',
            color: C.primary, margin: '0 0 28px', lineHeight: 1.1,
          }}>
            Our Story
          </h1>
          <p style={{
            fontFamily: 'CobblerSans', fontSize: 17, color: C.onSurfaceVariant,
            lineHeight: 1.8, margin: 0,
          }}>
            Happy Little Teas began with a simple belief: that a great cup of tea has the power to pause time.
            Born from a family tradition of artisanal blending, we hand-sort every leaf and hand-brew every batch
            to ensure only the highest quality reaches your cup.
          </p>
        </div>
      </section>

      {/* ── First photo row: wide store shot + text ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
        <div className="story-split" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
          <PhotoSlot label="Inside the shop — add a photo here" />
          <div>
            <p style={{ fontFamily: 'Dancing Script', fontWeight: 500, fontSize: 20, color: C.secondary, margin: '0 0 8px' }}>
              A cozy corner of calm
            </p>
            <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(22px, 3vw, 32px)', color: C.onSurface, margin: '0 0 18px' }}>
              The Space
            </h2>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.75, margin: '0 0 14px' }}>
              Step inside and you'll find warm lighting, the gentle hiss of steam, and the kind of unhurried energy that makes you want to stay a while. We designed our shop to feel like an extension of home — somewhere you can breathe.
            </p>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.75, margin: 0 }}>
              Every detail, from the handmade ceramic cups to the wildflower arrangements on the counter, was chosen with intention. We believe the environment is part of the experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Staff gallery ── */}
      <section style={{
        background: C.surfaceContainerLow,
        borderTop: `1px solid ${C.outline}`,
        borderBottom: `1px solid ${C.outline}`,
        padding: '72px 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontFamily: 'Dancing Script', fontWeight: 500, fontSize: 20, color: C.secondary, margin: '0 0 8px' }}>
              The people behind every cup
            </p>
            <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(22px, 3vw, 32px)', color: C.onSurface, margin: 0 }}>
              Meet the Team
            </h2>
          </div>

          {/* 3-col staff photos */}
          <div className="staff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }}>
            {[
              'Head Barista — add photo',
              'Tea Blender — add photo',
              'Front of House — add photo',
            ].map(label => (
              <PhotoSlot key={label} label={label} tall />
            ))}
          </div>

          <p style={{
            fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant,
            lineHeight: 1.8, maxWidth: 680, margin: '0 auto', textAlign: 'center',
          }}>
            Our team is a small, tight-knit crew of tea lovers, boba enthusiasts, and neighborhood regulars who turned a passion into a profession. Every person behind the counter takes pride in getting your order just right.
          </p>
        </div>
      </section>

      {/* ── Second photo row: text + store exterior ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
        <div className="story-split-reverse" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'Dancing Script', fontWeight: 500, fontSize: 20, color: C.secondary, margin: '0 0 8px' }}>
              Rooted in care
            </p>
            <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(22px, 3vw, 32px)', color: C.onSurface, margin: '0 0 18px' }}>
              Our Ingredients
            </h2>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.75, margin: '0 0 14px' }}>
              We partner directly with sustainable, ethical farms across Asia to bring you teas that celebrate the earth. Every batch of boba pearls is slow-cooked in-house each morning. No syrups from a bottle, no shortcuts.
            </p>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.75, margin: 0 }}>
              Our ceremonial matcha is sourced from Uji, Japan. Our oolong comes from high-elevation farms in Taiwan. And our fruit teas use real fruit — not concentrate.
            </p>
          </div>
          <PhotoSlot label="Shop exterior or ingredients — add a photo here" />
        </div>
      </section>

      {/* ── Values strip ── */}
      <section style={{
        background: `linear-gradient(135deg, ${C.primaryContainer}60, ${C.surfaceContainerHigh})`,
        borderTop: `1px solid ${C.outline}`,
        padding: '64px 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              { icon: 'spa',        title: 'Ethically Sourced',   desc: 'Direct relationships with farms that treat people and land with respect.' },
              { icon: 'favorite',   title: 'Made with Love',      desc: 'Every drink is hand-crafted to order — no batch brewing, no shortcuts.' },
              { icon: 'eco',        title: 'Sustainability First', desc: 'Compostable cups, minimal packaging, and a zero-waste kitchen mindset.' },
            ].map(v => (
              <div key={v.title} style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'Material Icons', fontSize: 40, color: C.primary, display: 'block', marginBottom: 12 }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 18, color: C.onSurface, margin: '0 0 8px' }}>{v.title}</h3>
                <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Us ── */}
      <section style={{ padding: '72px 0', borderTop: `1px solid ${C.outline}` }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Dancing Script', fontWeight: 500, fontSize: 20, color: C.secondary, margin: '0 0 8px' }}>
            We'd love to hear from you
          </p>
          <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(22px, 3vw, 36px)', color: C.onSurface, margin: '0 0 16px' }}>
            Contact Us
          </h2>
          <p style={{ fontFamily: 'CobblerSans', fontSize: 16, color: C.onSurfaceVariant, lineHeight: 1.7, margin: '0 0 36px' }}>
            Have a question, a catering inquiry, or just want to say hi? Drop us a line and we'll get back to you as soon as we can.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Email */}
            <a
              href="mailto:hello@happylittleteas.com"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                padding: '18px 28px', borderRadius: 16,
                background: C.surfaceContainerLow,
                border: `1px solid ${C.outline}`,
                textDecoration: 'none', color: C.onSurface,
                fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 16,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.surfaceContainerHigh}
              onMouseLeave={e => e.currentTarget.style.background = C.surfaceContainerLow}
            >
              <span style={{ fontFamily: 'Material Icons', fontSize: 22, color: C.primary }}>mail</span>
              hello@happylittleteas.com
            </a>

            {/* Phone */}
            <a
              href="tel:+15551234567"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                padding: '18px 28px', borderRadius: 16,
                background: C.surfaceContainerLow,
                border: `1px solid ${C.outline}`,
                textDecoration: 'none', color: C.onSurface,
                fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 16,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.surfaceContainerHigh}
              onMouseLeave={e => e.currentTarget.style.background = C.surfaceContainerLow}
            >
              <span style={{ fontFamily: 'Material Icons', fontSize: 22, color: C.primary }}>phone</span>
              (555) 123-4567
            </a>

            {/* Order Now */}
            <button
              onClick={() => setShowOrder(true)}
              style={{
                padding: '18px 28px', borderRadius: 16,
                background: C.primary, color: C.onPrimary, border: 'none',
                fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                boxShadow: '0 4px 16px rgba(76,100,87,0.25)',
              }}
            >
              <span style={{ fontFamily: 'Material Icons', fontSize: 20 }}>shopping_bag</span>
              Order Now
            </button>
          </div>
        </div>
      </section>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}

      <style>{`
        @media (min-width: 768px) {
          .story-split { grid-template-columns: 1fr 1fr !important; }
          .story-split-reverse { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .staff-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .staff-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
