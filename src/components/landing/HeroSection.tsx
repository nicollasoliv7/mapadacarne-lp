"use client";
import { WobblyButton } from "./WobblyButton";
import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left side */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Influencer badge */}
          <ScrollReveal direction="left" delay={0} className="self-start">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#e05555",
                color: "#fff",
                border: "2px solid #2d2d2d",
                borderRadius: "20px",
                boxShadow: "3px 3px 0px 0px #2d2d2d",
                padding: "5px 14px",
                fontFamily: "Patrick Hand, cursive",
                fontSize: "16px",
              }}
            >
              <span style={{ fontSize: 18 }}>🥩</span>
              {/* ✏️ PREENCHA com "com a @[handle]" */}
              de quem entende de corte
            </div>
          </ScrollReveal>

          {/* Sticky note tag */}
          <ScrollReveal direction="left" delay={80} className="self-start">
            <div
              style={{
                fontFamily: "Patrick Hand, cursive",
                background: "#fff9c4",
                border: "2px solid #2d2d2d",
                borderRadius: "2px 12px 2px 10px / 10px 2px 12px 2px",
                boxShadow: "3px 3px 0px 0px #2d2d2d",
                transform: "rotate(-1deg)",
                padding: "4px 12px",
                fontSize: "15px",
                color: "#2d2d2d",
                display: "inline-block",
              }}
            >
              ⚡ Quiz grátis · só 2 minutinhos
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="left" delay={180}>
            <h1
              style={{
                fontFamily: "Kalam, cursive",
                fontWeight: 700,
                color: "#2d2d2d",
                lineHeight: 1.15,
              }}
              className="text-4xl md:text-6xl"
            >
              Você gasta mais do que devia no açougue — e provavelmente nem percebe.
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal direction="left" delay={320}>
            <p
              style={{
                fontFamily: "Patrick Hand, cursive",
                color: "rgba(45,45,45,0.8)",
                fontSize: "20px",
                lineHeight: 1.5,
              }}
            >
              Comigo, você descobre onde está errando, aprende qual corte levar, se o preço tá justo e como preparar do jeito que acerta sempre. Tudo começa com um quiz rápido e grátis.
            </p>
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal direction="left" delay={480}>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <WobblyButton
                variant="accent"
                size="lg"
                onClick={() => window.open("#quiz", "_self")}
                borderRadius="255px 15px 225px 15px / 15px 225px 15px 255px"
                className="w-full sm:w-auto justify-center"
              >
                Fazer o quiz grátis →
              </WobblyButton>
              <WobblyButton
                variant="muted"
                size="lg"
                onClick={() => scrollTo("como-funciona")}
                borderRadius="15px 225px 15px 255px / 255px 15px 225px 15px"
                className="w-full sm:w-auto justify-center"
              >
                Ver como funciona
              </WobblyButton>
            </div>
          </ScrollReveal>

          {/* Hand-drawn arrow (desktop only) */}
          <div className="hidden md:block -mt-2 ml-8">
            <svg width="90" height="55" viewBox="0 0 90 55" fill="none">
              <path
                d="M 5 8 Q 35 2, 80 42"
                stroke="#2d2d2d"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 68 32 L 80 42 L 68 44"
                stroke="#2d2d2d"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Right side — App mockup */}
        <ScrollReveal direction="right" delay={300} className="relative flex justify-center">
          {/* Decorative bouncing circle (desktop only) */}
          <div
            className="absolute -top-6 right-2 md:-top-8 md:-right-8 animate-bounce"
            style={{
              animationDuration: "3s",
              width: 56,
              height: 56,
              background: "#fff9c4",
              border: "2px solid #2d2d2d",
              borderRadius: "50% 45% 52% 44% / 44% 52% 45% 50%",
              boxShadow: "3px 3px 0px 0px #2d2d2d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            ✨
          </div>

          {/* App mockup container */}
          <div
            style={{
              border: "3px solid #2d2d2d",
              borderRadius: "36px",
              boxShadow: "8px 8px 0px 0px #2d2d2d",
              background: "#1a1a1a",
              transform: "rotate(-1deg)",
              padding: "10px",
              maxWidth: 300,
              width: "100%",
            }}
          >
            {/* Phone screen */}
            <div
              style={{
                background: "#fafaf8",
                borderRadius: "28px",
                overflow: "hidden",
                aspectRatio: "9 / 19",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Status bar */}
              <div style={{
                background: "#fff",
                padding: "10px 16px 4px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 5,
                flexShrink: 0,
              }}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <rect x="0" y="4" width="3" height="6" rx="1" fill="#1a1a1a"/>
                  <rect x="4.5" y="2.5" width="3" height="7.5" rx="1" fill="#1a1a1a"/>
                  <rect x="9" y="1" width="3" height="9" rx="1" fill="#1a1a1a"/>
                  <rect x="13.5" y="0" width="2.5" height="10" rx="1" fill="#1a1a1a"/>
                </svg>
                <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                  <path d="M7.5 2C9.8 2 11.8 3 13.2 4.6L14.5 3.2C12.7 1.2 10.2 0 7.5 0C4.8 0 2.3 1.2 0.5 3.2L1.8 4.6C3.2 3 5.2 2 7.5 2Z" fill="#1a1a1a"/>
                  <path d="M7.5 5C8.9 5 10.1 5.6 11 6.5L12.3 5.1C11 3.8 9.3 3 7.5 3C5.7 3 4 3.8 2.7 5.1L4 6.5C4.9 5.6 6.1 5 7.5 5Z" fill="#1a1a1a"/>
                  <circle cx="7.5" cy="8.5" r="1.5" fill="#1a1a1a"/>
                </svg>
                <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <div style={{ width: 22, height: 11, border: "1.5px solid #1a1a1a", borderRadius: 3, padding: "1.5px", display: "flex", alignItems: "center", position: "relative" }}>
                    <div style={{ width: "75%", height: "100%", background: "#1a1a1a", borderRadius: 1.5 }} />
                    <div style={{ position: "absolute", right: -3, top: "50%", transform: "translateY(-50%)", width: 2, height: 5, background: "#1a1a1a", borderRadius: 1 }} />
                  </div>
                </div>
              </div>

              {/* App header */}
              <div style={{
                background: "#fff",
                borderBottom: "1px solid #f0ede8",
                padding: "6px 16px 10px",
                flexShrink: 0,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 22 }}>🥩</span>
                    <div>
                      <div style={{
                        fontFamily: "system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#1a1a1a",
                        lineHeight: 1.2,
                      }}>Mapa da Carne</div>
                      <div style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 10,
                        color: "#e05555",
                        fontWeight: 500,
                      }}>Inteligente</div>
                    </div>
                  </div>
                  {/* Hamburger menu */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 3, padding: 4, cursor: "pointer" }}>
                    <div style={{ width: 16, height: 2, background: "#1a1a1a", borderRadius: 1 }} />
                    <div style={{ width: 12, height: 2, background: "#1a1a1a", borderRadius: 1 }} />
                    <div style={{ width: 16, height: 2, background: "#1a1a1a", borderRadius: 1 }} />
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div style={{
                flex: 1,
                padding: "14px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                overflowY: "hidden",
              }}>
                {/* Title */}
                <p style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#1a1a1a",
                  margin: 0,
                  lineHeight: 1.3,
                }}>Qual carne você quer escolher hoje?</p>

                {/* Search bar */}
                <div style={{
                  background: "#f4f1ec",
                  borderRadius: 10,
                  padding: "7px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}>
                  <span style={{ fontSize: 12, opacity: 0.5 }}>🔍</span>
                  <span style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 11,
                    color: "#999",
                  }}>Buscar cortes, guias, dicas...</span>
                </div>

                {/* Section label */}
                <p style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  color: "#555",
                  margin: 0,
                }}>Como você vai preparar a carne hoje?</p>

                {/* Cards grid 2x3 */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 6,
                }}>
                  {[
                    { emoji: "🥩", label: "Bife na frigideira", sub: "Rápido e macio" },
                    { emoji: "🔥", label: "Churrasco",         sub: "Cortes para brasa" },
                    { emoji: "🫕", label: "Assar no forno",    sub: "Assados suculentos" },
                    { emoji: "🍲", label: "Cozinhar na panela", sub: "Cozimento lento" },
                    { emoji: "⚡", label: "Air Fryer",          sub: "Rápido e prático" },
                    { emoji: "🍔", label: "Carne moída",        sub: "Hambúrguer e receitas" },
                  ].map(({ emoji, label, sub }) => (
                    <div key={label} style={{
                      background: "#fff",
                      border: "1px solid #edeae4",
                      borderRadius: 10,
                      padding: "8px 6px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 3,
                    }}>
                      <span style={{ fontSize: 18 }}>{emoji}</span>
                      <span style={{
                        fontFamily: "system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: 9,
                        color: "#1a1a1a",
                        textAlign: "center",
                        lineHeight: 1.2,
                      }}>{label}</span>
                      <span style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 8,
                        color: "#999",
                        textAlign: "center",
                      }}>{sub}</span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <div style={{
                  background: "#e05555",
                  borderRadius: 10,
                  padding: "9px",
                  textAlign: "center",
                  marginTop: "auto",
                }}>
                  <span style={{
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 11,
                    color: "#fff",
                  }}>❓ Me ajuda a escolher</span>
                </div>
              </div>

              {/* Bottom nav bar */}
              <div style={{
                background: "#fff",
                borderTop: "1px solid #f0ede8",
                padding: "8px 0 10px",
                display: "flex",
                justifyContent: "space-around",
                flexShrink: 0,
              }}>
                {[
                  { icon: "🏠", label: "Home", active: true },
                  { icon: "🗺️", label: "Cortes",  active: false },
                  { icon: "💵", label: "Preço",   active: false },
                  { icon: "👨‍🍳", label: "Guias",   active: false },
                ].map(({ icon, label, active }) => (
                  <div key={label} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 8,
                      color: active ? "#e05555" : "#aaa",
                      fontWeight: active ? 700 : 400,
                    }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
