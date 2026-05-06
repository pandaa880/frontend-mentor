import { useState } from "react";

import type { BestScore } from "../types";

const BEST_SCORE_KEY = "typing-speed-best";

function useBestScore() {
  const [bestScore] = useState<BestScore | null>(() => {
    try {
      const stored = localStorage.getItem(BEST_SCORE_KEY);
      return stored ? (JSON.parse(stored) as BestScore) : null;
    } catch {
      return null;
    }
  });

  return bestScore;
}

export { useBestScore };
