import { motion } from "framer-motion";
import { WobblyButton } from "./WobblyButton";

export function CTASection() {
  return (
    <section id="cta" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#fff9c4",
            border: "3px dashed #2d2d2d",
            borderRadius: "200px 25px 180px 20px / 20px 200px 25px 180px",
            boxShadow: "8px 8px 0px 0px #2d2d2d",
            transform: "rotate(-0.5deg)",
            padding: "56px 40px",
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
            className="text-4xl md:text-5xl"
          >
            Comece a escolher carne como um especialista 🥩
          </h2>

          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.75)",
              fontSize: "20px",
              marginBottom: 32,
            }}
          >
            Grátis para começar. Sem cartão de crédito.
          </p>

          <div className="flex justify-center">
            <WobblyButton
              variant="accent"
              size="lg"
              borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
            >
              Experimentar Grátis Agora →
            </WobblyButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
