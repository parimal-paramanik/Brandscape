import React from 'react'
import youtubeSvg from "../Assets/youtube.svg"
import userIcon from "../Assets/user.svg";
import youtubeIcon from "../Assets/youtubeIcon.svg";
import eyeIcon from "../Assets/eye.svg";
import mainVideoImg from "../Assets/mainVideo.jpg";
import video1Img from "../Assets/video1.jpg";
import video2Img from "../Assets/video2.jpg";
import video3Img from "../Assets/video3.jpg";

function YoutubeHomeSection() {
  return (
    <div className=' px-8 bg-slate-100 mt-10  pb-16'>

<div className='p-8' >
<div>
  <h1 className='flex items-start gap-5 text-5xl font-extrabold'>Brandscape is on <img src={youtubeSvg} loading='lazy'  className='w-48 h-14'/> </h1>
  <h3 className='text-xl text-gray-500 font-medium pt-2'>Learn to leverage AI tools and acquire AI skills to future-proof your life and business.</h3>
</div>

<div className='flex justify-between'>
   <div className='flex gap-10' >
      <div className='flex gap-3 items-center mt-6'>
        <img src={userIcon} loading='lazy' />
        <h1 className='flex flex-col '>
        <h1 className='text-xl font-medium'>222K</h1>
        <h2>Subscribers</h2>
        </h1>
      </div>
      <div className='flex gap-3 items-center mt-6'>
        <img src={youtubeIcon} loading='lazy'/>
        <h1 className='flex flex-col '>
        <h1 className='text-xl font-medium'>48</h1>
        <h2>Videos</h2>
        </h1>
      </div>
      <div className='flex gap-3 items-center mt-6'>
        <img src={eyeIcon} />
        <h1 className='flex flex-col '>
        <h1 className='text-xl font-medium'>8.3M</h1>
        <h2>Views</h2>
        </h1>
      </div>
   </div>

   <div>

   <button className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full'>Brandscape's youtube</button>

   </div>
</div>

</div>


{/* Video Content */}
<div className='flex gap-4 h-[551px]'>

<div className='w-[75%] h-full overflow-hidden'>
  <img src={mainVideoImg} className='rounded-lg hover:scale-110 h-full cursor-pointer transition-all duration-300 hover:rounded-lg' />

</div>
<div className='w-[25%] h-full flex flex-col gap-4 overflow-hidden'>
<div className='w-full overflow-hidden'><img src={video1Img} loading='lazy' className='rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 hover:rounded-lg' /></div>
<div className='w-full overflow-hidden'><img src={video2Img} loading='lazy' className='rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 hover:rounded-lg' /></div>
<div className='w-full overflow-hidden' ><img src={video3Img} loading='lazy' className='rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 hover:rounded-lg' /></div>


</div>

</div>
</div> 
  )
}

export default YoutubeHomeSection