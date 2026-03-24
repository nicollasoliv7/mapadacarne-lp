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
      style={{ minHeight: "100dvh", display: "flex", alignItems: "center" }}
      className="max-w-6xl mx-auto px-4 py-6 md:py-20"
    >
      <div className="grid md:grid-cols-2 items-center gap-6 md:gap-12 w-full">

        {/* ── Calculadora — aparece primeiro no mobile ── */}
        <div className="order-1 md:order-2 flex flex-col gap-3">
          <ScrollReveal direction="right" delay={0}>
            <div>
              <p style={{
                fontFamily: "Patrick Hand, cursive",
                fontSize: 15,
                color: "rgba(45,45,45,0.5)",
                margin: "0 0 4px",
              }}>
                🥩 com a Açougueira
              </p>
              <h2 style={{
                fontFamily: "Kalam, cursive",
                fontWeight: 700,
                color: "#2d2d2d",
                lineHeight: 1.2,
                margin: 0,
                fontSize: "clamp(22px, 5vw, 30px)",
              }}>
                Descubra quanto você perde no açougue por mês
              </h2>
              <p style={{
                fontFamily: "Patrick Hand, cursive",
                fontSize: 17,
                color: "rgba(45,45,45,0.6)",
                margin: "6px 0 0",
              }}>
                Responde duas perguntinhas e eu te mostro.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <SavingsCalculator onOpenQuiz={onOpenQuiz} />
          </ScrollReveal>
        </div>

        {/* ── Copy + CTA — abaixo no mobile, esquerda no desktop ── */}
        <div className="flex flex-col gap-3 md:gap-5 order-2 md:order-1">

          {/* Intro UGC */}
          <ScrollReveal direction="left" delay={0}>
            <p style={{
              fontFamily: "Patrick Hand, cursive",
              fontSize: "clamp(15px, 4vw, 18px)",
              color: "rgba(45,45,45,0.6)",
              margin: 0,
            }}>
              🥩 com a Açougueira
            </p>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="left" delay={80}>
            <h1 style={{
              fontFamily: "Kalam, cursive", fontWeight: 700,
              color: "#2d2d2d", lineHeight: 1.2,
              margin: 0,
            }} className="text-3xl md:text-5xl">
              Você sabe quanto tá jogando fora no açougue por mês?
            </h1>
          </ScrollReveal>

          {/* Sub */}
          <ScrollReveal direction="left" delay={180}>
            <p style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.75)", fontSize: "19px", lineHeight: 1.5,
              margin: 0,
            }}>
              Calcula aí em cima e vê. Depois faz o quiz — 4 perguntas, resultado na hora, 100% grátis.
            </p>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal direction="left" delay={280}>
            <div className="flex flex-col gap-2 items-start">
              <WobblyButton
                variant="accent"
                size="lg"
                onClick={onOpenQuiz}
                borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
                className="w-full sm:w-auto justify-center"
                style={{ fontSize: "clamp(17px, 4vw, 21px)" }}
              >
                Fazer o quiz grátis →
              </WobblyButton>
              <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 15, color: "#aaa", margin: 0 }}>
                Sem spam. Sem cartão. Resultado na hora.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
