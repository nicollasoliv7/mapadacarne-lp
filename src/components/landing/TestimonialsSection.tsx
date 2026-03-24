"use client";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "cara nunca mais fui no açougue no chute kkkk antes deixava o atendente me convencer de qualquer coisa. agora já chego sabendo exatamente o que quero, o preço certo e fico no orçamento. salvou meu bolso de verdade 🙌",
    time: "há 2 dias",
    rotation: "rotate(1deg)",
  },
  {
    quote: "estava com medo de ir sozinha no açougue mas depois que aprendi com a rafa virei expert kkkk sabia o corte, o preço certo e ainda como preparar. meu marido não acreditou 😂❤️ melhor coisa que instalei",
    time: "há 4 dias",
    rotation: "rotate(-1.5deg)",
  },
  {
    quote: "fiz as contas e tô economizando uns R$80 por mês só comprando melhor. o app já se pagou umas 8x. e o churrasco do fim de semana ficou o melhor que eu já fiz na vida — todo mundo pediu a receita",
    time: "há 1 semana",
    rotation: "rotate(0.8deg)",
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

function InstagramDMCard({
  quote,
  time,
  rotation,
}: {
  quote: string;
  time: string;
  rotation: string;
}) {
  return (
    <motion.div variants={itemVariants} style={{ transform: rotation }}>
      <div
        style={{
          border: "2px solid #2d2d2d",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "2px 2px 0px 0px rgba(45,45,45,0.15)",
          background: "#fff",
          maxWidth: 320,
          margin: "0 auto",
        }}
      >
        {/* Instagram DM Header */}
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid #dbdbdb",
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {/* Back arrow */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Blurred avatar */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #b0b0b0, #888)",
              filter: "blur(5px)",
              flexShrink: 0,
            }}
          />

          {/* Blurred name + status */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                height: 11,
                width: 88,
                background: "#b8b8b8",
                borderRadius: 6,
                filter: "blur(4px)",
              }}
            />
            <div
              style={{
                height: 9,
                width: 52,
                background: "#d8d8d8",
                borderRadius: 4,
                filter: "blur(3px)",
              }}
            />
          </div>

          {/* Call + video icons */}
          <div style={{ display: "flex", gap: 14, opacity: 0.7 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.5a19.79 19.79 0 01-3-8.59A2 2 0 012.07 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.5a16 16 0 006.59 6.59l1.35-.35a2 2 0 012.12-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <polygon
                points="23 7 16 12 23 17 23 7"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1"
                y="5"
                width="15"
                height="14"
                rx="2"
                ry="2"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Messages area */}
        <div
          style={{
            background: "#fff",
            padding: "14px 12px 10px",
          }}
        >
          {/* Message row: small avatar + bubble */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {/* Small blurred avatar */}
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #b0b0b0, #888)",
                filter: "blur(5px)",
                flexShrink: 0,
                marginBottom: 2,
              }}
            />

            {/* Message bubble */}
            <div
              style={{
                background: "#efefef",
                borderRadius: "18px 18px 18px 4px",
                padding: "10px 14px",
                maxWidth: "calc(100% - 42px)",
              }}
            >
              <p
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: 13.5,
                  color: "#000",
                  margin: 0,
                  lineHeight: 1.45,
                }}
              >
                {quote}
              </p>
            </div>
          </div>

          {/* Reaction + timestamp */}
          <div
            style={{
              marginLeft: 38,
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 4,
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #dbdbdb",
                borderRadius: 20,
                padding: "2px 8px",
                display: "inline-flex",
                alignItems: "center",
                gap: 3,
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ fontSize: 12 }}>❤️</span>
            </div>
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                color: "#8e8e8e",
              }}
            >
              {time}
            </span>
          </div>
        </div>

        {/* Privacy footer */}
        <div
          style={{
            background: "#fafafa",
            borderTop: "1px solid #efefef",
            padding: "7px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <span style={{ fontSize: 11 }}>🔒</span>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 10,
              color: "#8e8e8e",
              margin: 0,
            }}
          >
            Usuário ocultado por privacidade
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-12 md:py-20 max-w-6xl mx-auto px-4">
      {/* Title */}
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
          O que mandam pra mim 💬
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d" }}
        className="text-3xl md:text-5xl mb-8 md:mb-16"
      >
        Olha o que chega no meu direct todo dia 📱
      </motion.h2>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 md:gap-8"
      >
        {TESTIMONIALS.map((t, i) => (
          <InstagramDMCard key={i} {...t} />
        ))}
      </motion.div>
    </section>
  );
}
