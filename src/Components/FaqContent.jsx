import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FaqContent = ({ question, answer }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleAnswer = () => {
    setShowContent(!showContent);
  };

  return (
    <div className='w-full px-8 bg-white'>
      <div className='pb-8 w-full mb-8 border-b border-gray-400/30'>
        <button onClick={toggleAnswer} className="w-full hover:underline hover:ring-offset-1 flex justify-between">
          <h2 className={`${showContent ? 'text-blue-500 font-medium hover:underline hover:ring-offset-1' : 'font-medium'}`}>{question}</h2>
          {showContent ? <IoIosArrowUp className="text-blue-500"/> : <IoIosArrowDown />}
        </button>
        {showContent && (
          <div>
            <p className='text-sm pt-4'>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqContent;