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
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
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
  );
}
