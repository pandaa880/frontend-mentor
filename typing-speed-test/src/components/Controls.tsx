import type { Difficulty, Mode } from "../types";
import { DifficultySelect } from "./DifficultySelect";
import { ModeSelect } from "./ModeSelect";
import { StatPanel } from "./StatPanel";

interface ControlsProps {
  difficulty: Difficulty;
  mode: Mode;
  onDifficultyChange: (difficulty: Difficulty) => void;
  onModeChange: (mode: Mode) => void;
  disabled?: boolean;
}

function Controls({ difficulty, mode, onDifficultyChange, onModeChange, disabled }: ControlsProps) {
  return (
    <div className="controls">
      <StatPanel />
      <DifficultySelect difficulty={difficulty} onChange={onDifficultyChange} disabled={disabled} />
      <ModeSelect mode={mode} onChange={onModeChange} disabled={disabled} />
    </div>
  );
}

export { Controls };
