"use client";
import { WobblyButton } from "./WobblyButton";
import { ScrollReveal } from "./ScrollReveal";

interface CTASectionProps {
  onOpenQuiz?: () => void;
}

export function CTASection({ onOpenQuiz }: CTASectionProps) {
  return (
    <section id="cta" className="py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal direction="up" delay={0} duration={800}>
        <div
          style={{
            background: "#fff9c4",
            border: "3px dashed #2d2d2d",
            borderRadius: "200px 25px 180px 20px / 20px 200px 25px 180px",
            boxShadow: "8px 8px 0px 0px #2d2d2d",
            transform: "rotate(-0.5deg)",
            padding: "32px 24px",
            textAlign: "center",
          }}
        >
          {/* Influencer credit — ✏️ PREENCHA com o nome real */}
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
              padding: "5px 16px",
              fontFamily: "Patrick Hand, cursive",
              fontSize: "15px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 18 }}>🥩</span>
            com a Açougueira
          </div>

          <h2
            style={{
              fontFamily: "Kalam, cursive",
              fontWeight: 700,
              color: "#2d2d2d",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
            className="text-3xl md:text-5xl"
          >
            Chega de gastar mais do que precisa. Aprenda a comprar carne do jeito certo.
          </h2>

          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.75)",
              fontSize: "20px",
              marginBottom: 32,
            }}
          >
            Comigo, você aprende de uma vez por todas — qual corte escolher, como avaliar se o preço tá justo e como preparar do jeito que acerta sempre. Acesso vitalício por apenas R$9,90. Pague uma vez, use para sempre.
          </p>

          <div className="flex justify-center">
            <WobblyButton
              variant="accent"
              size="lg"
              onClick={onOpenQuiz}
              borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
              className="w-full sm:w-auto whitespace-nowrap"
            >
              Começar o quiz grátis →
            </WobblyButton>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
