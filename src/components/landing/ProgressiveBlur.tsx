"use client";
const LAYERS = [
  { blur: "0.25px", start: 0,   end: 12.5  },
  { blur: "0.5px",  start: 12.5, end: 25   },
  { blur: "1px",    start: 25,   end: 37.5 },
  { blur: "2px",    start: 37.5, end: 50   },
  { blur: "4px",    start: 50,   end: 62.5 },
  { blur: "8px",    start: 62.5, end: 75   },
  { blur: "16px",   start: 75,   end: 87.5 },
  { blur: "32px",   start: 87.5, end: 100  },
];

export function ProgressiveBlur() {
  return (
    <>
      {/* Seta de scroll — só mobile */}
      <div
        className="fixed md:hidden"
        style={{
          bottom: 14,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          animation: "scrollBounce 1.6s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontFamily: "Patrick Hand, cursive",
            fontSize: 11,
            color: "rgba(45,45,45,0.55)",
            letterSpacing: "0.01em",
          }}
        >
          role para ver mais
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="rgba(45,45,45,0.5)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Blur — estreito no mobile, largura total no desktop */}
      <div
        className="fixed bottom-0 rounded-t-2xl md:rounded-none md:left-0 md:right-0"
        style={{
          left: "12%",
          right: "12%",
          height: "120px",
          zIndex: 999,
          pointerEvents: "none",
        }}
      >
        {LAYERS.map(({ blur, start, end }, i) => {
          const maskGradient = `linear-gradient(to top, rgba(0,0,0,1) ${start}%, rgba(0,0,0,1) ${start + (end - start) * 0.1}%, rgba(0,0,0,0) ${end}%)`;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                backdropFilter: `blur(${blur})`,
                WebkitBackdropFilter: `blur(${blur})`,
                maskImage: maskGradient,
                WebkitMaskImage: maskGradient,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(5px); }
        }
        @media (min-width: 768px) {
          .md\\:left-0  { left: 0 !important; }
          .md\\:right-0 { right: 0 !important; }
        }
      `}</style>
    </>
  );
}
