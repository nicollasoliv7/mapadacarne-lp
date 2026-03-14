import rearTop from "@/assets/cuts/rear-top.png";
import innerLeg from "@/assets/cuts/inner-leg.png";
import outerLeg from "@/assets/cuts/outer-leg.png";
import belly from "@/assets/cuts/belly.png";
import loin from "@/assets/cuts/loin.png";
import ribs from "@/assets/cuts/ribs.png";
import frontNeck from "@/assets/cuts/front-neck.png";
import shoulder from "@/assets/cuts/shoulder.png";
import chest from "@/assets/cuts/chest.png";
import shank from "@/assets/cuts/shank.png";

const cutImageMap: Record<string, string> = {
  // Traseiro superior
  picanha: rearTop,
  alcatra: rearTop,
  "miolo-de-alcatra": rearTop,
  maminha: rearTop,

  // Coxa interna (coxão mole)
  "cha-de-dentro": innerLeg,

  // Coxa externa
  "cha-de-fora": outerLeg,
  lagarto: outerLeg,
  patinho: outerLeg,

  // Barriga / flanco
  fraldinha: belly,

  // Lombo
  "contra-file": loin,
  "file-mignon": loin,
  ancho: loin,

  // Costelas
  costela: ribs,

  // Dianteiro / pescoço
  acem: frontNeck,
  "miolo-de-acem": frontNeck,
  cupim: frontNeck,

  // Ombro
  paleta: shoulder,
  "miolo-de-paleta": shoulder,

  // Peito
  "maca-de-peito": chest,

  // Pernas (músculo)
  musculo: shank,

  // Carne moída (genérico)
  "carne-moida": frontNeck,
};

interface CutImageProps {
  cutId: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-28 h-28",
};

export function CutImage({ cutId, size = "md", className = "" }: CutImageProps) {
  const src = cutImageMap[cutId];

  if (!src) {
    return <span className={sizeClasses[size]}>🥩</span>;
  }

  return (
    <img
      src={src}
      alt=""
      className={`${sizeClasses[size]} object-contain rounded ${className}`}
    />
  );
}
