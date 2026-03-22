import { useState, ReactNode, CSSProperties } from "react";

interface WobblyButtonProps {
  children: ReactNode;
  variant?: "accent" | "muted";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  borderRadius?: string;
}

export function WobblyButton({
  children,
  variant = "accent",
  size = "md",
  onClick,
  className = "",
  style = {},
  borderRadius = "15px 255px 15px 225px / 225px 15px 255px 15px",
}: WobblyButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const bgMap = { accent: "#ff4d4d", muted: "#e5e0d8" };
  const textMap = { accent: "#fff", muted: "#2d2d2d" };
  const sizeMap = { sm: "px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base", md: "px-4 py-2.5 text-base md:px-6 md:py-3 md:text-lg", lg: "px-5 py-3 text-base md:px-8 md:py-4 md:text-xl" };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        fontFamily: "Patrick Hand, cursive",
        borderRadius,
        border: "3px solid #2d2d2d",
        background: hovered ? "#ff4d4d" : bgMap[variant],
        color: hovered ? "#fff" : textMap[variant],
        boxShadow: active
          ? "0px 0px 0px 0px #2d2d2d"
          : hovered
          ? "2px 2px 0px 0px #2d2d2d"
          : "4px 4px 0px 0px #2d2d2d",
        transform: active
          ? "translate(4px, 4px)"
          : hovered
          ? "translate(2px, 2px)"
          : "translate(0, 0)",
        transition: "all 100ms",
        cursor: "pointer",
        fontWeight: "bold",
        ...style,
      }}
      className={`${sizeMap[size]} ${className}`}
    >
      {children}
    </button>
  );
}
