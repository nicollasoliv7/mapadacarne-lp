"use client";
import { WobblyButton } from "./WobblyButton";
import { ScrollReveal } from "./ScrollReveal";
import { SavingsCalculator } from "./SavingsCalculator";

interface CaptureSectionProps {
  onOpenQuiz: () => void;
}

export function CaptureSection({ onOpenQuiz }: CaptureSectionProps) {
  return (
    <section
      style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}
      className="max-w-6xl mx-auto px-4 py-6 md:py-20"
    >
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-16 w-full">

        {/* ── ESQUERDA: conceito + CTA ── */}
        <div className="flex flex-col gap-4 md:gap-6 order-1">

          <ScrollReveal direction="left" delay={0}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#e05555", color: "#fff",
              border: "2px solid #2d2d2d", borderRadius: "20px",
              boxShadow: "3px 3px 0px 0px #2d2d2d",
              padding: "5px 14px",
              fontFamily: "Patrick Hand, cursive", fontSize: "16px",
            }}>
              <span>🥩</span> de quem entende de corte
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={80}>
            <h1 style={{
              fontFamily: "Kalam, cursive", fontWeight: 700,
              color: "#2d2d2d", lineHeight: 1.15, margin: 0,
            }} className="text-4xl md:text-6xl">
              Pare de comprar carne no chute.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={180}>
            <p style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.78)", fontSize: "20px", lineHeight: 1.55,
              margin: 0,
            }}>
              O <strong style={{ color: "#2d2d2d" }}>Mapa da Carne</strong> descobre seu perfil de comprador em 4 perguntas — e te mostra qual corte levar, se o preço tá justo e como preparar do jeito que acerta sempre.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={260}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>👩‍🍳</span>
              <span style={{ fontFamily: "Patrick Hand, cursive", fontSize: 17, color: "rgba(45,45,45,0.6)" }}>
                Mais de 3.200 pessoas já descobriram o perfil delas
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={340}>
            <div className="flex flex-col gap-2 items-start">
              <WobblyButton
                variant="accent"
                size="lg"
                onClick={onOpenQuiz}
                borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
                className="w-full sm:w-auto justify-center"
                style={{ fontSize: "clamp(17px, 4vw, 21px)" }}
              >
                Descobrir meu perfil — é grátis →
              </WobblyButton>
              <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 15, color: "#aaa", margin: 0 }}>
                4 perguntas · resultado na hora · sem cartão
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ── DIREITA: Calculadora ── */}
        <ScrollReveal direction="right" delay={200} className="order-2">
          <SavingsCalculator onOpenQuiz={onOpenQuiz} />
        </ScrollReveal>

      </div>

      {/* ── Indicador de scroll ── */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          opacity: 0.45,
          pointerEvents: "none",
        }}
      >
        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(7px); }
          }
        `}</style>
        <span style={{ fontFamily: "Patrick Hand, cursive", fontSize: 15, color: "#2d2d2d", whiteSpace: "nowrap" }}>
          role para ver mais
        </span>
        <div style={{ animation: "scrollBounce 1.5s ease-in-out infinite" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 15l7 7 7-7" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
