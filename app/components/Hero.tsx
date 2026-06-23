"use client";

const GOLD = "#E8B822";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 580,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=90&fit=crop"
        alt="Wire Business Club Spain"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 40%",
        }}
      />

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(4,3,2,0.48) 0%, rgba(4,3,2,0.65) 55%, rgba(4,3,2,0.93) 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        textAlign: "center",
        padding: "0 32px 64px",
        width: "100%",
        maxWidth: 820,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        {/* Eyebrow */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 14, marginBottom: 22,
          willChange: "opacity, transform",
          animation: "hfu 0.65s ease 0.1s both",
        }}>
          <div style={{ height: 1, width: 32, background: GOLD, flexShrink: 0 }} />
          <span style={{
            fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 500,
            letterSpacing: "0.42em", textTransform: "uppercase", color: GOLD,
            whiteSpace: "nowrap",
          }}>
            Wire Business Club Spain
          </span>
          <div style={{ height: 1, width: 32, background: GOLD, flexShrink: 0 }} />
        </div>

        {/* Headline */}
        <h1 className="font-display" style={{
          fontSize: "clamp(22px, 2.6vw, 42px)",
          fontWeight: 800,
          lineHeight: 1.18,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#f5f0e8",
          margin: "0 0 20px",
          willChange: "opacity, transform",
          animation: "hfu 0.65s ease 0.22s both",
          textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.7), 1px 1px 0 rgba(0,0,0,0.7), -1px -1px 0 rgba(0,0,0,0.7)",
        }}>
          El club de empresarios perfecto para ampliar tu{" "}
          <em
            className="gold-gradient-text"
            style={{ fontStyle: "italic", textShadow: "none", WebkitTextStroke: "0.4px rgba(255,255,255,0.35)" }}
          >red de contactos</em>{" "}
          y crecer empresarialmente
        </h1>

        {/* Gold divider */}
        <div style={{
          height: 1, width: 52, background: GOLD,
          marginBottom: 20,
          willChange: "opacity, transform",
          animation: "hfu 0.65s ease 0.34s both",
        }} />

        {/* Subtitle */}
        <p style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(12px, 1.1vw, 14px)",
          fontWeight: 300, lineHeight: 1.8,
          color: "rgba(245,240,232,0.62)",
          maxWidth: 460, margin: "0 0 32px",
          willChange: "opacity, transform",
          animation: "hfu 0.65s ease 0.44s both",
        }}>
          Networking a nivel nacional entre grandes empresarios y directivos, generando relaciones de confianza mediante comidas de trabajo premium y eventos Life Style.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
          willChange: "opacity, transform",
          animation: "hfu 0.65s ease 0.54s both",
        }}>
          <a href="#contacto" className="btn-gold-fill" style={{ fontSize: 12, padding: "12px 26px", WebkitTextStroke: "0.4px #000" }}>
            Quiero ser parte de WCS
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ filter: "drop-shadow(0 0 0.4px #000) drop-shadow(0 0 0.4px #000)" }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#el-club" className="btn-gold" style={{ fontSize: 12, padding: "12px 26px", WebkitTextStroke: "0.4px #000" }}>
            Conoce más
          </a>
        </div>
      </div>

      {/* Stats strip — barra glassmorphism ancho completo */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
        background: "rgba(6,5,4,0.7)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(200,146,14,0.2)",
        willChange: "opacity, transform",
        animation: "hfu 0.65s ease 0.66s both",
      }}>
        <div style={{
          maxWidth: 860, margin: "0 auto", padding: "0 40px",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        }}>
          {[
            { n: "12",       l: "Delegaciones activas" },
            { n: "2022",     l: "Año de fundación"        },
            { n: "Nacional", l: "Red de contactos"       },
          ].map((s, i) => (
            <div key={s.l} style={{
              textAlign: "center", padding: "20px 0",
              borderRight: i < 2 ? "1px solid rgba(200,146,14,0.1)" : "none",
            }}>
              <div className="font-display" style={{
                fontSize: 32, fontWeight: 700, lineHeight: 1,
                background: "linear-gradient(180deg, #FFF3A3 0%, #E8B822 55%, #C8920E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>{s.n}</div>
              <div style={{ width: 24, height: 1, background: "rgba(200,146,14,0.4)", margin: "8px auto" }} />
              <div style={{
                fontFamily: "Inter, sans-serif", fontSize: 9,
                letterSpacing: "0.24em", textTransform: "uppercase", color: "#5a5a50",
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>


      <style>{`
        @keyframes hfu {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
