import type { Difficulty, Mode } from "../types";
import { DifficultySelect } from "./DifficultySelect";
import { ModeSelect } from "./ModeSelect";
import { StatPanel } from "./StatPanel";

interface ControlsProps {
  difficulty: Difficulty;
  mode: Mode;
  elapsedMs: number;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onModeChange: (mode: Mode) => void;
  disabled?: boolean;
}

function Controls({
  difficulty,
  mode,
  elapsedMs,
  onDifficultyChange,
  onModeChange,
  disabled,
}: ControlsProps) {
  return (
    <div className="controls">
      <StatPanel elapsedMs={elapsedMs} />
      <DifficultySelect difficulty={difficulty} onChange={onDifficultyChange} disabled={disabled} />
      <ModeSelect mode={mode} onChange={onModeChange} disabled={disabled} />
    </div>
  );
}

export { Controls };
