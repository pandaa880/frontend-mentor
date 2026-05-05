import type { Mode } from "../types";

const modes: { value: Mode; label: string }[] = [
  { value: "timed", label: "Timed (60s)" },
  { value: "passage", label: "Passage" },
];

interface ModeSelectProps {
  mode: Mode;
  onChange: (mode: Mode) => void;
  disabled?: boolean;
}

function ModeSelect({ mode, onChange, disabled }: ModeSelectProps) {
  return (
    <div className="mode-select" role="radiogroup" aria-label="Mode">
      {modes.map((m) => (
        <button
          key={m.value}
          className={`mode-btn ${m.value === mode ? "mode-btn--active" : ""}`}
          role="radio"
          aria-checked={m.value === mode}
          disabled={disabled}
          onClick={() => onChange(m.value)}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

export { ModeSelect };
