import { useState } from "react";

const FOOTER_LINKS = [
  { label: "Funcionalidades", id: "funcionalidades" },
  { label: "Como Funciona", id: "como-funciona" },
  { label: "Depoimentos", id: "depoimentos" },
];

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{
        background: "#fdfbf7",
        borderTop: "2px dashed #e5e0d8",
      }}
      className="py-10 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div
              style={{
                fontFamily: "Kalam, cursive",
                fontWeight: 700,
                color: "#2d2d2d",
                fontSize: "22px",
                marginBottom: 4,
              }}
            >
              🥩 Mapa da Carne
            </div>
            <p
              style={{
                fontFamily: "Patrick Hand, cursive",
                color: "rgba(45,45,45,0.65)",
                fontSize: "15px",
              }}
            >
              Nunca mais desperdice dinheiro com carne ruim
            </p>
          </div>

          {/* Links */}
          <div
            style={{ borderTop: "2px dashed #e5e0d8", borderBottom: "2px dashed #e5e0d8" }}
            className="flex flex-wrap justify-center gap-6 py-4"
          >
            {FOOTER_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHoveredLink(id)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  color: "#2d2d2d",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  textDecoration: hoveredLink === id ? "line-through" : "none",
                  transition: "text-decoration 100ms",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.55)",
              fontSize: "14px",
            }}
          >
            © 2025 Mapa da Carne
          </p>
        </div>
      </div>
    </footer>
  );
}
