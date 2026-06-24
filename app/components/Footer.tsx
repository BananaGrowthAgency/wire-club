"use client";

const GOLD = "#C8920E";
const TEXT = "#d4d0c8";
const TEXT_DIM = "#8a8880";

export default function Footer() {
  const colTitle: React.CSSProperties = {
    fontFamily: "Inter", fontSize: 9, fontWeight: 600,
    letterSpacing: "0.35em", textTransform: "uppercase",
    color: GOLD, marginBottom: 24, display: "block",
  };

  const navLink: React.CSSProperties = {
    fontFamily: "Inter", fontSize: 14, fontWeight: 400,
    color: TEXT, textDecoration: "none", display: "block",
    marginBottom: 12, letterSpacing: "0.03em", transition: "color 0.2s",
  };

  const contactRow: React.CSSProperties = {
    display: "flex", gap: 10, alignItems: "flex-start",
    marginBottom: 14, fontFamily: "Inter", fontSize: 14,
    fontWeight: 400, color: TEXT, textDecoration: "none",
  };

  const gold = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = GOLD);
  const reset = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = TEXT);
  const resetDim = (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.color = TEXT_DIM);

  return (
    <footer style={{ background: "#080706", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
      <style>{`
        @media (max-width: 767px) {
          .wcs-footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; padding: 52px 20px 36px !important; }
          .wcs-footer-bottom { grid-template-columns: 1fr !important; gap: 12px !important; text-align: center !important; padding: 16px 20px !important; }
          .wcs-footer-bottom-links { justify-content: center !important; }
        }
      `}</style>
      <div className="wcs-footer-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 40px 48px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 60 }}>

        {/* Col 1 — Logo + descripción + social */}
        <div>
          <div style={{ marginBottom: 24 }}>
            <div className="font-display" style={{ fontSize: 24, fontWeight: 800, color: "#f0ede6", letterSpacing: "0.18em", lineHeight: 1 }}>WIRE</div>
            <div style={{ height: 1, background: "linear-gradient(to right, #C8920E, transparent)", margin: "5px 0", width: 72 }} />
            <div className="font-display" style={{ fontSize: 24, fontWeight: 800, color: "#f0ede6", letterSpacing: "0.18em", lineHeight: 1 }}>CLUB</div>
            <div style={{ fontFamily: "Inter", fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: TEXT_DIM, marginTop: 7 }}>Business · Spain</div>
          </div>
          <p style={{ fontFamily: "Inter", fontSize: 13, color: TEXT, lineHeight: 1.8, marginBottom: 24, maxWidth: 240 }}>
            Club empresarial de alto nivel con presencia en las principales ciudades de España. Networking, negocio y lifestyle premium.
          </p>
          <a href="https://instagram.com/wireclubbusinessspain" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, border: "1px solid rgba(201,168,76,0.25)", borderRadius: "50%", color: TEXT, textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.color = TEXT; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>

        {/* Col 2 — Menú */}
        <div>
          <span style={colTitle}>Menú</span>
          {[
            { label: "Quiénes Somos", href: "#el-club" },
            { label: "Eventos", href: "#experiencias" },
            { label: "Delegaciones", href: "#delegaciones" },
            { label: "Únete a WCS", href: "#contacto" },
            { label: "Área de Socios", href: "#socios" },
          ].map(item => (
            <a key={item.label} href={item.href} style={navLink}
              onMouseEnter={gold} onMouseLeave={reset}
            >{item.label}</a>
          ))}
        </div>

        {/* Col 3 — Legal */}
        <div>
          <span style={colTitle}>Legal</span>
          {[
            { label: "Política de Privacidad", href: "#" },
            { label: "Compromiso", href: "#" },
            { label: "Política de Cookies", href: "#" },
          ].map(item => (
            <a key={item.label} href={item.href} style={navLink}
              onMouseEnter={gold} onMouseLeave={reset}
            >{item.label}</a>
          ))}
        </div>

        {/* Col 4 — Contacto */}
        <div>
          <span style={colTitle}>Contacto</span>

          <div style={contactRow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" style={{ flexShrink: 0, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style={{ lineHeight: 1.6 }}>C/ Francisco Vitoria 17, local<br />50008, Zaragoza</span>
          </div>

          <a href="tel:609178116" style={{ ...contactRow, transition: "color 0.2s" } as React.CSSProperties}
            onMouseEnter={gold} onMouseLeave={reset}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" style={{ flexShrink: 0, marginTop: 2 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>609 178 116</span>
          </a>

          <a href="mailto:zaragoza@wireclubspain.es" style={{ ...contactRow, transition: "color 0.2s" } as React.CSSProperties}
            onMouseEnter={gold} onMouseLeave={reset}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" style={{ flexShrink: 0, marginTop: 2 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>zaragoza@wireclubspain.es</span>
          </a>

          <div style={contactRow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.6" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>Juan Carlos Artal</span>
          </div>
        </div>

      </div>

      {/* Gold divider */}
      <div style={{ padding: "0 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="divider-gold" style={{ width: "100%", height: 1 }} />
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "20px 40px" }}>
        <div className="wcs-footer-bottom" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>
          <span style={{ fontFamily: "Inter", fontSize: 12, color: TEXT_DIM, letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Wire Business Club Spain. Todos los derechos reservados.
          </span>

          <a href="https://www.banana-growth.agency/accompagnement-marketing-digital-parc-de-loisir" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textDecoration: "none" }}
          >
            <span style={{ fontFamily: "Inter", fontSize: 8, letterSpacing: "0.35em", textTransform: "uppercase", color: TEXT_DIM }}>Realizado por</span>
            <img src="/logoBGA.png" alt="Banana Growth Agency" style={{ height: 30, width: "auto", objectFit: "contain", mixBlendMode: "screen" }} />
          </a>

          <div className="wcs-footer-bottom-links" style={{ display: "flex", justifyContent: "flex-end", gap: 24 }}>
            {["Política de Privacidad", "Cookies"].map(t => (
              <a key={t} href="#" style={{ fontFamily: "Inter", fontSize: 12, color: TEXT_DIM, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={gold}
                onMouseLeave={resetDim}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
