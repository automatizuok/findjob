import { useState } from 'react';
import { jobTree } from '../data/jobTree';
import type { JobNode } from '../types/job';
import Circle from './Circle';

function JobFinder() {
  const [currentNode, setCurrentNode] = useState<JobNode>(jobTree);
  const [animating, setAnimating] = useState(false);

  const handleCircleClick = (nextNode: JobNode) => {
    if (animating) return;

    setAnimating(true);
    setTimeout(() => {
      setCurrentNode(nextNode);
      setAnimating(false);
    }, 300);
  };

  const handleRestart = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentNode(jobTree);
      setAnimating(false);
    }, 300);
  };

  const isAtStart = currentNode === jobTree;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          {currentNode.question}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 min-h-[400px]">
        {currentNode.options ? (
          currentNode.options.map((option, index) => (
            <Circle
              key={`${option.label}-${index}`}
              label={option.label}
              description={option.description}
              onClick={() => handleCircleClick(option)}
              index={index}
              total={currentNode.options?.length || 1}
              animating={animating}
            />
          ))
        ) : (
          <div className="text-center">
            <Circle
              label={currentNode.label}
              description={currentNode.description}
              onClick={() => {}}
              index={0}
              total={1}
              animating={false}
              isFinal={true}
            />
            <p className="text-white/70 text-lg mt-8 max-w-md mx-auto">
              This could be your perfect match! 🎉
            </p>
          </div>
        )}
      </div>

      {!isAtStart && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 ease-in-out border border-white/30 hover:border-white/60 hover:shadow-lg"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}

export default JobFinder;
