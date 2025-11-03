import { useEffect, useState } from 'react';
import Tooltip from './Tooltip';

interface CircleProps {
  label: string;
  onClick: () => void;
  index: number;
  total: number;
  animating: boolean;
  description?: string;
  isFinal?: boolean;
}

const gradients = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-yellow-500 to-orange-500',
  'from-pink-500 to-rose-500',
  'from-indigo-500 to-purple-500',
  'from-teal-500 to-green-500',
];

function Circle({ label, onClick, index, total, animating, description, isFinal = false }: CircleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), index * 100);
  }, [index]);

  const gradient = gradients[index % gradients.length];
  const size = isFinal ? 'w-64 h-64 md:w-80 md:h-80' : total === 1 ? 'w-56 h-56 md:w-64 md:h-64' : total === 2 ? 'w-48 h-48 md:w-56 md:h-56' : 'w-40 h-40 md:w-48 md:h-48';

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isFinal}
      className={`
        ${size}
        rounded-full
        bg-gradient-to-br ${gradient}
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        ${animating ? 'opacity-0 scale-50' : ''}
        ${isHovered && !isFinal ? 'scale-110 shadow-2xl' : 'shadow-xl'}
        ${isFinal ? 'cursor-default' : 'cursor-pointer hover:brightness-110'}
        relative
        overflow-hidden
      `}
      style={{
        boxShadow: isHovered && !isFinal
          ? `0 0 60px rgba(255, 255, 255, 0.4), 0 0 100px ${getGlowColor(gradient)}`
          : `0 0 30px ${getGlowColor(gradient)}`,
      }}
    >
      <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
      <div className="flex items-center justify-center z-10 px-4">
        <span className="text-white text-xl md:text-2xl font-bold text-center leading-tight">
          {label}
        </span>
        {description && <Tooltip description={description} />}
      </div>
    </button>
  );
}

function getGlowColor(gradient: string): string {
  const colorMap: Record<string, string> = {
    'from-purple-500 to-pink-500': 'rgba(168, 85, 247, 0.4)',
    'from-blue-500 to-cyan-500': 'rgba(59, 130, 246, 0.4)',
    'from-green-500 to-emerald-500': 'rgba(34, 197, 94, 0.4)',
    'from-orange-500 to-red-500': 'rgba(249, 115, 22, 0.4)',
    'from-yellow-500 to-orange-500': 'rgba(234, 179, 8, 0.4)',
    'from-pink-500 to-rose-500': 'rgba(236, 72, 153, 0.4)',
    'from-indigo-500 to-purple-500': 'rgba(99, 102, 241, 0.4)',
    'from-teal-500 to-green-500': 'rgba(20, 184, 166, 0.4)',
  };
  return colorMap[gradient] || 'rgba(255, 255, 255, 0.4)';
}

export default Circle;
