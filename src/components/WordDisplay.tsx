import React from 'react';

interface WordDisplayProps {
  wordToGuess: string;
  guessedLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ wordToGuess, guessedLetters }) => {
  return (
    <div className="flex justify-center space-x-2 text-xl font-semibold">
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} className="text-[#13ABC4] text-xl font-bold">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
