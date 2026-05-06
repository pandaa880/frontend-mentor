import type { Difficulty, Mode } from "../types";
import { DifficultySelect } from "./DifficultySelect";
import { ModeSelect } from "./ModeSelect";
import { StatPanel } from "./StatPanel";

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
    <div className="controls">
      <StatPanel wpm={wpm} accuracy={accuracy} elapsedMs={elapsedMs} mode={mode} />
      <DifficultySelect difficulty={difficulty} onChange={onDifficultyChange} disabled={disabled} />
      <ModeSelect mode={mode} onChange={onModeChange} disabled={disabled} />
    </div>
  );
}

export { Controls };
