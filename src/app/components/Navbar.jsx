'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-4xl font-bold text-white">
            Rightlabs
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About us
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/careers" className="text-white hover:text-gray-300 transition-colors">
              Careers
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 rounded-full bg-pink-100 text-black hover:bg-pink-200 transition-colors">
              CALL NOW
            </button>
            <button className="px-6 py-2 rounded-full bg-yellow-200 text-black hover:bg-yellow-300 transition-colors">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;