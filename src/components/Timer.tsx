import { useEffect, useState } from 'react';

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-2xl font-bold text-red-500">
      Temps restant: {timeLeft}s
    </div>
  );
};

export default Timer;
