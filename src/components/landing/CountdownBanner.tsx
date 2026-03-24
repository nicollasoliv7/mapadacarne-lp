"use client";
import { useState, useEffect, useRef } from "react";

const TOTAL_SECONDS = 12 * 60 + 10;

export function CountdownBanner() {
  const [remaining, setRemaining] = useState(TOTAL_SECONDS);
  const ref = useRef(TOTAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      ref.current = ref.current <= 1 ? TOTAL_SECONDS : ref.current - 1;
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
        lineHeight: 1.45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "4px 10px",
      }}
    >
      <span>🥩 <strong>4.800 pessoas</strong> já descobriram o perfil —{" "}
        <span style={{ fontFamily: "Kalam, cursive", fontWeight: 700, fontSize: "17px", textDecoration: "underline" }}>
          faça o quiz grátis!
        </span>
      </span>
      <span style={{ opacity: 0.9, fontSize: 15, whiteSpace: "nowrap" }}>
        ⏰ {h}:{m}:{s}
      </span>
    </div>
  );
}
