import React from 'react'
import futurePediaLogo from "../Assets/futurepedia-light.svg"
import { FaLinkedinIn,FaTwitter, FaYoutube} from "react-icons/fa";



function Footer() {
  return (
    <div className='bg-[#0A0E23] px-16'>
      <div className= 'top-0 left-0 flex justify-between    h-[78vh] w-full text-white border-b  border-gray-300/10'>
        <div className=' pt-8 w-[25%]'>

        <img src={futurePediaLogo} loading='lazy' />
        <h5 className='pt-4 '>Advertiser Disclosure: Futurepedia.io is committed to rigorous editorial standards to provide our users with accurate and helpful content. To keep our site free, we may receive compensation when you click some links on our site.</h5>
        </div>
        <div className='pt-8 '>

        <h4 className='font-medium'>Categories</h4>
        <div className='flex flex-col text-gray-400 gap-6 text-sm pt-9'>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Productivity Tools</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Image Generators</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Text Generators</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Video Tools</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Art Generators</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Audio Generators</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>All Categories</h5>
        </div>
          
        </div>
        <div className='pt-8 '>

        <h4 className='font-medium'>Resources</h4>
        <div className='flex flex-col text-gray-400 gap-6 text-sm pt-9'>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Art Generators</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Image Generators</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Chatbots</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI Text Generators</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Best AI 3D Generators</h5>
        </div>
          
        </div>
        <div className='pt-8 '>

        <h4 className='font-medium'>Company</h4>
        <div className='flex flex-col gap-6 text-gray-400 text-sm pt-9'>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Contact Us</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Advertise</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Submit a Tool</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Request a Feature</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Update a Tool</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Create an account</h5>
          <h5 className='hover:text-white hover:underline hover:ring-offset-1 cursor-pointer'>Login</h5>
        </div>
          
        </div>
        <div className='pt-8 '>
        <button className='bg-blue-400 text-sm text-white px-12 py-2 hover:bg-blue-500 rounded-full'>Sign up for free</button>
         <div className='flex gap-4 justify-center mt-6'>
         <buton><FaLinkedinIn className="w-6 h-6 text-gray-400" /></buton>
          <buton><FaTwitter className="w-6 h-6 text-gray-400"/></buton>
          <buton><FaYoutube className="w-6 h-6 text-gray-400"/></buton>
         </div>
        </div>
      </div>

      <div className='flex text-xs text-gray-400  gap-6 h-16 items-center'>
        <p>© 2024 Futurepedia LLC. All rights reserved.</p>
        <p className='text-blue-500 font-medium hover:underline hover:ring-offset-1 cursor-pointer'>Privacy Policy</p>
        <p className='text-blue-500 font-medium hover:underline hover:ring-offset-1 cursor-pointer'>Terms of Service</p>
      </div>
    </div>
  )
}

export default Footer