"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search, UserCircle } from "lucide-react";

const links = [
  { label: "Quiénes Somos", href: "#el-club" },
  { label: "Eventos", href: "#experiencias" },
  { label: "Delegaciones", href: "#delegaciones", dropdown: true },
  { label: "Actualidad", href: "#actualidad" },
  { label: "Contacto", href: "#contacto" },
];

const GOLD = "#E8B822";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        willChange: "background, border-color, padding",
        transition: "background 0.45s ease, border-color 0.45s ease, padding 0.45s ease",
        background: scrolled ? "transparent" : "rgba(6,5,4,0.96)",
        borderBottom: scrolled ? "none" : "1px solid rgba(200,146,14,0.12)",
        padding: scrolled ? "12px 24px" : "0",
      }}
    >
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
        <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <span
            className="font-display"
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
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#9a9a8a",
              textDecoration: "none",
              transition: "color 0.25s ease",
              display: "flex", alignItems: "center", gap: 4,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
            onMouseLeave={e => (e.currentTarget.style.color = "#9a9a8a")}
            >
              {l.label}
              {l.dropdown && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              )}
            </a>
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

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Search size={17} style={{ color: "#9a9a8a", cursor: "pointer", transition: "color 0.25s ease" }}
            onMouseEnter={e => ((e.currentTarget as SVGElement).style.color = GOLD)}
            onMouseLeave={e => ((e.currentTarget as SVGElement).style.color = "#9a9a8a")}
          />
          <UserCircle size={17} style={{ color: "#9a9a8a", cursor: "pointer", transition: "color 0.25s ease" }}
            onMouseEnter={e => ((e.currentTarget as SVGElement).style.color = GOLD)}
            onMouseLeave={e => ((e.currentTarget as SVGElement).style.color = "#9a9a8a")}
          />
          <button

            onClick={() => setOpen(!open)}
            className="md:hidden block"
            style={{ background: "none", border: "none", color: "#9a9a8a", cursor: "pointer" }}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(6,5,4,0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(212,160,23,0.12)",
          padding: "20px 40px",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "12px 0",
                fontFamily: "Inter, sans-serif", fontSize: 12,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#9a9a8a", textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = "#9a9a8a")}
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
      `}</style>
    </header>
  );
}
