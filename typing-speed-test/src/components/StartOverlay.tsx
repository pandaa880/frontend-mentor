interface StartOverlayProps {
  onStart: () => void;
}

function StartOverlay({ onStart }: StartOverlayProps) {
  return (
    <div className="start-overlay">
      <button className="start-overlay__btn" onClick={onStart}>
        Start Typing Test
      </button>
      <p className="start-overlay__hint">Or click the text and start typing</p>
    </div>
  );
}

export { StartOverlay };
