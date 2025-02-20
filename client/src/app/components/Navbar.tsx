'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navbarLinks = [
  { href: '/', label: 'Account' },
  { href: '/', label: 'More Information' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-black p-4 fixed w-full top-0 left-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Links */}
        <div className="flex items-center space-x-4">
          <Link href={'/'} className="flex items-center space-x-2">
            <Image
              src="/p3.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-white text-xl font-bold">WAE</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navbarLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-white hover:text-gray-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Register + Login (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href={'/registrationfom'} className="text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">
            Register
          </Link>
          <Link href={'/button_login'} className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-400">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black p-4 space-y-2">
          {navbarLinks.map((link, index) => (
            <Link key={index} href={link.href} className="block text-white hover:text-gray-400">
              {link.label}
            </Link>
          ))}
          <Link href={'/registrationfom'} className="block text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400">
            Register
          </Link>
          <Link href={'/button_login'} className="block text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-400">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
