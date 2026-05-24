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
  tertiaryContainer: "#b6a06e",
};

function PhotoSlot({ label, tall }) {
  return (
    <div
      style={{
        background: C.surfaceContainerHigh,
        borderRadius: 20,
        border: `2px dashed ${C.outline}`,
        aspectRatio: tall ? "3/4" : "4/3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <span
        style={{ fontFamily: "Material Icons", fontSize: 36, color: C.outline }}
      >
        add_photo_alternate
      </span>
      <span
        style={{
          fontFamily: "CobblerSans",
          fontSize: 13,
          color: C.onSurfaceVariant,
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function OurStoryPage() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div style={{ background: C.surface }}>
      {/* ── Hero ── */}
      <section
        style={{
          background: `linear-gradient(150deg, #deeae3 0%, ${C.surface} 60%)`,
          padding: "72px 0 64px",
          borderBottom: `1px solid ${C.outline}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Leaf
          style={{
            position: "absolute",
            top: "-6%",
            left: "2%",
            width: 110,
            color: C.primary,
            animation: "leafFloat1 9s ease-in-out infinite",
          }}
        />
        <Leaf
          style={{
            position: "absolute",
            top: "5%",
            right: "3%",
            width: 85,
            color: C.primary,
            animation: "leafFloat2 12s ease-in-out infinite",
            transform: "rotate(-25deg)",
          }}
        />
        <SmallLeaf
          style={{
            position: "absolute",
            bottom: "5%",
            left: "10%",
            width: 55,
            color: C.primary,
            animation: "leafFloat3 8s ease-in-out infinite 1s",
            transform: "rotate(20deg)",
          }}
        />
        <SmallLeaf
          style={{
            position: "absolute",
            bottom: "10%",
            right: "12%",
            width: 45,
            color: C.secondary,
            animation: "leafFloat1 10s ease-in-out infinite 2s",
            transform: "rotate(-40deg)",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            top: "25%",
            left: "8%",
            width: 50,
            color: C.secondary,
            animation: "leafFloat2 11s ease-in-out infinite 0.5s",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            top: "15%",
            right: "15%",
            width: 44,
            color: C.primary,
            animation: "leafFloat3 9s ease-in-out infinite 1.5s",
          }}
        />
        <JasmineFlower
          style={{
            position: "absolute",
            bottom: "0%",
            right: "35%",
            width: 38,
            color: C.secondary,
            animation: "leafFloat1 13s ease-in-out infinite 3s",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 32px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: "Dancing Script",
              fontWeight: 600,
              fontSize: 28,
              color: C.secondary,
              margin: "0 0 12px",
            }}
          >
            Where it all began
          </p>
          <h1
            style={{
              fontFamily: "ArtSchoolDropout",
              fontSize: "clamp(32px, 5vw, 56px)",
              color: C.primary,
              margin: "0 0 28px",
              lineHeight: 1.1,
            }}
          >
            Our Story
          </h1>
          <p
            style={{
              fontFamily: "CobblerSans",
              fontSize: 17,
              color: C.onSurfaceVariant,
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Happy Little Teas began with a simple belief: that a great cup of
            tea has the power to pause time. Born from a family tradition of
            artisanal blending, we hand-sort every leaf and hand-brew every
            batch to ensure only the highest quality reaches your cup.
          </p>
        </div>
      </section>

      {/* ── First photo row: wide store shot + text ── */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px" }}
      >
        <div
          className="story-split"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <PhotoSlot label="Inside the shop — add a photo here" />
          <div>
            <p
              style={{
                fontFamily: "Dancing Script",
                fontWeight: 600,
                fontSize: 26,
                color: C.secondary,
                margin: "0 0 8px",
              }}
            >
              A cozy corner of calm
            </p>
            <h2
              style={{
                fontFamily: "ArtSchoolDropout",
                fontSize: "clamp(22px, 3vw, 32px)",
                color: C.onSurface,
                margin: "0 0 18px",
              }}
            >
              The Space
            </h2>
            <p
              style={{
                fontFamily: "CobblerSans",
                fontSize: 16,
                color: C.onSurfaceVariant,
                lineHeight: 1.75,
                margin: "0 0 14px",
              }}
            >
              Step inside and you'll find warm lighting, the gentle hiss of
              steam, and the kind of unhurried energy that makes you want to
              stay a while. We designed our shop to feel like an extension of
              home — somewhere you can breathe.
            </p>
            <p
              style={{
                fontFamily: "CobblerSans",
                fontSize: 16,
                color: C.onSurfaceVariant,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Every detail, from the handmade ceramic cups to the wildflower
              arrangements on the counter, was chosen with intention. We believe
              the environment is part of the experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Staff gallery ── */}
      <section
        style={{
          background: C.surfaceContainerLow,
          borderTop: `1px solid ${C.outline}`,
          borderBottom: `1px solid ${C.outline}`,
          padding: "72px 0",
        }}
      >
        <section
          style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 32px" }}
        >
          <div
            className="story-split-reverse"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "Dancing Script",
                  fontWeight: 600,
                  fontSize: 26,
                  color: C.secondary,
                  margin: "0 0 8px",
                }}
              >
                Rooted in care
              </p>
              <h2
                style={{
                  fontFamily: "ArtSchoolDropout",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  color: C.onSurface,
                  margin: "0 0 18px",
                }}
              >
                Our Ingredients
              </h2>
              <p
                style={{
                  fontFamily: "CobblerSans",
                  fontSize: 16,
                  color: C.onSurfaceVariant,
                  lineHeight: 1.75,
                  margin: "0 0 14px",
                }}
              >
                We partner directly with sustainable, ethical farms across Asia
                to bring you teas that celebrate the earth. Every batch of boba
                pearls is slow-cooked in-house each morning. No syrups from a
                bottle, no shortcuts.
              </p>
              <p
                style={{
                  fontFamily: "CobblerSans",
                  fontSize: 16,
                  color: C.onSurfaceVariant,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Our ceremonial matcha is sourced from Uji, Japan. Our oolong
                comes from high-elevation farms in Taiwan. And our fruit teas
                use real fruit — not concentrate.
              </p>
            </div>
            <PhotoSlot label="Shop exterior or ingredients — add a photo here" />
          </div>
        </section>
      </section>

      {/* ── Second photo row: text + store exterior ── */}

      {/* ── Values strip ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${C.primaryContainer}60, ${C.surfaceContainerHigh})`,
          borderTop: `1px solid ${C.outline}`,
          padding: "64px 0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {[
              {
                icon: "spa",
                title: "Ethically Sourced",
                desc: "Direct relationships with farms that treat people and land with respect.",
              },
              {
                icon: "favorite",
                title: "Made with Love",
                desc: "Every drink is hand-crafted to order — no batch brewing, no shortcuts.",
              },
              {
                icon: "eco",
                title: "Sustainability First",
                desc: "Compostable cups, minimal packaging, and a zero-waste kitchen mindset.",
              },
            ].map((v) => (
              <div key={v.title} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "Material Icons",
                    fontSize: 40,
                    color: C.primary,
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  {v.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "ArtSchoolDropout",
                    fontSize: 18,
                    color: C.onSurface,
                    margin: "0 0 8px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "CobblerSans",
                    fontSize: 14,
                    color: C.onSurfaceVariant,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Us ── */}
      <section
        style={{ padding: "72px 0", borderTop: `1px solid ${C.outline}` }}
      >
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "0 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Dancing Script",
              fontWeight: 600,
              fontSize: 26,
              color: C.secondary,
              margin: "0 0 8px",
            }}
          >
            We'd love to hear from you
          </p>
          <h2
            style={{
              fontFamily: "ArtSchoolDropout",
              fontSize: "clamp(22px, 3vw, 36px)",
              color: C.onSurface,
              margin: "0 0 16px",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontFamily: "CobblerSans",
              fontSize: 16,
              color: C.onSurfaceVariant,
              lineHeight: 1.7,
              margin: "0 0 36px",
            }}
          >
            Have a question, a catering inquiry, or just want to say hi? Drop us
            a line and we'll get back to you as soon as we can.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Email */}
            <a
              href="mailto:happylittleteas@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "18px 28px",
                borderRadius: 16,
                background: C.surfaceContainerLow,
                border: `1px solid ${C.outline}`,
                textDecoration: "none",
                color: C.onSurface,
                fontFamily: "CobblerSans",
                fontWeight: 600,
                fontSize: 16,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = C.surfaceContainerHigh)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = C.surfaceContainerLow)
              }
            >
              <span
                style={{
                  fontFamily: "Material Icons",
                  fontSize: 22,
                  color: C.primary,
                }}
              >
                mail
              </span>
              happylittleteas@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+15623862049"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "18px 28px",
                borderRadius: 16,
                background: C.surfaceContainerLow,
                border: `1px solid ${C.outline}`,
                textDecoration: "none",
                color: C.onSurface,
                fontFamily: "CobblerSans",
                fontWeight: 600,
                fontSize: 16,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = C.surfaceContainerHigh)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = C.surfaceContainerLow)
              }
            >
              <span
                style={{
                  fontFamily: "Material Icons",
                  fontSize: 22,
                  color: C.primary,
                }}
              >
                phone
              </span>
              (562) 386-2049
            </a>

            {/* Order Now */}
            <button
              onClick={() => setShowOrder(true)}
              style={{
                padding: "18px 28px",
                borderRadius: 16,
                background: C.primary,
                color: C.onPrimary,
                border: "none",
                fontFamily: "CobblerSans",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                boxShadow: "0 4px 16px rgba(76,100,87,0.25)",
              }}
            >
              <span style={{ fontFamily: "Material Icons", fontSize: 20 }}>
                shopping_bag
              </span>
              Order Now
            </button>
          </div>
        </div>
      </section>

      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
      <Footer />

      <style>{`
        @keyframes leafFloat1 { 0%,100%{transform:translateY(0px) rotate(0deg)}33%{transform:translateY(-14px) rotate(4deg)}66%{transform:translateY(6px) rotate(-3deg)} }
        @keyframes leafFloat2 { 0%,100%{transform:translateY(0px) rotate(-25deg)}40%{transform:translateY(-18px) rotate(-19deg)}70%{transform:translateY(8px) rotate(-29deg)} }
        @keyframes leafFloat3 { 0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-10px) rotate(5deg)} }
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
  );
}
