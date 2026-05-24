import { useState, useEffect, useRef } from "react";
import OrderModal from "../components/OrderModal";
import Footer from "../components/Footer";

// ── Drink images ───────────────────────────────────────────────────────────
const drinkPics = import.meta.glob(
  "../assets/drink-pics/*.{jpg,png,jpeg,webp}",
  { eager: true },
);
function pic(filename) {
  return drinkPics[`../assets/drink-pics/${filename}`]?.default;
}
const PLACEHOLDER = pic("classic-milk-tea.jpg");

function Leaf({ style }) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M30 75 C30 75 5 55 5 30 C5 10 18 2 30 2 C42 2 55 10 55 30 C55 55 30 75 30 75Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M30 75 C30 75 30 40 30 2"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 45 C20 38 10 32 5 30"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M30 35 C40 28 50 28 55 30"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SmallLeaf({ style }) {
  return (
    <svg
      viewBox="0 0 40 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M20 52 C20 52 3 38 3 20 C3 7 11 1 20 1 C29 1 37 7 37 20 C37 38 20 52 20 52Z"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path
        d="M20 52 C20 52 20 26 20 1"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function JasmineFlower({ style }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="24"
          cy="13"
          rx="4.5"
          ry="8"
          fill="currentColor"
          fillOpacity="0.22"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

const C = {
  primary: "#4c6457",
  onPrimary: "#ffffff",
  primaryContainer: "#8fa899",
  onPrimaryContainer: "#273d32",
  secondary: "#8c4e37",
  surface: "#fcf9f3",
  surfaceContainerLow: "#f6f3ed",
  surfaceContainerHigh: "#ebe8e2",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#424844",
  outline: "#c2c8c2",
  outlineVariant: "#e5e2dc",
};

const categories = [
  "All",
  "Milk Tea",
  "Fruit Tea",
  "Blended",
  "Matcha",
  "Coffee",
  "Snacks",
];

const menuItems = [
  // Milk Tea
  {
    id: 1,
    category: "Milk Tea",
    name: "Classic Milk Tea",
    desc: "Floral Black Tea + Straus Organic Milk",
    badges: [],
    image: pic("classic-milk-tea.jpg"),
  },
  {
    id: 2,
    category: "Milk Tea",
    name: "Jasmine Milk Tea",
    desc: "Floral Green Tea + Straus Organic Milk",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 3,
    category: "Milk Tea",
    name: "Thai Milk Tea",
    desc: "Spicy Black Tea + Straus Organic Milk",
    badges: [],
    image: pic("thai-tea.jpg"),
  },
  {
    id: 4,
    category: "Milk Tea",
    name: "Tiger Milk Tea",
    desc: "Brown Sugar Syrup + Straus Organic Milk",
    badges: [],
    image: pic("tiger-milk-tea.jpg"),
  },
  {
    id: 5,
    category: "Milk Tea",
    name: "Taro Milk Tea",
    desc: "Classic Milk Tea + Taro Puree + Handmade Mochi",
    badges: [],
    image: PLACEHOLDER,
  },
  // Fruit Tea
  {
    id: 6,
    category: "Fruit Tea",
    name: "Lime Fruit Tea",
    desc: "Floral Green Tea + Fresh Lime",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 7,
    category: "Fruit Tea",
    name: "Passion Fruit Tea",
    desc: "Floral Green Tea + Passion Fruit + Fresh Orange + Fresh Lime",
    badges: [],
    image: pic("passion-fruit-tea.jpg"),
  },
  {
    id: 8,
    category: "Fruit Tea",
    name: "Mango Fruit Tea",
    desc: "Floral Green Tea + Fresh Mango + Fresh Orange + Fresh Lime",
    badges: [],
    image: pic("mango-fruit-tea.jpg"),
  },
  {
    id: 9,
    category: "Fruit Tea",
    name: "Strawberry Fruit Tea",
    desc: "Floral Green Tea + Fresh Strawberries + Fresh Lemon",
    badges: [],
    image: pic("strawberry-fruit-tea.jpg"),
  },
  {
    id: 10,
    category: "Fruit Tea",
    name: "Green Grape Fruit Tea",
    desc: "Floral Green Tea + Fresh Grapes + Fresh Lime",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 11,
    category: "Fruit Tea",
    name: "Red Grape Fruit Tea",
    desc: "Floral Green Tea + Fresh Grapes + Fresh Lime",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 12,
    category: "Fruit Tea",
    name: "Melody Fruit Tea",
    desc: "Floral Green Tea + Fresh Assorted Fruits",
    badges: [],
    image: PLACEHOLDER,
  },
  // Matcha
  {
    id: 13,
    category: "Matcha",
    name: "Matcha Latte",
    desc: "Uji Matcha + Straus Organic Milk",
    badges: [],
    image: pic("matcha-latte.jpg"),
  },
  {
    id: 14,
    category: "Matcha",
    name: "Matcha Strawberry",
    desc: "Uji Matcha + Fresh Strawberries + Straus Organic Milk",
    badges: [],
    image: pic("matcha-latte.jpg"),
  },
  {
    id: 15,
    category: "Matcha",
    name: "Matcha Coconut",
    desc: "Uji Matcha Cream + Coconut Water",
    badges: [],
    image: pic("matcha-latte.jpg"),
  },
  // Blended
  {
    id: 19,
    category: "Blended",
    name: "Oreo",
    desc: "Oreo + Straus Organic Milk",
    badges: [],
    image: pic("oreo-blended.jpg"),
  },
  {
    id: 20,
    category: "Blended",
    name: "Taro",
    desc: "Taro Puree + Coconut Milk",
    badges: [],
    image: pic("taro-blended.jpg"),
  },
  {
    id: 21,
    category: "Blended",
    name: "Mango",
    desc: "⅓ LB Fresh Mangoes Blended",
    badges: [],
    image: pic("mango-blended.jpg"),
  },
  {
    id: 22,
    category: "Blended",
    name: "Strawberry",
    desc: "⅓ LB Fresh Strawberries Blended",
    badges: [],
    image: pic("strawberry-blended.jpg"),
  },
  {
    id: 23,
    category: "Blended",
    name: "Green Grape",
    desc: "Fresh Grapes + Floral Green Tea",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 24,
    category: "Blended",
    name: "Red Grape",
    desc: "Fresh Grapes + Floral Green Tea",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 25,
    category: "Blended",
    name: "Strawberry Mochi",
    desc: "Fresh Strawberries + Handmade Mochi + Straus Organic Milk",
    badges: [],
    image: pic("strawberry-blended.jpg"),
  },
  {
    id: 26,
    category: "Blended",
    name: "Mango Mochi",
    desc: "Fresh Mangoes + Handmade Mochi + Straus Organic Milk",
    badges: [],
    image: pic("mango-blended.jpg"),
  },
  // Coffee
  {
    id: 16,
    category: "Coffee",
    name: "Americano",
    desc: "Black Coffee",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 17,
    category: "Coffee",
    name: "Coffee Latte",
    desc: "Phin Drip Coffee + Straus Organic Milk",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 18,
    category: "Coffee",
    name: "Vietnamese Coffee",
    desc: "Phin Drip Coffee + Condensed Milk",
    badges: ["Hot/Iced"],
    image: PLACEHOLDER,
  },
  // Snacks
  {
    id: 27,
    category: "Snacks",
    name: "Fries",
    desc: "Golden crispy fries.",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 28,
    category: "Snacks",
    name: "Eggrolls",
    desc: "Crispy golden eggrolls.",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 29,
    category: "Snacks",
    name: "Shrimp Rolls",
    desc: "Crispy shrimp rolls.",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 30,
    category: "Snacks",
    name: "Chicken Strips",
    desc: "Tender golden chicken strips.",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 31,
    category: "Snacks",
    name: "Popcorn Chicken",
    desc: "Bite-sized crispy popcorn chicken.",
    badges: [],
    image: PLACEHOLDER,
  },
  {
    id: 32,
    category: "Snacks",
    name: "Combo",
    desc: "Two Chicken Strips + Fries",
    badges: [],
    image: PLACEHOLDER,
  },
];

const badgeStyle = {
  Bestseller: { bg: "#fff3cd", color: "#856404" },
  Popular: { bg: "#ffe0b2", color: "#7a3d10" },
  "Staff Pick": { bg: "#d8f0e3", color: "#1a5c36" },
  New: { bg: "#ede7f6", color: "#4527a0" },
  Recommended: { bg: "#e3f2fd", color: "#0d47a1" },
  Seasonal: { bg: "#fce4ec", color: "#880e4f" },
  "Non-Caffeinated": { bg: "#f1f8e9", color: "#33691e" },
  Vegan: { bg: "#e8f5e9", color: "#1b5e20" },
  "Hot/Iced": { bg: "#fef3e2", color: "#92400e" },
};

function Badge({ label }) {
  const s = badgeStyle[label] || {
    bg: C.surfaceContainerHigh,
    color: C.onSurface,
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: s.bg,
        color: s.color,
        borderRadius: 9999,
        padding: "2px 9px",
        fontFamily: "CobblerSans",
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
      }}
    >
      ● {label}
    </span>
  );
}

function MenuCard({ item, index, onOrder }) {
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef(null);
  // stable touch detection — computed once on mount
  const isTouch = useRef(
    typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover)").matches,
  );

  // staggered entrance
  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), index * 45);
    return () => clearTimeout(t);
  }, [item.id, index]);

  // Mobile: reveal when card scrolls into view (≥55% visible), hide when it leaves
  useEffect(() => {
    if (!isTouch.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setRevealed(entry.isIntersecting),
      { threshold: 0.55 },
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        if (!isTouch.current) setRevealed(true);
      }}
      onMouseLeave={() => {
        if (!isTouch.current) setRevealed(false);
      }}
      onClick={() => {
        if (isTouch.current) setRevealed((r) => !r);
      }}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "3 / 4",
        background: C.surfaceContainerHigh,
        opacity: mounted ? 1 : 0,
        transform: mounted
          ? "translateY(0) scale(1)"
          : "translateY(20px) scale(0.96)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        boxShadow: revealed
          ? "0 12px 40px rgba(76,100,87,0.18)"
          : "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      {/* Photo — fills card, slight zoom on reveal */}
      <img
        src={item.image}
        alt={item.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: revealed ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.34,1.2,0.64,1)",
        }}
      />

      {/* Name + badges — sit at bottom, always visible */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background:
            "linear-gradient(to top, rgba(20,20,16,0.82) 0%, transparent 100%)",
          padding: "48px 14px 22px",
          opacity: revealed ? 0 : 1,
          transition:
            "transform 0.4s cubic-bezier(0.34,1.2,0.64,1), opacity 0.25s ease",
          transform: revealed ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        <h3
          style={{
            fontFamily: "ArtSchoolDropout",
            fontSize: 16,
            color: "#fff",
            margin: "0 0 6px",
            lineHeight: 1.2,
          }}
        >
          {item.name}
        </h3>
        {item.badges.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {item.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        )}
      </div>

      {/* Description overlay — fades up from bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, rgba(28,28,24,0.88) 0%, rgba(28,28,24,0.4) 60%, transparent 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "20px 18px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          pointerEvents: revealed ? "auto" : "none",
        }}
      >
        <h3
          style={{
            fontFamily: "ArtSchoolDropout",
            fontSize: 16,
            color: "#ffffff",
            margin: "0 0 8px",
            lineHeight: 1.25,
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontFamily: "CobblerSans",
            fontSize: 13,
            color: "rgba(255,255,255,0.85)",
            margin: "0 0 14px",
            lineHeight: 1.55,
          }}
        >
          {item.desc}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOrder();
          }}
          style={{
            alignSelf: "flex-start",
            padding: "9px 20px",
            borderRadius: 9999,
            background: C.primary,
            color: C.onPrimary,
            border: "none",
            cursor: "pointer",
            fontFamily: "CobblerSans",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const [selected, setSelected] = useState(["All"]);
  const [showOrder, setShowOrder] = useState(false);

  function toggleCategory(cat) {
    if (cat === "All") {
      setSelected(["All"]);
      return;
    }
    setSelected((prev) => {
      const withoutAll = prev.filter((c) => c !== "All");
      const next = withoutAll.includes(cat)
        ? withoutAll.filter((c) => c !== cat)
        : [...withoutAll, cat];
      if (next.length === 0) return ["All"];
      const nonAllCats = categories.filter((c) => c !== "All");
      if (nonAllCats.every((c) => next.includes(c))) return ["All"];
      return next;
    });
  }

  const filtered = selected.includes("All")
    ? menuItems
    : menuItems.filter((item) => selected.includes(item.category));

  return (
    <div style={{ background: C.surface, minHeight: "100%" }}>
      {/* ── Hero / Filter bar ── */}
      <div
        style={{
          background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 60%)`,
          borderBottom: `1px solid ${C.outline}`,
          padding: "56px 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Leaf
          style={{
            position: "absolute",
            top: "-8%",
            right: "4%",
            width: 100,
            color: C.primary,
            animation: "leafFloat2 11s ease-in-out infinite",
            transform: "rotate(-20deg)",
          }}
        />
        <Leaf
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "1%",
            width: 80,
            color: C.primary,
            animation: "leafFloat1 9s ease-in-out infinite 1s",
            transform: "rotate(10deg)",
          }}
        />
        <SmallLeaf
          style={{
            position: "absolute",
            top: "20%",
            left: "6%",
            width: 50,
            color: C.primary,
            animation: "leafFloat3 8s ease-in-out infinite",
          }}
        />
        <SmallLeaf
          style={{
            position: "absolute",
            bottom: "0%",
            right: "20%",
            width: 42,
            color: C.secondary,
            animation: "leafFloat2 10s ease-in-out infinite 2s",
            transform: "rotate(-30deg)",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            top: "10%",
            left: "40%",
            width: 48,
            color: C.secondary,
            animation: "leafFloat1 12s ease-in-out infinite 0.5s",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            bottom: "5%",
            right: "8%",
            width: 40,
            color: C.primary,
            animation: "leafFloat3 9s ease-in-out infinite 1.5s",
          }}
        />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <h1
            style={{
              fontFamily: "ArtSchoolDropout",
              fontSize: "clamp(30px, 4vw, 52px)",
              color: C.onSurface,
              margin: "0 0 8px",
              lineHeight: 1.1,
            }}
          >
            Full Menu
          </h1>

          {/* Multi-select category pills */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              paddingBottom: 28,
            }}
          >
            {categories.map((cat) => {
              const active = selected.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    background: active ? C.primary : C.surface,
                    color: active ? C.onPrimary : C.onSurfaceVariant,
                    border: `1.5px solid ${active ? C.primary : C.outline}`,
                    fontFamily: "CobblerSans",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    transform: active ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 32px 80px" }}
      >
        <p
          style={{
            fontFamily: "CobblerSans",
            fontSize: 14,
            color: C.onSurfaceVariant,
            margin: "0 0 28px",
          }}
        >
          Showing{" "}
          <strong style={{ color: C.primary }}>{filtered.length}</strong> drink
          {filtered.length !== 1 ? "s" : ""}
          {!selected.includes("All") && (
            <>
              {" "}
              in{" "}
              <strong style={{ color: C.primary }}>
                {selected.join(", ")}
              </strong>
            </>
          )}{" "}
          · Hover or tap a card to learn more
        </p>

        <div
          className="menu-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {filtered.map((item, i) => (
            <MenuCard
              key={item.id}
              item={item}
              index={i}
              onOrder={() => setShowOrder(true)}
            />
          ))}
        </div>
      </div>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
      <Footer />

      <style>{`
        @keyframes leafFloat1 { 0%,100%{transform:translateY(0px) rotate(0deg)}33%{transform:translateY(-14px) rotate(4deg)}66%{transform:translateY(6px) rotate(-3deg)} }
        @keyframes leafFloat2 { 0%,100%{transform:translateY(0px) rotate(-20deg)}40%{transform:translateY(-18px) rotate(-14deg)}70%{transform:translateY(8px) rotate(-24deg)} }
        @keyframes leafFloat3 { 0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-10px) rotate(5deg)} }
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
  );
}
