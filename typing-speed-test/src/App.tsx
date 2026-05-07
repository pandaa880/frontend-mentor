import { useEffect, useMemo } from "react";

import { Confetti } from "./components/Confetti";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { ResultsPanel } from "./components/ResultsPanel";
import { TypingArea } from "./components/TypingArea";
import { useBestScore } from "./hooks/useBestScore";
import { useKeyboard } from "./hooks/useKeyboard";
import { useStats } from "./hooks/useStats";
import { useTimer } from "./hooks/useTimer";
import { useTypingReducer } from "./hooks/useTypingReducer";
import { getRandomPassage } from "./utils/getRandomPassage";

const TIMED_DURATION_MS = 60000;

function App() {
  const [state, dispatch] = useTypingReducer();
  const { bestScore, saveScore, isFirstTest } = useBestScore();

  const stats = useStats(state.correctKeystrokes, state.incorrectKeystrokes, state.elapsedMs);

  useEffect(() => {
    const passage = getRandomPassage(state.difficulty);
    dispatch({ type: "SELECT_PASSAGE", payload: passage });
  }, [state.difficulty, dispatch]);

  useKeyboard(state.phase, state.currentIndex, state.passage?.text.length ?? 0, dispatch);
  useTimer(state.phase, state.startedAt, dispatch);

  useEffect(() => {
    if (state.phase !== "running" || !state.passage) return;

    const passageComplete = state.currentIndex >= state.passage.text.length;
    const timedExpired = state.mode === "timed" && state.elapsedMs >= TIMED_DURATION_MS;

    if (passageComplete || timedExpired) {
      dispatch({ type: "FINISH" });
    }
  }, [state.phase, state.currentIndex, state.passage, state.mode, state.elapsedMs, dispatch]);

  const isNewBest = useMemo(() => {
    if (state.phase !== "finished") return false;
    return !isFirstTest && bestScore ? stats.wpm > bestScore.wpm : false;
  }, [state.phase, isFirstTest, stats.wpm, bestScore]);

  useEffect(() => {
    if (state.phase !== "finished") return;

    if (isFirstTest || isNewBest) {
      saveScore({
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        correctChars: state.correctKeystrokes,
        incorrectChars: state.incorrectKeystrokes,
        difficulty: state.difficulty,
        mode: state.mode,
        date: new Date().toISOString(),
      });
    }
  }, [
    state.phase,
    state.correctKeystrokes,
    state.incorrectKeystrokes,
    state.difficulty,
    state.mode,
    isFirstTest,
    isNewBest,
    stats.wpm,
    stats.accuracy,
    saveScore,
  ]);

  const handleDifficultyChange = (difficulty: typeof state.difficulty) => {
    dispatch({ type: "SET_DIFFICULTY", payload: difficulty });
  };

  const handleModeChange = (mode: typeof state.mode) => {
    dispatch({ type: "SET_MODE", payload: mode });
  };

  const handleStart = () => {
    dispatch({ type: "START" });
  };

  const handleRestart = () => {
    dispatch({ type: "RESET" });
    const passage = getRandomPassage(state.difficulty);
    dispatch({ type: "SELECT_PASSAGE", payload: passage });
  };

  const showControls = state.phase === "idle" || state.phase === "running";

  return (
    <div className="app">
      <div className="app-inner">
        <Header bestScore={bestScore} />

        {showControls && (
          <Controls
            difficulty={state.difficulty}
            mode={state.mode}
            wpm={stats.wpm}
            accuracy={stats.accuracy}
            elapsedMs={state.elapsedMs}
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

        {state.phase === "finished" && (
          <ResultsPanel
            wpm={stats.wpm}
            accuracy={stats.accuracy}
            correctChars={state.correctKeystrokes}
            incorrectChars={state.incorrectKeystrokes}
            isNewBest={isNewBest}
            isFirstTest={isFirstTest}
            onRestart={handleRestart}
          />
        )}

        <Confetti show={state.phase === "finished" && isNewBest} />
      </div>
    </div>
  );
}

export default App;
