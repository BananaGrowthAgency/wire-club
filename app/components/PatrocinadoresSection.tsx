"use client";

export default function PatrocinadoresSection() {
  return (
    <section style={{
      background: "#0d0d0c",
      borderTop: "1px solid rgba(200,146,14,0.1)",
      borderBottom: "1px solid rgba(200,146,14,0.1)",
      padding: "56px 40px",
    }}>
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

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 80, flexWrap: "wrap" }}>
          {/* Charter and Dreams */}
          <a href="https://www.charteranddreams.com/es/" target="_blank" rel="noopener noreferrer"
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
          <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, rgba(200,146,14,0.4), transparent)", flexShrink: 0 }} />

          {/* Fincas Artal */}
          <a href="https://www.fincasartal.com/" target="_blank" rel="noopener noreferrer"
            className="fincas-link"
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
