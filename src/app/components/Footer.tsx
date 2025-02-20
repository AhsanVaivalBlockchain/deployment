'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center  flex flex-col items-center space-y-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Join 10,000+ People! 
        </h1>
        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-white-300 max-w-3xl leading-relaxed">
          With just a little investment, you can start making money and secure your future.  
          Don't miss out—take the first step today and watch your earnings grow!
        </p>
        <footer className=" text-center p-4 text-white mt-4">
          © {new Date().getFullYear()} Your Watch And Earn. All rights reserved.
          </footer>
        {/* Button */}
        <Link href="/registrationfom">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 text-base sm:text-lg font-semibold">
            GET STARTED
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
