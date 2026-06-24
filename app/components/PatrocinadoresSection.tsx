"use client";
import { useEffect, useRef } from "react";

export default function PatrocinadoresSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const logos = Array.from(
      sectionRef.current?.querySelectorAll<HTMLElement>(".wcs-pat-logo-link") ?? []
    );
    if (!logos.length) return;

    // Estado inicial apagado (por JS para que supere inline styles)
    logos.forEach(el => {
      el.style.opacity = "0.15";
      el.style.transition = "none";
      const img = el.querySelector("img") as HTMLImageElement | null;
      if (img) { img.style.filter = "brightness(0) invert(1)"; img.style.transition = "none"; }
    });

    const bulbOn = (el: HTMLElement, delay: number) => {
      const img = el.querySelector("img") as HTMLImageElement | null;
      const set = (opacity: string, filterNone: boolean) => {
        el.style.opacity = opacity;
        if (img) img.style.filter = filterNone ? "none" : "brightness(0) invert(1)";
      };
      // Secuencia: apagado → on → off → on → off breve → ON permanente
      setTimeout(() => {
        set("1",    true);   // encendido 1
        setTimeout(() => {
          set("0.1", false);  // apagado 1
          setTimeout(() => {
            set("1",    true);  // encendido 2
            setTimeout(() => {
              set("0.1", false); // apagado 2 (breve)
              setTimeout(() => {
                set("1", true);  // ON permanente
                el.style.transition = "opacity 0.3s";
                if (img) img.style.transition = "filter 0.3s";
              }, 80);
            }, 130);
          }, 190);
        }, 130);
      }, delay);
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = logos.indexOf(entry.target as HTMLElement);
        if (idx !== -1) {
          bulbOn(entry.target as HTMLElement, idx * 250);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    logos.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="wcs-pat-section" style={{
      background: "#0d0d0c",
      borderTop: "1px solid rgba(200,146,14,0.1)",
      borderBottom: "1px solid rgba(200,146,14,0.1)",
      padding: "56px clamp(20px,5vw,40px)",
    }}>
      <style>{`
        @media (max-width: 767px) {
          .wcs-pat-section { padding: 48px 20px !important; }
          .wcs-pat-logos { gap: 40px !important; flex-direction: column !important; align-items: center !important; }
          .wcs-pat-sep { display: none !important; }
          .wcs-pat-logo-link img { max-width: 200px !important; width: 100% !important; height: auto !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 48 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(200,146,14,0.15)" }} />
          <span style={{
            fontFamily: "Inter", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.4em", textTransform: "uppercase", color: "#C8920E",
            flexShrink: 0,
          }}>Patrocinadores</span>
          <div style={{ flex: 1, height: 1, background: "rgba(200,146,14,0.15)" }} />
        </div>

        <div className="wcs-pat-logos" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 80, flexWrap: "wrap" }}>
          {/* Charter and Dreams */}
          <a href="https://www.charteranddreams.com/es/" target="_blank" rel="noopener noreferrer"
            className="wcs-pat-logo-link"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", opacity: 0.55, transition: "opacity 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.55")}
          >
            <img
              src="/charter-logo.png"
              alt="Charter and Dreams"
              style={{ height: 48, width: "auto", objectFit: "contain" }}
            />
          </a>

          {/* Separador */}
          <div className="wcs-pat-sep" style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, rgba(200,146,14,0.4), transparent)", flexShrink: 0 }} />

          {/* Fincas Artal */}
          <a href="https://www.fincasartal.com/" target="_blank" rel="noopener noreferrer"
            className="wcs-pat-logo-link"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", opacity: 0.55, transition: "opacity 0.3s" }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = "1";
              (e.currentTarget.querySelector("img") as HTMLImageElement).style.filter = "none";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = "0.55";
              (e.currentTarget.querySelector("img") as HTMLImageElement).style.filter = "brightness(0) invert(1)";
            }}
          >
            <img
              src="/fincas-artal-logo.png"
              alt="Fincas Artal"
              style={{ height: 68, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", transition: "filter 0.3s" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
