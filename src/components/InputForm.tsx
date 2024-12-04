import React, { useState } from 'react';

interface InputFormProps {
  onGuess: (guess: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuess(guess);
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center space-x-2 mt-4">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Devinez le mot"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Deviner
      </button>
    </form>
  );
};

export default InputForm;
