"use client";
import { useEffect, useRef } from "react";

const ciudades = [
  { name: "Zaragoza",               url: "https://images.unsplash.com/photo-1709727992229-0c3ee5c230e2?w=400&q=80&fit=crop", tag: "Sede Central" },
  { name: "Madrid",                 url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&q=80&fit=crop" },
  { name: "Barcelona",              url: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&q=80&fit=crop" },
  { name: "Valencia",               url: "https://plus.unsplash.com/premium_photo-1697730336238-5d1d342127e8?w=400&q=80&fit=crop" },
  { name: "Mallorca",               url: "https://images.unsplash.com/photo-1516154182849-1a5f068beda5?w=400&q=80&fit=crop" },
  { name: "Tenerife",               url: "https://images.unsplash.com/photo-1655317175101-ce1895db8ace?w=400&q=80&fit=crop" },
  { name: "Málaga · Costa del Sol", url: "https://plus.unsplash.com/premium_photo-1697729549014-2faefb25efba?w=400&q=80&fit=crop" },
  { name: "Alicante",               url: "https://plus.unsplash.com/premium_photo-1697729423504-70c4c9d87033?w=400&q=80&fit=crop" },
  { name: "Logroño",                url: "https://images.unsplash.com/photo-1592918270564-302ff69bfa51?w=400&q=80&fit=crop" },
  { name: "Murcia",                 url: "https://images.unsplash.com/photo-1747493829448-fd5a80db19f9?q=80&w=400&auto=format&fit=crop" },
  { name: "Andorra",                url: "https://images.unsplash.com/photo-1611917436955-d21c1999520c?q=80&w=400&auto=format&fit=crop" },
  { name: "Oporto",                 url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=400&auto=format&fit=crop", tag: "Portugal" },
];

export default function DelegacionesSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="delegaciones" ref={ref} style={{
      background: "#111110", padding: "120px 40px",
      borderTop: "1px solid rgba(212,160,23,0.1)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "480px 1fr", gap: 60, alignItems: "start" }}>
        
        {/* Left */}
        <div style={{ position: "sticky", top: 120 }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div className="divider-gold" />
            <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold-4)" }}>
              Presencia Nacional
            </span>
          </div>
          <h2 className="fade-up font-display" style={{
            fontSize: "clamp(36px, 3.5vw, 50px)", fontWeight: 800,
            color: "#f0ede6", lineHeight: 1.1, marginBottom: 24,
            transitionDelay: "0.1s",
          }}>
            DÓNDE NOS<br />
            <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>ENCONTRAMOS</span>
          </h2>
          <p className="fade-up" style={{
            fontFamily: "Inter", fontSize: 15, color: "#6a6a5e", lineHeight: 1.7,
            marginBottom: 36, transitionDelay: "0.15s",
          }}>
            12 delegaciones activas en España y en expansión internacional, con presencia en las principales ciudades y próxima apertura en nuevos mercados.
          </p>

          {/* Contact card */}
          <div className="fade-up" style={{
            border: "1px solid rgba(212,160,23,0.22)", padding: "28px 28px",
            background: "rgba(212,160,23,0.04)", transitionDelay: "0.2s",
          }}>
            <div style={{ fontFamily: "Inter", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold-4)", marginBottom: 8 }}>Sede Central · Zaragoza</div>
            <div className="font-display" style={{ fontSize: 18, fontWeight: 600, color: "#f0ede6", marginBottom: 4 }}>Juan Carlos Artal</div>
            <div style={{ fontFamily: "Inter", fontSize: 13, color: "#5a5a50", marginBottom: 16 }}>C/ Francisco Vitoria 17 · 50008 Zaragoza</div>
            <div style={{ height: 1, background: "rgba(212,160,23,0.18)", marginBottom: 16 }} />
            <a href="tel:609178116" style={{ display: "block", fontFamily: "Inter", fontSize: 13, color: "#9a9a8a", textDecoration: "none", marginBottom: 6, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-4)")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9a9a8a")}
            >609 178 116</a>
            <a href="mailto:zaragoza@wireclubspain.es" style={{ display: "block", fontFamily: "Inter", fontSize: 13, color: "#9a9a8a", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-4)")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9a9a8a")}
            >zaragoza@wireclubspain.es</a>
          </div>
        </div>

        {/* Right — city cards */}
        <div className="fade-up" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3, transitionDelay: "0.2s",
        }}>
          {ciudades.map((c, i) => (
            <div key={c.name}
              style={{
                position: "relative", height: 180, overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector(".city-img") as HTMLElement;
                const overlay = e.currentTarget.querySelector(".city-overlay") as HTMLElement;
                const nameEl = e.currentTarget.querySelector(".city-name") as HTMLElement;
                const border = e.currentTarget.querySelector(".city-border") as HTMLElement;
                if (img) img.style.transform = "scale(1.07)";
                if (overlay) overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)";
                if (nameEl) nameEl.style.color = "#E8B822";
                if (border) border.style.opacity = "1";
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector(".city-img") as HTMLElement;
                const overlay = e.currentTarget.querySelector(".city-overlay") as HTMLElement;
                const nameEl = e.currentTarget.querySelector(".city-name") as HTMLElement;
                const border = e.currentTarget.querySelector(".city-border") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
                if (overlay) overlay.style.background = "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.05) 100%)";
                if (nameEl) nameEl.style.color = "#d4cfc6";
                if (border) border.style.opacity = "0";
              }}
            >
              {/* Photo */}
              <img
                className="city-img"
                src={c.url}
                alt={c.name}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
              />
              {/* Dark gradient overlay */}
              <div className="city-overlay" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.05) 100%)",
                transition: "background 0.4s ease",
              }} />
              {/* Gold border on hover */}
              <div className="city-border" style={{
                position: "absolute", inset: 0,
                border: "1px solid rgba(200,146,14,0.65)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                pointerEvents: "none",
              }} />
              {/* Content */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px" }}>
                {c.tag && (
                  <div style={{
                    fontFamily: "Inter", fontSize: 8, letterSpacing: "0.3em",
                    textTransform: "uppercase", color: "#C8920E",
                    marginBottom: 4,
                  }}>{c.tag}</div>
                )}

                <div className="city-name" style={{
                  fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700,
                  color: "#d4cfc6", letterSpacing: "0.04em",
                  transition: "color 0.3s ease",
                }}>{c.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
