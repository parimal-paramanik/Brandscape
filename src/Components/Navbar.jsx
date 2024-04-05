import React from 'react'
import LogoImg from "../Assets/futurepedia-dark.svg";
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";


function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full bg-[#E1EFFA] px-8 py-4 flex justify-between items-center'>
        <div>
          <Link to="/" >  <img src={LogoImg} loading='lazy' className='w-[171px] h-[35px]' /></Link>

        </div>

        <div className='flex gap-8'>
            <Link className="hover:underline hover:underline-offset-1  hover:text-gray-500">AI Tool Categories</Link>
            <Link className="hover:underline hover:underline-offset-1  hover:text-gray-500">Deals</Link>
            <Link to="/submit-tool" className="hover:underline hover:underline-offset-1  hover:text-gray-500">Submit A Tool</Link>
            <Link className="hover:underline hover:underline-offset-1  hover:text-gray-500">Advertise</Link>
            <div className="relative inline-block group">
            <Link className="hover:underline hover:underline-offset-1 hover:text-gray-500">Resources</Link>
            <div className="absolute w-48 mr-92 hidden   bg-white rounded-lg shadow-lg group-hover:block">
                <Link to="/newsletter" className="block px-4 hover:underline hover:underline-offset-1  py-2 text-sm text-gray-800 hover:bg-gray-200">Newsletter</Link>
                <Link className="block px-4 hover:underline hover:underline-offset-1 py-2 text-sm text-gray-800 hover:bg-gray-200">AI Conferences</Link>
            </div>
        </div>

        </div>
        <div className='flex gap-8 items-center'>

            <button><FiSearch className='h-6 w-6  hover:text-blue-500 ' /></button>
            <Link>Login</Link>
            <button className='bg-blue-400 text-sm text-white px-4 py-3 hover:bg-blue-500 rounded-full'>Sign up for free</button>

        </div>
    </div>
  )
}

export default Navbar