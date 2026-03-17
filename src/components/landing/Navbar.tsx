import { useState } from "react";
import { WobblyButton } from "./WobblyButton";

const NAV_LINKS = [
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "depoimentos", label: "Depoimentos" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        borderBottom: "2px dashed #e5e0d8",
        background: "rgba(253, 251, 247, 0.92)",
        backdropFilter: "blur(8px)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <span
          style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d" }}
          className="text-2xl"
        >
          🥩 Mapa da Carne
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ id, label }) => (
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
                fontSize: "17px",
                textDecoration: hoveredLink === id ? "underline wavy #ff4d4d" : "none",
                transition: "text-decoration 100ms",
                padding: "4px 0",
              }}
            >
              {label}
            </button>
          ))}
          <WobblyButton
            variant="accent"
            size="sm"
            onClick={() => scrollTo("cta")}
            borderRadius="255px 15px 225px 15px / 15px 225px 15px 255px"
          >
            Começar grátis
          </WobblyButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ borderTop: "2px dashed #e5e0d8", background: "#fdfbf7" }}
          className="md:hidden px-4 pb-4 flex flex-col gap-2"
        >
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: "Patrick Hand, cursive",
                color: "#2d2d2d",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                textAlign: "left",
                padding: "8px 0",
              }}
            >
              {label}
            </button>
          ))}
          <WobblyButton
            variant="accent"
            size="sm"
            onClick={() => scrollTo("cta")}
            className="w-full mt-2"
            borderRadius="15px 255px 15px 225px / 225px 15px 255px 15px"
          >
            Começar grátis
          </WobblyButton>
        </div>
      )}
    </nav>
  );
}
