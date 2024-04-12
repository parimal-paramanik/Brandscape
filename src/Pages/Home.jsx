import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdGrid } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import HomeCard from "../Components/HomeCard";
import YoutubeHomeSection from "../Components/YoutubeHomeSection";
import AiToolHomeCategory from "../Components/AiToolHomeCategory";

const Home = () => {
  const [filters, setFilters] = useState("featured");

  const handleSubmitFilter = (e) => {
    setFilters(e);
  };

  return (
    <div className="w-full bg-[#E1EFFA] mt-[75px] px-4 md:px-8">
      <div className="py-8">
        {/* hero section */}
        <div className="w-full pt-16 flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-6xl pb-2 font-extrabold text-center">
            Discover what AI can do for you
          </h1>
          <h3 className="text-sm sm:text-xl text-gray-500 font-semibold pb-10 text-center">
            We've helped 5M+ professionals learn to leverage AI by helping them
            find the best AI tools.
          </h3>
          <input
            type="text"
            placeholder="Enter a tool name or use case..."
            className="w-full max-w-md h-14 sm:h-24 rounded-full border-4 px-4 sm:px-8 font-medium text-base sm:text-lg focus:border-blue-200 border-gray-300 outline-none mb-4"
          />
          <button className="py-4 sm:py-5 bg-blue-400 text-white font-semibold text-base sm:text-lg px-4 sm:px-5 hover:bg-blue-500 rounded-full mb-4">
            Search AI Tools
          </button>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            <button className="px-3 sm:px-4 py-2 sm:py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500 text-sm sm:text-base">
              Marketing
            </button>
            <button className="px-3 sm:px-4 py-2 sm:py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500 text-sm sm:text-base">
              Productivity
            </button>
            <button className="px-3 sm:px-4 py-2 sm:py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500 text-sm sm:text-base">
              Design
            </button>
            <button className="px-3 sm:px-4 py-2 sm:py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500 text-sm sm:text-base">
              Video
            </button>
            <button className="px-3 sm:px-4 py-2 sm:py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500 text-sm sm:text-base">
              Research
            </button>
            <button className="px-3 sm:px-4 py-2 sm:py-3 hover:underline hover:ring-offset-1 bg-white rounded-full font-medium text-gray-500 text-sm sm:text-base">
              All Categories
            </button>
          </div>
        </div>

        {/* Filters and Card */}
        <div className="flex flex-col sm:flex-row justify-between item-center pb-8">
          <div className="flex gap-2 sm:gap-5 items-center justify-center sm:justify-start">
            {filters === "featured" ? (
              <button
                className="flex justify-center text-blue-500 items-center gap-2 text-base sm:text-xl font-semibold py-2 sm:py-4 px-4 sm:px-8 border-b-4 border-blue-500"
                onClick={() => handleSubmitFilter("featured")}
              >
                <HiArrowTrendingUp />
                Featured
              </button>
            ) : (
              <button
                className="flex justify-center items-center gap-2 text-base sm:text-xl font-semibold py-2 sm:py-4 px-4 sm:px-8 border-b-4 border-gray-500"
                onClick={() => handleSubmitFilter("featured")}
              >
                <HiArrowTrendingUp />
                Featured
              </button>
            )}
{filters === "popular" ? (
  <button
    className="flex justify-center items-center gap-2 text-base sm:text-xl font-semibold py-2 sm:py-4 px-4 sm:px-8 border-b-4 border-blue-500"
    onClick={() => handleSubmitFilter("popular")}
  >
    <FaStar />
    Popular
  </button>
) : (
  <button
    className="flex justify-center items-center gap-2 text-base sm:text-xl font-semibold py-2 sm:py-4 px-4 sm:px-8 border-b-4 border-gray-500"
    onClick={() => handleSubmitFilter("popular")}
  >
    <FaStar />
    Popular
  </button>
)}

{filters === "new" ? (
  <button
    className="flex justify-center items-center gap-2 text-base sm:text-xl font-semibold py-2 sm:py-4 px-4 sm:px-8 text-blue-500 border-b-4 border-blue-500"
    onClick={() => handleSubmitFilter("new")}
  >
    <BsStars />
    New
  </button>
) : (
  <button
    className="flex justify-center items-center gap-2 text-base sm:text-xl font-semibold py-2 sm:py-4 px-4 sm:px-8 border-b-4 border-gray-500"
    onClick={() => handleSubmitFilter("new")}
  >
    <BsStars />
    New
  </button>
)}
</div>

<div className="flex gap-2 sm:gap-5">
  <button className="flex px-4 sm:px-6 h-10 sm:h-12 text-base sm:text-lg justify-center items-center gap-2 border-2 border-gray-500 rounded-lg bg-white text-gray-900 hover:bg-gray-100">
    <FaAlignLeft />
    Filters
  </button>
  <button className="flex px-4 sm:px-6 h-10 sm:h-12 text-base sm:text-lg justify-center items-center gap-2 border-2 border-gray-500 rounded-lg bg-white text-gray-900 hover:bg-gray-100">
    <RiVerifiedBadgeFill />
    Verified
  </button>
  <button className="flex px-4 sm:px-6 h-10 sm:h-12 text-base sm:text-lg justify-center items-center gap-2 border-2 border-gray-500 rounded-lg bg-white text-gray-900 hover:bg-gray-100">
    <IoMdGrid />
    View
  </button>
</div>
</div>

{/* card Featured */}
<div>
{/* Featured */}
{filters === "featured" ? (
  <div className="w-full flex flex-wrap gap-4 sm:gap-8">
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </div>
) : filters === "popular" ? (
  <div className="w-full flex flex-wrap gap-4 sm:gap-8">
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </div>
) : filters === "new" ? (
  <div className="w-full flex flex-wrap gap-4 sm:gap-8">
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </div>
)
 : filters === "popular" ? (
  <div className="w-full flex flex-wrap gap-4 sm:gap-8">
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </div>
) : filters === "new" ? (
  <div className="w-full flex flex-wrap gap-4 sm:gap-8">
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </div>
) : (
  <div> </div>
)}

<div className="flex justify-center mt-8">
  <button className="px-4 py-2 hover:bg-blue-500 font-medium bg-blue-400 rounded-full text-white">
    See more
  </button>
</div>
</div>

{/* Feature pedia on youtube */}
</div>

<YoutubeHomeSection />

<AiToolHomeCategory />

<div className="bg-white p-8 pb-36 ">
<p className="text-xl text-gray-500 font-medium">
  Futurepedia is a leading AI resource platform, dedicated to empowering
  professionals across various industries to leverage AI technologies
  for innovation and growth. In our rapidly evolving technological
  landscape, AI tools are essential for advancement in areas like data
  analysis, customer relations, and strategic decision-making. Our
  platform offers comprehensive directories, easy-to-follow guides, a
  weekly newsletter, and an informative YouTube channel, simplifying AI
  integration into professional practices. Committed to making AI
  understandable and practical, we provide resources tailored to diverse
  professional needs, fostering a community where more than 200,000
  professionals share knowledge and experiences. Join us in shaping a
  future where AI is integral to work and innovation.
</p>
</div>

    </div>
  );
};

export default Home;
