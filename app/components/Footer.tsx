"use client";
export default function Footer() {
  return (
    <footer style={{
      background: "#070706",
      borderTop: "1px solid rgba(201,168,76,0.12)",
      padding: "48px 40px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
          <span className="font-display" style={{ color: "var(--gold-4)", fontSize: 16, fontWeight: 700, letterSpacing: "0.25em" }}>WIRE Business Club Spain</span>
          <span style={{ fontFamily: "Inter", fontSize: 12, color: "#3a3a32", letterSpacing: "0.1em" }}>C/ Francisco Vitoria 17 · 50008 Zaragoza</span>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {["Política de Privacidad", "Protección de Datos", "Política de Cookies"].map(item => (
            <a key={item} href="#" style={{
              fontFamily: "Inter", fontSize: 11, color: "#3a3a32",
              textDecoration: "none", letterSpacing: "0.1em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-4)")}
            onMouseLeave={e => (e.currentTarget.style.color = "#3a3a32")}
            >{item}</a>
          ))}
        </div>
        <div style={{ fontFamily: "Inter", fontSize: 11, color: "#3a3a32" }}>
          © {new Date().getFullYear()} Wire Business Club Spain
        </div>
      </div>
    </footer>
  );
}
