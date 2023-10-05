import React from 'react';
import Common_Button from './Common_Button';


const QuestionBox = () => {

  return (
    <div className="px-20 py-5 rounded-[12px] bg-[#0D1418]">
      <div className='flex flex-row justify-between'>
        <div>
          <h2 className='font-code text-2xl font-semibold tracking-[0.05em] text-left text-[#FFFCF9]'>
            STRING, PALINDROME
          </h2>
          <p><span className='text-[#1BEFA0]  pt-8'>Query 1 :</span> <span className='text-[#FFFCF9]'>How do you determine if a string is a palindrome? </span></p>
        </div>

        <div className='flex flex-row'>
          <Common_Button />
          <Common_Button />
        </div>
      </div>
      <div className='flex flex-col'>
        <Common_Button textcolour="white" colour={"bg-[]"} children={""} />

        <Common_Button />
      </div>


    </div>
  );
};

export default QuestionBox;
