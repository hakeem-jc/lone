"use client";
import React, { FC, useState } from "react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 w-full border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="./" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                <span className="text-white">Lone</span>
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-4 justify-center items-center text-white">
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Products</li>
              <li className="hover:text-gray-300 cursor-pointer">Resources</li>
              <li className="hover:text-gray-300 cursor-pointer">Contacts</li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">About</a></li>
            <li><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">Products</a></li>
            <li><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">Resources</a></li>
            <li><a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">Contacts</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;