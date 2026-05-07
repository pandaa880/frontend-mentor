import iconPersonalBest from "../assets/images/icon-personal-best.svg";
import type { BestScore } from "../types";

interface PersonalBestBadgeProps {
  bestScore: BestScore | null;
}

function PersonalBestBadge({ bestScore }: PersonalBestBadgeProps) {
  if (!bestScore) return null;

  return (
    <div className="personal-best-badge">
      <img src={iconPersonalBest} alt="" width="20" height="18" />
      <p className="personal-best-badge__label">
        Personal best: <span>{bestScore.wpm} WPM</span>
      </p>
    </div>
  );
}

export { PersonalBestBadge };
