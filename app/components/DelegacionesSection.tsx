"use client";
import { useEffect, useRef } from "react";

const ciudades = [
  "Zaragoza", "Madrid", "Barcelona", "Valencia",
  "Mallorca", "Tenerife", "Málaga · Costa del Sol",
  "Alicante", "Logroño",
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
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "400px 1fr", gap: 80, alignItems: "start" }}>
        
        {/* Left */}
        <div style={{ position: "sticky", top: 120 }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div className="divider-gold" />
            <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold-4)" }}>
              Presencia Nacional
            </span>
          </div>
          <h2 className="fade-up font-display" style={{
            fontSize: "clamp(38px, 4vw, 56px)", fontWeight: 800,
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
            9 delegaciones activas en las principales ciudades de España, con presencia en expansión nacional e internacional próximamente.
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

        {/* Right — city grid */}
        <div className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, transitionDelay: "0.2s" }}>
          {ciudades.map((c, i) => (
            <div key={c} style={{
              border: "1px solid rgba(212,160,23,0.12)",
              padding: "20px 20px",
              display: "flex", alignItems: "center", gap: 12,
              transition: "border-color 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(212,160,23,0.5)";
              e.currentTarget.style.background = "rgba(212,160,23,0.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(212,160,23,0.12)";
              e.currentTarget.style.background = "transparent";
            }}
            >
              <div style={{ width: 6, height: 6, background: "var(--gold-4)", borderRadius: "50%", flexShrink: 0, opacity: 0.7 }} />
              <span style={{ fontFamily: "Inter", fontSize: 13, color: "#7a7a6e" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
