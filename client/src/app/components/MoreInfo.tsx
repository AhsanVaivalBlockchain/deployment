'use client';
import Link from 'next/link';
import React from 'react';

const MoreInfo = () => {
  const plans = [
    { price: 3500, profit: 150, referProfit: 50 },
    { price: 5000, profit: 220, referProfit: 80 },
    { price: 7500, profit: 310, referProfit: 100 },
    { price: 10000, profit: 420, referProfit: 130 },
    { price: 17500, profit: 510, referProfit: 160 },
    { price: 30000, profit: 720, referProfit: 250 },
    { price: 50000, profit: 1420, referProfit: 300 },
    { price: 100000, profit: 2500, referProfit: 400 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black  py-12 px-5 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-center text-3xl sm:text-6xl font-bold text-white mb-8">
          Daily Profit Plans
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-black rounded-full p-4 md:p-6 shadow-lg transform transition duration-500 hover:scale-105"
            >
              <div className="w-32 h-32 sm:w-32 sm:h-32 flex items-center justify-center bg-white rounded-full shadow-md">
                <p className="text-sm sm:text-lg text-gray-800 font-bold text-center">
                  ₨{plan.price.toLocaleString()}
                </p>
              </div>
              <p className="text-sm sm:text-lg text-white mt-4">Profit: ₨{plan.profit}</p>
              <p className="text-sm sm:text-lg text-yellow-300 mt-2">
                Refer Profit: ₨{plan.referProfit}
              </p>
              <Link
                href={'/registrationfom'}
                className="mt-4 bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
              >
                Deposit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
