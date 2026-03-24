"use client";
import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "1",
    emoji: "📝",
    title: "Faça o quiz grátis",
    desc: "Responda 4 perguntas rápidas sobre como você compra carne hoje. Leva menos de 2 minutos e já mostra onde você está errando.",
  },
  {
    number: "2",
    emoji: "🧠",
    title: "Descubra onde você perde dinheiro",
    desc: "Você vê exatamente o que não sabe ainda, quanto pode estar jogando fora — e qual é o próximo passo certo pra você.",
  },
  {
    number: "3",
    emoji: "🎓",
    title: "Domine o açougue pra sempre",
    desc: "Com o Mapa da Carne, você vai ao açougue com confiança: sabe o que pedir, avalia o preço e prepara do jeito que acerta sempre.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SquigglyArrow() {
  return (
    <div className="hidden md:flex items-center justify-center px-2" style={{ marginTop: -16 }}>
      <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
        <path
          d="M 0 16 Q 12.5 4, 25 16 Q 37.5 28, 50 16 Q 62.5 4, 75 16 Q 87.5 28, 100 16"
          stroke="#2d2d2d"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 90 8 L 100 16 L 90 24"
          stroke="#2d2d2d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      style={{
        background: "#fff9c4",
        borderTop: "3px dashed #2d2d2d",
        borderBottom: "3px dashed #2d2d2d",
      }}
      className="py-12 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d" }}
          className="text-3xl md:text-5xl mb-8 md:mb-16 text-center"
        >
          Como funciona — é simples assim 👇
        </motion.h2>

        {/* Steps with squiggly arrows between them */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-start"
        >
          {STEPS.map((step, i) => (
            <React.Fragment key={i}>
              <StepCard {...step} />
              {i < STEPS.length - 1 && <SquigglyArrow />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  emoji,
  title,
  desc,
}: {
  number: string;
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center text-center gap-3"
    >
      {/* Number circle */}
      <div
        style={{
          width: 64,
          height: 64,
          background: "white",
          border: "3px solid #2d2d2d",
          borderRadius: "50% 45% 52% 44% / 44% 52% 45% 50%",
          boxShadow: "4px 4px 0px 0px #2d2d2d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Kalam, cursive",
          fontWeight: 700,
          fontSize: "26px",
          color: "#ff4d4d",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        {number}
      </div>

      <span style={{ fontSize: 40 }}>{emoji}</span>

      <h3
        style={{
          fontFamily: "Kalam, cursive",
          fontWeight: 700,
          color: "#2d2d2d",
          fontSize: "22px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "Patrick Hand, cursive",
          color: "rgba(45,45,45,0.75)",
          fontSize: "17px",
          lineHeight: 1.5,
          maxWidth: 260,
        }}
      >
        {desc}
      </p>
    </motion.div>
  );
}
