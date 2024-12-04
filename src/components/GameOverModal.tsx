import React from 'react';

interface GameOverModalProps {
  isVisible: boolean;
  score: number;
  onClose: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ isVisible, score, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Jeu terminé</h2>
        <p className="text-xl text-center mt-4">Votre score: {score}</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Retour à l&apos;accueil
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
