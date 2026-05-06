interface StatsGridProps {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
}

function StatsGrid({ wpm, accuracy, correctChars, incorrectChars }: StatsGridProps) {
  return (
    <div className="stats-grid">
      <div className="stats-grid__item">
        <span className="stats-grid__value">{wpm}</span>
        <span className="stats-grid__label">WPM</span>
      </div>
      <div className="stats-grid__item">
        <span className="stats-grid__value">{accuracy}%</span>
        <span className="stats-grid__label">Accuracy</span>
      </div>
      <div className="stats-grid__item">
        <span className="stats-grid__value">{correctChars}</span>
        <span className="stats-grid__label">Correct</span>
      </div>
      <div className="stats-grid__item">
        <span className="stats-grid__value">{incorrectChars}</span>
        <span className="stats-grid__label">Incorrect</span>
      </div>
    </div>
  );
}

export { StatsGrid };
