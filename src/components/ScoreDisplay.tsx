import React from 'react';

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  return (
    <div className="mt-4 text-center">
      <p className="text-xl text-[#00FFD1] font-medium">Score: {score}</p>
    </div>
  );
};

export default ScoreDisplay;
