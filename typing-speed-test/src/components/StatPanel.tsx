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
    const secs = Math.ceil(remaining);
    const mins = Math.floor(secs / 60);
    const remainSecs = secs % 60;
    return `${mins}:${remainSecs.toString().padStart(2, "0")}`;
  }
  const totalSecs = Math.floor(ms / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function StatPanel({ wpm, accuracy, elapsedMs, mode }: StatPanelProps) {
  return (
    <div className="stat-panel">
      <div className="stat-badge">
        <span className="stat-badge__label">WPM:</span>
        <span className="stat-badge__value">{wpm}</span>
      </div>
      <div className="stat-badge">
        <span className="stat-badge__label">Accuracy:</span>
        <span className="stat-badge__value">{accuracy}%</span>
      </div>
      <div className="stat-badge">
        <span className="stat-badge__label">Time:</span>
        <span className="stat-badge__value">{formatTime(elapsedMs, mode)}</span>
      </div>
    </div>
  );
}

export { StatPanel };
