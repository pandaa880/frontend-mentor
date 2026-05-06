import { useEffect, useRef } from "react";
import type { Dispatch } from "react";

import type { Phase, TypingAction } from "../types";

interface KeyboardState {
  phase: Phase;
  currentIndex: number;
  passageLength: number;
}

function useKeyboard(
  phase: Phase,
  currentIndex: number,
  passageLength: number,
  dispatch: Dispatch<TypingAction>,
) {
  const stateRef = useRef<KeyboardState>({ phase, currentIndex, passageLength });
  stateRef.current = { phase, currentIndex, passageLength };

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const { phase, currentIndex, passageLength } = stateRef.current;

      if (phase === "finished") return;
      if (currentIndex >= passageLength && passageLength > 0) return;

      if (e.key === "Backspace") {
        e.preventDefault();
        if (phase === "running") {
          dispatch({ type: "BACKSPACE" });
        }
        return;
      }

      if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        if (phase === "idle") {
          dispatch({ type: "START" });
        }
        dispatch({ type: "TYPE_CHAR", payload: e.key });
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);
}

export { useKeyboard };
