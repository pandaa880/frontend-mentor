import iconCompleted from "../assets/images/icon-completed.svg";

interface ResultHeaderProps {
  isNewBest: boolean;
  isFirstTest: boolean;
}

function ResultHeader({ isNewBest, isFirstTest }: ResultHeaderProps) {
  let title = "Test Complete";
  if (isFirstTest) title = "Baseline Established!";
  else if (isNewBest) title = "High Score Smashed!";

  return (
    <div className="result-header">
      <img src={iconCompleted} alt="" className="result-header__icon" />
      <h2 className="result-header__title">{title}</h2>
    </div>
  );
}

export { ResultHeader };
