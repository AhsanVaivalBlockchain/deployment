
'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Payments = () => {
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async () => {
    // Input validation
    if (!amount || isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const paymentData = {
        amount: Number(amount),
        env_id: process.env.NEXT_PUBLIC_EASYPAISA_ENV_ID,
      };

      const response = await axios.post(
        process.env.NEXT_PUBLIC_EASYPAISA_API_URL || '/api/payment',
        paymentData
      );

      if (response.data.success) {
        setSuccess('Payment initiated successfully. Follow the instructions sent to your mobile.');
        setAmount(0); // Reset amount after successful payment
      } else {
        setError('Payment initiation failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while processing your payment.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="p-8 max-w-md w-full bg-gray-800 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Easypaisa Payment
        </h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Amount (PKR)
            </label>
            <input
              type="number"
              value={amount || ''}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Enter amount"
              min="1"
              step="1"
              className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg 
                border border-gray-700 focus:border-green-500 focus:ring-2 
                focus:ring-green-500 focus:outline-none transition duration-200"
            />
          </div>

          <button
            onClick={handlePayment}
            disabled={isLoading || !amount}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg
              hover:bg-green-600 focus:outline-none focus:ring-2 
              focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800
              disabled:opacity-50 disabled:cursor-not-allowed
              transition duration-200 font-medium"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Pay Now'
            )}
          </button>

          {error && (
            <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg">
              <p className="text-red-500 text-center text-sm">{error}</p>
            </div>
          )}
          
          {success && (
            <div className="p-4 bg-green-900/50 border border-green-500 rounded-lg">
              <p className="text-green-500 text-center text-sm">{success}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;