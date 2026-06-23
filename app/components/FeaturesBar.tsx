"use client";

const features = [
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&fit=crop",
    title: "Red Exclusiva",
    desc: "Acceso a empresarios y directivos de primer nivel.",
  },
  {
    img: "/eventos-lifestyle.jpg",
    imgPosition: "left center",
    title: "Eventos Life Style",
    desc: "Experiencias de ocio de primer nivel junto a otros asociados.",
  },
  {
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop",
    title: "Comunidad Activa",
    desc: "Comunidad en constante crecimiento con presencia en 12 delegaciones.",
  },
  {
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&fit=crop",
    title: "Expansión Nacional",
    desc: "Presencia activa en las principales ciudades del país.",
  },
];

export default function FeaturesBar() {
  return (
    <section style={{ background: "#060504", padding: "80px 40px 0" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
      }}>
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid rgba(200,146,14,0.15)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <div style={{ overflow: "hidden", flexShrink: 0 }}>
              <img
                src={f.img}
                alt={f.title}
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  objectPosition: (f as any).imgPosition ?? "center",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            {/* Text area */}
            <div style={{
              background: "rgba(10,8,4,0.95)",
              borderTop: "1px solid rgba(200,146,14,0.18)",
              padding: "22px 22px 26px",
              flex: 1,
            }}>
              <div style={{
                width: 22, height: 1,
                background: "rgba(200,146,14,0.55)",
                marginBottom: 12,
              }} />
              <div style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11, fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#f0ece4", marginBottom: 10, lineHeight: 1.3,
              }}>{f.title}</div>
              <div style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12, fontWeight: 300,
                color: "rgba(240,236,228,0.5)", lineHeight: 1.7,
              }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
