import iconRestart from "../assets/images/icon-restart.svg";
import { ResultHeader } from "./ResultHeader";
import { StatsGrid } from "./StatsGrid";

interface ResultsPanelProps {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  isNewBest: boolean;
  isFirstTest: boolean;
  onRestart: () => void;
}

function ResultsPanel({
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  isNewBest,
  isFirstTest,
  onRestart,
}: ResultsPanelProps) {
  return (
    <div className="results-panel">
      <ResultHeader isNewBest={isNewBest} isFirstTest={isFirstTest} />
      <StatsGrid
        wpm={wpm}
        accuracy={accuracy}
        correctChars={correctChars}
        incorrectChars={incorrectChars}
      />
      <button className="results-panel__restart" onClick={onRestart}>
        <img src={iconRestart} alt="" className="results-panel__restart-icon" />
        Restart
      </button>
    </div>
  );
}

export { ResultsPanel };
