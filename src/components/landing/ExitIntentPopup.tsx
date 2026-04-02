"use client";
import { WobblyButton } from "./WobblyButton";

const CHECKOUT_DESCONTO_URL =
  "https://ggcheckout.app/checkout/v2/QSUq9HNpN3zU3mzWk5sb";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export function ExitIntentPopup({ visible, onClose }: Props) {
  if (!visible) return null;

  function handleCTA() {
    window.location.href = CHECKOUT_DESCONTO_URL;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(45, 45, 45, 0.65)",
        backdropFilter: "blur(5px)",
        padding: "16px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fdfbf7",
          backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          border: "3px solid #2d2d2d",
          borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px",
          boxShadow: "6px 6px 0px 0px #2d2d2d",
          padding: "36px 32px",
          maxWidth: "460px",
          width: "100%",
          textAlign: "center",
          fontFamily: "Patrick Hand, cursive",
        }}
      >
        <div style={{ fontSize: "2.8rem", marginBottom: "10px" }}>🥩</div>

        <h2
          style={{
            fontFamily: "Kalam, cursive",
            fontSize: "clamp(1.6rem, 5vw, 2rem)",
            fontWeight: 700,
            color: "#2d2d2d",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Boa notícia antes de você sair
        </h2>

        <p
          style={{
            color: "#2d2d2d",
            fontSize: "clamp(1.1rem, 3.5vw, 1.25rem)",
            lineHeight: 1.6,
            marginBottom: "12px",
          }}
        >
          Você quase foi embora sem o Mapa da Carne. Como você chegou até
          aqui, liberamos um desconto exclusivo:
        </p>

        {/* Price highlight */}
        <div
          style={{
            border: "3px solid #e05555",
            borderRadius: "12px",
            padding: "14px 24px",
            backgroundColor: "#fff9c4",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              color: "#999",
              fontSize: "1rem",
              marginBottom: "2px",
              textDecoration: "line-through",
            }}
          >
            R$ 14,90/mês
          </p>
          <span
            style={{
              fontFamily: "Kalam, cursive",
              fontSize: "clamp(2rem, 6vw, 2.6rem)",
              fontWeight: 700,
              color: "#e05555",
            }}
          >
            R$ 7,90
            <span
              style={{
                fontFamily: "Patrick Hand, cursive",
                fontSize: "1rem",
                color: "#777",
                fontWeight: 400,
              }}
            >
              {" "}
              /mês
            </span>
          </span>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              marginTop: "4px",
            }}
          >
            Menos que o corte mais barato do açougue
          </p>
        </div>

        <WobblyButton
          onClick={handleCTA}
          size="lg"
          style={{ width: "100%", marginBottom: "14px", display: "block" }}
        >
          🔒 Garantir por R$ 7,90
        </WobblyButton>

        <button
          onClick={onClose}
          style={{
            fontFamily: "Patrick Hand, cursive",
            color: "#999",
            fontSize: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Prefiro sair sem o desconto
        </button>
      </div>
    </div>
  );
}
