import { useState, useEffect } from 'react'
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
  outlineVariant: '#e5e2dc',
}

const categories = ['All', 'Milk Tea', 'Fruit Tea', 'Matcha', 'Coffee']

const menuItems = [
  // Milk Tea
  { id: 1,  category: 'Milk Tea',  name: 'Classic Brown Sugar',      desc: 'Our signature Assam black tea blended with rich milk and slow-cooked brown sugar boba.',                    badges: ['Bestseller'],               icon: '🧋' },
  { id: 2,  category: 'Milk Tea',  name: 'Taro Swirl',               desc: 'Real taro root swirled into creamy milk tea with chewy boba pearls.',                                        badges: ['Popular'],                  icon: '🫐' },
  { id: 3,  category: 'Milk Tea',  name: 'Honey Oolong Milk Tea',    desc: 'Floral oolong tea with a drizzle of wildflower honey and your choice of toppings.',                          badges: [],                           icon: '🍯' },
  { id: 4,  category: 'Milk Tea',  name: 'Taro Velvet',              desc: 'Real taro root blended into a velvety, caffeine-free treat perfect for evenings.',                           badges: ['New', 'Non-Caffeinated'],   icon: '🫐' },
  { id: 5,  category: 'Milk Tea',  name: 'Brown Sugar Tiger',        desc: 'Espresso-style black tea with brown sugar syrup swirls and fresh milk.',                                     badges: ['Staff Pick'],               icon: '🐯' },
  { id: 6,  category: 'Milk Tea',  name: 'Lavender Earl Grey',       desc: 'Earl grey infused with dried lavender and a splash of oat milk. Dreamy and floral.',                         badges: [],                           icon: '💜' },
  // Fruit Tea
  { id: 7,  category: 'Fruit Tea', name: 'Mango Sunshine',           desc: 'Jasmine green tea perfectly shaken with fresh mango purée and fruit chunks.',                                badges: ['Recommended'],              icon: '🥭' },
  { id: 8,  category: 'Fruit Tea', name: 'Strawberry Bliss',         desc: 'A refreshing blend of crushed strawberries, mint, and lightly sweetened green tea.',                         badges: ['Popular'],                  icon: '🍓' },
  { id: 9,  category: 'Fruit Tea', name: 'Lychee Rose',              desc: 'Delicate lychee with rose petals and white tea — lightly floral, deeply refreshing.',                        badges: [],                           icon: '🌸' },
  { id: 10, category: 'Fruit Tea', name: 'Peach Oolong Slush',       desc: 'Blended peach and oolong poured over a crushed ice slush. Summer in a cup.',                                 badges: ['Seasonal'],                 icon: '🍑' },
  { id: 11, category: 'Fruit Tea', name: 'Passion Fruit Green Tea',  desc: 'Tropical passion fruit shaken over chilled green tea with popping boba.',                                    badges: ['Non-Caffeinated'],          icon: '🌺' },
  // Matcha
  { id: 12, category: 'Matcha',    name: 'Matcha Oat Latte',         desc: 'Premium Uji matcha hand-whisked and layered over creamy, chilled oat milk.',                                 badges: ['Recommended'],              icon: '🍵' },
  { id: 13, category: 'Matcha',    name: 'Matcha Cloud',             desc: 'Ceremonial grade matcha topped with our signature sweet cream foam cloud.',                                  badges: ['Staff Pick'],               icon: '☁️' },
  { id: 14, category: 'Matcha',    name: 'Hojicha Milk Tea',         desc: 'Roasted green tea with a smoky warmth, blended with silky milk and boba.',                                   badges: ['New'],                      icon: '🍂' },
  { id: 15, category: 'Matcha',    name: 'Iced Matcha Lemonade',     desc: 'Bright ceremonial matcha shaken with fresh-squeezed lemon. Bold and zingy.',                                 badges: ['Vegan'],                    icon: '🍋' },
  // Coffee
  { id: 16, category: 'Coffee',    name: 'Oolong Roast Drip',        desc: 'A unique dark roast with earthy tones, slow-dripped for a smooth, bold finish.',                             badges: [],                           icon: '☕' },
  { id: 17, category: 'Coffee',    name: 'Brown Sugar Espresso',     desc: 'Double shot espresso over brown sugar milk with boba pearls. Rich and indulgent.',                           badges: ['Popular'],                  icon: '🤎' },
  { id: 18, category: 'Coffee',    name: 'Coconut Cold Brew',        desc: 'Smooth 18-hour cold brew finished with coconut milk and a hint of vanilla.',                                 badges: ['New'],                      icon: '🥥' },
]

const badgeStyle = {
  Bestseller:        { bg: '#fff3cd', color: '#856404' },
  Popular:           { bg: '#ffe0b2', color: '#7a3d10' },
  'Staff Pick':      { bg: '#d8f0e3', color: '#1a5c36' },
  New:               { bg: '#ede7f6', color: '#4527a0' },
  Recommended:       { bg: '#e3f2fd', color: '#0d47a1' },
  Seasonal:          { bg: '#fce4ec', color: '#880e4f' },
  'Non-Caffeinated': { bg: '#f1f8e9', color: '#33691e' },
  Vegan:             { bg: '#e8f5e9', color: '#1b5e20' },
}

function Badge({ label }) {
  const s = badgeStyle[label] || { bg: C.surfaceContainerHigh, color: C.onSurface }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: s.bg, color: s.color,
      borderRadius: 9999, padding: '2px 9px',
      fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 11,
      letterSpacing: '0.02em', whiteSpace: 'nowrap',
    }}>
      ● {label}
    </span>
  )
}

function MenuCard({ item, index, onOrder }) {
  const [revealed, setRevealed] = useState(false)
  const [mounted, setMounted] = useState(false)

  // staggered entrance
  useEffect(() => {
    setMounted(false)
    const t = setTimeout(() => setMounted(true), index * 45)
    return () => clearTimeout(t)
  }, [item.id, index])

  return (
    <div
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onClick={() => setRevealed(r => !r)}
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '3 / 4',
        background: `linear-gradient(145deg, ${C.primaryContainer}90, ${C.surfaceContainerHigh})`,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        boxShadow: revealed
          ? '0 12px 40px rgba(76,100,87,0.18)'
          : '0 2px 8px rgba(0,0,0,0.07)',
      }}
    >
      {/* Icon — always visible, slides up on reveal */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 12,
        transform: revealed ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.34,1.2,0.64,1)',
      }}>
        <div style={{ fontSize: 56, lineHeight: 1 }}>{item.icon}</div>
        <h3 style={{
          fontFamily: 'ArtSchoolDropout', fontSize: 17,
          color: C.onPrimaryContainer, margin: 0,
          textAlign: 'center', padding: '0 16px', lineHeight: 1.25,
        }}>
          {item.name}
        </h3>
        {item.badges.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', padding: '0 12px' }}>
            {item.badges.map(b => <Badge key={b} label={b} />)}
          </div>
        )}
      </div>

      {/* Description overlay — fades up from bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to top, rgba(28,28,24,0.88) 0%, rgba(28,28,24,0.4) 60%, transparent 100%)`,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '20px 18px',
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        pointerEvents: revealed ? 'auto' : 'none',
      }}>
        <h3 style={{
          fontFamily: 'ArtSchoolDropout', fontSize: 16,
          color: '#ffffff', margin: '0 0 8px', lineHeight: 1.25,
        }}>
          {item.name}
        </h3>
        <p style={{
          fontFamily: 'CobblerSans', fontSize: 13, color: 'rgba(255,255,255,0.85)',
          margin: '0 0 14px', lineHeight: 1.55,
        }}>
          {item.desc}
        </p>
        <button
          onClick={e => { e.stopPropagation(); onOrder() }}
          style={{
            alignSelf: 'flex-start',
            padding: '9px 20px', borderRadius: 9999,
            background: C.primary, color: C.onPrimary,
            border: 'none', cursor: 'pointer',
            fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 13,
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const [selected, setSelected] = useState(['All'])
  const [showOrder, setShowOrder] = useState(false)

  function toggleCategory(cat) {
    if (cat === 'All') { setSelected(['All']); return }
    setSelected(prev => {
      const withoutAll = prev.filter(c => c !== 'All')
      if (withoutAll.includes(cat)) {
        const next = withoutAll.filter(c => c !== cat)
        return next.length === 0 ? ['All'] : next
      }
      return [...withoutAll, cat]
    })
  }

  const filtered = selected.includes('All')
    ? menuItems
    : menuItems.filter(item => selected.includes(item.category))

  return (
    <div style={{ background: C.surface, minHeight: '100%' }}>

      {/* ── Hero / Filter bar ── */}
      <div style={{
        background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 60%)`,
        borderBottom: `1px solid ${C.outline}`,
        padding: '56px 0 0',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontFamily: 'Dancing Script', fontWeight: 600, fontSize: 26, color: C.secondary, margin: '0 0 6px' }}>
            Handcrafted with love
          </p>
          <h1 style={{
            fontFamily: 'ArtSchoolDropout',
            fontSize: 'clamp(30px, 4vw, 52px)',
            color: C.onSurface, margin: '0 0 32px', lineHeight: 1.1,
          }}>
            Full Menu
          </h1>

          {/* Multi-select category pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 28 }}>
            {categories.map(cat => {
              const active = selected.includes(cat)
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  style={{
                    padding: '10px 24px', borderRadius: 9999,
                    background: active ? C.primary : C.surface,
                    color: active ? C.onPrimary : C.onSurfaceVariant,
                    border: `1.5px solid ${active ? C.primary : C.outline}`,
                    fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    transform: active ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 80px' }}>
        <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, margin: '0 0 28px' }}>
          Showing <strong style={{ color: C.primary }}>{filtered.length}</strong> drink{filtered.length !== 1 ? 's' : ''}
          {!selected.includes('All') && <> in <strong style={{ color: C.primary }}>{selected.join(', ')}</strong></>}
          {' '}· Hover or tap a card to learn more
        </p>

        <div className="menu-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}>
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} onOrder={() => setShowOrder(true)} />
          ))}
        </div>
      </div>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}

      <style>{`
        @media (max-width: 640px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          .menu-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
