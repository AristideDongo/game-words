import { useRouter } from 'next/router';

const Score: React.FC = () => {
  const router = useRouter();
  const { score } = router.query;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937]">
      <div className="text-center p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Jeu Terminé</h2>
        <p className="text-2xl text-gray-800">Votre score est : {score}</p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Rejouer
        </button>
      </div>
    </div>
  );
};

export default Score;
