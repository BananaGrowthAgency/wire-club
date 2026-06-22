"use client";
import { useEffect, useRef } from "react";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=85&fit=crop",
    tag: "Signature",
    title: "Comidas de Trabajo Premium",
    desc: "Encuentros gastronómicos en restaurantes de referencia donde las conversaciones generan oportunidades reales de negocio.",
  },
  {
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=85&fit=crop",
    tag: "Networking",
    title: "Eventos Life Style",
    desc: "Experiencias diseñadas para que el negocio y el ocio convivan al más alto nivel, generando relaciones de confianza entre asociados.",
  },
  {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=85&fit=crop",
    tag: "Expansión",
    title: "Networking Nacional",
    desc: "Presencia en las principales ciudades de España con una comunidad en constante crecimiento y próxima expansión internacional.",
  },
];

export default function ExperienciasSection() {
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
    <section id="experiencias" ref={ref} style={{ background: "#0d0d0c", padding: "120px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 60, alignItems: "flex-end" }}>
          <div>
            <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div className="divider-gold" />
              <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold-4)" }}>
                Lo que Ofrecemos
              </span>
            </div>
            <h2 className="fade-up font-display" style={{
              fontSize: "clamp(40px, 4.5vw, 64px)", fontWeight: 800,
              color: "#f0ede6", lineHeight: 1.05, transitionDelay: "0.1s",
            }}>
              NEGOCIO Y OCIO<br />
              <span className="gold-gradient-text" style={{ fontStyle: "italic", fontWeight: 700 }}>AL MISMO TIEMPO</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 16 }}>
            <p className="fade-up" style={{
              fontFamily: "Inter", fontSize: 15, color: "#6a6a5e", lineHeight: 1.7, transitionDelay: "0.15s",
            }}>
              Más de 150 eventos realizados desde 2022. Cada encuentro es una oportunidad de negocio en un entorno de primer nivel.
            </p>
            <a href="#contacto" className="fade-up btn-gold" style={{ alignSelf: "flex-start", transitionDelay: "0.2s" }}>
              Ver Todos los Eventos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="fade-up"
              style={{ position: "relative", overflow: "hidden", cursor: "pointer", transitionDelay: `${0.1 * i}s` }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <div style={{ overflow: "hidden", height: 320 }}>
                <img src={c.img} alt={c.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", display: "block" }}
                />
              </div>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)",
              }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 28px" }}>
                <div style={{
                  display: "inline-block", padding: "4px 10px",
                  border: "1px solid rgba(212,160,23,0.55)",
                  fontFamily: "Inter", fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-4)", marginBottom: 10,
                }}>{c.tag}</div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#f0ede6", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontFamily: "Inter", fontSize: 13, color: "#9a9a8a", lineHeight: 1.5 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
