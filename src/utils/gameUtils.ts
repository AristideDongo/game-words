import { words } from "@/data/words";

// Retourne un objet contenant à la fois le mot et l'indice
export const generateRandomWord = (): { word: string; hint: string } => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return { word: words[randomIndex].word, hint: words[randomIndex].hint }; // Retourne le mot et l'indice
};

// Fonction pour vérifier la réponse
export const checkGuess = (word: string, guess: string): boolean => {
  return word.toLowerCase() === guess.toLowerCase(); // Comparaison insensible à la casse
};
