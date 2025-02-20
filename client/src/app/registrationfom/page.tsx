'use client';
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  // Password validation function
  const validatePassword = (password: string) => {
    const minLength = /.{8,}/; // At least 8 characters
    const hasNumber = /[0-9]/; // At least one number
    const hasUpper = /[A-Z]/; // At least one uppercase letter
    const hasLower = /[a-z]/; // At least one lowercase letter
    const hasSpecial = /[@!#?$%^&*]/; // At least one special character

    if (!minLength.test(password)) return 'Password must be at least 8 characters.';
    if (!hasNumber.test(password)) return 'Password must include at least one number.';
    if (!hasUpper.test(password)) return 'Password must include at least one uppercase letter.';
    if (!hasLower.test(password)) return 'Password must include at least one lowercase letter.';
    if (!hasSpecial.test(password)) return 'Password must include at least one special character (@,!,#, etc.).';
    
    return '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setPasswordError('');

    const validationError = validatePassword(password);
    if (validationError) {
      setPasswordError(validationError);
      setLoading(false);
      return;
    }

    try {
      // Fixed the URL by removing the extra slash
      const response = await axios.post('https://watch-and-earn-j4hl-rouge.vercel.app/employee/register', {
        name,
        email,
        password,
      });
      setMessage('Registration successful!');
      console.log(response.data);

      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');

      // Redirect to login page
      setTimeout(() => {
        window.location.href = '/login_route';
      }, 1500);
    } catch (error) {
      setMessage('Registration failed. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-white">Register</h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && (
          <p className="text-center mt-4 text-sm text-white">{message}</p>
        )}

        {/* Already have an account? */}
        <div className="text-sm text-center mt-4 text-white">
          <p>
            Already have an account?{' '}
            <a
              href="/login_route"
              className="text-indigo-500 hover:text-indigo-400 font-semibold"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
