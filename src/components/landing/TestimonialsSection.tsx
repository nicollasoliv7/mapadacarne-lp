import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Em 2 semanas aprendi mais sobre carne do que em 30 anos comprando no açougue. Hoje eu sei o que estou pagando.",
    name: "Carlos M.",
    city: "São Paulo",
    rotation: "rotate(1deg)",
    radius: "255px 15px 225px 15px / 15px 225px 15px 255px",
    tailLeft: 28,
  },
  {
    quote: "Hoje vou ao açougue sozinha e sei exatamente o que pedir — sem precisar perguntar pra ninguém. Isso não tem preço.",
    name: "Fernanda R.",
    city: "Belo Horizonte",
    rotation: "rotate(-1deg)",
    radius: "15px 255px 15px 225px / 225px 15px 255px 15px",
    tailLeft: 32,
  },
  {
    quote: "Meu churrasco melhorou porque aprendi as técnicas certas de vez. Não sigo receita — entendo o que estou fazendo.",
    name: "Rafael S.",
    city: "Porto Alegre",
    rotation: "rotate(1deg)",
    radius: "200px 25px 180px 20px / 20px 180px 25px 200px",
    tailLeft: 30,
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

function TestimonialCard({
  quote,
  name,
  city,
  rotation,
  radius,
  tailLeft,
}: {
  quote: string;
  name: string;
  city: string;
  rotation: string;
  radius: string;
  tailLeft: number;
}) {
  return (
    <motion.div variants={itemVariants} style={{ transform: rotation }}>
      {/* Speech bubble */}
      <div
        style={{
          background: "white",
          border: "2px solid #2d2d2d",
          borderRadius: radius,
          boxShadow: "4px 4px 0px 0px #2d2d2d",
          padding: "24px",
          position: "relative",
          marginBottom: 32,
        }}
      >
        <p
          style={{
            fontFamily: "Patrick Hand, cursive",
            color: "#2d2d2d",
            fontSize: "16px",
            lineHeight: 1.5,
            marginBottom: 0,
          }}
        >
          "{quote}"
        </p>

        {/* Tail outer border triangle */}
        <div
          style={{
            position: "absolute",
            bottom: -26,
            left: tailLeft,
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderTop: "24px solid #2d2d2d",
          }}
        />
        {/* Tail inner white fill */}
        <div
          style={{
            position: "absolute",
            bottom: -22,
            left: tailLeft + 2,
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "20px solid white",
          }}
        />
      </div>

      {/* Avatar + name row */}
      <div className="flex items-center gap-3 pl-2">
        <div
          style={{
            width: 48,
            height: 48,
            background: "#e5e0d8",
            border: "2px solid #2d2d2d",
            borderRadius: "50% 45% 48% 44% / 44% 48% 45% 50%",
            boxShadow: "3px 3px 0px 0px #2d2d2d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Kalam, cursive",
            fontWeight: 700,
            color: "#2d2d2d",
            fontSize: "20px",
            flexShrink: 0,
          }}
        >
          {name[0]}
        </div>
        <div>
          <p
            style={{
              fontFamily: "Kalam, cursive",
              fontWeight: 700,
              color: "#2d2d2d",
              fontSize: "17px",
              margin: 0,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.65)",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {city}
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d" }}
        className="text-3xl md:text-5xl mb-8 md:mb-16 text-center"
      >
        Quem aprendeu conta 💬
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
          <TestimonialCard key={i} {...t} />
        ))}
      </motion.div>
    </section>
  );
}
