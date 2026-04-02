"use client";
import { useState, useEffect } from "react";
import { WobblyButton } from "@/components/landing/WobblyButton";

const CHECKOUT_URL =
  "https://ggcheckout.app/checkout/v2/QSUq9HNpN3zU3mzWk5sb";

const TOTAL_SECONDS = 10 * 60; // 10 minutes

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function OfertaEspecialClient() {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const benefits = [
    "Acesso imediato ao guia completo de cortes",
    "Guia de preços justos do açougue (atualizado)",
    "Receitas por corte: grelha, forno, panela e air fryer",
    "Todos os bônus da oferta original incluídos",
    "A única diferença é o preço",
  ];

  return (
    <div
      style={{
        backgroundColor: "#fdfbf7",
        backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        minHeight: "100dvh",
        fontFamily: "Patrick Hand, cursive",
        color: "#2d2d2d",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "48px 20px 64px",
          textAlign: "center",
        }}
      >
        {/* Headline */}
        <div style={{ fontSize: "3rem", marginBottom: "8px" }}>🗺️</div>
        <h1
          style={{
            fontFamily: "Kalam, cursive",
            fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "12px",
          }}
        >
          Você quase foi embora sem o Mapa.
        </h1>
        <p
          style={{
            fontFamily: "Kalam, cursive",
            fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)",
            color: "#e05555",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Então vamos direto ao ponto: R$ 7,90 por tudo.
        </p>
        <p
          style={{
            fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
            lineHeight: 1.6,
            color: "#555",
            marginBottom: "36px",
          }}
        >
          Toda vez que você compra o corte errado no açougue, perde dinheiro.
          O Mapa da Carne resolve isso — e agora custa menos que um refri na
          churrascaria.
        </p>

        {/* Timer */}
        <div
          style={{
            border: "3px solid #2d2d2d",
            borderRadius: "12px",
            backgroundColor: "#fff9c4",
            padding: "16px 24px",
            display: "inline-block",
            marginBottom: "36px",
            boxShadow: "4px 4px 0px 0px #2d2d2d",
          }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              color: "#555",
              marginBottom: "6px",
            }}
          >
            ⏳ Essa oferta some em:
          </p>
          <span
            style={{
              fontFamily: "Kalam, cursive",
              fontSize: "clamp(2rem, 8vw, 3rem)",
              fontWeight: 700,
              color: seconds <= 60 ? "#e05555" : "#2d2d2d",
              letterSpacing: "2px",
            }}
          >
            {pad(minutes)}:{pad(secs)}
          </span>
        </div>

        {/* Benefits */}
        <div
          style={{
            border: "3px solid #2d2d2d",
            borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px",
            backgroundColor: "#fdfbf7",
            boxShadow: "4px 4px 0px 0px #2d2d2d",
            padding: "24px 28px",
            marginBottom: "36px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontFamily: "Kalam, cursive",
              fontWeight: 700,
              fontSize: "1.1rem",
              marginBottom: "14px",
              textAlign: "center",
            }}
          >
            O que está incluído:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {benefits.map((b) => (
              <li
                key={b}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "10px",
                  fontSize: "clamp(0.9rem, 3vw, 1rem)",
                  lineHeight: 1.4,
                }}
              >
                <span style={{ color: "#22a83f", fontWeight: 700, flexShrink: 0 }}>✅</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div style={{ marginBottom: "28px" }}>
          <p style={{ color: "#999", fontSize: "1rem", marginBottom: "4px" }}>
            <span style={{ textDecoration: "line-through" }}>R$ 14,90/mês</span>
          </p>
          <p
            style={{
              fontFamily: "Kalam, cursive",
              fontSize: "clamp(2.4rem, 8vw, 3.2rem)",
              fontWeight: 700,
              color: "#e05555",
              lineHeight: 1,
              marginBottom: "4px",
            }}
          >
            R$ 7,90
            <span
              style={{
                fontFamily: "Patrick Hand, cursive",
                fontSize: "1.1rem",
                color: "#777",
                fontWeight: 400,
              }}
            >
              {" "}
              /mês
            </span>
          </p>
          <p style={{ fontSize: "0.85rem", color: "#777" }}>
            Metade do preço. Mesmo conteúdo. Mesmos bônus.
          </p>
        </div>

        {/* CTA */}
        <WobblyButton
          size="lg"
          onClick={() => (window.location.href = CHECKOUT_URL)}
          style={{ width: "100%", marginBottom: "16px" }}
        >
          🔒 Garantir o Mapa por R$ 7,90
        </WobblyButton>

        {/* Guarantee */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "0.85rem",
            color: "#777",
          }}
        >
          <span>🛡️</span>
          <span>Compra segura · Satisfação garantida · Cancele quando quiser</span>
        </div>
      </div>
    </div>
  );
}
