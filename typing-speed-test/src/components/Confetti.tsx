interface ConfettiProps {
  show: boolean;
}

const COLORS = ["hsl(354,63%,57%)", "hsl(140,63%,57%)", "hsl(214,100%,55%)", "hsl(49,85%,70%)"];

function Confetti({ show }: ConfettiProps) {
  if (!show) return null;

  const pieces = Array.from({ length: 40 }, (_, i) => ({
    key: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 0.5}s`,
    duration: `${0.8 + Math.random() * 1.2}s`,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
    size: `${6 + Math.random() * 6}px`,
  }));

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.key}
          className="confetti__piece"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

export { Confetti };
