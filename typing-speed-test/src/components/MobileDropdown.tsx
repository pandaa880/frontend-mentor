import { useEffect, useRef, useState } from "react";

import iconDownArrow from "../assets/images/icon-down-arrow.svg";

interface MobileDropdownProps<T extends string> {
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  disabled?: boolean;
}

function MobileDropdown<T extends string>({
  value,
  options,
  onChange,
  disabled,
}: MobileDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const currentLabel = options.find((o) => o.value === value)?.label ?? value;

  return (
    <div className="mobile-dropdown" ref={ref}>
      <button
        className="mobile-select-btn"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{currentLabel}</span>
        <img src={iconDownArrow} alt="" className="mobile-select-btn__icon" />
      </button>
      {isOpen && (
        <div className="mobile-dropdown__panel" role="listbox">
          {options.map((opt, i) => (
            <span key={opt.value}>
              {i > 0 && <div className="mobile-dropdown__divider" />}
              <button
                className="mobile-dropdown__item"
                role="option"
                aria-selected={opt.value === value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                <div
                  className={`mobile-dropdown__radio ${opt.value === value ? "mobile-dropdown__radio--active" : ""}`}
                >
                  {opt.value === value && <div className="mobile-dropdown__radio-dot" />}
                </div>
                <span>{opt.label}</span>
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export { MobileDropdown };
