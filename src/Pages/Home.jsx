import React, { useState } from 'react'
import { FaAlignLeft } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdGrid } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import HomeCard from '../Components/HomeCard';
import YoutubeHomeSection from '../Components/YoutubeHomeSection';
import AiToolHomeCategory from '../Components/AiToolHomeCategory';




const Home = () => {

  const [filters, setFilters] = useState("featured")

  const handleSubmitFilter = (e) => {
      setFilters(e)
  }
  

  return (
    <div className='w-full  bg-[#E1EFFA] mt-[75px]'>
      <div className='px-8 py-8'>
      {/* hero section */}
          <div className='w-full pt-16 flex flex-col justify-center items-center'>
              <h1 className='text-6xl pb-2  font-extrabold'>Discover what AI can do for you</h1>
              <h3 className='text-xl  text-gray-500 font-semibold pb-10'>We've helped 5M+ professionals learn to leverage AI by helping them find the best AI tools.</h3>
              <input type='text' placeholder='Enter a tool name or use case...' 
                className='w-[60%] h-24 rounded-full border-8 px-8 font-medium text-lg focus:border-8 focus:border-blue-200 border-gray-300 outline-none'
              /> <button className='relative  bottom-[82px] py-5 bg-blue-400 text-white font-semibold text-lg px-5 left-72 hover:bg-blue-500 rounded-full'>Search AI Tools</button>
              <div className='flex relative bottom-12 gap-4'>
                <button className='px-4 py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500'>Marketing</button>
                <button className='px-4 py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500'>Productivity</button>
                <button className='px-4 py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500'>Design</button>
                <button className='px-4 py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500'>Video</button>
                <button className='px-4 py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500'>Research</button>
                <button className='px-4 py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500'>All Categories</button>
              </div>
          </div>

      {/* Filters and Card */}

      <div className='flex justify-between item-center pb-8'>
        <div className='flex gap-5 items-center'>
          {
            filters === "featured" ? <button className='flex justify-center text-blue-500 items-center gap-2 text-xl font-semibold py-4 px-8 border-b-4 border-blue-500' onClick={()=> handleSubmitFilter("featured")}><HiArrowTrendingUp />Featured</button> :
            <button className='flex justify-center items-center gap-2 text-xl font-semibold py-4 px-8 border-b-4 border-gray-500' onClick={()=> handleSubmitFilter("featured")}><HiArrowTrendingUp />Featured</button>

          }

          {
            filters === "popular" ? <button className='flex justify-center items-center gap-2 text-blue-500 text-xl font-semibold py-4 px-8 border-b-4 border-blue-500' onClick={ ()=> handleSubmitFilter("popular")} ><FaStar />Popular</button> :
            <button className='flex justify-center items-center gap-2 text-xl font-semibold py-4 px-8 border-b-4 border-gray-500' onClick={ ()=> handleSubmitFilter("popular")} ><FaStar />Popular</button>

          }

          {
            filters === "new" ? <button className='flex justify-center items-center gap-2 text-xl font-semibold py-4 px-8 text-blue-500 border-b-4 border-blue-500' onClick={()=> handleSubmitFilter("new")}><BsStars/>New</button> :
            <button className='flex justify-center items-center gap-2 text-xl font-semibold py-4 px-8 border-b-4 border-gray-500' onClick={()=> handleSubmitFilter("new")}><BsStars/>New</button>

          }
          
          
        </div>

        <div className='flex gap-5'>
        <button className='flex px-4 h-12 text-lg justify-center items-center gap-2 border-2 border-gray-500 rounded-lg bg-white text-gray-900 hover:bg-gray-100' > <FaAlignLeft/>Filters</button>
        <button className='flex px-4 h-12 text-lg justify-center items-center gap-2 border-2 border-gray-500 rounded-lg bg-white text-gray-900 hover:bg-gray-100'><RiVerifiedBadgeFill/>Verified</button>
        <button className='flex px-4 h-12 text-lg justify-center items-center gap-2 border-2 border-gray-500 rounded-lg bg-white text-gray-900 hover:bg-gray-100'><IoMdGrid/>View</button>
        </div>

      </div>

      {/* card Featured */}
      <div>
        {/* Featured */}
        {
          filters === "featured" ? (<div className='w-full flex gap-4 flex-wrap'>
          <HomeCard />
        <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />

         
          </div>) : filters === "popular" ? (
            <div className='w-full flex gap-4 flex-wrap'>
          <HomeCard />
        <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />

          </div>
          ) : filters === "new" ? 
          (
            <div className='w-full flex gap-4 flex-wrap'>
          
        <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />
         <HomeCard />

          </div>
          ) : (<div> </div>)
        }
          

        
        <div className='flex justify-center mt-8'> <button className='px-4 py-2 hover:bg-blue-500 font-medium bg-blue-400 rounded-full text-white'>See more</button></div>

      </div>

      {/* Feature pedia on youtube */}

        

      </div>

        <YoutubeHomeSection />

       <AiToolHomeCategory />


       <div className='bg-white p-8 pb-36 '>
        <p className='text-xl text-gray-500 font-medium'>Futurepedia is a leading AI resource platform, dedicated to empowering professionals
         across various industries to leverage AI technologies for innovation and growth. In our 
         rapidly evolving technological landscape, AI tools are essential for advancement in areas 
         like data analysis, customer relations, and strategic decision-making. Our platform offers 
         comprehensive directories, easy-to-follow guides, a weekly newsletter, and an informative YouTube
          channel, simplifying AI integration into professional practices. Committed to making AI 
          understandable and practical, we provide resources tailored to diverse professional needs, 
          fostering a community where more than 200,000 professionals share knowledge and experiences. 
          Join us in shaping a future where AI is integral to work and innovation.</p>
       </div>
      
    </div>
  )
}

export default Home
