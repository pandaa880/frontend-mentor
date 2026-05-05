function StatPanel() {
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
        <span className="stat-badge__value">0s</span>
        <span className="stat-badge__label">Time</span>
      </div>
    </div>
  );
}

export { StatPanel };
