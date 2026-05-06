import { useEffect, useRef } from "react";
import type { Dispatch } from "react";

import type { Phase, TypingAction } from "../types";

function useTimer(phase: Phase, startedAt: number | null, dispatch: Dispatch<TypingAction>) {
  const startedAtRef = useRef(startedAt);
  startedAtRef.current = startedAt;

  useEffect(() => {
    if (phase !== "running" || !startedAt) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startedAtRef.current!;
      dispatch({ type: "TICK", payload: elapsed });
    }, 100);

    return () => clearInterval(interval);
  }, [phase, startedAt, dispatch]);
}

export { useTimer };
