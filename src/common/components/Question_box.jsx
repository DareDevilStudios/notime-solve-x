import React from "react";
import Common_Button from "./Common_Button";

const QuestionBox = () => {
  return (
    <div className="px-20 py-5 rounded-[12px] bg-[#0D1418]">
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-code text-2xl font-semibold tracking-[0.05em] text-left text-[#FFFCF9]'>
            STRING, PALINDROME
          </h2>
          <p>
            <span className="text-[#1BEFA0]  pt-8">Query 1 :</span>{" "}
            <span className="text-[#FFFCF9]">
              How do you determine if a string is a palindrome?{" "}
            </span>
          </p>
        </div>

        <div className='flex flex-col w-44 gap-3 my-4'>
          <Common_Button textcolour="text-[#0C0C0C]" colour={"bg-[#FFFCF9]"} children={"25 Coins"} />
          <Common_Button textcolour="text-[#0C0C0C]" colour={"bg-[#1BEFA0]"} children={"25 Coins"}/>
        </div>
      </div>
      <div className='flex flex-row gap-12'>
        <Common_Button textcolour="text-[#0C0C0C]" colour={"bg-[#EEAA2B]"} children={"25 COINS"} />

        <Common_Button
          textcolour="text-[#FFFCF9]"
          colour={"bg-[#262B30]"}
          children={"DUE ON 25 OCT"}
        />
      </div>

       
      </div>
      <div className="flex flex-col gap-5">
          <Common_Button
            textcolour="text-[#0C0C0C]"
            colour={"bg-[#FFFCF9]"}
            children={"VIEW MORE"}
          />
          <Common_Button
            textcolour="text-[#0C0C0C]"
            colour={"bg-[#1BEFA0]"}
            children={"SOLVE QUERY"}
          />
        </div>
    </div>
  );
};

export default QuestionBox;
