import type { Mode } from "../types";

const TIMED_DURATION_MS = 60000;

interface StatPanelProps {
  wpm: number;
  accuracy: number;
  elapsedMs: number;
  mode: Mode;
}

function formatTime(ms: number, mode: Mode): string {
  if (mode === "timed") {
    const remaining = Math.max(0, (TIMED_DURATION_MS - ms) / 1000);
    return `${remaining.toFixed(1)}s`;
  }
  return `${(ms / 1000).toFixed(1)}s`;
}

function StatPanel({ wpm, accuracy, elapsedMs, mode }: StatPanelProps) {
  return (
    <div className="stat-panel">
      <div className="stat-badge">
        <span className="stat-badge__value">{wpm}</span>
        <span className="stat-badge__label">WPM</span>
      </div>
      <div className="stat-badge">
        <span className="stat-badge__value">{accuracy}%</span>
        <span className="stat-badge__label">Accuracy</span>
      </div>
      <div className="stat-badge">
        <span className="stat-badge__value">{formatTime(elapsedMs, mode)}</span>
        <span className="stat-badge__label">Time</span>
      </div>
    </div>
  );
}

export { StatPanel };
