import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mapa da Carne",
  description: "Mapa da Carne - Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Kalam:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
