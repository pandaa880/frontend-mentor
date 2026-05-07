import logoLarge from "../assets/images/logo-large.svg";
import logoSmall from "../assets/images/logo-small.svg";
import type { BestScore } from "../types";
import { PersonalBestBadge } from "./PersonalBestBadge";

interface HeaderProps {
  bestScore: BestScore | null;
}

function Header({ bestScore }: HeaderProps) {
  return (
    <header className="app-header">
      <picture className="header-logo-text">
        <source srcSet={logoLarge} media="(min-width: 768px)" />
        <img className="header-logo" src={logoSmall} alt="Typed" height="32" />
      </picture>
      <img className="header-logo-mobile header-logo" src={logoSmall} alt="Typed" height="32" />
      <PersonalBestBadge bestScore={bestScore} />
    </header>
  );
}

export { Header };
