"use client";
import { useEffect, useRef } from "react";

const eventos = [
  { num: "01", tipo: "Comidas Premium", desc: "Encuentros gastronómicos mensuales en restaurantes de referencia.", frec: "Mensual" },
  { num: "02", tipo: "Encuentros Empresariales", desc: "Jornadas de alto nivel para generar sinergias estratégicas.", frec: "Trimestral" },
  { num: "03", tipo: "Cenas Benéficas de Gala", desc: "Eventos que combinan compromiso social con networking de élite.", frec: "Semestral" },
  { num: "04", tipo: "Experiencias Corporativas", desc: "Bodegas, circuitos, eventos culturales y más.", frec: "Continuo" },
];

export default function EventosSection() {
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
    <section id="eventos" ref={ref} style={{ background: "#0a0a0a", padding: "120px 40px", borderTop: "1px solid rgba(212,160,23,0.1)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 64, alignItems: "flex-end" }}>
          <div>
            <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div className="divider-gold" />
              <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold-4)" }}>Agenda</span>
            </div>
            <h2 className="fade-up font-display" style={{ fontSize: "clamp(38px, 4vw, 56px)", fontWeight: 800, color: "#f0ede6", lineHeight: 1.1, transitionDelay: "0.1s" }}>
              LA AGENDA<br />
              <span className="gold-gradient-text" style={{ fontStyle: "italic", fontWeight: 700 }}>QUE IMPORTA</span>
            </h2>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter", fontSize: 15, color: "#6a6a5e", lineHeight: 1.7, alignSelf: "flex-end", transitionDelay: "0.15s" }}>
            Una programación diseñada para maximizar las oportunidades de conexión en entornos de alto nivel.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {eventos.map((ev, i) => (
            <div key={ev.num}
              className="fade-up"
              style={{
                display: "grid", gridTemplateColumns: "80px 1fr auto",
                gap: 32, alignItems: "center",
                padding: "32px 0",
                borderBottom: "1px solid rgba(212,160,23,0.1)",
                transition: "background 0.3s",
                transitionDelay: `${0.08 * i}s`,
                cursor: "default",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,168,76,0.02)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <span className="font-display" style={{ fontSize: 36, fontWeight: 700, color: "rgba(212,160,23,0.18)", lineHeight: 1 }}>{ev.num}</span>
              <div>
                <h3 className="font-display" style={{ fontSize: 20, fontWeight: 600, color: "#f0ede6", marginBottom: 6 }}>{ev.tipo}</h3>
                <p style={{ fontFamily: "Inter", fontSize: 14, color: "#5a5a50" }}>{ev.desc}</p>
              </div>
              <span style={{
                fontFamily: "Inter", fontSize: 9, fontWeight: 500,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "var(--gold-4)", border: "1px solid rgba(201,168,76,0.25)",
                padding: "6px 14px", whiteSpace: "nowrap",
              }}>{ev.frec}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
