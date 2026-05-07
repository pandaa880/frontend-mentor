import type { Difficulty, Mode } from "../types";
import { DifficultySelect } from "./DifficultySelect";
import { MobileDropdown } from "./MobileDropdown";
import { ModeSelect } from "./ModeSelect";
import { StatPanel } from "./StatPanel";

const difficulties: { value: Difficulty; label: string }[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const modes: { value: Mode; label: string }[] = [
  { value: "timed", label: "Timed (60s)" },
  { value: "passage", label: "Passage" },
];

interface ControlsProps {
  difficulty: Difficulty;
  mode: Mode;
  wpm: number;
  accuracy: number;
  elapsedMs: number;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onModeChange: (mode: Mode) => void;
  disabled?: boolean;
}

function Controls({
  difficulty,
  mode,
  wpm,
  accuracy,
  elapsedMs,
  onDifficultyChange,
  onModeChange,
  disabled,
}: ControlsProps) {
  return (
    <div className="stats-bar">
      <div className="stats-bar__row">
        <StatPanel wpm={wpm} accuracy={accuracy} elapsedMs={elapsedMs} mode={mode} />

        <div className="stats-bar__pills">
          <span className="stats-bar__label">Difficulty:</span>
          <DifficultySelect
            difficulty={difficulty}
            onChange={onDifficultyChange}
            disabled={disabled}
          />
          <div className="stats-bar__divider" />
          <span className="stats-bar__label">Mode:</span>
          <ModeSelect mode={mode} onChange={onModeChange} disabled={disabled} />
        </div>

        <div className="stats-bar__mobile-controls">
          <MobileDropdown
            value={difficulty}
            options={difficulties}
            onChange={onDifficultyChange}
            disabled={disabled}
          />
          <MobileDropdown
            value={mode}
            options={modes}
            onChange={onModeChange}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

export { Controls };
