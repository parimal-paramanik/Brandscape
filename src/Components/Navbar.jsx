import React, { useState } from 'react';
import LogoImg from "../Assets/futurepedia-dark.svg";
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='fixed z-50 top-0 left-0 w-full bg-[#E1EFFA] px-4 sm:px-8 py-4 flex justify-between items-center'>

      <div className='flex items-center'>
        <Link to="/">
          <img src={LogoImg} loading='lazy' className='w-[171px] h-[35px]' alt='Logo' />
        </Link>
      </div>

      {/* Search Bar */}
      <div className='flex items-center space-x-4 ml-auto'>
        <input type="text" placeholder="Search" className="px-2 py-1 border border-gray-400 rounded-md mr-4 sm:hidden" />
        <button className="block sm:hidden">
          <FiSearch className='h-6 w-6 text-gray-800 hover:text-blue-500' />
        </button>
      </div>

      {/* Hamburger Menu Icon */}
      <div className='flex items-center ml-4'>
        <button className="block sm:hidden" onClick={toggleMenu}>
          {showMenu ? <FiX className="h-6 w-6 text-gray-800" /> : <FiMenu className="h-6 w-6 text-gray-800" />}
        </button>
      </div>

      {/* Full-screen Overlay Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-end">
          <button className="absolute top-0 right-0 m-4" onClick={toggleMenu}>
            <FiX className="h-6 w-6 text-gray-800" />
          </button>
          <div className='flex flex-col items-start py-8 px-4 space-y-4'>
            <Link to="ai-tool" className="hover:underline hover:underline-offset-1 hover:text-gray-500">AI Tool Categories</Link>
            <Link to="/deals" className="hover:underline hover:underline-offset-1 hover:text-gray-500">Deals</Link>
            <Link to="/submit-tool" className="hover:underline hover:underline-offset-1 hover:text-gray-500">Submit A Tool</Link>
            <Link to="/advertise" className="hover:underline hover:underline-offset-1 hover:text-gray-500">Advertise</Link>
            <div className="relative inline-block group">
              <span className="hover:underline hover:underline-offset-1 hover:text-gray-500 cursor-pointer">Resources</span>
              <div className={`absolute left-0 w-48 mt-2 bg-white rounded-lg shadow-lg`}>
                <Link to="/newsletter" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900">Newsletter</Link>
                <Link to="/ai-conference" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900">AI Conferences</Link>
                <Link to="/videos" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 hover:text-gray-900">Videos</Link>
              </div>
            </div>
            <Link to="/login" className="hover:underline hover:underline-offset-1 hover:text-gray-500">Login</Link>
            <Link to="/signup" className="hover:underline hover:underline-offset-1 hover:text-gray-500">Sign Up</Link>
          </div>
        </div>
      )}
      {/* End of Full-screen Overlay Menu */}

    </div>
  );
}

export default Navbar;
