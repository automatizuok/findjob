import { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  description: string;
}

function Tooltip({ description }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isVisible && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top - 10, // Position above the button with some spacing
        left: rect.left + rect.width / 2, // Center horizontally on the button
      });
    }
  }, [isVisible]);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation();
          setIsVisible(!isVisible);
        }}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="ml-2 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
        aria-label="Learn more about this option"
      >
        <HelpCircle size={16} className="text-white/70 hover:text-white" />
      </button>

      {isVisible && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="px-4 py-3 bg-white/95 backdrop-blur-sm text-gray-900 rounded-lg shadow-2xl border border-white/20 text-sm font-medium max-w-xs leading-relaxed break-words whitespace-normal">
            {description}
            {/* Tooltip arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <div className="border-4 border-transparent border-t-white/95" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
