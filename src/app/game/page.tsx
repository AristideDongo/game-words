'use client'
import { useState, useEffect } from 'react';
import WordDisplay from '@/components/WordDisplay';
import InputForm from '@/components/InputForm';
import Timer from '@/components/Timer';
import ScoreDisplay from '@/components/ScoreDisplay';
import GameOverModal from '@/components/GameOverModal';
import { generateRandomWord, checkGuess } from '@/utils/gameUtils';

const Game: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [hint, setHint] = useState<string>(''); // Ajout de l'état pour l'indice
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(10);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(180);

  useEffect(() => {
    const { word, hint } = generateRandomWord(); // Récupère aussi l'indice
    setWordToGuess(word);
    setHint(hint); // Mets l'indice dans l'état
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      setIsGameOver(true);
      return;
    }

    if (!isGameOver) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Nettoie l'intervalle lorsqu'il n'est plus nécessaire
    }
  }, [timer, isGameOver]);

  const handleGuess = (guess: string) => {
    if (checkGuess(wordToGuess, guess)) {
      setScore(score + 1);
    }
    setGuessedLetters([...guessedLetters, guess]);
    setAttemptsLeft(attemptsLeft - 1);

    if (attemptsLeft <= 1) {
      setIsGameOver(true);
    } else {
      // Si le mot est deviné ou un essai est fait, passe au mot suivant
      const { word, hint } = generateRandomWord();
      setWordToGuess(word);
      setHint(hint);
      setGuessedLetters([]);
      setAttemptsLeft(10); // Réinitialise le nombre d'essais
    }
  };

  const handleTimeUp = () => {
    setIsGameOver(true);
  };

  const restartGame = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] flex flex-col items-center py-10">
      <h1 className="text-[60px] mt-20 text-[#E8D3FF] font-bold text-center mb-4">Devine le mot !</h1>
      
      <Timer initialTime={timer} onTimeUp={handleTimeUp} />
      
      <WordDisplay wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      
      <p className="mt-4 text-[25px] text-center text-[#EBFFFB]">Indice: {hint}</p>
      
      <ScoreDisplay score={score} />
      
      <InputForm onGuess={handleGuess} />
      
      <GameOverModal isVisible={isGameOver} score={score} onClose={restartGame} />
    </div>
  );
};

export default Game;