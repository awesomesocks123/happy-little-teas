import { useState } from "react";
import OrderModal from "../components/OrderModal";
import Footer from "../components/Footer";

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
};

const locations = [
  {
    name: "Signal Hill",
    address: "3199 E Pacific Coast Hwy #101",
    city: "Signal Hill, CA 90755",
    phone: "(562) 386-2049",
    hours: [
      { days: "Monday", time: "Closed" },
      { days: "Tuesday – Sunday", time: "11:00 am – 7:00 pm" },
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.856016038117!2d-118.15774812429471!3d33.79021617325685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd319cf1098e17%3A0xe1bbe9914cacdca2!2s3199%20E%20Pacific%20Coast%20Hwy%20%23101%2C%20Signal%20Hill%2C%20CA%2090755!5e0!3m2!1sen!2sus!4v1779661363009!5m2!1sen!2sus",
  },
];

export default function FindUsPage() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div style={{ background: C.surface, minHeight: "100%" }}>
      {/* ── Hero ── */}
      <div
        style={{
          background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 60%)`,
          borderBottom: `1px solid ${C.outline}`,
          padding: "64px 0 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Leaf
          style={{
            position: "absolute",
            top: "-8%",
            left: "1%",
            width: 100,
            color: C.primary,
            animation: "leafFloat1 9s ease-in-out infinite",
          }}
        />
        <Leaf
          style={{
            position: "absolute",
            top: "0%",
            right: "2%",
            width: 80,
            color: C.primary,
            animation: "leafFloat2 11s ease-in-out infinite",
            transform: "rotate(-20deg)",
          }}
        />
        <SmallLeaf
          style={{
            position: "absolute",
            bottom: "0%",
            left: "15%",
            width: 50,
            color: C.primary,
            animation: "leafFloat3 8s ease-in-out infinite 1s",
            transform: "rotate(25deg)",
          }}
        />
        <SmallLeaf
          style={{
            position: "absolute",
            bottom: "5%",
            right: "20%",
            width: 44,
            color: C.secondary,
            animation: "leafFloat1 10s ease-in-out infinite 2s",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            top: "20%",
            left: "12%",
            width: 52,
            color: C.secondary,
            animation: "leafFloat2 12s ease-in-out infinite 0.5s",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            top: "10%",
            right: "18%",
            width: 46,
            color: C.primary,
            animation: "leafFloat3 10s ease-in-out infinite 1.5s",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            bottom: "8%",
            left: "38%",
            width: 36,
            color: C.secondary,
            animation: "leafFloat1 14s ease-in-out infinite 3s",
            opacity: 0.7,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "Dancing Script",
              fontWeight: 600,
              fontSize: 26,
              color: C.secondary,
              margin: "0 0 8px",
            }}
          >
            Come find us
          </p>
          <h1
            style={{
              fontFamily: "ArtSchoolDropout",
              fontSize: "clamp(30px, 4vw, 52px)",
              color: C.onSurface,
              margin: "0 0 16px",
            }}
          >
            Our Location
          </h1>
        </div>
      </div>

      {/* ── Location cards ── */}
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 80px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className="location-card"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 0,
                borderRadius: 24,
                overflow: "hidden",
                border: `1px solid ${C.outline}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {/* Map */}
              <div
                style={{
                  position: "relative",
                  minHeight: 300,
                  background: C.surfaceContainerHigh,
                }}
              >
                <iframe
                  title={`Map for ${loc.name}`}
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: 300 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info */}
              <div style={{ padding: "36px 36px 40px", background: C.surface }}>
                <h2
                  style={{
                    fontFamily: "ArtSchoolDropout",
                    fontSize: 28,
                    color: C.primary,
                    margin: "0 0 24px",
                  }}
                >
                  {loc.name}
                </h2>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  {/* Address */}
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Material Icons",
                        fontSize: 24,
                        color: C.primary,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      location_on
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "CobblerSans",
                          fontWeight: 700,
                          fontSize: 15,
                          color: C.onSurface,
                          margin: "0 0 2px",
                        }}
                      >
                        {loc.address}
                      </p>
                      <p
                        style={{
                          fontFamily: "CobblerSans",
                          fontSize: 14,
                          color: C.onSurfaceVariant,
                          margin: 0,
                        }}
                      >
                        {loc.city}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    style={{ display: "flex", gap: 14, alignItems: "center" }}
                  >
                    <span
                      style={{
                        fontFamily: "Material Icons",
                        fontSize: 24,
                        color: C.primary,
                        flexShrink: 0,
                      }}
                    >
                      phone
                    </span>
                    <a
                      href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`}
                      style={{
                        fontFamily: "CobblerSans",
                        fontWeight: 600,
                        fontSize: 15,
                        color: C.primary,
                        textDecoration: "none",
                      }}
                    >
                      {loc.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Material Icons",
                        fontSize: 24,
                        color: C.primary,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      schedule
                    </span>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                      }}
                    >
                      {loc.hours.map((h) => (
                        <div
                          key={h.days}
                          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
                        >
                          <span
                            style={{
                              fontFamily: "CobblerSans",
                              fontWeight: 600,
                              fontSize: 14,
                              color: C.onSurface,
                            }}
                          >
                            {h.days}
                          </span>
                          <span
                            style={{
                              fontFamily: "CobblerSans",
                              fontSize: 14,
                              color: C.onSurfaceVariant,
                            }}
                          >
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 32,
                  }}
                >
                  <button
                    onClick={() => setShowOrder(true)}
                    style={{
                      padding: "13px 28px",
                      borderRadius: 9999,
                      background: C.primary,
                      color: C.onPrimary,
                      border: "none",
                      fontFamily: "CobblerSans",
                      fontWeight: 700,
                      fontSize: 14,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{ fontFamily: "Material Icons", fontSize: 18 }}
                    >
                      shopping_bag
                    </span>
                    Order Now
                  </button>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address + " " + loc.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "13px 28px",
                      borderRadius: 9999,
                      background: "transparent",
                      border: `1.5px solid ${C.primary}`,
                      color: C.primary,
                      fontFamily: "CobblerSans",
                      fontWeight: 600,
                      fontSize: 14,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{ fontFamily: "Material Icons", fontSize: 18 }}
                    >
                      directions
                    </span>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
      <Footer />

      <style>{`
        @keyframes leafFloat1 { 0%,100%{transform:translateY(0px) rotate(0deg)}33%{transform:translateY(-14px) rotate(4deg)}66%{transform:translateY(6px) rotate(-3deg)} }
        @keyframes leafFloat2 { 0%,100%{transform:translateY(0px) rotate(-20deg)}40%{transform:translateY(-18px) rotate(-14deg)}70%{transform:translateY(8px) rotate(-24deg)} }
        @keyframes leafFloat3 { 0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-10px) rotate(5deg)} }
        @media (min-width: 768px) {
          .location-card { grid-template-columns: 1fr 1fr !important; }
          .location-card > div:first-child { min-height: 400px !important; }
        }
      `}</style>
    </div>
  );
}
