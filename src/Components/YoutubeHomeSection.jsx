import React from 'react';
import youtubeSvg from "../Assets/youtube.svg";
import userIcon from "../Assets/user.svg";
import youtubeIcon from "../Assets/youtubeIcon.svg";
import eyeIcon from "../Assets/eye.svg";
import mainVideoImg from "../Assets/mainVideo.jpg";
import video1Img from "../Assets/video1.jpg";
import video2Img from "../Assets/video2.jpg";
import video3Img from "../Assets/video3.jpg";

function YoutubeHomeSection() {
  return (
    <div className='px-4 md:px-8 lg:px-16 bg-slate-100 mt-10 pb-16'>

      <div className='p-8'>
        <div>
          <h1 className='flex items-start gap-5 text-3xl md:text-5xl font-extrabold'>Blandscape is on <img src={youtubeSvg} loading='lazy' className='w-36 md:w-48 h-10 md:h-14'/> </h1>
          <h3 className='text-lg md:text-xl text-gray-500 font-medium pt-2'>Learn to leverage AI tools and acquire AI skills to future-proof your life and business.</h3>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
          <div className='flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mt-6'>
            <div className='flex gap-3 items-center'>
              <img src={userIcon} loading='lazy' />
              <div className='flex flex-col'>
                <h1 className='text-lg md:text-xl font-medium'>222K</h1>
                <h2>Subscribers</h2>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <img src={youtubeIcon} loading='lazy'/>
              <div className='flex flex-col'>
                <h1 className='text-lg md:text-xl font-medium'>48</h1>
                <h2>Videos</h2>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <img src={eyeIcon} />
              <div className='flex flex-col'>
                <h1 className='text-lg md:text-xl font-medium'>8.3M</h1>
                <h2>Views</h2>
              </div>
            </div>
          </div>
          <button className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full mt-4 md:mt-0'>Brandscape's youtube</button>
        </div>

      </div>

      {/* Video Content */}
      <div className='flex flex-col md:flex-row gap-4 h-auto md:h-[551px]'>
        <div className='w-full md:w-3/4 h-full overflow-hidden'>
          <img src={mainVideoImg} className='rounded-lg hover:scale-110 h-full w-full md:w-auto cursor-pointer transition-all duration-300 hover:rounded-lg' alt="Main Video" />
        </div>
        <div className='w-full md:w-1/4 flex flex-col gap-4 overflow-hidden'>
          <div className='w-full overflow-hidden'>
            <img src={video1Img} loading='lazy' className='rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 hover:rounded-lg w-full' alt="Video 1" />
          </div>
          <div className='w-full overflow-hidden'>
            <img src={video2Img} loading='lazy' className='rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 hover:rounded-lg w-full' alt="Video 2" />
          </div>
          <div className='w-full overflow-hidden'>
            <img src={video3Img} loading='lazy' className='rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 hover:rounded-lg w-full' alt="Video 3" />
          </div>
        </div>
      </div>
    </div> 
  );
}

export default YoutubeHomeSection;