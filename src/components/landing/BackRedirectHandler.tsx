"use client";
import { useEffect } from "react";

export function BackRedirectHandler() {
  useEffect(() => {
    // Guarda a URL atual para usar no pushState
    const currentUrl = window.location.href;

    // Adiciona entrada falsa ao histórico para interceptar o botão voltar
    // Passa a URL completa para evitar comportamento inesperado no Next.js
    window.history.pushState({ backRedirect: true }, "", currentUrl);

    function handlePopState() {
      // Re-empurra o estado antes de redirecionar para evitar loop
      window.history.pushState({ backRedirect: true }, "", currentUrl);
      // Usa replace para não deixar rastro desta interceptação no histórico
      window.location.replace("/oferta-especial");
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null;
}
