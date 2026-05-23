import { useState } from 'react'

function Container({ children, style }) {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', ...style }}>
      {children}
    </div>
  )
}

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
}

const categories = ['All', 'Classics', 'Specialty', 'Fruit Teas', 'Seasonal']

const menu = [
  // Classics
  {
    category: 'Classics',
    items: [
      { name: 'Signature Black Milk Tea', desc: 'Smooth black tea with creamy milk and your choice of toppings.', price: 4.50, tag: 'Bestseller', tagIcon: 'star' },
      { name: 'Classic Taro Milk Tea', desc: 'Earthy, sweet taro blended with fresh milk — a crowd favourite.', price: 5.00, tag: null },
      { name: 'Honey Oolong Milk Tea', desc: 'Floral oolong tea with a drizzle of wildflower honey.', price: 5.25, tag: null },
      { name: 'Brown Sugar Boba', desc: 'Fresh boba pearls in a caramel brown sugar milk base.', price: 5.50, tag: 'Popular', tagIcon: 'local_fire_department' },
    ],
  },
  // Specialty
  {
    category: 'Specialty',
    items: [
      { name: 'Kyoto Matcha Latte', desc: 'Ceremonial grade matcha whisked with oat milk and a touch of honey.', price: 5.50, tag: 'Staff Pick', tagIcon: 'favorite' },
      { name: 'Matcha Cloud', desc: 'Iced matcha topped with our signature sweet cream foam cloud.', price: 6.00, tag: null },
      { name: 'Taro Velvet', desc: 'Real taro root blended into a velvety, caffeine-free treat.', price: 5.75, tag: 'New', tagIcon: 'new_releases' },
      { name: 'Lavender Earl Grey', desc: 'Earl grey infused with dried lavender and a splash of oat milk.', price: 5.75, tag: null },
      { name: 'Tiger Sugar Latte', desc: 'Brown sugar syrup swirls with fresh espresso and steamed milk.', price: 6.25, tag: 'New', tagIcon: 'new_releases' },
    ],
  },
  // Fruit Teas
  {
    category: 'Fruit Teas',
    items: [
      { name: 'Strawberry Jasmine', desc: 'Fresh strawberries steeped with fragrant jasmine green tea.', price: 5.50, tag: null },
      { name: 'Mango Passion Fruit', desc: 'Tropical mango and passionfruit over green tea and ice.', price: 5.75, tag: 'Popular', tagIcon: 'local_fire_department' },
      { name: 'Lychee Rose', desc: 'Delicate lychee with rose petals and white tea.', price: 5.50, tag: null },
      { name: 'Peach Oolong Slush', desc: 'Blended peach and oolong poured over a crushed ice slush.', price: 6.00, tag: null },
    ],
  },
  // Seasonal
  {
    category: 'Seasonal',
    items: [
      { name: 'Sakura Milk Tea', desc: 'Cherry blossom syrup blended with white tea and cream — spring only.', price: 6.50, tag: 'Limited', tagIcon: 'spa' },
      { name: 'Pumpkin Spice Boba', desc: 'Spiced pumpkin purée with black tea and brown sugar boba.', price: 6.25, tag: 'Limited', tagIcon: 'spa' },
    ],
  },
]

const toppings = [
  'Boba Pearls', 'Popping Boba', 'Coconut Jelly', 'Grass Jelly', 'Aloe Vera', 'Pudding', 'Egg Pudding',
]

const tagColors = {
  Bestseller: { bg: '#fff3cd', color: '#856404', icon: 'star' },
  Popular: { bg: '#ffe5d0', color: '#7a3d10', icon: 'local_fire_department' },
  'Staff Pick': { bg: '#d8f0e3', color: '#1a5c36', icon: 'favorite' },
  New: { bg: '#e8e0f4', color: '#4a2d8a', icon: 'new_releases' },
  Limited: { bg: '#fce4ec', color: '#880e4f', icon: 'spa' },
}

function Tag({ label, icon }) {
  const style = tagColors[label] || { bg: C.surfaceContainerHigh, color: C.onSurface }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      background: style.bg, color: style.color,
      borderRadius: 9999, padding: '2px 8px',
      fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 11,
      textTransform: 'uppercase', letterSpacing: '0.04em',
    }}>
      {icon && <span style={{ fontFamily: 'Material Icons', fontSize: 12 }}>{icon}</span>}
      {label}
    </span>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [selectedToppings, setSelectedToppings] = useState([])
  const [orderItem, setOrderItem] = useState(null)
  const [showCart, setShowCart] = useState(false)

  const filteredMenu = activeCategory === 'All'
    ? menu
    : menu.filter(m => m.category === activeCategory)

  function addToCart(item) {
    setOrderItem(item)
  }

  function confirmAdd() {
    setCart(prev => {
      const existing = prev.find(c => c.name === orderItem.name)
      if (existing) return prev.map(c => c.name === orderItem.name ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { ...orderItem, qty: 1, toppings: [...selectedToppings] }]
    })
    setSelectedToppings([])
    setOrderItem(null)
  }

  function toggleTopping(t) {
    setSelectedToppings(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  }

  function removeFromCart(name) {
    setCart(prev => prev.filter(c => c.name !== name))
  }

  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0)
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0)

  return (
    <div style={{ background: C.surface, minHeight: '100%' }}>

      {/* Header */}
      <div style={{ background: `linear-gradient(160deg, #e8f0eb 0%, ${C.surface} 70%)`, padding: '48px 0 0' }}>
        <Container>
          <p style={{ fontFamily: 'MollicaHandDrawn', fontSize: 20, color: C.secondary, margin: '0 0 6px' }}>
            Handcrafted with love
          </p>
          <h1 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 'clamp(28px, 4vw, 48px)', color: C.onSurface, margin: '0 0 24px' }}>
            Full Menu
          </h1>

          {/* Category pills */}
          <div style={{
            display: 'flex', gap: 8, overflowX: 'auto', flexWrap: 'wrap',
            paddingBottom: 20, scrollbarWidth: 'none', msOverflowStyle: 'none',
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  flexShrink: 0,
                  padding: '9px 22px', borderRadius: 9999,
                  background: activeCategory === cat ? C.primary : C.surfaceContainerHigh,
                  color: activeCategory === cat ? C.onPrimary : C.onSurfaceVariant,
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'CobblerSans', fontWeight: 600, fontSize: 14,
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Menu sections */}
      <Container style={{ padding: '32px 24px 80px' }}>
        {filteredMenu.map(section => (
          <div key={section.category} style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 22, color: C.primary, margin: 0, whiteSpace: 'nowrap' }}>
                {section.category}
              </h2>
              <div style={{ flex: 1, height: 1, background: C.outline }} />
            </div>

            {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
            }}>
              {section.items.map(item => (
                <div
                  key={item.name}
                  style={{
                    background: C.surfaceContainerLow,
                    border: `1px solid ${C.outline}`,
                    borderRadius: 18, padding: 20,
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                    background: C.primaryContainer,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: 'Material Icons', fontSize: 26, color: C.onPrimaryContainer }}>
                      {section.category === 'Fruit Teas' ? 'emoji_food_beverage' : 'local_cafe'}
                    </span>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    {item.tag && (
                      <div style={{ marginBottom: 6 }}>
                        <Tag label={item.tag} icon={item.tagIcon} />
                      </div>
                    )}
                    <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 16, color: C.onSurface, margin: '0 0 4px', lineHeight: 1.3 }}>
                      {item.name}
                    </h3>
                    <p style={{ fontFamily: 'CobblerSans', fontSize: 13, color: C.onSurfaceVariant, margin: '0 0 12px', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 18, color: C.primary }}>
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        style={{
                          padding: '8px 18px', borderRadius: 9999,
                          background: C.primary, color: C.onPrimary, border: 'none',
                          fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 13,
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                        }}
                      >
                        <span style={{ fontFamily: 'Material Icons', fontSize: 16 }}>add</span>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>

      {/* Cart FAB — floats above footer */}
      {cartCount > 0 && (
        <button
          onClick={() => setShowCart(true)}
          style={{
            position: 'fixed', bottom: 32, left: '50%', transform: 'translateX(-50%)',
            background: C.primary, color: C.onPrimary,
            border: 'none', borderRadius: 9999,
            padding: '14px 32px',
            fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 4px 24px rgba(76,100,87,0.4)',
            zIndex: 40, whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontFamily: 'Material Icons', fontSize: 20 }}>shopping_bag</span>
          View Order · {cartCount} item{cartCount > 1 ? 's' : ''} · ${cartTotal.toFixed(2)}
        </button>
      )}

      {/* Topping selector modal */}
      {orderItem && (
        <>
          <div
            onClick={() => setOrderItem(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(28,28,24,0.5)', zIndex: 60 }}
          />
          <div style={{
            position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: '100%', maxWidth: 430,
            background: C.surface, borderRadius: '24px 24px 0 0',
            padding: '24px 24px 40px', zIndex: 61,
          }}>
            <div style={{ width: 40, height: 4, background: C.outline, borderRadius: 9999, margin: '0 auto 20px' }} />
            <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 22, color: C.onSurface, margin: '0 0 4px' }}>
              {orderItem.name}
            </h3>
            <p style={{ fontFamily: 'CobblerSans', fontSize: 14, color: C.onSurfaceVariant, margin: '0 0 20px' }}>
              Choose your toppings (optional)
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {toppings.map(t => (
                <button
                  key={t}
                  onClick={() => toggleTopping(t)}
                  style={{
                    padding: '8px 14px', borderRadius: 9999,
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

      {/* Cart sheet */}
      {showCart && (
        <>
          <div
            onClick={() => setShowCart(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(28,28,24,0.5)', zIndex: 60 }}
          />
          <div style={{
            position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: '100%', maxWidth: 430,
            background: C.surface, borderRadius: '24px 24px 0 0',
            padding: '24px 24px 40px', zIndex: 61,
            maxHeight: '80svh', overflowY: 'auto',
          }}>
            <div style={{ width: 40, height: 4, background: C.outline, borderRadius: 9999, margin: '0 auto 20px' }} />
            <h3 style={{ fontFamily: 'ArtSchoolDropout', fontSize: 22, color: C.onSurface, margin: '0 0 20px' }}>
              Your Order
            </h3>
            {cart.map(item => (
              <div key={item.name} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px 0', borderBottom: `1px solid ${C.outline}`,
              }}>
                <div>
                  <p style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 15, color: C.onSurface, margin: 0 }}>
                    {item.name} × {item.qty}
                  </p>
                  {item.toppings?.length > 0 && (
                    <p style={{ fontFamily: 'CobblerSans', fontSize: 12, color: C.onSurfaceVariant, margin: '2px 0 0' }}>
                      + {item.toppings.join(', ')}
                    </p>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 16, color: C.primary }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                  >
                    <span style={{ fontFamily: 'Material Icons', fontSize: 20, color: '#ba1a1a' }}>delete</span>
                  </button>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 20px' }}>
              <span style={{ fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16, color: C.onSurface }}>Total</span>
              <span style={{ fontFamily: 'ArtSchoolDropout', fontSize: 20, color: C.primary }}>${cartTotal.toFixed(2)}</span>
            </div>
            <button style={{
              width: '100%', padding: 16, borderRadius: 9999,
              background: C.primary, color: C.onPrimary, border: 'none',
              fontFamily: 'CobblerSans', fontWeight: 700, fontSize: 16,
              cursor: 'pointer',
            }}>
              Place Order
            </button>
          </div>
        </>
      )}

    </div>
  )
}
