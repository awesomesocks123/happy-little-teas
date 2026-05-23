import { useState, useEffect, useRef } from 'react'

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
  outlineVariant: '#e5e2dc',
}

// ── Menu Data ──────────────────────────────────────────────────────────────
const categories = ['All', 'Milk Tea', 'Fruit Tea', 'Matcha', 'Coffee']

const menuItems = [
  // Milk Tea
  {
    id: 1, category: 'Milk Tea',
    name: 'Classic Brown Sugar',
    desc: 'Our signature Assam black tea blended with rich milk and slow-cooked brown sugar boba.',
    price: 5.50,
    badges: ['Bestseller'],
    available: true,
    icon: '🧋',
  },
  {
    id: 2, category: 'Milk Tea',
    name: 'Taro Swirl',
    desc: 'Real taro root swirled into creamy milk tea with chewy boba pearls.',
    price: 5.75,
    badges: ['Popular'],
    available: true,
    icon: '🫐',
  },
  {
    id: 3, category: 'Milk Tea',
    name: 'Honey Oolong Milk Tea',
    desc: 'Floral oolong tea with a drizzle of wildflower honey and your choice of toppings.',
    price: 5.25,
    badges: [],
    available: true,
    icon: '🍯',
  },
  {
    id: 4, category: 'Milk Tea',
    name: 'Taro Velvet',
    desc: 'Real taro root blended into a velvety, caffeine-free treat perfect for evenings.',
    price: 5.75,
    badges: ['New', 'Non-Caffeinated'],
    available: true,
    icon: '🫐',
  },
  {
    id: 5, category: 'Milk Tea',
    name: 'Brown Sugar Tiger',
    desc: 'Espresso-style black tea with brown sugar syrup swirls and fresh milk.',
    price: 6.00,
    badges: ['Staff Pick'],
    available: true,
    icon: '🐯',
  },
  {
    id: 6, category: 'Milk Tea',
    name: 'Lavender Earl Grey',
    desc: 'Earl grey infused with dried lavender and a splash of oat milk. Dreamy and floral.',
    price: 5.75,
    badges: [],
    available: true,
    icon: '💜',
  },
  // Fruit Tea
  {
    id: 7, category: 'Fruit Tea',
    name: 'Mango Sunshine',
    desc: 'Jasmine green tea perfectly shaken with fresh mango purée and fruit chunks.',
    price: 6.00,
    badges: ['Recommended', 'Non-Caffeinated'],
    available: true,
    icon: '🥭',
  },
  {
    id: 8, category: 'Fruit Tea',
    name: 'Strawberry Bliss',
    desc: 'A refreshing blend of crushed strawberries, mint, and lightly sweetened green tea.',
    price: 6.25,
    badges: ['Popular'],
    available: true,
    icon: '🍓',
  },
  {
    id: 9, category: 'Fruit Tea',
    name: 'Lychee Rose',
    desc: 'Delicate lychee with rose petals and white tea — lightly floral, deeply refreshing.',
    price: 5.50,
    badges: [],
    available: true,
    icon: '🌸',
  },
  {
    id: 10, category: 'Fruit Tea',
    name: 'Peach Oolong Slush',
    desc: 'Blended peach and oolong poured over a crushed ice slush. Summer in a cup.',
    price: 6.00,
    badges: ['Seasonal'],
    available: true,
    icon: '🍑',
  },
  {
    id: 11, category: 'Fruit Tea',
    name: 'Passion Fruit Green Tea',
    desc: 'Tropical passion fruit shaken over chilled green tea with popping boba.',
    price: 5.75,
    badges: ['Non-Caffeinated'],
    available: true,
    icon: '🌺',
  },
  // Matcha
  {
    id: 12, category: 'Matcha',
    name: 'Matcha Oat Latte',
    desc: 'Premium Uji matcha hand-whisked and layered over creamy, chilled oat milk.',
    price: 6.50,
    badges: ['Recommended', 'Contains Dairy'],
    available: true,
    icon: '🍵',
  },
  {
    id: 13, category: 'Matcha',
    name: 'Matcha Cloud',
    desc: 'Ceremonial grade matcha topped with our signature sweet cream foam cloud.',
    price: 6.00,
    badges: ['Staff Pick'],
    available: true,
    icon: '☁️',
  },
  {
    id: 14, category: 'Matcha',
    name: 'Hojicha Milk Tea',
    desc: 'Roasted green tea with a smoky warmth, blended with silky milk and boba.',
    price: 5.75,
    badges: ['New'],
    available: true,
    icon: '🍂',
  },
  {
    id: 15, category: 'Matcha',
    name: 'Iced Matcha Lemonade',
    desc: 'Bright ceremonial matcha shaken with fresh-squeezed lemon. Bold and zingy.',
    price: 6.25,
    badges: ['Vegan'],
    available: true,
    icon: '🍋',
  },
  // Coffee
  {
    id: 16, category: 'Coffee',
    name: 'Oolong Roast Drip',
    desc: 'A unique dark roast with earthy tones, slow-dripped for a smooth, bold finish.',
    price: 4.50,
    badges: ['Contains Dairy'],
    available: true,
    icon: '☕',
  },
  {
    id: 17, category: 'Coffee',
    name: 'Brown Sugar Espresso',
    desc: 'Double shot espresso over brown sugar milk with boba pearls. Rich and indulgent.',
    price: 6.00,
    badges: ['Popular'],
    available: true,
    icon: '🤎',
  },
  {
    id: 18, category: 'Coffee',
    name: 'Coconut Cold Brew',
    desc: 'Smooth 18-hour cold brew finished with coconut milk and a hint of vanilla.',
    price: 6.25,
    badges: ['New'],
    available: true,
    icon: '🥥',
  },
]

const badgeStyle = {
  Bestseller:      { bg: '#fff3cd', color: '#856404' },
  Popular:         { bg: '#ffe0b2', color: '#7a3d10' },
  'Staff Pick':    { bg: '#d8f0e3', color: '#1a5c36' },
  New:             { bg: '#ede7f6', color: '#4527a0' },
  Recommended:     { bg: '#e3f2fd', color: '#0d47a1' },
  Seasonal:        { bg: '#fce4ec', color: '#880e4f' },
  'Non-Caffeinated': { bg: '#f1f8e9', color: '#33691e' },
  'Contains Dairy':  { bg: '#fff8e1', color: '#f57f17' },
  Vegan:           { bg: '#e8f5e9', color: '#1b5e20' },
}

const toppings = ['Boba Pearls', 'Popping Boba', 'Coconut Jelly', 'Grass Jelly', 'Aloe Vera', 'Pudding', 'Egg Pudding']

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

function MenuCard({ item, onAdd, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), index * 40)
    return () => clearTimeout(t)
  }, [item.id, index])

  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.surface,
        border: `1px solid ${C.outlineVariant}`,
        borderRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
        transition: 'opacity 0.35s ease, transform 0.35s ease, box-shadow 0.2s ease',
        boxShadow: hovered
          ? '0 8px 32px rgba(76,100,87,0.14)'
          : '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      {/* Image / icon area */}
      <div style={{
        background: `linear-gradient(135deg, ${C.primaryContainer}80, ${C.surfaceContainerHigh})`,
        height: 140,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 56,
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {item.icon}
        {!item.available && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(252,249,243,0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 13, color: C.onSurfaceVariant, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Badges */}
        {item.badges.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {item.badges.map(b => <Badge key={b} label={b} />)}
          </div>
        )}

        <h3 style={{
          fontFamily: 'ArtSchoolDropout', fontSize: 17, color: C.onSurface,
          margin: 0, lineHeight: 1.25,
        }}>
          {item.name}
        </h3>

        <p style={{
          fontFamily: 'CobblerSans', fontSize: 13, color: C.onSurfaceVariant,
          margin: 0, lineHeight: 1.55, flex: 1,
        }}>
          {item.desc}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: C.primary }}>
            ${item.price.toFixed(2)}
          </span>
          {item.available && (
            <button
              onClick={() => onAdd(item)}
              style={{
                padding: '9px 20px', borderRadius: 9999,
                background: hovered ? C.primary : C.surfaceContainerHigh,
                color: hovered ? C.onPrimary : C.onSurface,
                border: 'none', cursor: 'pointer',
                fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 13,
                transition: 'background 0.2s, color 0.2s',
                display: 'flex', alignItems: 'center', gap: 4,
              }}
            >
              <span style={{ fontFamily: 'Material Icons', fontSize: 15 }}>add</span>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function MenuPage() {
  const [selected, setSelected] = useState(['All'])
  const [cart, setCart] = useState([])
  const [orderItem, setOrderItem] = useState(null)
  const [selectedToppings, setSelectedToppings] = useState([])
  const [showCart, setShowCart] = useState(false)

  function toggleCategory(cat) {
    if (cat === 'All') {
      setSelected(['All'])
      return
    }
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

  function confirmAdd() {
    setCart(prev => {
      const existing = prev.find(c => c.id === orderItem.id)
      if (existing) return prev.map(c => c.id === orderItem.id ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { ...orderItem, qty: 1, toppings: [...selectedToppings] }]
    })
    setSelectedToppings([])
    setOrderItem(null)
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(c => c.id !== id))
  }

  const cartTotal = cart.reduce((s, c) => s + c.price * c.qty, 0)
  const cartCount = cart.reduce((s, c) => s + c.qty, 0)

  return (
    <div style={{ background: C.surface, minHeight: '100%' }}>

      {/* ── Hero banner ── */}
      <div style={{
        background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 60%)`,
        padding: '56px 0 0',
        borderBottom: `1px solid ${C.outline}`,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: '0 0 6px' }}>
            Handcrafted with love
          </p>
          <h1 style={{
            fontFamily: 'ArtSchoolDropout',
            fontSize: 'clamp(30px, 4vw, 52px)',
            color: C.onSurface, margin: '0 0 32px', lineHeight: 1.1,
          }}>
            Full Menu
          </h1>

          {/* ── Category filter pills ── */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 24 }}>
            {categories.map(cat => {
              const active = selected.includes(cat)
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  style={{
                    padding: '10px 22px', borderRadius: 9999,
                    background: active ? C.primary : C.surface,
                    color: active ? C.onPrimary : C.onSurfaceVariant,
                    border: `1.5px solid ${active ? C.primary : C.outline}`,
                    fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14,
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s, border-color 0.2s, transform 0.1s',
                    transform: active ? 'scale(1.04)' : 'scale(1)',
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
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px 120px' }}>

        {/* Active filter label */}
        <p style={{
          fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant,
          margin: '0 0 24px',
        }}>
          Showing <strong style={{ color: C.primary }}>{filtered.length}</strong> drink{filtered.length !== 1 ? 's' : ''}
          {!selected.includes('All') && (
            <> in <strong style={{ color: C.primary }}>{selected.join(', ')}</strong></>
          )}
        </p>

        <div className="menu-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}>
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} onAdd={setOrderItem} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: C.onSurfaceVariant }}>
            <span style={{ fontFamily: 'Material Icons', fontSize: 48, display: 'block', marginBottom: 12 }}>search_off</span>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 16 }}>No drinks match your selection.</p>
          </div>
        )}
      </div>

      {/* ── Cart FAB ── */}
      {cartCount > 0 && (
        <button
          onClick={() => setShowCart(true)}
          style={{
            position: 'fixed', bottom: 32, left: '50%', transform: 'translateX(-50%)',
            background: C.primary, color: C.onPrimary,
            border: 'none', borderRadius: 9999,
            padding: '15px 36px',
            fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 6px 28px rgba(76,100,87,0.4)',
            zIndex: 40, whiteSpace: 'nowrap',
            animation: 'fabPop 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <span style={{ fontFamily: 'Material Icons', fontSize: 20 }}>shopping_bag</span>
          View Order · {cartCount} item{cartCount !== 1 ? 's' : ''} · ${cartTotal.toFixed(2)}
        </button>
      )}

      {/* ── Topping selector ── */}
      {orderItem && (
        <>
          <div onClick={() => setOrderItem(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(28,28,24,0.5)', zIndex: 60, backdropFilter: 'blur(2px)' }} />
          <div style={{
            position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: '100%', maxWidth: 540,
            background: C.surface, borderRadius: '24px 24px 0 0',
            padding: '28px 28px 48px', zIndex: 61,
            animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            <div style={{ width: 40, height: 4, background: C.outline, borderRadius: 9999, margin: '0 auto 24px' }} />
            <div style={{ fontSize: 36, marginBottom: 8 }}>{orderItem.icon}</div>
            <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 22, color: C.onSurface, margin: '0 0 4px' }}>{orderItem.name}</h3>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, margin: '0 0 20px' }}>Choose your toppings (optional)</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {toppings.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedToppings(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])}
                  style={{
                    padding: '9px 16px', borderRadius: 9999,
                    background: selectedToppings.includes(t) ? C.primary : C.surfaceContainerHigh,
                    color: selectedToppings.includes(t) ? C.onPrimary : C.onSurface,
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 13,
                    transition: 'background 0.15s, color 0.15s',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={confirmAdd}
              style={{
                width: '100%', padding: 16, borderRadius: 9999,
                background: C.primary, color: C.onPrimary, border: 'none',
                fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
                cursor: 'pointer',
              }}
            >
              Add to Order — ${orderItem.price.toFixed(2)}
            </button>
          </div>
        </>
      )}

      {/* ── Cart sheet ── */}
      {showCart && (
        <>
          <div onClick={() => setShowCart(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(28,28,24,0.5)', zIndex: 60, backdropFilter: 'blur(2px)' }} />
          <div style={{
            position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: '100%', maxWidth: 540,
            background: C.surface, borderRadius: '24px 24px 0 0',
            padding: '28px 28px 48px', zIndex: 61,
            maxHeight: '80svh', overflowY: 'auto',
            animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            <div style={{ width: 40, height: 4, background: C.outline, borderRadius: 9999, margin: '0 auto 24px' }} />
            <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 24, color: C.onSurface, margin: '0 0 20px' }}>Your Order</h3>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 0', borderBottom: `1px solid ${C.outline}` }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15, color: C.onSurface, margin: '0 0 2px' }}>
                    {item.icon} {item.name} × {item.qty}
                  </p>
                  {item.toppings?.length > 0 && (
                    <p style={{ fontFamily: 'CobblerSans', fontSize: 12, color: C.onSurfaceVariant, margin: 0 }}>+ {item.toppings.join(', ')}</p>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                  <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 17, color: C.primary }}>${(item.price * item.qty).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                    <span style={{ fontFamily: 'Material Icons', fontSize: 20, color: '#ba1a1a' }}>delete</span>
                  </button>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0 24px' }}>
              <span style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 17, color: C.onSurface }}>Total</span>
              <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 22, color: C.primary }}>${cartTotal.toFixed(2)}</span>
            </div>
            <button style={{
              width: '100%', padding: 16, borderRadius: 9999,
              background: C.primary, color: C.onPrimary, border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16, cursor: 'pointer',
            }}>
              Place Order
            </button>
          </div>
        </>
      )}

      {/* ── Animations ── */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateX(-50%) translateY(100%); }
          to   { transform: translateX(-50%) translateY(0); }
        }
        @keyframes fabPop {
          from { transform: translateX(-50%) scale(0.8); opacity: 0; }
          to   { transform: translateX(-50%) scale(1); opacity: 1; }
        }

        /* Mobile: 1 column */
        @media (max-width: 640px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
        /* Tablet: 2 columns */
        @media (min-width: 641px) and (max-width: 1024px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
