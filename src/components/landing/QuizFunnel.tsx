"use client";
import { useState, useEffect } from "react";
import { WobblyButton } from "./WobblyButton";

interface QuizFunnelProps {
  onClose: () => void;
  onComplete: (name: string, profileKey: string) => void;
}

const STEPS = [
  {
    step: 1,
    emoji: "🥩",
    question: "Qual é seu maior desafio na hora de comprar carne?",
    subtitle: "Escolha a que mais te representa:",
    options: [
      { id: "a", emoji: "😵‍💫", text: "Não sei qual corte escolher — peço o que o atendente fala" },
      { id: "b", emoji: "💸", text: "Acho que pago caro demais, mas não tenho como comparar" },
      { id: "c", emoji: "😞", text: "A carne quase sempre fica dura ou sem sabor depois" },
      { id: "d", emoji: "😶", text: "Me sinto perdido comparado a quem entende do assunto" },
    ],
  },
  {
    step: 2,
    emoji: "🛒",
    question: "Com que frequência você vai ao açougue ou compra carne?",
    subtitle: "Seja honesto — não tem resposta errada:",
    options: [
      { id: "a", emoji: "🔥", text: "Toda semana — carne é essencial na minha casa" },
      { id: "b", emoji: "📅", text: "2 a 3 vezes por mês" },
      { id: "c", emoji: "🌙", text: "Só em ocasiões especiais, churrasco, datas importantes" },
      { id: "d", emoji: "😅", text: "Raramente — evito porque não me sinto seguro para escolher" },
    ],
  },
  {
    step: 3,
    emoji: "😰",
    question: "O que mais te incomoda quando a carne não dá certo?",
    subtitle: "Escolha a situação que mais dói:",
    options: [
      { id: "a", emoji: "🤑", text: "Gastei dinheiro e não valeu a pena — jogo fora ou suporto" },
      { id: "b", emoji: "😳", text: "Fiz para pessoas que convidei e passei vergonha" },
      { id: "c", emoji: "😤", text: "Segui tudo certo e mesmo assim deu errado — não entendo por quê" },
      { id: "d", emoji: "😔", text: "Perco a vontade de tentar outra vez" },
    ],
  },
  {
    step: 4,
    emoji: "🎯",
    question: "Se você pudesse dominar um aspecto agora, qual seria?",
    subtitle: "Isso vai personalizar sua recomendação:",
    options: [
      { id: "a", emoji: "💰", text: "Saber se o preço é justo antes de pagar" },
      { id: "b", emoji: "🗺️", text: "Conhecer os cortes e saber o que cada um serve" },
      { id: "c", emoji: "👨‍🍳", text: "Preparar a carne do jeito certo, sem errar mais" },
      { id: "d", emoji: "✨", text: "Tudo isso — quero parar de depender de chute" },
    ],
  },
];

const PROFILES = [
  {
    key: "a",
    title: "O Perdido no Açougue",
    icon: "🥩",
    description:
      "Você compra por impulso ou pela sugestão do atendente — e sai sem saber se fez um bom negócio. O Mapa da Carne foi feito exatamente pra você: um guia visual que te diz o nome de cada corte, pra que serve e como pedir com segurança.",
  },
  {
    key: "b",
    title: "O Caçador de Valor",
    icon: "💰",
    description:
      "Você sente no estômago quando paga caro sem saber se está sendo enrolado. Com o Mapa da Carne, você aprende a comparar cortes por valor real — e nunca mais sai do açougue sem certeza do que está levando.",
  },
  {
    key: "c",
    title: "O Chef Frustrado",
    icon: "👨‍🍳",
    description:
      "Você se esforça na cozinha mas a carne trai você. A culpa não é do preparo — é da escolha do corte. O Mapa da Carne explica qual corte usar em cada método e por quê dá certo.",
  },
  {
    key: "d",
    title: "O Expert em Formação",
    icon: "🎯",
    description:
      "Você quer o pacote completo: escolher bem, pagar justo e preparar perfeito. O Mapa da Carne é exatamente isso — um sistema completo que te transforma de confuso em confiante no açougue.",
  },
];

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full" style={{ marginBottom: 8 }}>
      <div
        style={{
          height: 8,
          background: "#e5e0d8",
          borderRadius: 999,
          border: "2px solid #2d2d2d",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(current / total) * 100}%`,
            background: "#e05555",
            borderRadius: 999,
            transition: "width 400ms ease",
          }}
        />
      </div>
      <p
        style={{
          fontFamily: "Patrick Hand, cursive",
          fontSize: 13,
          color: "#888",
          marginTop: 4,
          textAlign: "right",
        }}
      >
        {current} de {total}
      </p>
    </div>
  );
}

export function QuizFunnel({ onClose, onComplete }: QuizFunnelProps) {
  const [step, setStep] = useState(0); // 0 = intro, 1-4 = questions, 5 = lead
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [pendingProfileKey, setPendingProfileKey] = useState("a");

  // Prevent body scroll when quiz is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleOptionSelect(id: string) {
    setSelected(id);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (step < 4) {
      setStep(step + 1);
    } else {
      // Calculate profile from most common answer or last answer
      const mostCommon = newAnswers.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      const topKey = Object.entries(mostCommon).sort((a, b) => b[1] - a[1])[0][0];
      const lastAnswer = newAnswers[newAnswers.length - 1];
      setPendingProfileKey(lastAnswer === "d" ? "d" : topKey);
      setStep(5);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    onComplete(name.trim(), pendingProfileKey);
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(45,45,45,0.85)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "#fdfbf7",
          border: "3px solid #2d2d2d",
          borderRadius: "24px 24px 0 0",
          boxShadow: "0 -6px 0px 0px #2d2d2d",
          width: "100%",
          maxWidth: 560,
          height: "92dvh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 32,
            height: 32,
            border: "2px solid #2d2d2d",
            borderRadius: "50%",
            background: "#e5e0d8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: 700,
            color: "#2d2d2d",
            flexShrink: 0,
          }}
          aria-label="Fechar"
        >
          ×
        </button>

        {/* STEP 0 — Intro */}
        {step === 0 && (
          <div style={{ overflowY: "auto", flex: 1, padding: "48px 20px 24px", display: "flex", flexDirection: "column", gap: 16, textAlign: "center" }}>
            <span style={{ fontSize: 48 }}>🥩</span>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e05555", color: "#fff", border: "2px solid #2d2d2d", borderRadius: "20px", boxShadow: "3px 3px 0px 0px #2d2d2d", padding: "4px 14px", fontFamily: "Patrick Hand, cursive", fontSize: "13px", margin: "0 auto" }}>
              Quiz do Mapa da Carne · só 2 minutos
            </div>
            <h2 style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d", fontSize: "clamp(22px, 6vw, 30px)", lineHeight: 1.2, margin: 0 }}>
              Vamos descobrir seu perfil de comprador de carnes
            </h2>
            <p style={{ fontFamily: "Patrick Hand, cursive", color: "rgba(45,45,45,0.75)", fontSize: 16, lineHeight: 1.5, margin: 0 }}>
              4 perguntas rápidas. No final você recebe um diagnóstico personalizado — e sabe exatamente o que está te fazendo gastar mais do que devia.
            </p>
            <div style={{ background: "#fff9c4", border: "2px solid #2d2d2d", borderRadius: "12px", boxShadow: "3px 3px 0px 0px #2d2d2d", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 5, textAlign: "left" }}>
              {["✅ 100% gratuito, sem compromisso", "⚡ Leva menos de 2 minutos", "🎯 Resultado personalizado para o seu perfil"].map((item) => (
                <p key={item} style={{ fontFamily: "Patrick Hand, cursive", fontSize: 15, color: "#2d2d2d", margin: 0 }}>{item}</p>
              ))}
            </div>
            <WobblyButton variant="accent" size="lg" onClick={() => setStep(1)} borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px" className="w-full">
              Começar o quiz →
            </WobblyButton>
          </div>
        )}

        {/* STEPS 1–4 — Questions: scrollable options + sticky button */}
        {step >= 1 && step <= 4 && (
          <>
            {/* Scrollable content */}
            <div style={{ overflowY: "auto", flex: 1, padding: "48px 20px 12px", display: "flex", flexDirection: "column", gap: 14 }}>
              <ProgressBar current={step} total={4} />
              <div style={{ background: "#fff9c4", border: "2px solid #2d2d2d", borderRadius: "10px", boxShadow: "2px 2px 0px 0px #2d2d2d", padding: "4px 12px", display: "inline-block", alignSelf: "flex-start" }}>
                <span style={{ fontFamily: "Patrick Hand, cursive", fontSize: 13, color: "#2d2d2d" }}>
                  {STEPS[step - 1].emoji} Pergunta {step}
                </span>
              </div>
              <h3 style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d", fontSize: "clamp(19px, 5vw, 24px)", lineHeight: 1.25, margin: 0 }}>
                {STEPS[step - 1].question}
              </h3>
              <p style={{ fontFamily: "Patrick Hand, cursive", color: "#888", fontSize: 14, margin: 0 }}>
                {STEPS[step - 1].subtitle}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {STEPS[step - 1].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(opt.id)}
                    style={{
                      fontFamily: "Patrick Hand, cursive", fontSize: 15, textAlign: "left",
                      padding: "11px 14px", border: "2.5px solid #2d2d2d", borderRadius: "12px",
                      background: selected === opt.id ? "#e05555" : "#fff",
                      color: selected === opt.id ? "#fff" : "#2d2d2d",
                      boxShadow: selected === opt.id ? "3px 3px 0px 0px #2d2d2d" : "2px 2px 0px 0px #e5e0d8",
                      cursor: "pointer", transition: "all 150ms",
                      display: "flex", alignItems: "center", gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{opt.emoji}</span>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
            {/* Sticky button */}
            <div style={{ padding: "12px 20px 20px", background: "#fdfbf7", borderTop: "1px solid #f0ede8", flexShrink: 0 }}>
              <WobblyButton
                variant="accent" size="lg" onClick={handleNext}
                borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
                className="w-full"
                style={{ opacity: selected ? 1 : 0.4, pointerEvents: selected ? "auto" : "none" }}
              >
                {step < 4 ? "Próxima →" : "Ver meu resultado →"}
              </WobblyButton>
            </div>
          </>
        )}

        {/* STEP 5 — Lead Capture */}
        {step === 5 && (
          <form onSubmit={handleSubmit} style={{ overflowY: "auto", flex: 1, padding: "48px 20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontSize: 44, textAlign: "center", display: "block" }}>🎉</span>
            <h3 style={{ fontFamily: "Kalam, cursive", fontWeight: 700, color: "#2d2d2d", fontSize: "clamp(20px, 5vw, 26px)", lineHeight: 1.25, textAlign: "center", margin: 0 }}>
              Seu diagnóstico está pronto!
            </h3>
            <p style={{ fontFamily: "Patrick Hand, cursive", color: "rgba(45,45,45,0.75)", fontSize: 16, lineHeight: 1.5, textAlign: "center", margin: 0 }}>
              Coloca seu nome abaixo para receber seu perfil personalizado.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontFamily: "Patrick Hand, cursive", fontSize: 14, color: "#2d2d2d" }} htmlFor="quiz-name">Seu nome</label>
              <input
                id="quiz-name" type="text" placeholder="Digite seu nome aqui"
                value={name} onChange={(e) => setName(e.target.value)} required
                style={{ fontFamily: "Patrick Hand, cursive", fontSize: 17, padding: "12px 14px", border: "2.5px solid #2d2d2d", borderRadius: "12px", outline: "none", background: "#fff", color: "#2d2d2d", boxShadow: "2px 2px 0px 0px #e5e0d8" }}
              />
            </div>
            <p style={{ fontFamily: "Patrick Hand, cursive", fontSize: 12, color: "#aaa", textAlign: "center", margin: 0 }}>
              🔒 Só seu nome — nada mais.
            </p>
            <WobblyButton variant="accent" size="lg" borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px" className="w-full" style={{ opacity: submitting ? 0.7 : 1 }}>
              {submitting ? "Calculando..." : "Quero meu diagnóstico gratuito →"}
            </WobblyButton>
          </form>
        )}

      </div>
    </div>
  );
}
