"use client";
import { motion } from "framer-motion";

const PROBLEMS = [
  {
    emoji: "😰",
    text: "Entrou no açougue sem saber o que pedir de verdade — e acabou levando o que o atendente sugeriu, sem questionar",
    rotation: "rotate(1deg)",
    radius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  },
  {
    emoji: "💸",
    text: "Pagou o preço pedido sem ter ideia se estava fazendo um bom negócio — ou simplesmente sendo enrolado",
    rotation: "rotate(-1deg)",
    radius: "15px 255px 15px 225px / 225px 15px 255px 15px",
  },
  {
    emoji: "🍖",
    text: "A carne ficou dura, sem sabor ou seca — mesmo seguindo a receita certinho, sem entender por quê deu errado",
    rotation: "rotate(1deg)",
    radius: "200px 25px 180px 20px / 20px 180px 25px 200px",
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

export function ProblemSection() {
  return (
    <section className="py-12 md:py-20 max-w-6xl mx-auto px-4">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
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
          Você se identifica? 😬
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d" }}
        className="text-3xl md:text-5xl mb-6 md:mb-12"
      >
        Se pelo menos um desses já aconteceu com você, o quiz foi feito pra você.
      </motion.h2>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-5 md:gap-8"
      >
        {PROBLEMS.map((problem, i) => (
          <ProblemCard key={i} {...problem} />
        ))}
      </motion.div>
    </section>
  );
}

function ProblemCard({
  emoji,
  text,
  rotation,
  radius,
}: {
  emoji: string;
  text: string;
  rotation: string;
  radius: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ rotate: 0, boxShadow: "6px 6px 0px 0px #2d2d2d" }}
      style={{
        background: "#fff9c4",
        border: "2px solid #2d2d2d",
        borderRadius: radius,
        boxShadow: "4px 4px 0px 0px #2d2d2d",
        transform: rotation,
        padding: "20px 16px",
        position: "relative",
        transition: "transform 100ms, box-shadow 100ms",
      }}
    >
      {/* Tape decoration */}
      <div
        style={{
          position: "absolute",
          top: -10,
          left: "50%",
          transform: "translateX(-50%) rotate(-1deg)",
          width: 60,
          height: 14,
          background: "rgba(0,0,0,0.1)",
          borderRadius: "2px",
        }}
      />
      <div className="flex flex-col items-center text-center gap-4">
        <span style={{ fontSize: 48 }}>{emoji}</span>
        <p
          style={{
            fontFamily: "Patrick Hand, cursive",
            color: "#2d2d2d",
            fontSize: 18,
            lineHeight: 1.5,
          }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}
