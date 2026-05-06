import { useMemo } from "react";

interface TypingStats {
  wpm: number;
  accuracy: number;
}

function useStats(
  correctKeystrokes: number,
  incorrectKeystrokes: number,
  elapsedMs: number,
): TypingStats {
  return useMemo(() => {
    const totalKeystrokes = correctKeystrokes + incorrectKeystrokes;

    const minutes = elapsedMs / 60000;
    const wpm = minutes > 0 ? Math.round(correctKeystrokes / 5 / minutes) : 0;

    const accuracy =
      totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 100;

    return { wpm, accuracy };
  }, [correctKeystrokes, incorrectKeystrokes, elapsedMs]);
}

export { useStats };
export type { TypingStats };
