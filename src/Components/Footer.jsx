
import React from 'react';
import futurePediaLogo from "../Assets/futurepedia-light.svg";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#0A0E23]'>
      <div className='container mx-auto px-4 md:px-16'>
        <div className='flex flex-col md:flex-row justify-between w-full text-white border-b border-gray-300/10 py-8'>
          <div className='md:w-[25%]'>
            <img src={futurePediaLogo} alt="Futurepedia Logo" loading='lazy' />
            <h5 className='pt-4 text-sm md:text-base'>Advertiser Disclosure: Futurepedia.io is committed to rigorous editorial standards to provide our users with accurate and helpful content. To keep our site free, we may receive compensation when you click some links on our site.</h5>
          </div>

          <div className='py-8'>
            <h4 className='font-medium'>Categories</h4>
            <div className='flex flex-col text-gray-400 gap-4 md:gap-6 text-sm md:text-base pt-4 md:pt-9'>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Productivity Tools</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Image Generators</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Text Generators</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Video Tools</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Art Generators</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Audio Generators</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>All Categories</h5>
            </div>
          </div>

          <div className='py-8'>
            <h4 className='font-medium'>Resources</h4>
            <div className='flex flex-col text-gray-400 gap-4 md:gap-6 text-sm md:text-base pt-4 md:pt-9'>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Art Generators</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Image Generators</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Chatbots</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Text Generators</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI 3D Generators</h5>
            </div>
          </div>

          <div className='py-8'>
            <h4 className='font-medium'>Company</h4>
            <div className='flex flex-col gap-4 md:gap-6 text-gray-400 text-sm md:text-base pt-4 md:pt-9'>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Contact Us</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Advertise</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Submit a Tool</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Request a Feature</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Update a Tool</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Create an account</h5>
              <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Login</h5>
            </div>
          </div>

          <div className='py-8'>
            <button className='bg-blue-400 text-sm md:text-base text-white px-8 md:px-12 py-2 hover:bg-blue-500 rounded-full mb-6 md:mb-0 md:mt-6'>Sign up for free</button>
            <div className='flex justify-center gap-4'>
              <button><FaLinkedinIn className="w-6 h-6 text-gray-400" /></button>
              <button><FaTwitter className="w-6 h-6 text-gray-400" /></button>
              <button><FaYoutube className="w-6 h-6 text-gray-400" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-16 flex justify-center md:justify-start text-xs text-gray-400 gap-6 h-16 items-center'>
        <p>© 2024 Futurepedia LLC. All rights reserved.</p>
        <p className='text-blue-500 font-medium hover:underline hover:ring-offset-1 cursor-pointer'>Privacy Policy</p>
        <p className='text-blue-500 font-medium hover:underline hover:ring-offset-1 cursor-pointer'>Terms of Service</p>
      </div>
    </div>
  );
}

export default Footer;