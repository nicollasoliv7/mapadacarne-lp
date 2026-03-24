"use client";
import { motion } from "framer-motion";
import { Bot, Map, DollarSign, Camera, ChefHat, BookOpen } from "lucide-react";
import { LucideIcon } from "lucide-react";

const FEATURES = [
  {
    Icon: Bot,
    title: "Assistente Inteligente",
    desc: "Qual corte levar, se o preço tá bom, como preparar — resposta na hora.",
    rotation: "rotate(1deg)",
    radius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  },
  {
    Icon: Map,
    title: "Mapa de Cortes",
    desc: "Todos os cortes com nome e função. Chega sabendo o que pedir.",
    rotation: "rotate(-1deg)",
    radius: "15px 255px 15px 225px / 225px 15px 255px 15px",
  },
  {
    Icon: DollarSign,
    title: "Detector de Preço",
    desc: "Veja se o preço tá justo antes de abrir a carteira.",
    rotation: "rotate(1deg)",
    radius: "200px 25px 180px 20px / 20px 180px 25px 200px",
  },
  {
    Icon: Camera,
    title: "Scanner de Carne",
    desc: "Fotografa no açougue e recebe: nome, preço e como preparar.",
    rotation: "rotate(-1deg)",
    radius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  },
  {
    Icon: ChefHat,
    title: "Guias de Preparo",
    desc: "Do churrasco ao air fryer — corte certo no método certo.",
    rotation: "rotate(1deg)",
    radius: "15px 255px 15px 225px / 225px 15px 255px 15px",
  },
  {
    Icon: BookOpen,
    title: "Biblioteca de Carnes",
    desc: "Tudo sobre cada corte num só lugar, sempre à mão.",
    rotation: "rotate(-1deg)",
    radius: "200px 25px 180px 20px / 20px 180px 25px 200px",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FeatureCard({
  Icon,
  title,
  desc,
  rotation,
  radius,
}: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  rotation: string;
  radius: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ rotate: 0, boxShadow: "3px 3px 0px 0px rgba(45,45,45,0.18)" }}
      style={{
        background: "white",
        border: "2px solid #2d2d2d",
        borderRadius: radius,
        boxShadow: "2px 2px 0px 0px rgba(45,45,45,0.15)",
        transform: rotation,
        padding: "16px 14px",
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

      <div className="flex flex-col gap-4">
        {/* Icon in wobbly circle */}
        <div
          style={{
            width: 40,
            height: 40,
            background: "#fffef0",
            border: "2px solid #2d2d2d",
            borderRadius: "50% 45% 52% 44% / 44% 52% 45% 50%",
            boxShadow: "2px 2px 0px 0px rgba(45,45,45,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={20} strokeWidth={2.5} color="#2d2d2d" />
        </div>

        <div>
          <h3
            style={{
              fontFamily: "Kalam, cursive",
              fontWeight: 700,
              color: "#2d2d2d",
              fontSize: "16px",
              marginBottom: 6,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.75)",
              fontSize: "13px",
              lineHeight: 1.4,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-12 md:py-20 max-w-6xl mx-auto px-4">
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
            background: "#fffef0",
            border: "2px solid #2d2d2d",
            borderRadius: "2px 12px 2px 10px / 10px 2px 12px 2px",
            boxShadow: "2px 2px 0px 0px rgba(45,45,45,0.12)",
            transform: "rotate(-1deg)",
            padding: "4px 14px",
            fontSize: "15px",
            color: "#2d2d2d",
            display: "inline-block",
          }}
        >
          O que você aprende comigo ✅
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
        Pare de adivinhar. Comece a saber de verdade.
      </motion.h2>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8"
      >
        {FEATURES.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </motion.div>
    </section>
  );
}
