import type { TypingAction, TypingState } from "../types";

const initialState: TypingState = {
  phase: "idle",
  difficulty: "easy",
  mode: "timed",
  passage: null,
  charStatuses: [],
  currentIndex: 0,
  correctKeystrokes: 0,
  incorrectKeystrokes: 0,
  startedAt: null,
  elapsedMs: 0,
};

function typingReducer(state: TypingState, action: TypingAction): TypingState {
  switch (action.type) {
    case "SET_DIFFICULTY": {
      if (state.phase !== "idle") return state;
      return { ...state, difficulty: action.payload };
    }

    case "SET_MODE": {
      if (state.phase !== "idle") return state;
      return { ...state, mode: action.payload };
    }

    case "SELECT_PASSAGE": {
      if (state.phase !== "idle") return state;
      return {
        ...state,
        passage: action.payload,
        charStatuses: new Array(action.payload.text.length).fill("untouched"),
        currentIndex: 0,
        correctKeystrokes: 0,
        incorrectKeystrokes: 0,
        elapsedMs: 0,
        startedAt: null,
      };
    }

    case "START": {
      return {
        ...state,
        phase: "running",
        startedAt: Date.now(),
      };
    }

    case "TYPE_CHAR": {
      if (state.phase !== "running" || !state.passage) return state;
      if (state.currentIndex >= state.passage.text.length) return state;

      const expected = state.passage.text[state.currentIndex];
      const isCorrect = action.payload === expected;

      const newStatuses = [...state.charStatuses];
      newStatuses[state.currentIndex] = isCorrect ? "correct" : "incorrect";

      return {
        ...state,
        charStatuses: newStatuses,
        currentIndex: state.currentIndex + 1,
        correctKeystrokes: state.correctKeystrokes + (isCorrect ? 1 : 0),
        incorrectKeystrokes: state.incorrectKeystrokes + (isCorrect ? 0 : 1),
      };
    }

    case "BACKSPACE": {
      if (state.phase !== "running") return state;
      if (state.currentIndex <= 0) return state;

      const newIndex = state.currentIndex - 1;
      const newStatuses = [...state.charStatuses];
      newStatuses[newIndex] = "untouched";

      return {
        ...state,
        charStatuses: newStatuses,
        currentIndex: newIndex,
      };
    }

    case "TICK": {
      if (state.phase !== "running") return state;
      return { ...state, elapsedMs: action.payload };
    }

    case "FINISH": {
      return { ...state, phase: "finished" };
    }

    case "RESET": {
      return {
        ...initialState,
        difficulty: state.difficulty,
        mode: state.mode,
      };
    }

    default:
      return state;
  }
}

export { initialState, typingReducer };
