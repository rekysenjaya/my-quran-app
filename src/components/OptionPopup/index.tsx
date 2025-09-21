import React, { useState, useRef, useEffect, memo } from 'react';
import ImageMode from '../ImageMode';

interface OptionItem {
  label: string | number;
  value: string | number;
  icon?: React.ReactNode;
}

interface OptionProps {
  placeholder: string;
  options: OptionItem[];
  onSelect: (selected: OptionItem) => void;
}

const OptionPopup: React.FC<OptionProps> = memo(({ placeholder, options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValeu] = useState<OptionItem>();
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const [popupMaxHeight, setPopupMaxHeight] = useState<string>('300px');

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePopup = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const distanceToBottom = viewportHeight - rect.bottom;

      // Atur posisi popup (left atau right)
      const distanceToRight = viewportWidth - rect.right;
      const distanceToLeft = rect.left;

      if (distanceToRight < 150 && distanceToLeft > 150) {
        setPosition('left');
      } else {
        setPosition('right');
      }

      // Atur maxHeight agar popup tidak overflow viewport
      const padding = 20; // jarak aman dari bawah viewport
      const maxHeight = Math.max(distanceToBottom - padding, 100); // minimum 100px
      setPopupMaxHeight(`${maxHeight}px`);

      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={togglePopup}
        className={`p-1 px-4 border rounded-xl flex items-center gap-2 capitalize hover:border-sky-500 ${isOpen ? 'border-sky-500' : ''} ${value?.label ? '' : 'text-gray-500 dark:text-gray-400'}`}
      >
        {value ? value.label : placeholder}
        <div
          className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : ''
            }`}
        >
          <ImageMode type="arrow" />
        </div>
      </button>

      {isOpen && (
        <div
          ref={popupRef}
          className={`absolute z-50 mt-2 w-44 origin-top ${position === 'right' ? 'left-0' : 'right-0'
            } rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 animate-fade-in overflow-auto`}
          style={{ maxHeight: popupMaxHeight }}
        >
          <div className="py-1">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                  setValeu(option)
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
});

OptionPopup.displayName = "OptionPopup";

export default OptionPopup;
