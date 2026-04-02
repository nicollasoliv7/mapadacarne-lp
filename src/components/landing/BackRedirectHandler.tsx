"use client";
import { useEffect } from "react";

export function BackRedirectHandler() {
  useEffect(() => {
    // Adiciona entrada falsa ao histórico para interceptar o botão voltar
    window.history.pushState({ backRedirect: true }, "");

    function handlePopState() {
      window.location.href = "/oferta-especial";
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null;
}
