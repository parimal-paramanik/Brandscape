import React from "react";

function Deals() {
  return (
    <div className="flex flex-col justify-center items-center w-full m-2 mt-24">
      <div className="text-center m-4">
        <h1 className="text-5xl font-bold">
          Discounts, Deals & Sales on AI Tools
        </h1>
        <p className="text-2xl m-4 p-8">
          Dive into our curated list of extraordinary deals and discounts on AI
          tools. Whether you're a beginner or an expert, we've handpicked the
          best offers just for you. Upgrade your tech game without breaking the
          bank. Act fast – these deals won't last forever!
        </p>
      </div>
      <div className="cards m-4 p-8">
        <div className="card border-2 rounded-lg p-4 max-w-md">
          <div className="flex items-center mb-4">
            <img
              className="h-16 w-16 rounded-full"
              src=""
              alt="Deal Thumbnail"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">Fliki</p>
              <p>
                <span className="text-yellow-500">⭐</span> star
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm font-semibold">Active deal</p>
              <p className="text-gray-500">4047</p>
            </div>
          
          </div>
          <p className="text-xl font-semibold mb-2">
            Create videos from blog posts in 2 mins
          </p>
          <div className="text-sm text-gray-600 mb-4">
            #video generators #text to speech #audio editing
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Get Deal
            </button>
        </div>
      </div>
    </div>
  );
}

export default Deals;
