"use client";
import { useState, useEffect, useRef } from "react";
import { WobblyButton } from "./WobblyButton";

const FREQUENCIES = [
  { label: "1× por semana",  trips: 4.3  },
  { label: "2× por semana",  trips: 8.6  },
  { label: "3× por semana",  trips: 12.9 },
  { label: "4× ou mais",     trips: 17.2 },
];

const AMOUNTS = [
  { label: "até R$30",  mid: 22  },
  { label: "R$30–70",   mid: 50  },
  { label: "R$70–150",  mid: 110 },
  { label: "R$150+",    mid: 190 },
];

const WASTE_RATE = 0.23; // 23% de desperdício médio por corte errado

interface Props {
  onOpenQuiz: () => void;
}

export function SavingsCalculator({ onOpenQuiz }: Props) {
  const [freq, setFreq]     = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [displayed, setDisplayed] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const waste =
    freq !== null && amount !== null
      ? Math.round(freq * amount * WASTE_RATE)
      : null;

  // Anima o contador toda vez que waste muda
  useEffect(() => {
    if (waste === null) return;

    setShowResult(false);
    setDisplayed(0);

    if (timerRef.current) clearInterval(timerRef.current);

    const delay = setTimeout(() => {
      setShowResult(true);
      let cur = 0;
      const step = Math.max(1, Math.ceil(waste / 40));
      timerRef.current = setInterval(() => {
        cur += step;
        if (cur >= waste) {
          setDisplayed(waste);
          clearInterval(timerRef.current!);
        } else {
          setDisplayed(cur);
        }
      }, 22);
    }, 150);

    return () => {
      clearTimeout(delay);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [waste]);

  const PillBtn = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      style={{
        padding: "8px 14px",
        borderRadius: "20px",
        border: "2px solid #2d2d2d",
        background: active ? "#e05555" : "#fff",
        color: active ? "#fff" : "#2d2d2d",
        fontFamily: "Patrick Hand, cursive",
        fontSize: 14,
        cursor: "pointer",
        boxShadow: active ? "2px 2px 0px 0px #2d2d2d" : "none",
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        background: "#fff9c4",
        border: "2px solid #2d2d2d",
        borderRadius: "14px 6px 16px 8px / 8px 16px 6px 14px",
        boxShadow: "5px 5px 0px 0px #2d2d2d",
        padding: "24px 20px",
        fontFamily: "Patrick Hand, cursive",
        transform: "rotate(0.4deg)",
      }}
    >
      {/* Título */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ fontSize: 26 }}>🧮</span>
        <h3
          style={{
            fontFamily: "Kalam, cursive",
            fontSize: "clamp(18px, 4vw, 22px)",
            fontWeight: 700,
            color: "#2d2d2d",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Quanto você deixa de economizar no açougue todo mês?
        </h3>
      </div>

      {/* Pergunta 1 */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontSize: 17, color: "#444", marginBottom: 10, fontWeight: 600 }}>
          📅 Quantas vezes compra carne por semana?
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {FREQUENCIES.map((f) => (
            <PillBtn
              key={f.label}
              label={f.label}
              active={freq === f.trips}
              onClick={() => setFreq(f.trips)}
            />
          ))}
        </div>
      </div>

      {/* Pergunta 2 */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 17, color: "#444", marginBottom: 10, fontWeight: 600 }}>
          💵 Quanto gasta em média por compra?
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {AMOUNTS.map((a) => (
            <PillBtn
              key={a.label}
              label={a.label}
              active={amount === a.mid}
              onClick={() => setAmount(a.mid)}
            />
          ))}
        </div>
      </div>

      {/* Resultado */}
      {showResult && waste !== null && (
        <div
          style={{
            background: "#fff",
            border: "2px solid #2d2d2d",
            borderRadius: 12,
            padding: "20px 16px",
            textAlign: "center",
            animation: "calcFadeIn 0.35s ease",
          }}
        >
          <style>{`
            @keyframes calcFadeIn {
              from { opacity: 0; transform: translateY(8px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <p style={{ fontSize: 17, color: "#666", margin: "0 0 4px" }}>
            Você provavelmente joga fora
          </p>
          <p
            style={{
              fontFamily: "Kalam, cursive",
              fontSize: "clamp(46px, 10vw, 60px)",
              fontWeight: 700,
              color: "#e05555",
              lineHeight: 1,
              margin: "0 0 4px",
            }}
          >
            R$ {displayed}
          </p>
          <p style={{ fontSize: 17, color: "#666", margin: "0 0 20px" }}>
            por mês comprando os cortes errados 😬
          </p>

          <WobblyButton
            variant="accent"
            size="md"
            onClick={onOpenQuiz}
            borderRadius="255px 15px 225px 15px / 15px 255px 15px 225px"
            className="w-full"
            style={{ fontSize: 18 }}
          >
            Quero parar de perder isso →
          </WobblyButton>

          <p style={{ fontSize: 15, color: "#bbb", marginTop: 10 }}>
            Descubra seu perfil em 2 minutos — é grátis
          </p>
        </div>
      )}

      {/* Placeholder antes de selecionar os dois */}
      {!showResult && (
        <div
          style={{
            background: "#fff",
            border: "2px dashed #ccc",
            borderRadius: 12,
            padding: "20px 16px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 17, color: "#bbb", margin: 0 }}>
            👆 Selecione as opções acima para ver o resultado
          </p>
        </div>
      )}
    </div>
  );
}
