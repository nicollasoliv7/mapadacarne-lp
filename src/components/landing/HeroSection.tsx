import { motion } from "framer-motion";
import { WobblyButton } from "./WobblyButton";

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Sticky note tag */}
          <div className="self-start">
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
              🆕 Agora com IA
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "Kalam, cursive",
              fontWeight: 700,
              color: "#2d2d2d",
              lineHeight: 1.15,
            }}
            className="text-5xl md:text-6xl"
          >
            Nunca mais desperdice dinheiro com carne ruim 🥩
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.8)",
              fontSize: "20px",
              lineHeight: 1.5,
            }}
          >
            Fotografe, descreva ou pergunte — a IA te diz qual corte escolher,
            se o preço tá justo e como preparar do jeito certo.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <WobblyButton
              variant="accent"
              size="lg"
              onClick={() => scrollTo("cta")}
              borderRadius="255px 15px 225px 15px / 15px 225px 15px 255px"
            >
              Experimentar Grátis →
            </WobblyButton>
            <WobblyButton
              variant="muted"
              size="lg"
              onClick={() => scrollTo("como-funciona")}
              borderRadius="15px 225px 15px 255px / 255px 15px 225px 15px"
            >
              Ver como funciona
            </WobblyButton>
          </div>

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
        </motion.div>

        {/* Right side — App mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Decorative bouncing circle (desktop only) */}
          <div
            className="hidden md:block absolute -top-8 -right-8 animate-bounce"
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
              borderRadius: "200px 25px 180px 20px / 20px 180px 25px 200px",
              boxShadow: "8px 8px 0px 0px #2d2d2d",
              background: "white",
              transform: "rotate(-1deg)",
              padding: "16px",
              maxWidth: 320,
              width: "100%",
            }}
          >
            <div
              style={{
                background: "#e5e0d8",
                borderRadius: "160px 20px 140px 16px / 16px 140px 20px 160px",
                aspectRatio: "9 / 16",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 48 }}>📱</span>
              <span
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  color: "#2d2d2d",
                  fontSize: 18,
                  opacity: 0.7,
                }}
              >
                App Preview
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
