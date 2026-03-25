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
      m: "O Novato Perdido no Açougue",
      f: "A Novata Perdida no Açougue",
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
      f: "Você quer o pacote completo: escolher bem, pagar justo e preparar perfeito. O Mapa da Carne é exatamente isso — um sistema completo que te transforma de iniciante em especialista no açougue.",
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
          fontSize: 17,
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
            fontSize: "17px",
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
          <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 20, color: "#2d2d2d", lineHeight: 1.65, margin: 0 }}>
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.5 }}>
          <span style={{ fontFamily: "Patrick Hand, cursive", fontSize: 17, color: "#2d2d2d" }}>veja o que vem dentro</span>
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
            padding: "5px 16px",
            fontSize: "17px",
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
            fontSize: "clamp(28px, 5vw, 42px)",
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          Tudo que você precisa pra nunca mais errar no açougue
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { emoji: "🗺️", title: "Mapa visual completo", desc: "Todos os cortes com nome, onde ficam no boi e pra que serve cada um. Você salva no celular e usa direto no açougue." },
            { emoji: "💰", title: "Guia de preço justo", desc: "Faixa de preço por corte, sempre atualizada. Você chega sabendo o que é caro e o que é barato — antes de abrir a carteira." },
            { emoji: "👨‍🍳", title: "Como preparar cada corte", desc: "Churrasco, frigideira, forno, panela, air fryer. Cada corte no método certo — sem arriscar errar o preparo." },
            { emoji: "🛒", title: "Checklist do comprador", desc: "Um roteiro simples pra usar antes de sair de casa. Chega no açougue sabendo o que pedir — sem depender do atendente." },
          ].map(({ emoji, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                border: "2px solid #2d2d2d",
                borderRadius: "12px",
                boxShadow: "4px 4px 0px 0px #2d2d2d",
                padding: "20px 22px",
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: 36, flexShrink: 0 }}>{emoji}</span>
              <div>
                <p style={{ fontFamily: "Kalam, cursive", fontWeight: 700, fontSize: 21, color: "#2d2d2d", margin: "0 0 6px" }}>{title}</p>
                <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 18, color: "rgba(45,45,45,0.78)", lineHeight: 1.55, margin: 0 }}>{desc}</p>
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
            fontSize: "17px",
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
            fontSize: "clamp(26px, 5vw, 38px)",
            lineHeight: 1.2,
            marginBottom: 28,
          }}
        >
          O que estão dizendo depois de usar
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
                overflow: "hidden",
                border: "1px solid #ebebeb",
                transform: i % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.4deg)",
                maxWidth: 420,
                width: "100%",
                alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
              {/* Barra do Instagram */}
              <div style={{
                background: "#fff",
                borderBottom: "1px solid #efefef",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Avatar borrado */}
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    padding: 2, flexShrink: 0,
                  }}>
                    <div style={{
                      width: "100%", height: "100%", borderRadius: "50%",
                      background: "#ccc",
                      filter: "blur(4px)",
                      overflow: "hidden",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, color: "#999",
                    }}>👤</div>
                  </div>
                  {/* Nome ocultado */}
                  <div>
                    <div style={{
                      width: 90, height: 11, borderRadius: 6,
                      background: "#ddd",
                      marginBottom: 5,
                    }}/>
                    <div style={{
                      width: 55, height: 9, borderRadius: 6,
                      background: "#eee",
                    }}/>
                  </div>
                </div>
                {/* Logo Instagram */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig)" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4.5" stroke="url(#ig2)" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#bc1888"/>
                  <defs>
                    <linearGradient id="ig" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f09433"/><stop offset="0.25" stopColor="#e6683c"/>
                      <stop offset="0.5" stopColor="#dc2743"/><stop offset="0.75" stopColor="#cc2366"/>
                      <stop offset="1" stopColor="#bc1888"/>
                    </linearGradient>
                    <linearGradient id="ig2" x1="7.5" y1="16.5" x2="16.5" y2="7.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f09433"/><stop offset="1" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Corpo da conversa */}
              <div style={{ padding: "14px 14px 10px", background: "#fff" }}>
                {/* Mensagem recebida (do cliente) */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 10 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "#ccc", filter: "blur(3px)", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, color: "#999",
                  }}>👤</div>
                  <div style={{
                    background: "#f0f0f0",
                    borderRadius: "18px 18px 18px 4px",
                    padding: "10px 14px",
                    maxWidth: "85%",
                  }}>
                    <p style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: 15, color: "#1a1a1a", lineHeight: 1.5, margin: 0,
                    }}>
                      {t.text}
                    </p>
                  </div>
                </div>

                {/* Rodapé */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  paddingTop: 6, borderTop: "1px solid #f5f5f5",
                }}>
                  <span style={{
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: 13, color: "#aaa",
                  }}>
                    Mensagem direta · usuário oculto por privacidade
                  </span>
                  <span style={{ fontSize: 13 }}>{"⭐".repeat(t.stars)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: CTA / Price ── */}
      <section style={{ padding: "40px 20px 80px", maxWidth: 960, margin: "0 auto" }}>
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
          {/* Grid: mockup (esq) + CTA (dir) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center",
          }}
          className="result-cta-grid"
          >
            {/* ── Mockup do App ── */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{
                border: "3px solid #2d2d2d", borderRadius: "36px",
                boxShadow: "8px 8px 0px 0px #2d2d2d",
                background: "#1a1a1a", transform: "rotate(-1.5deg)",
                padding: "10px", maxWidth: 260, width: "100%",
              }}>
                <div style={{
                  background: "#fafaf8", borderRadius: "28px",
                  overflow: "hidden", aspectRatio: "9 / 19",
                  display: "flex", flexDirection: "column",
                }}>
                  {/* Status bar */}
                  <div style={{ background: "#fff", padding: "10px 16px 4px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 5, flexShrink: 0 }}>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <rect x="0" y="4" width="3" height="6" rx="1" fill="#1a1a1a"/>
                      <rect x="4.5" y="2.5" width="3" height="7.5" rx="1" fill="#1a1a1a"/>
                      <rect x="9" y="1" width="3" height="9" rx="1" fill="#1a1a1a"/>
                      <rect x="13.5" y="0" width="2.5" height="10" rx="1" fill="#1a1a1a"/>
                    </svg>
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                      <path d="M7.5 2C9.8 2 11.8 3 13.2 4.6L14.5 3.2C12.7 1.2 10.2 0 7.5 0C4.8 0 2.3 1.2 0.5 3.2L1.8 4.6C3.2 3 5.2 2 7.5 2Z" fill="#1a1a1a"/>
                      <path d="M7.5 5C8.9 5 10.1 5.6 11 6.5L12.3 5.1C11 3.8 9.3 3 7.5 3C5.7 3 4 3.8 2.7 5.1L4 6.5C4.9 5.6 6.1 5 7.5 5Z" fill="#1a1a1a"/>
                      <circle cx="7.5" cy="8.5" r="1.5" fill="#1a1a1a"/>
                    </svg>
                    <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <div style={{ width: 22, height: 11, border: "1.5px solid #1a1a1a", borderRadius: 3, padding: "1.5px", display: "flex", alignItems: "center", position: "relative" }}>
                        <div style={{ width: "75%", height: "100%", background: "#1a1a1a", borderRadius: 1.5 }} />
                        <div style={{ position: "absolute", right: -3, top: "50%", transform: "translateY(-50%)", width: 2, height: 5, background: "#1a1a1a", borderRadius: 1 }} />
                      </div>
                    </div>
                  </div>
                  {/* App header */}
                  <div style={{ background: "#fff", borderBottom: "1px solid #f0ede8", padding: "6px 16px 10px", flexShrink: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 22 }}>🥩</span>
                        <div>
                          <div style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: 15, color: "#1a1a1a", lineHeight: 1.2 }}>Mapa da Carne</div>
                          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: 10, color: "#e05555", fontWeight: 500 }}>Inteligente</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 3, padding: 4 }}>
                        <div style={{ width: 16, height: 2, background: "#1a1a1a", borderRadius: 1 }} />
                        <div style={{ width: 12, height: 2, background: "#1a1a1a", borderRadius: 1 }} />
                        <div style={{ width: 16, height: 2, background: "#1a1a1a", borderRadius: 1 }} />
                      </div>
                    </div>
                  </div>
                  {/* Main content */}
                  <div style={{ flex: 1, padding: "14px 12px", display: "flex", flexDirection: "column", gap: 10, overflowY: "hidden" }}>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: 13, color: "#1a1a1a", margin: 0, lineHeight: 1.3 }}>
                      Qual carne você quer escolher hoje?
                    </p>
                    <div style={{ background: "#f4f1ec", borderRadius: 10, padding: "7px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 12, opacity: 0.5 }}>🔍</span>
                      <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 11, color: "#999" }}>Buscar cortes, guias, dicas...</span>
                    </div>
                    <p style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: 11, color: "#555", margin: 0 }}>
                      Como você vai preparar a carne hoje?
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {[
                        { emoji: "🥩", label: "Bife na frigideira", sub: "Rápido e macio" },
                        { emoji: "🔥", label: "Churrasco",          sub: "Cortes para brasa" },
                        { emoji: "🫕", label: "Assar no forno",     sub: "Assados suculentos" },
                        { emoji: "🍲", label: "Cozinhar na panela", sub: "Cozimento lento" },
                        { emoji: "⚡", label: "Air Fryer",           sub: "Rápido e prático" },
                        { emoji: "🍔", label: "Carne moída",         sub: "Hambúrguer e receitas" },
                      ].map(({ emoji, label, sub }) => (
                        <div key={label} style={{ background: "#fff", border: "1px solid #edeae4", borderRadius: 10, padding: "8px 6px", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                          <span style={{ fontSize: 18 }}>{emoji}</span>
                          <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: 9, color: "#1a1a1a", textAlign: "center", lineHeight: 1.2 }}>{label}</span>
                          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 8, color: "#999", textAlign: "center" }}>{sub}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "#e05555", borderRadius: 10, padding: "9px", textAlign: "center", marginTop: "auto" }}>
                      <span style={{ fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: 11, color: "#fff" }}>❓ Me ajuda a escolher</span>
                    </div>
                  </div>
                  {/* Bottom nav */}
                  <div style={{ background: "#fff", borderTop: "1px solid #f0ede8", padding: "8px 0 10px", display: "flex", justifyContent: "space-around", flexShrink: 0 }}>
                    {[
                      { icon: "🏠", label: "Home",   active: true },
                      { icon: "🗺️", label: "Cortes", active: false },
                      { icon: "💵", label: "Preço",  active: false },
                      { icon: "👨‍🍳", label: "Guias",  active: false },
                    ].map(({ icon, label, active }) => (
                      <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <span style={{ fontSize: 14 }}>{icon}</span>
                        <span style={{ fontFamily: "system-ui, sans-serif", fontSize: 8, color: active ? "#e05555" : "#aaa", fontWeight: active ? 700 : 400 }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Copy + CTA ── */}
            <div style={{ textAlign: "center" }}>
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
                🥩 de quem entende de corte
              </div>

              <h2
                style={{
                  fontFamily: "Kalam, cursive",
                  fontWeight: 700,
                  color: "#2d2d2d",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}
              >
                Chega de chutar. Aprenda de uma vez, {firstName}.
              </h2>

              <p
                style={{
                  fontFamily: "Patrick Hand, cursive",
                  color: "rgba(45,45,45,0.78)",
                  fontSize: 19,
                  lineHeight: 1.6,
                  marginBottom: 24,
                }}
              >
                Mapa completo, guia de preços, como preparar cada corte e checklist de compra. Tudo que você precisa pra nunca mais errar no açougue.
              </p>

              <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 18, color: "#888", margin: "0 0 4px" }}>
                Acesso completo por apenas
              </p>
              <p
                style={{
                  fontFamily: "Kalam, cursive",
                  fontWeight: 700,
                  fontSize: 56,
                  color: "#e05555",
                  margin: "0 0 4px",
                  lineHeight: 1,
                }}
              >
                R$ 14,90
              </p>
              <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 17, color: "#888", marginBottom: 24 }}>
                acesso imediato · pagamento seguro
              </p>

              <WobblyButton
                variant="accent"
                size="lg"
                onClick={() => window.open("https://www.ggcheckout.com/checkout/v3/ZGHlTiJZ08FrjoEDUaHU", "_blank")}
                borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
                className="w-full"
                style={{ fontSize: "clamp(17px, 3.5vw, 21px)" }}
              >
                Quero o Mapa da Carne por R$14,90 →
              </WobblyButton>

              <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 16, color: "#aaa", marginTop: 12 }}>
                🔒 Pagamento seguro · Acesso na hora
              </p>
            </div>
          </div>

          {/* Responsive: empilha no mobile */}
          <style>{`
            @media (max-width: 640px) {
              .result-cta-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
