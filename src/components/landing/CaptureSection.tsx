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
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
      }}
      className="max-w-6xl mx-auto px-4 py-6 md:py-20"
    >
      <div className="grid md:grid-cols-2 items-center gap-6 md:gap-12 w-full">

        {/* ── LEFT: Copy + CTA ── */}
        <div className="flex flex-col gap-3 md:gap-6">

          {/* Badge */}
          <ScrollReveal direction="left" delay={0} className="self-start">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#e05555", color: "#fff",
              border: "2px solid #2d2d2d", borderRadius: "20px",
              boxShadow: "3px 3px 0px 0px #2d2d2d",
              padding: "5px 14px",
              fontFamily: "Patrick Hand, cursive", fontSize: "14px",
            }}>
              <span style={{ fontSize: 16 }}>🥩</span>
              com a Açougueira
            </div>
          </ScrollReveal>

          {/* Sticky note */}
          <ScrollReveal direction="left" delay={80} className="self-start">
            <div style={{
              fontFamily: "Patrick Hand, cursive",
              background: "#fff9c4",
              border: "2px solid #2d2d2d",
              borderRadius: "2px 12px 2px 10px / 10px 2px 12px 2px",
              boxShadow: "3px 3px 0px 0px #2d2d2d",
              transform: "rotate(-1deg)",
              padding: "4px 12px", fontSize: "15px",
              color: "#2d2d2d", display: "inline-block",
            }}>
              ⚡ Quiz grátis · só 2 minutinhos
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="left" delay={180}>
            <h1 style={{
              fontFamily: "Kalam, cursive", fontWeight: 700,
              color: "#2d2d2d", lineHeight: 1.15,
            }} className="text-3xl md:text-6xl">
              Você ainda chuta na hora de comprar carne — e isso tá custando caro.
            </h1>
          </ScrollReveal>

          {/* Sub-headline */}
          <ScrollReveal direction="left" delay={320}>
            <p style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.8)", fontSize: "22px", lineHeight: 1.55,
            }}>
              4 perguntas rápidas. Descubra por que você gasta mais do que devia no açougue — e o que fazer a partir de agora.
            </p>
          </ScrollReveal>

          {/* Social proof bullets */}
          <ScrollReveal direction="left" delay={400}>
            <div className="flex flex-col gap-3">
              {[
                { emoji: "👩‍🍳", text: "Mais de 3.200 pessoas já descobriram o perfil delas" },
                { emoji: "✅", text: "100% grátis — sem cartão de crédito" },
                { emoji: "⏱️", text: "Resultado na hora — menos de 2 minutos" },
              ].map(({ emoji, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{emoji}</span>
                  <span style={{ fontFamily: "Patrick Hand, cursive", fontSize: 18, color: "#2d2d2d" }}>{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal direction="left" delay={480}>
            <div className="flex flex-col gap-2 items-start">
              <WobblyButton
                variant="accent"
                size="lg"
                onClick={onOpenQuiz}
                borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
                className="w-full sm:w-auto justify-center"
                style={{ fontSize: "clamp(17px, 4vw, 22px)" }}
              >
                Descobrir meu perfil agora — é grátis →
              </WobblyButton>
              <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 16, color: "#aaa", margin: 0 }}>
                Sem spam. Sem compromisso. Só resultado.
              </p>
            </div>
          </ScrollReveal>

          {/* Scroll hint */}
          <ScrollReveal direction="left" delay={560}>
            <div
              style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.5, cursor: "pointer", marginTop: 4 }}
              onClick={() => document.getElementById("sobre-a-ferramenta")?.scrollIntoView({ behavior: "smooth" })}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontFamily: "Patrick Hand, cursive", fontSize: 16, color: "#2d2d2d" }}>
                ou veja a ferramenta antes
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* ── RIGHT: Calculadora de Economia ── */}
        <ScrollReveal direction="right" delay={300}>
          <SavingsCalculator onOpenQuiz={onOpenQuiz} />
        </ScrollReveal>
      </div>
    </section>
  );
}
