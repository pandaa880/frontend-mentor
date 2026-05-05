import { useEffect } from "react";

import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { TypingArea } from "./components/TypingArea";
import { useBestScore } from "./hooks/useBestScore";
import { useTypingReducer } from "./hooks/useTypingReducer";
import { getRandomPassage } from "./utils/getRandomPassage";

function App() {
  const [state, dispatch] = useTypingReducer();
  const bestScore = useBestScore();

  useEffect(() => {
    const passage = getRandomPassage(state.difficulty);
    dispatch({ type: "SELECT_PASSAGE", payload: passage });
  }, [state.difficulty, dispatch]);

  const handleDifficultyChange = (difficulty: typeof state.difficulty) => {
    dispatch({ type: "SET_DIFFICULTY", payload: difficulty });
  };

  const handleModeChange = (mode: typeof state.mode) => {
    dispatch({ type: "SET_MODE", payload: mode });
  };

  const handleStart = () => {
    dispatch({ type: "START" });
  };

  const showControls = state.phase === "idle" || state.phase === "running";

  return (
    <div className="app">
      <Header bestScore={bestScore} />

      {showControls && (
        <Controls
          difficulty={state.difficulty}
          mode={state.mode}
          onDifficultyChange={handleDifficultyChange}
          onModeChange={handleModeChange}
          disabled={state.phase === "running"}
        />
      )}

      {state.phase !== "finished" && (
        <TypingArea
          phase={state.phase}
          passage={state.passage}
          charStatuses={state.charStatuses}
          currentIndex={state.currentIndex}
          onStart={handleStart}
        />
      )}

      {state.phase === "finished" && <div className="results-placeholder">Results</div>}
    </div>
  );
}

export default App;
