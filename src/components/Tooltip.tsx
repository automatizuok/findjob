import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  description: string;
}

function Tooltip({ description }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
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
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 animate-in fade-in duration-200">
          <div className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-lg shadow-2xl whitespace-nowrap text-sm font-medium max-w-xs">
            {description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
              <div className="border-4 border-transparent border-t-white/95" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
