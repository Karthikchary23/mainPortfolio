"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect,useRef} from "react";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); 
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
  
      // Cleanup function to remove the event listener on unmount
      return () => document.removeEventListener("click", handleClickOutside);
    }, []); // Empty dependency array to run the effect only once
  
    return (
      <div>
        {/* Navbar */}
        <div className="bg-slate-700 h-16 flex items-center justify-between px-6 shadow-lg">
          <div className="flex items-center">
            <img
              src="https://imgs.search.brave.com/z_VIFwkXgP_XnMrY9dvqE7hImbCT5JWcPytnjF9HZFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NseS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDIv/c2hpbmNoYW4tcGhv/dG80My5qcGc"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white text-lg font-semibold ml-2">Karthik Chary</span>
          </div>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-blue-300 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition duration-200">
              About
            </Link>
            <Link href="/project" className="text-white hover:text-blue-300 transition duration-200">
              Projects
            </Link>
            <Link href="/certificate" className="text-white hover:text-blue-300 transition duration-200">
              Certificates
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition duration-200">
              Contact
            </Link>
            <Link href="/Karthik chary resume .pdf" className="text-white hover:text-blue-300 transition duration-200">
              Resume
            </Link>
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-slate-700 p-4`}
      >
        <Link href="/" className="block text-white hover:text-blue-300 transition duration-200">
          Home
        </Link>
        <Link href="/about" className="block text-white hover:text-blue-300 transition duration-200">
          About
        </Link>
        <Link href="/project" className="block text-white hover:text-blue-300 transition duration-200">
          Projects
        </Link>
        <Link href="/certificate" className="block text-white hover:text-blue-300 transition duration-200">
          Certificates
        </Link>
        <Link href="/contact" className="block text-white hover:text-blue-300 transition duration-200">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
