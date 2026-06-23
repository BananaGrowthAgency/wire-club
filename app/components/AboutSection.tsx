"use client";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="el-club" ref={ref} style={{ background: "#0a0a0a", padding: "60px 40px 120px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
        
        {/* LEFT — Image mosaic */}
        <div className="fade-up" style={{ position: "relative", minHeight: 460 }}>
          {/* Gold vertical accent */}
          <div style={{ position: "absolute", top: "5%", left: -16, width: 2, height: "90%", background: "linear-gradient(to bottom, transparent, #C8920E 30%, #C8920E 70%, transparent)" }} />

          {/* Main image — rounded */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85&fit=crop"
            alt="Eventos empresariales Wire Club"
            style={{ width: "72%", height: 420, objectFit: "cover", display: "block", borderRadius: 14 }}
          />

          {/* Floating card — glassmorphism */}
          <div style={{
            position: "absolute",
            bottom: -20,
            right: 0,
            width: "50%",
            height: 240,
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(200,146,14,0.55)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
          }}>
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=85&fit=crop"
              alt="Networking de alto nivel"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Subtle dark vignette */}
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(8,6,4,0.12)",
            }} />
            {/* Gold top edge */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(200,146,14,0.8), transparent)" }} />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div style={{ paddingTop: 30 }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, transitionDelay: "0.1s" }}>
            <div className="divider-gold" />
            <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 500, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold-4)" }}>
              Quiénes Somos
            </span>
          </div>

          <h2 className="fade-up font-display" style={{
            fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800,
            color: "#f0ede6", lineHeight: 1.1, marginBottom: 8,
            transitionDelay: "0.15s",
          }}>
            UN CLUB DONDE EL
          </h2>
          <h2 className="fade-up font-display gold-gradient-text" style={{
            fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 700,
            lineHeight: 1.1, fontStyle: "italic", marginBottom: 32,
            transitionDelay: "0.2s",
          }}>
            ÉXITO ES LA NORMA
          </h2>

          <p className="fade-up" style={{
            fontFamily: "Inter", fontSize: 15, lineHeight: 1.8,
            color: "#6a6a5e", marginBottom: 20, transitionDelay: "0.25s",
          }}>
            Wire Business Club Spain nace con la idea de que grandes empresarios y directivos puedan hacer negocio y disfrutar del ocio al mismo tiempo.
          </p>
          <p className="fade-up" style={{
            fontFamily: "Inter", fontSize: 15, lineHeight: 1.8,
            color: "#5a5a50", marginBottom: 40, transitionDelay: "0.3s",
          }}>
            Generamos relaciones de confianza entre nuestros asociados mediante la organización de comidas de trabajo premium y eventos Life Style, con presencia en las principales ciudades de España.
          </p>

          <a href="#contacto" className="fade-up btn-gold-fill" style={{ transitionDelay: "0.4s", display: "inline-flex" }}>
            Solicitar Membresía
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
