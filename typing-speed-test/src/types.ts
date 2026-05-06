type Difficulty = "easy" | "medium" | "hard";

type Mode = "timed" | "passage";

type Phase = "idle" | "running" | "finished";

type CharStatus = "untouched" | "correct" | "incorrect";

interface Passage {
  id: string;
  text: string;
}

type PassageData = Record<Difficulty, Passage[]>;

interface TypingState {
  phase: Phase;
  difficulty: Difficulty;
  mode: Mode;
  passage: Passage | null;
  charStatuses: CharStatus[];
  currentIndex: number;
  correctKeystrokes: number;
  incorrectKeystrokes: number;
  startedAt: number | null;
  elapsedMs: number;
}

interface BestScore {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  difficulty: Difficulty;
  mode: Mode;
  date: string;
}

type TypingAction =
  | { type: "SET_DIFFICULTY"; payload: Difficulty }
  | { type: "SET_MODE"; payload: Mode }
  | { type: "SELECT_PASSAGE"; payload: Passage }
  | { type: "START" }
  | { type: "TYPE_CHAR"; payload: string }
  | { type: "BACKSPACE" }
  | { type: "TICK"; payload: number }
  | { type: "FINISH" }
  | { type: "RESET" };

export type {
  Difficulty,
  Mode,
  Phase,
  CharStatus,
  Passage,
  PassageData,
  TypingState,
  BestScore,
  TypingAction,
};
