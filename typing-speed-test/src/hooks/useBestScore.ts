import { useState } from "react";

import type { BestScore } from "../types";

const BEST_SCORE_KEY = "typing-speed-best";

interface UseBestScoreReturn {
  bestScore: BestScore | null;
  saveScore: (score: BestScore) => void;
  isFirstTest: boolean;
}

function useBestScore(): UseBestScoreReturn {
  const [bestScore, setBestScore] = useState<BestScore | null>(() => {
    try {
      const stored = localStorage.getItem(BEST_SCORE_KEY);
      return stored ? (JSON.parse(stored) as BestScore) : null;
    } catch {
      return null;
    }
  });

  const saveScore = (score: BestScore) => {
    localStorage.setItem(BEST_SCORE_KEY, JSON.stringify(score));
    setBestScore(score);
  };

  return { bestScore, saveScore, isFirstTest: bestScore === null };
}

export { useBestScore };
