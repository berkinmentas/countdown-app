"use client";

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-14T07:25:00Z');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Hedef tarihe ulaşıldıysa zamanı sıfırla
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // İlk hesaplama

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-2">
          Uçuşa Kalan Süre
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sabiha Gökçen - Üsküp 14 Kasım 2024, 10:25
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-600">{timeLeft.days}</div>
            <div className="text-gray-600 mt-2">Gün</div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-600">{timeLeft.hours}</div>
            <div className="text-gray-600 mt-2">Saat</div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-600">{timeLeft.minutes}</div>
            <div className="text-gray-600 mt-2">Dakika</div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-600">{timeLeft.seconds}</div>
            <div className="text-gray-600 mt-2">Saniye</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
