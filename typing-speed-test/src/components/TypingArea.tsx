import type { CharStatus, Passage } from "../types";
import { PassageDisplay } from "./PassageDisplay";
import { StartOverlay } from "./StartOverlay";

interface TypingAreaProps {
  phase: "idle" | "running" | "finished";
  passage: Passage | null;
  charStatuses?: CharStatus[];
  currentIndex?: number;
  onStart: () => void;
}

function TypingArea({ phase, passage, charStatuses, currentIndex, onStart }: TypingAreaProps) {
  if (phase === "finished") return null;

  return (
    <div className="typing-area">
      <PassageDisplay
        passage={passage}
        charStatuses={phase === "running" ? charStatuses : undefined}
        currentIndex={phase === "running" ? currentIndex : undefined}
      />
      {phase === "idle" && <StartOverlay onStart={onStart} />}
    </div>
  );
}

export { TypingArea };
