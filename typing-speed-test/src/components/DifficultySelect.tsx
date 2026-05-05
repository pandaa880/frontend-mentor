import type { Difficulty } from "../types";

const difficulties: { value: Difficulty; label: string }[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

interface DifficultySelectProps {
  difficulty: Difficulty;
  onChange: (difficulty: Difficulty) => void;
  disabled?: boolean;
}

function DifficultySelect({ difficulty, onChange, disabled }: DifficultySelectProps) {
  return (
    <div className="difficulty-select" role="radiogroup" aria-label="Difficulty">
      {difficulties.map((d) => (
        <button
          key={d.value}
          className={`difficulty-btn ${d.value === difficulty ? "difficulty-btn--active" : ""}`}
          role="radio"
          aria-checked={d.value === difficulty}
          disabled={disabled}
          onClick={() => onChange(d.value)}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
}

export { DifficultySelect };
