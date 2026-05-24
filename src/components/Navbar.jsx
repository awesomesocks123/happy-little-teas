import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/HLT_Logo_2.0_Update.png";
import OrderModal from "./OrderModal";

const C = {
  primary: "#4c6457",
  onPrimary: "#ffffff",
  surface: "#fcf9f3",
  onSurface: "#1c1c18",
  onSurfaceVariant: "#424844",
  outline: "#c2c8c2",
  primaryContainer: "#8fa899",
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Find Us", to: "/find-us" },
  { label: "Our Story", to: "/story" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function openOrder() {
    setShowOrder(true);
  }

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: C.surface,
          borderBottom: `1px solid ${C.outline}`,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <img
              src={logo}
              alt="Happy Little Teas"
              style={{ height: 56, width: "auto" }}
            />
          </Link>

          {/* ── Desktop: links + Order Now ── */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 32 }}
          >
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                style={({ isActive }) => ({
                  fontFamily: "CobblerSans",
                  fontWeight: 600,
                  fontSize: 15,
                  color: isActive ? C.primary : C.onSurfaceVariant,
                  textDecoration: "none",
                  borderBottom: isActive
                    ? `2px solid ${C.primary}`
                    : "2px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.15s",
                })}
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={openOrder}
              style={{
                padding: "10px 22px",
                borderRadius: 9999,
                background: C.primary,
                color: C.onPrimary,
                border: "none",
                fontFamily: "CobblerSans",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Order Now
            </button>
          </div>

          {/* ── Mobile: Order Now (right of logo) + Hamburger (far right) ── */}
          <div
            className="mobile-nav"
            style={{ display: "none", alignItems: "center", gap: 10 }}
          >
            <button
              onClick={openOrder}
              style={{
                padding: "9px 18px",
                borderRadius: 9999,
                background: C.primary,
                color: C.onPrimary,
                border: "none",
                fontFamily: "CobblerSans",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Order Now
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
                display: "flex",
              }}
            >
              <span
                style={{
                  fontFamily: "Material Icons",
                  fontSize: 26,
                  color: C.onSurface,
                }}
              >
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-page menu takeover ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: C.surface,
          display: "flex",
          flexDirection: "column",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
        }}
      >
        {/* Top bar inside takeover */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: `1px solid ${C.outline}`,
            flexShrink: 0,
          }}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="Happy Little Teas"
              style={{ height: 48, width: "auto" }}
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
            }}
          >
            <span
              style={{
                fontFamily: "Material Icons",
                fontSize: 28,
                color: C.onSurface,
              }}
            >
              close
            </span>
          </button>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "32px 32px 0",
            gap: 4,
            flexShrink: 0,
          }}
        >
          {navLinks.map(({ label, to }, i) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: C.onSurface,
                fontFamily: "ArtSchoolDropout",
                fontSize: 36,
                padding: "14px 0",
                borderBottom: `1px solid ${C.outline}`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.3s ease ${i * 60}ms, transform 0.3s ease ${i * 60}ms`,
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Centered Order Now CTA */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 32px",
            gap: 16,
          }}
        >
          <button
            onClick={openOrder}
            style={{
              padding: "20px 48px",
              borderRadius: 9999,
              background: C.primary,
              color: C.onPrimary,
              border: "none",
              fontFamily: "ArtSchoolDropout",
              fontSize: 22,
              cursor: "pointer",
              boxShadow: "0 6px 28px rgba(76,100,87,0.3)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "scale(1)" : "scale(0.9)",
              transition:
                "opacity 0.4s ease 0.35s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.35s",
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <style>{`
        /* Desktop */
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav  { display: none !important; }
        }
        /* Mobile */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav  { display: flex !important; }
        }
      `}</style>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
    </>
  );
}
