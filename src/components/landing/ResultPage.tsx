"use client";
import { useEffect } from "react";
import { WobblyButton } from "./WobblyButton";
import { detectGender } from "@/utils/gender";

interface Profile {
  key: string;
  title: { m: string; f: string };
  icon: string;
  description: { m: string; f: string };
  pain: { m: string; f: string };
}

const PROFILES: Profile[] = [
  {
    key: "a",
    icon: "🥩",
    title: {
      m: "O Perdido no Açougue",
      f: "A Perdida no Açougue",
    },
    description: {
      m: "Você compra por impulso ou pela sugestão do atendente — e sai sem saber se fez um bom negócio. O Mapa da Carne foi feito exatamente pra você: um guia visual que te diz o nome de cada corte, pra que serve e como pedir com segurança.",
      f: "Você compra por impulso ou pela sugestão do atendente — e sai sem saber se fez um bom negócio. O Mapa da Carne foi feito exatamente pra você: um guia visual que te diz o nome de cada corte, pra que serve e como pedir com segurança.",
    },
    pain: {
      m: "Você entra no açougue sem saber o que pedir, sai com o que o atendente sugeriu — e ainda fica na dúvida se foi enrolado. Isso tem nome: falta de informação. E tem solução.",
      f: "Você entra no açougue sem saber o que pedir, sai com o que o atendente sugeriu — e ainda fica na dúvida se foi enrolada. Isso tem nome: falta de informação. E tem solução.",
    },
  },
  {
    key: "b",
    icon: "💰",
    title: {
      m: "O Caçador de Valor",
      f: "A Caçadora de Valor",
    },
    description: {
      m: "Você sente no estômago quando paga caro sem saber se está sendo enrolado. Com o Mapa da Carne, você aprende a comparar cortes por valor real — e nunca mais sai do açougue sem certeza do que está levando.",
      f: "Você sente no estômago quando paga caro sem saber se está sendo enrolada. Com o Mapa da Carne, você aprende a comparar cortes por valor real — e nunca mais sai do açougue sem certeza do que está levando.",
    },
    pain: {
      m: "Você já pagou R$8, R$10 a mais por quilo sem perceber. Não porque é ingênuo — mas porque ninguém te ensinou a comparar. Isso acaba agora.",
      f: "Você já pagou R$8, R$10 a mais por quilo sem perceber. Não porque é ingênua — mas porque ninguém te ensinou a comparar. Isso acaba agora.",
    },
  },
  {
    key: "c",
    icon: "👨‍🍳",
    title: {
      m: "O Chef Frustrado",
      f: "A Chef Frustrada",
    },
    description: {
      m: "Você se esforça na cozinha mas a carne trai você. A culpa não é do preparo — é da escolha do corte. O Mapa da Carne explica qual corte usar em cada método e por quê dá certo.",
      f: "Você se esforça na cozinha mas a carne trai você. A culpa não é do preparo — é da escolha do corte. O Mapa da Carne explica qual corte usar em cada método e por quê dá certo.",
    },
    pain: {
      m: "Você seguiu a receita certinho, dedicou tempo, e mesmo assim a carne ficou dura ou sem sabor. Isso não é falta de talento — é corte errado para o método errado.",
      f: "Você seguiu a receita certinho, dedicou tempo, e mesmo assim a carne ficou dura ou sem sabor. Isso não é falta de talento — é corte errado para o método errado.",
    },
  },
  {
    key: "d",
    icon: "🎯",
    title: {
      m: "O Expert em Formação",
      f: "A Expert em Formação",
    },
    description: {
      m: "Você quer o pacote completo: escolher bem, pagar justo e preparar perfeito. O Mapa da Carne é exatamente isso — um sistema completo que te transforma de confuso em confiante no açougue.",
      f: "Você quer o pacote completo: escolher bem, pagar justo e preparar perfeito. O Mapa da Carne é exatamente isso — um sistema completo que te transforma de perdida em confiante no açougue.",
    },
    pain: {
      m: "Você já sabe que há muito a aprender — e está cansado de depender de chute. Quer dominar de vez: corte certo, preço justo, preparo perfeito.",
      f: "Você já sabe que há muito a aprender — e está cansada de depender de chute. Quer dominar de vez: corte certo, preço justo, preparo perfeito.",
    },
  },
];

const TESTIMONIALS = [
  { name: "Camila R.", stars: 5, text: "Entrei no açougue semana passada e pela primeira vez saí sem aquela sensação de ter sido enrolada. Recomendo demais." },
  { name: "Marcos T.", stars: 5, text: "Minha esposa ria de mim no açougue. Agora sou eu que explico os cortes pra ela. Valeu cada centavo." },
  { name: "Patrícia S.", stars: 5, text: "Aprendi mais em 15 minutos com o Mapa do que em anos comprando carne toda semana." },
];

interface ResultPageProps {
  name: string;
  profileKey: string;
  onClose: () => void;
}

export function ResultPage({ name, profileKey, onClose }: ResultPageProps) {
  const gender = detectGender(name);
  const profile = PROFILES.find((p) => p.key === profileKey) ?? PROFILES[3];
  const firstName = name.trim().split(" ")[0];

  // Lock body scroll while visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "#fdfbf7",
        backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        overflowY: "auto",
      }}
    >
      {/* Close / back button */}
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 9999,
          fontFamily: "Patrick Hand, cursive",
          fontSize: 14,
          background: "#e5e0d8",
          border: "2px solid #2d2d2d",
          borderRadius: "20px",
          boxShadow: "2px 2px 0px 0px #2d2d2d",
          padding: "5px 14px",
          cursor: "pointer",
          color: "#2d2d2d",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        ← Voltar
      </button>

      {/* ── SECTION 1: Profile Hero ── */}
      <section
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px 20px 48px",
          textAlign: "center",
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        {/* Emoji */}
        <div
          style={{
            fontSize: 72,
            marginBottom: 16,
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.15))",
          }}
        >
          {profile.icon}
        </div>

        {/* Tag */}
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
            fontSize: "14px",
            marginBottom: 20,
          }}
        >
          Seu perfil, {firstName}
        </div>

        {/* Profile title */}
        <h1
          style={{
            fontFamily: "Kalam, cursive",
            fontWeight: 700,
            color: "#2d2d2d",
            fontSize: "clamp(34px, 7vw, 56px)",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {profile.title[gender]}
        </h1>

        {/* Pain amplification */}
        <div
          style={{
            background: "#fff9c4",
            border: "2px solid #2d2d2d",
            borderRadius: "12px",
            boxShadow: "4px 4px 0px 0px #2d2d2d",
            transform: "rotate(-0.5deg)",
            padding: "16px 20px",
            marginBottom: 24,
            textAlign: "left",
          }}
        >
          <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 18, color: "#2d2d2d", lineHeight: 1.6, margin: 0 }}>
            {profile.pain[gender]}
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "Patrick Hand, cursive",
            color: "rgba(45,45,45,0.8)",
            fontSize: "clamp(17px, 4vw, 20px)",
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          {profile.description[gender]}
        </p>

        {/* Scroll cue */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}>
          <span style={{ fontFamily: "Patrick Hand, cursive", fontSize: 13, color: "#2d2d2d" }}>veja o que você recebe</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── SECTION 2: What you get ── */}
      <section
        style={{
          padding: "40px 20px",
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        {/* Label */}
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
            marginBottom: 20,
          }}
        >
          🎁 O que você recebe
        </div>

        <h2
          style={{
            fontFamily: "Kalam, cursive",
            fontWeight: 700,
            color: "#2d2d2d",
            fontSize: "clamp(26px, 5vw, 40px)",
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          Tudo que você precisa pra nunca mais errar no açougue 🥩
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { emoji: "🗺️", title: "Mapa visual completo", desc: "Todos os cortes bovinos com nome, localização no boi e pra que cada um serve — numa arte que você salva no celular e usa na hora." },
            { emoji: "💰", title: "Guia de preço justo", desc: "Tabela atualizada com faixa de preço por corte. Você chega no açougue sabendo o que vale e o que não vale pagar." },
            { emoji: "👨‍🍳", title: "Como preparar cada corte", desc: "Qual corte usar no churrasco, na frigideira, no forno, na panela. Nunca mais erro de preparo por corte errado." },
            { emoji: "🛒", title: "Checklist do comprador inteligente", desc: "Um roteiro rápido pra usar antes de sair de casa e na hora de escolher — sem depender do atendente pra decidir." },
          ].map(({ emoji, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                border: "2px solid #2d2d2d",
                borderRadius: "12px",
                boxShadow: "4px 4px 0px 0px #2d2d2d",
                padding: "18px 20px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: 32, flexShrink: 0 }}>{emoji}</span>
              <div>
                <p style={{ fontFamily: "Kalam, cursive", fontWeight: 700, fontSize: 18, color: "#2d2d2d", margin: "0 0 4px" }}>{title}</p>
                <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 15, color: "rgba(45,45,45,0.75)", lineHeight: 1.5, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: Testimonials ── */}
      <section
        style={{
          padding: "40px 20px",
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "Patrick Hand, cursive",
            background: "#fff9c4",
            border: "2px solid #2d2d2d",
            borderRadius: "2px 12px 2px 10px / 10px 2px 12px 2px",
            boxShadow: "3px 3px 0px 0px #2d2d2d",
            transform: "rotate(0.5deg)",
            padding: "4px 14px",
            fontSize: "15px",
            color: "#2d2d2d",
            display: "inline-block",
            marginBottom: 20,
          }}
        >
          💬 Quem já usou
        </div>

        <h2
          style={{
            fontFamily: "Kalam, cursive",
            fontWeight: 700,
            color: "#2d2d2d",
            fontSize: "clamp(24px, 5vw, 36px)",
            lineHeight: 1.2,
            marginBottom: 28,
          }}
        >
          Pessoas como você que pararam de errar no açougue
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                border: "2px solid #2d2d2d",
                borderRadius: "12px",
                boxShadow: "3px 3px 0px 0px #2d2d2d",
                padding: "16px 20px",
              }}
            >
              <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 16, color: "#2d2d2d", lineHeight: 1.5, margin: "0 0 10px" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#e05555", border: "2px solid #2d2d2d", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontFamily: "Patrick Hand, cursive", fontWeight: 700, fontSize: 13, color: "#2d2d2d", margin: 0 }}>{t.name}</p>
                  <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 12, color: "#f59e0b", margin: 0 }}>{"⭐".repeat(t.stars)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: CTA / Price ── */}
      <section
        style={{
          padding: "40px 20px 80px",
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "#fff9c4",
            border: "3px dashed #2d2d2d",
            borderRadius: "200px 25px 180px 20px / 20px 200px 25px 180px",
            boxShadow: "8px 8px 0px 0px #2d2d2d",
            transform: "rotate(-0.5deg)",
            padding: "40px 28px",
          }}
        >
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
              marginBottom: 20,
            }}
          >
            🥩 com a Açougueira
          </div>

          <h2
            style={{
              fontFamily: "Kalam, cursive",
              fontWeight: 700,
              color: "#2d2d2d",
              fontSize: "clamp(26px, 5vw, 40px)",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Chega de chutar. Aprenda de uma vez, {firstName}. 🥩
          </h2>

          <p
            style={{
              fontFamily: "Patrick Hand, cursive",
              color: "rgba(45,45,45,0.75)",
              fontSize: 18,
              lineHeight: 1.5,
              marginBottom: 28,
            }}
          >
            Acesso vitalício a tudo — mapa, guia de preços, receitas por corte e checklist. Pague uma vez. Use para sempre.
          </p>

          <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 15, color: "#888", margin: "0 0 4px" }}>
            Acesso vitalício por apenas
          </p>
          <p
            style={{
              fontFamily: "Kalam, cursive",
              fontWeight: 700,
              fontSize: 52,
              color: "#e05555",
              margin: "0 0 4px",
              lineHeight: 1,
            }}
          >
            R$ 9,90
          </p>
          <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 14, color: "#888", marginBottom: 28 }}>
            Pague uma vez. Use para sempre.
          </p>

          <WobblyButton
            variant="accent"
            size="lg"
            onClick={() => window.open("#comprar", "_self")}
            borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
            className="w-full"
            style={{ fontSize: "clamp(16px, 4vw, 20px)" }}
          >
            Quero o Mapa da Carne por R$9,90 →
          </WobblyButton>

          <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 13, color: "#aaa", marginTop: 12 }}>
            🔒 Pagamento seguro · Acesso imediato
          </p>
        </div>
      </section>
    </div>
  );
}
