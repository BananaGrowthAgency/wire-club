"use client";
import { useEffect, useRef } from "react";

export default function ContactSection() {
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
    <section id="contacto" ref={ref} style={{
      background: "#0a0a0a", padding: "140px 40px",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid rgba(212,160,23,0.1)",
    }}>
      {/* BG glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, rgba(212,160,23,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div className="fade-up" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
          <div className="divider-gold" />
          <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold-4)" }}>
            Únete al Club
          </span>
          <div className="divider-gold" />
        </div>

        <h2 className="fade-up font-display" style={{
          fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800,
          color: "#f0ede6", lineHeight: 1.05, marginBottom: 12,
          transitionDelay: "0.1s",
        }}>
          ¿LISTO PARA EL
        </h2>
        <h2 className="fade-up font-display gold-gradient-text" style={{
          fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 700,
          lineHeight: 1.05, fontStyle: "italic", marginBottom: 40,
          transitionDelay: "0.15s",
        }}>
          SIGUIENTE NIVEL?
        </h2>

        <p className="fade-up" style={{
          fontFamily: "Inter", fontSize: 16, color: "#6a6a5e",
          lineHeight: 1.8, maxWidth: 560, margin: "0 auto 56px",
          transitionDelay: "0.2s",
        }}>
          La membresía en Wire Business Club Spain no es para todos. Es para quienes ya entienden que las mejores oportunidades están en la comunidad correcta.
        </p>

        {/* Contact cards */}
        <div className="fade-up" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 52,
          transitionDelay: "0.25s",
        }}>
          {[
            { label: "Llamar", val: "609 178 116", href: "tel:609178116" },
            { label: "Email", val: "zaragoza@wireclubspain.es", href: "mailto:zaragoza@wireclubspain.es" },
            { label: "Instagram", val: "@wireclubbusinessspain", href: "https://instagram.com/wireclubbusinessspain" },
          ].map(c => (
            <a key={c.label} href={c.href}
              style={{
                border: "1px solid rgba(212,160,23,0.18)", padding: "24px 20px",
                textDecoration: "none", display: "block", transition: "border-color 0.3s, background 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(212,160,23,0.5)";
                e.currentTarget.style.background = "rgba(212,160,23,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(212,160,23,0.18)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <div style={{ fontFamily: "Inter", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-4)", marginBottom: 8 }}>{c.label}</div>
              <div style={{ fontFamily: "Inter", fontSize: 13, color: "#9a9a8a" }}>{c.val}</div>
            </a>
          ))}
        </div>

        <a href="mailto:zaragoza@wireclubspain.es?subject=Solicitud%20Membres%C3%ADa%20Wire%20Business%20Club"
          className="fade-up btn-gold-fill"
          style={{ fontSize: 12, padding: "18px 48px", transitionDelay: "0.3s", display: "inline-flex" }}
        >
          Solicitar Membresía
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
