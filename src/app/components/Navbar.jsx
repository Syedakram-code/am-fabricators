"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm relative">
      {/* Logo */}
      <img
        src="/images/A.M.LOGO.png"
        alt="client logo"
        className="h-16 w-auto object-contain"
      />

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 font-semibold">
        <Link href="/" className="hover-primary-color">Home</Link>
        <Link href="/about" className="hover-primary-color">About</Link>
        <Link href="#" className="hover-primary-color">Projects</Link>
        <Link href="/contact" className="hover-primary-color">Contact Us</Link>
        <Link href="/quote" className="hover-primary-color">Get a Quote</Link>
      </nav>

      {/* Hamburger (mobile only) */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 primary-bg-color"></span>
        <span className="block w-6 h-0.5 primary-bg-color"></span>
        <span className="block w-6 h-0.5 primary-bg-color"></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-100 top-20 left-0 w-full bg-gray-200 primary-color shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover-primary-color">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover-primary-color">About</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="hover-primary-color">Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover-primary-color">Contact Us</Link>
          <Link href="/quote" onClick={() => setIsOpen(false)} className="hover-primary-color">Get a Quote</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
