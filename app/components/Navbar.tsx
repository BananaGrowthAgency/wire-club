"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";

const links = [
  { label: "Quiénes Somos", href: "#el-club" },
  { label: "Eventos", href: "#experiencias" },
  { label: "Delegaciones", href: "#delegaciones", dropdown: true },
  { label: "Actualidad", href: "#actualidad" },
  { label: "Contacto", href: "#contacto" },
];

const GOLD = "#E8B822";

const delegaciones = [
  "Zaragoza", "Madrid", "Barcelona", "Valencia",
  "Mallorca", "Tenerife", "Málaga · Costa del Sol", "Alicante", "Logroño",
  "Murcia", "Andorra", "Oporto",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDrop = () => {
    if (dropTimer.current) clearTimeout(dropTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    dropTimer.current = setTimeout(() => setDropOpen(false), 120);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="nav-header"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        willChange: "background, border-color, padding",
        transition: "background 0.45s ease, border-color 0.45s ease, padding 0.45s ease",
        background: scrolled ? "transparent" : "rgba(6,5,4,0.96)",
        borderBottom: scrolled ? "none" : "1px solid rgba(200,146,14,0.12)",
        padding: scrolled ? "16px 16px 8px" : "0",
      }}
    >
      <div className="nav-inner" style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        willChange: "background, border-radius, box-shadow, padding",
        transition: "background 0.45s ease, border-radius 0.45s ease, box-shadow 0.45s ease, padding 0.45s ease, border-color 0.45s ease",
        background: scrolled ? "rgba(8,6,4,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(28px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.4)" : "none",
        borderRadius: scrolled ? "60px" : "0",
        border: scrolled ? "1px solid rgba(200,146,14,0.28)" : "none",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(249,216,74,0.06)"
          : "none",
        padding: scrolled ? "10px 32px" : "20px 40px",
      }}>

        {/* Logo */}
        <a href="#" className="nav-logo" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <span
            className="font-display nav-logo-main"
            style={{
              fontSize: 20, fontWeight: 700, letterSpacing: "0.28em", lineHeight: 1,
              background: "linear-gradient(100deg, #6B3F00 0%, #A0680A 15%, #C8920E 28%, #F9D84A 40%, #FFFFFF 47%, #F9D84A 54%, #C8920E 68%, #A0680A 82%, #6B3F00 92%, #E8B822 100%)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "0.4px rgba(255,255,255,0.35)",
              willChange: "background-position",
              animation: "goldSweep 8s ease-in-out infinite",
              filter: "drop-shadow(0 0 4px rgba(232,184,34,0.25))",
              borderBottom: "1px solid rgba(200,146,14,0.5)",
              paddingBottom: 3,
            }}
          >WIRE CLUB</span>
          <span
            className="nav-logo-sub"
            style={{
              fontSize: 8, letterSpacing: "0.38em", fontFamily: "Inter, sans-serif", fontWeight: 500,
              background: "linear-gradient(100deg, #6B3F00 0%, #C8920E 25%, #F9D84A 45%, #FFFFFF 50%, #F9D84A 55%, #C8920E 75%, #6B3F00 100%)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "0.4px rgba(255,255,255,0.35)",
              willChange: "background-position",
              animation: "goldSweep 8s ease-in-out infinite",
              filter: "drop-shadow(0 0 3px rgba(232,184,34,0.2))",
            }}
          >BUSINESS · SPAIN</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop" style={{ gap: 32, alignItems: "center", marginLeft: "auto", marginRight: 120 }}>
          {links.map((l) => l.dropdown ? (
            <div key={l.href} style={{ position: "relative" }}
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <a href={l.href} style={{
                fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: dropOpen ? GOLD : "#9a9a8a",
                textDecoration: "none", transition: "color 0.25s ease",
                display: "flex", alignItems: "center", gap: 4,
              }}>
                {l.label}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transition: "transform 0.25s", transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </a>
              {dropOpen && (
                <div onMouseEnter={openDrop} onMouseLeave={closeDrop} style={{
                  position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)",
                  background: "rgba(8,6,4,0.96)", backdropFilter: "blur(20px)",
                  border: "1px solid rgba(200,146,14,0.25)", borderRadius: 8,
                  padding: "8px 0", minWidth: 200, zIndex: 200,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
                }}>
                  {/* Top gold line */}
                  <div style={{ position: "absolute", top: 0, left: 16, right: 16, height: 1, background: "linear-gradient(to right, transparent, #C8920E, transparent)" }} />
                  {delegaciones.map(ciudad => (
                    <a key={ciudad} href="#delegaciones"
                      style={{
                        display: "block", padding: "10px 20px",
                        fontFamily: "Inter, sans-serif", fontSize: 11,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "#9a9a8a", textDecoration: "none",
                        transition: "color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.background = "rgba(200,146,14,0.06)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "#9a9a8a"; e.currentTarget.style.background = "transparent"; }}
                    >{ciudad}</a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a key={l.href} href={l.href} style={{
              fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#9a9a8a", textDecoration: "none",
              transition: "color 0.25s ease",
              display: "flex", alignItems: "center", gap: 4,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
            onMouseLeave={e => (e.currentTarget.style.color = "#9a9a8a")}
            >{l.label}</a>
          ))}
          <a href="#socios" style={{
            fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#9a9a8a", textDecoration: "none",
            transition: "color 0.25s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.color = "#9a9a8a")}
          >
            Área de Socios
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          style={{ background: "none", border: "none", color: "#9a9a8a", cursor: "pointer", padding: 4 }}
          aria-label="Menu"
        >
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(6,5,4,0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(212,160,23,0.12)",
          padding: "20px 40px",
        }}>
          {[...links, { label: "Área de Socios", href: "#socios" }].map((l, i, arr) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "14px 0",
                fontFamily: "Inter, sans-serif", fontSize: 13,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#c8c4bb", textDecoration: "none",
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = "#c8c4bb")}
            >{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes goldSweep {
          0%   { background-position: 150% center; }
          35%  { background-position: -150% center; }
          100% { background-position: -150% center; }
        }
        .nav-hamburger { display: none; }
        .nav-desktop { display: none; }
        @media (max-width: 767px) {
          .nav-hamburger { display: block; }
          /* Header: padding suficiente para que el pill no se recorte */
          .nav-header { padding: 16px 16px 8px !important; }
          /* Inner pill */
          .nav-inner { padding: 8px 16px !important; }
          /* Logo alineado a la izquierda, más pequeño */
          .nav-logo { align-items: center !important; gap: 1px !important; }
          .nav-logo-main { font-size: 12px !important; letter-spacing: 0.20em !important; padding-bottom: 2px !important; }
          .nav-logo-sub  { letter-spacing: 0.01em !important; }
          /* Hamburguesa pegada a la derecha */
          .nav-hamburger { margin-left: auto !important; padding: 6px !important; }
        }
        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
        }
      `}</style>
    </header>
  );
}
