'use client'
import React from 'react';

const Home: React.FC = () => {

  const startGame = () => {
    window.location.href = '/game';
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]">
      <h1 className="text-4xl font-extrabold text-white mb-4">Jeu de Devine les Mots</h1>
      <button
        onClick={startGame}
        className="px-8 py-4 bg-[#0FC1A1] text-[#343434] rounded-br-lg rounded-tl-lg text-3xl font-semibold hover:scale-90 focus:outline-none transition duration-300"
      >
        Commencer le jeu
      </button>
    </div>
  );
};

export default Home;
