import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="flex flex-col md:flex-row">

        {/* Left Logo Part */}
        <div className="flex items-center justify-between bg-gray-200 px-6 py-3 md:w-1/2">
          <i className="fa-brands fa-staylinked text-4xl text-black" />
          
          {/* Hamburger (visible on mobile only) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
            </button>
          </div>
        </div>

        {/* Right Menu Part */}
        <div className="bg-black text-white px-6 py-3 md:w-1/2">
          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-around items-center font-medium">
            <li><Link to="/home" className="hover:text-amber-500 transition">Home</Link></li>
            <li><Link to="/skills" className="hover:text-amber-500 transition">Skills</Link></li>
            <li><Link to="/about" className="hover:text-amber-500 transition">About me</Link></li>
            <li>
              <Link
                to="/contact"
                className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <ul className="md:hidden flex flex-col space-y-3 mt-4 font-medium">
              <li><Link to="/home" onClick={() => setIsOpen(false)} className="hover:text-amber-500">Home</Link></li>
              <li><Link to="/skills" onClick={() => setIsOpen(false)} className="hover:text-amber-500">Skills</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-amber-500">About me</Link></li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
