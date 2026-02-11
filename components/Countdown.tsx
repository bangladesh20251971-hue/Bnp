import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: February 12th of the current or next year
    const calculateTargetDate = () => {
      const now = new Date();
      let targetYear = now.getFullYear();
      let target = new Date(targetYear, 1, 12); // Month is 0-indexed, so 1 = Feb
      
      if (now.getTime() > target.getTime()) {
        // If Feb 12 has passed this year, target next year
        target = new Date(targetYear + 1, 1, 12);
      }
      return target;
    };

    const targetDate = calculateTargetDate();

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const translateNumber = (num: number) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => bengaliDigits[parseInt(digit)] || digit).join('');
  };

  return (
    <div className="flex gap-2 sm:gap-4 justify-center text-center mt-8">
      {[
        { label: 'দিন', value: timeLeft.days },
        { label: 'ঘণ্টা', value: timeLeft.hours },
        { label: 'মিনিট', value: timeLeft.minutes },
        { label: 'সেকেন্ড', value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white text-bnp-green font-bold text-2xl sm:text-4xl w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-lg shadow-inner border-2 border-bnp-green/20">
            {translateNumber(item.value)}
          </div>
          <span className="text-white text-xs sm:text-sm mt-2 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;