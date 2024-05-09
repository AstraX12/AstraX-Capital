"use client"
import React, { useState } from 'react';
import Image from "next/image"

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeNavbar = () => {
    setIsClick(false);
  };

  return (
    <nav className="bg-white fixed w-full z-10 top-0">
      <div className="max-w-8xl mx-auto px-4 flex sm:justify-around justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-black" onClick={closeNavbar}>
            <Image src="/astraXcapital.png" alt="logo" width={50} height={40} />
          </a>
          <h1 className="hidden sm:block text-3xl font-bold whitespace-nowrap dark:text-gray-700">AstraX Capital</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex space-x-4">
            <a href="/" className="text-black font-medium focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar} aria-current="page">
              Home
            </a>
            <a href="#about_us" className="text-black font-medium focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              About Us
            </a>
            <a href="#portfolio" className="text-black font-medium focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              Portfolio
            </a>
            <a href="#team" className="text-black font-medium focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              Team
            </a>
            <a href="#contact_us" className="text-black font-medium focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <button className="inline-flex p-4 rounded-md text-pink-900 md:text-black hover:text-pink-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
            {isClick ? (
              <svg className="h-8 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden text-center">
          <div className="px-5 pt-5 pb-9 space-y-2">
            <a href="#" className="text-gray-900 font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              HOME
            </a> 
            <a href="#about_us" className="text-gray-900 font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              ABOUT US
            </a>
            <a href="#portfolio" className="text-gray-900 font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              PORTFOLIO
            </a>
            <a href="#team" className="text-gray-900 font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              TEAM
            </a>
            <a href="#contact_us" className="text-gray-900 font-medium text-2xl leading-10 block transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-pink-500" onClick={closeNavbar}>
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
