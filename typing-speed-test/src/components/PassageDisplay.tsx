import type { CharStatus, Passage } from "../types";

interface PassageDisplayProps {
  passage: Passage | null;
  charStatuses?: CharStatus[];
  currentIndex?: number;
}

function PassageDisplay({ passage, charStatuses, currentIndex }: PassageDisplayProps) {
  if (!passage) return null;

  const hasFeedback = charStatuses && charStatuses.length > 0;

  return (
    <p className="passage">
      {[...passage.text].map((char, i) => {
        let className = "passage-char";

        if (hasFeedback) {
          if (i === currentIndex) {
            className += " passage-char--cursor";
          } else if (charStatuses![i] === "correct") {
            className += " passage-char--correct";
          } else if (charStatuses![i] === "incorrect") {
            className += " passage-char--incorrect";
          }
        }

        return (
          <span key={i} className={className}>
            {char}
          </span>
        );
      })}
    </p>
  );
}

export { PassageDisplay };
