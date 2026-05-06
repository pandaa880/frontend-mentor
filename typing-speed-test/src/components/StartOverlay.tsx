interface StartOverlayProps {
  onStart: () => void;
}

function StartOverlay({ onStart }: StartOverlayProps) {
  return (
    <div className="start-overlay">
      <button className="start-overlay__btn" onClick={onStart}>
        Start Test
      </button>
    </div>
  );
}

export { StartOverlay };
