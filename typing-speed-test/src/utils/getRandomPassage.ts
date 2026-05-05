import passageData from "../data.json";
import type { Difficulty, Passage, PassageData } from "../types";

function getRandomPassage(difficulty: Difficulty): Passage {
  const data = passageData as PassageData;
  const passages = data[difficulty];
  if (!passages || passages.length === 0) {
    throw new Error(`No passages found for difficulty: ${difficulty}`);
  }
  return passages[Math.floor(Math.random() * passages.length)]!;
}

export { getRandomPassage };
