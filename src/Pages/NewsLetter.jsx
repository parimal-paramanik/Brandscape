import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="flex justify-center w-full m-2 mt-24">
        <div className="text-center">
          <p className="text-5xl font-bold">Newsletter Archive</p>
          <p className="text-lg">
            Read all the past newsletters I have sent here.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap px-60">
        <div className="bg-gray-300 h-96 w-96 m-2 p-2 rounded-lg relative">
          <div className="absolute bottom-0 left-0 m-2 p-2">
            <div className="text-start">
              <p>date</p>
            </div>
            <div className="text-start">
              <p className="font-bold">title</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-96 w-96 m-2 p-2 rounded-lg relative">
          <div className="absolute bottom-0 left-0 m-2 p-2">
            <div className="text-start">
              <p>date</p>
            </div>
            <div className="text-start">
              <p className="font-bold">title</p>
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-300 h-96 w-96 m-2 p-2 rounded-lg relative">
          <div className="absolute bottom-0 left-0 m-2 p-2">
            <div className="text-start">
              <p>date</p>
            </div>
            <div className="text-start">
              <p className="font-bold">title</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-96 w-96 m-2 p-2 rounded-lg relative">
          <div className="absolute bottom-0 left-0 m-2 p-2">
            <div className="text-start">
              <p>date</p>
            </div>
            <div className="text-start">
              <p className="font-bold">title</p>
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-300 h-96 w-96 m-2 p-2 rounded-lg relative">
          <div className="absolute bottom-0 left-0 m-2 p-2">
            <div className="text-start">
              <p>date</p>
            </div>
            <div className="text-start">
              <p className="font-bold">title</p>
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-300 h-96 w-96 m-2 p-2 rounded-lg relative">
          <div className="absolute bottom-0 left-0 m-2 p-2">
            <div className="text-start">
              <p>date</p>
            </div>
            <div className="text-start">
              <p className="font-bold">title</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
