import { useState, useEffect, useRef } from "react";

const TOTAL_SECONDS = 12 * 60 + 10;

export function CountdownBanner() {
  const [remaining, setRemaining] = useState(TOTAL_SECONDS);
  const ref = useRef(TOTAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      ref.current = Math.max(0, ref.current - 1);
      setRemaining(ref.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = "00";
  const m = String(Math.floor(remaining / 60)).padStart(2, "0");
  const s = String(remaining % 60).padStart(2, "0");

  return (
    <div
      style={{
        background: "#e03030",
        color: "#fff",
        textAlign: "center",
        padding: "10px 16px",
        fontFamily: "Patrick Hand, cursive",
        fontSize: "16px",
        lineHeight: 1.4,
      }}
    >
      <span>⏰ Oferta válida <strong>só hoje</strong>! Encerra em: </span>
      <span
        style={{
          fontFamily: "Kalam, cursive",
          fontWeight: 700,
          fontSize: "18px",
          letterSpacing: "0.05em",
          background: "rgba(0,0,0,0.2)",
          borderRadius: "6px",
          padding: "2px 8px",
          display: "inline-block",
        }}
      >
        {h}:{m}:{s}
      </span>
    </div>
  );
}
