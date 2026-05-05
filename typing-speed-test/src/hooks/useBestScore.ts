import { useEffect, useState } from "react";

import type { BestScore } from "../types";

const BEST_SCORE_KEY = "typing-speed-best";

function useBestScore() {
  const [bestScore, setBestScore] = useState<BestScore | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(BEST_SCORE_KEY);
      if (stored) {
        setBestScore(JSON.parse(stored));
      }
    } catch {
      // corrupted data — ignore
    }
  }, []);

  return bestScore;
}

export { useBestScore };
