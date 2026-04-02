import type { Metadata } from "next";
import { OfertaEspecialClient } from "./OfertaEspecialClient";

export const metadata: Metadata = {
  title: "Oferta Especial — Mapa da Carne",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfertaEspecialPage() {
  return <OfertaEspecialClient />;
}
