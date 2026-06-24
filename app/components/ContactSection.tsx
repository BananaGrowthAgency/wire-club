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
    <section id="contacto" ref={ref} className="wcs-contact-section" style={{
      background: "#0a0a0a", padding: "80px clamp(20px,5vw,40px)",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid rgba(212,160,23,0.1)",
    }}>
      <style>{`
        @media (max-width: 767px) {
          .wcs-contact-section { padding: 72px 20px !important; }
          .wcs-contact-cards { grid-template-columns: 1fr !important; gap: 10px !important; margin-bottom: 36px !important; }
        }
      `}</style>
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

        <h2 className="fade-up font-display wcs-section-h2" style={{
          fontSize: "clamp(22px, 5.2vw, 80px)", fontWeight: 800,
          color: "#f0ede6", lineHeight: 1.05, marginBottom: 12,
          transitionDelay: "0.1s",
        }}>
          ¿LISTO PARA EL
        </h2>
        <h2 className="fade-up font-display gold-gradient-text wcs-section-h2" style={{
          fontSize: "clamp(22px, 5.2vw, 80px)", fontWeight: 700,
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
        <div className="fade-up wcs-contact-cards" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 52,
          transitionDelay: "0.25s",
        }}>
          {[
            { label: "Llamar", val: "609 178 116", href: "tel:609178116", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8920E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
            { label: "Email", val: "zaragoza@wireclubspain.es", href: "mailto:zaragoza@wireclubspain.es", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8920E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
            { label: "Instagram", val: "@wireclubbusinessspain", href: "https://instagram.com/wireclubbusinessspain", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8920E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
          ].map(c => (
            <a key={c.label} href={c.href}
              style={{
                border: "1px solid rgba(212,160,23,0.18)",
                borderTop: "2px solid #C8920E",
                padding: "28px 20px",
                textDecoration: "none", display: "block",
                textAlign: "center",
                transition: "border-color 0.3s, background 0.3s",
                background: "rgba(200,146,14,0.03)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(212,160,23,0.07)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(200,146,14,0.03)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>{c.icon}</div>
              <div style={{ fontFamily: "Inter", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8920E", marginBottom: 10 }}>{c.label}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: c.label === "Email" ? 11 : 14, fontWeight: 700, color: "#d4cfc6" }}>{c.val}</div>
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
