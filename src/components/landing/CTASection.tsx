"use client";
import { WobblyButton } from "./WobblyButton";
import { ScrollReveal } from "./ScrollReveal";

export function CTASection() {
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
            Vire o especialista em carne da sua família 🥩
          </h2>

          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.75)",
              fontSize: "20px",
              marginBottom: 32,
            }}
          >
            Você aprende de verdade. O conhecimento é seu pra sempre. Acesso vitalício por apenas R$9,90. Pague uma vez, use para sempre.
          </p>

          <div className="flex justify-center">
            <WobblyButton
              variant="accent"
              size="lg"
              onClick={() => window.open("https://www.ggcheckout.com/checkout/v3/ZGHlTiJZ08FrjoEDUaHU", "_blank")}
              borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
              className="w-full sm:w-auto whitespace-nowrap"
            >
              Começar por R$9,90 vitalício →
            </WobblyButton>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
