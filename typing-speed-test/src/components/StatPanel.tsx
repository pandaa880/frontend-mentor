interface StatPanelProps {
  elapsedMs: number;
}

function formatTime(ms: number): string {
  const seconds = ms / 1000;
  return `${seconds.toFixed(1)}s`;
}

function StatPanel({ elapsedMs }: StatPanelProps) {
  return (
    <div className="stat-panel">
      <div className="stat-badge">
        <span className="stat-badge__value">0</span>
        <span className="stat-badge__label">WPM</span>
      </div>
      <div className="stat-badge">
        <span className="stat-badge__value">0%</span>
        <span className="stat-badge__label">Accuracy</span>
      </div>
      <div className="stat-badge">
        <span className="stat-badge__value">{formatTime(elapsedMs)}</span>
        <span className="stat-badge__label">Time</span>
      </div>
    </div>
  );
}

export { StatPanel };
