"use client";
import { useEffect, useRef } from "react";

const eventos = [
  {
    num: "01", tipo: "Comidas de Trabajo Premium", frec: "Mensual",
    desc: "Encuentros gastronómicos mensuales en restaurantes de referencia donde las conversaciones generan oportunidades reales de negocio.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=85&fit=crop",
  },
  {
    num: "02", tipo: "Encuentros Empresariales", frec: "Trimestral",
    desc: "Jornadas de alto nivel para generar sinergias estratégicas entre los socios más activos del club.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=85&fit=crop",
  },
  {
    num: "03", tipo: "Cenas Benéficas de Gala", frec: "Semestral",
    desc: "Eventos que combinan compromiso social con networking de élite en los espacios más exclusivos de cada ciudad.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=85&fit=crop",
  },
  {
    num: "04", tipo: "Experiencias Corporativas", frec: "Continuo",
    desc: "Bodegas, circuitos, eventos culturales y experiencias únicas diseñadas para fortalecer vínculos entre asociados.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=85&fit=crop",
  },
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
    <section id="eventos" ref={ref} className="wcs-eventos-section" style={{ background: "#0a0a0a", padding: "80px clamp(20px,5vw,40px)", borderTop: "1px solid rgba(212,160,23,0.1)" }}>
      <style>{`
        @media (max-width: 767px) {
          .wcs-eventos-section { padding: 72px 20px !important; }
          .wcs-eventos-header { grid-template-columns: 1fr !important; gap: 16px !important; margin-bottom: 36px !important; }
          .wcs-event-card { grid-template-columns: 1fr !important; }
          .wcs-event-card-sep { display: none !important; }
          .wcs-event-img-wrap { height: 200px !important; width: 100% !important; }
          .wcs-event-text { padding: 20px 16px !important; flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
          .wcs-event-num { font-size: 34px !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div className="wcs-eventos-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 64, alignItems: "flex-end" }}>
          <div>
            <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div className="divider-gold" />
              <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold-4)" }}>Agenda</span>
            </div>
            <h2 className="fade-up font-display wcs-section-h2" style={{ fontSize: "clamp(28px, 7.5vw, 56px)", fontWeight: 800, color: "#f0ede6", lineHeight: 1.1, transitionDelay: "0.1s" }}>
              LA AGENDA<br />
              <span className="gold-gradient-text" style={{ fontStyle: "italic", fontWeight: 700 }}>QUE IMPORTA</span>
            </h2>
          </div>
          <p className="fade-up" style={{ fontFamily: "Inter", fontSize: 15, color: "#6a6a5e", lineHeight: 1.7, alignSelf: "flex-end", transitionDelay: "0.15s" }}>
            Una programación diseñada para maximizar las oportunidades de conexión en entornos de alto nivel.
          </p>
        </div>

        {/* Cards horizontales */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {eventos.map((ev, i) => (
            <div key={ev.num}
              className="fade-up wcs-event-card"
              style={{
                display: "grid", gridTemplateColumns: "200px 3px 1fr",
                border: "1px solid rgba(200,146,14,0.12)",
                overflow: "hidden", cursor: "default",
                transition: "border-color 0.35s ease, box-shadow 0.35s ease",
                transitionDelay: `${0.08 * i}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(200,146,14,0.55)";
                e.currentTarget.style.boxShadow = "0 0 32px rgba(200,146,14,0.06)";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(200,146,14,0.12)";
                e.currentTarget.style.boxShadow = "none";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Imagen */}
              <div className="wcs-event-img-wrap" style={{ overflow: "hidden", height: 150 }}>
                <img src={ev.img} alt={ev.tipo}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
                />
              </div>

              {/* Separador dorado */}
              <div className="wcs-event-card-sep" style={{ background: "linear-gradient(to bottom, transparent, #C8920E 30%, #C8920E 70%, transparent)" }} />

              {/* Texto */}
              <div className="wcs-event-text" style={{ padding: "28px 40px", display: "flex", alignItems: "center", gap: 40 }}>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{
                      fontFamily: "Inter", fontSize: 9, fontWeight: 500,
                      letterSpacing: "0.25em", textTransform: "uppercase",
                      color: "#C8920E", border: "1px solid rgba(200,146,14,0.4)",
                      padding: "3px 10px",
                    }}>{ev.frec}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: "#f0ede6", marginBottom: 8, lineHeight: 1.2 }}>{ev.tipo}</h3>
                  <p style={{ fontFamily: "Inter", fontSize: 13, color: "#6a6a5e", lineHeight: 1.65 }}>{ev.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
