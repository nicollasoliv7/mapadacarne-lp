"use client";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function InfluencerSection() {
  return (
    <section
      style={{
        background: "#fdf6f0",
        borderTop: "3px dashed #2d2d2d",
        borderBottom: "3px dashed #2d2d2d",
      }}
      className="py-12 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ── LEFT: Photo card ── */}
          <ScrollReveal direction="left" delay={0}>
            <div style={{ position: "relative" }}>

              {/* Tape decoration */}
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%) rotate(-2deg)",
                  width: 72,
                  height: 18,
                  background: "rgba(0,0,0,0.12)",
                  borderRadius: 3,
                  zIndex: 10,
                }}
              />

              {/* Main photo card */}
              <div
                style={{
                  background: "white",
                  border: "3px solid #2d2d2d",
                  borderRadius: "255px 20px 255px 20px / 20px 255px 20px 255px",
                  boxShadow: "10px 10px 0px 0px #2d2d2d",
                  transform: "rotate(-2deg)",
                  overflow: "hidden",
                }}
              >
                {/* Photo */}
                <div
                  style={{
                    height: 420,
                    overflow: "hidden",
                    position: "relative",
                    background: "#e5e0d8",
                  }}
                >
                  {/* ✏️ Salve a foto em public/influencer.jpg */}
                  <img
                    src="/influencer.jpg"
                    alt="A Açougueira"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                  {/* Gradient fade into white */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 100,
                      background:
                        "linear-gradient(to bottom, transparent, white)",
                    }}
                  />
                </div>

                {/* Info below photo */}
                <div
                  style={{
                    padding: "4px 24px 24px",
                    background: "white",
                  }}
                >
                  {/* Name — ✏️ troque pelo nome real */}
                  <h3
                    style={{
                      fontFamily: "Kalam, cursive",
                      fontWeight: 700,
                      color: "#2d2d2d",
                      fontSize: 26,
                      marginBottom: 2,
                      lineHeight: 1.1,
                    }}
                  >
                    [Nome da Influencer]
                  </h3>
                  {/* Handle — ✏️ troque pelo @handle real */}
                  <p
                    style={{
                      fontFamily: "Patrick Hand, cursive",
                      color: "#e05555",
                      fontSize: 15,
                      marginBottom: 14,
                    }}
                  >
                    @[handle]
                  </p>

                  {/* Identity tags */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {["26 anos", "Filha de açougueiro", "Criada no açougue"].map(
                      (tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "Patrick Hand, cursive",
                            fontSize: 12,
                            color: "#2d2d2d",
                            background: "#fff9c4",
                            border: "1.5px solid #2d2d2d",
                            borderRadius: "20px",
                            padding: "3px 10px",
                            boxShadow: "2px 2px 0px 0px #2d2d2d",
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Instagram badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                style={{
                  position: "absolute",
                  bottom: 28,
                  right: -16,
                  background: "white",
                  border: "2px solid #2d2d2d",
                  borderRadius: "50% 45% 52% 44% / 44% 52% 45% 50%",
                  boxShadow: "4px 4px 0px 0px #2d2d2d",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "Patrick Hand, cursive",
                  fontSize: 13,
                  color: "#2d2d2d",
                  transform: "rotate(3deg)",
                  zIndex: 20,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e05555"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#e05555" stroke="none" />
                </svg>
                Me siga!
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ── RIGHT: Text content ── */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <ScrollReveal direction="right" delay={0}>
              <div
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  background: "#fff9c4",
                  border: "2px solid #2d2d2d",
                  borderRadius: "2px 12px 2px 10px / 10px 2px 12px 2px",
                  boxShadow: "3px 3px 0px 0px #2d2d2d",
                  transform: "rotate(-1deg)",
                  padding: "4px 14px",
                  fontSize: "15px",
                  color: "#2d2d2d",
                  display: "inline-block",
                }}
              >
                Quem sou eu? 👇
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal direction="right" delay={120}>
              <h2
                style={{
                  fontFamily: "Kalam, cursive",
                  fontWeight: 700,
                  color: "#2d2d2d",
                  lineHeight: 1.2,
                }}
                className="text-3xl md:text-4xl"
              >
                Cresci dentro de um açougue. Agora vou te ensinar tudo. 🔪
              </h2>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal direction="right" delay={220}>
              <blockquote
                style={{
                  background: "white",
                  border: "2px solid #2d2d2d",
                  borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px",
                  boxShadow: "4px 4px 0px 0px #2d2d2d",
                  padding: "20px 20px 20px 36px",
                  fontFamily: "Patrick Hand, cursive",
                  color: "#2d2d2d",
                  fontSize: "17px",
                  lineHeight: 1.55,
                  margin: 0,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 64,
                    color: "#e05555",
                    position: "absolute",
                    top: 2,
                    left: 12,
                    lineHeight: 1,
                    opacity: 0.3,
                    pointerEvents: "none",
                  }}
                >
                  "
                </span>
                Cresci vendo meu pai escolher cada corte, negociar o preço certo e preparar do jeito que poucos sabem. Vi gente demais sendo enganada no açougue — e decidi mudar isso. Comigo, você aprende de verdade.
              </blockquote>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal direction="right" delay={320}>
              <p
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  color: "rgba(45,45,45,0.72)",
                  fontSize: "17px",
                  lineHeight: 1.6,
                }}
              >
                Tenho 26 anos, sou filha de açougueiro e vivo rodeada de carne
                desde sempre. Criei o Mapa da Carne pra que você nunca mais
                chegue no açougue sem saber o que está comprando —{" "}
                <strong style={{ color: "#2d2d2d" }}>
                  comigo, esse conhecimento é seu pra sempre.
                </strong>
              </p>
            </ScrollReveal>

            {/* Decorative signature line */}
            <ScrollReveal direction="right" delay={400}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background:
                      "repeating-linear-gradient(90deg, #2d2d2d 0, #2d2d2d 6px, transparent 6px, transparent 12px)",
                    opacity: 0.2,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Kalam, cursive",
                    fontSize: 22,
                    color: "#e05555",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* ✏️ troque pelo nome real */}
                  ♡ A Açougueira
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    background:
                      "repeating-linear-gradient(90deg, #2d2d2d 0, #2d2d2d 6px, transparent 6px, transparent 12px)",
                    opacity: 0.2,
                  }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
