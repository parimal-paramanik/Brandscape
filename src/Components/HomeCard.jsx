import React from 'react'
import { FaStar } from "react-icons/fa6";
import CharliLaungeImg from "../Assets/CharliLaunge.png";
import { FaBookmark } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function HomeCard() {
  return (
    <div className='bg-white w-[308px] h-[338px] p-6 rounded-xl shadow-md'>
                <div className='flex gap-5 cursor-pointer'>
                <img src={CharliLaungeImg} loading='lazy' className='w-16 h-16 mb-4 border border-gray-500 rounded-lg p-2' />
                <div className='flex flex-col'>
                <h1 className='text-xl font-semibold hover:underline hover:ring-offset-1 '>Charlie Lounge</h1>
                <div className='flex items-center gap-2'><FaStar/><FaStar/><FaStar/><FaStar/>&#40; 0 &#41; </div>
                
                </div>
                </div>
                <div className='flex justify-between mb-4 items-center'>
                  <h1 className='text-lg font-medium '>Freemium</h1>
                  <h2 className='flex justify-center items-center gap-2 text-lg font-medium'>15 <FaBookmark  className='hover:text-blue-400 cursor-pointer'/></h2>
                </div>
                <div className='mb-4'>
                  <p className='text-gray-500 font-medium'>Enhance productivity and creativity with AI chatbots and elite...</p>
                </div>
                <div className='flex flex-wrap gap-x-5 mb-4'>
                  <p className='text-blue-500 hover:underline hover:ring-offset-1 cursor-pointer'>&#8917;Marketing</p>
                  <p className='text-blue-500 hover:underline hover:ring-offset-1 cursor-pointer'>&#8917;Education</p>
                  <p className='text-blue-500 hover:underline hover:ring-offset-1 cursor-pointer'>&#8917;Personal assistant</p>
                  

                </div>
                <div className='flex justify-end'>
                  <button className='flex justify-center items-center px-6 rounded-lg hover:bg-blue-500 hover:text-white gap-2 text-blue-500 py-2 border-2 border-blue-500'>Visit <FaArrowUpRightFromSquare/></button>
                </div>
            </div>
  )
}

export default HomeCard