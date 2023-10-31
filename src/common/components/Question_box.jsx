"use client";
import React from "react";
import Common_Button from "./Common_Button";
// import { useState } from "react";

const QuestionBox = ({ question,index }) => {
  // const [viewMoreClicked, setViewMoreClicked] = useState(false);
  // const handleClick=()=>{
  //   setViewMoreClicked(!viewMoreClicked)
  // }
  const truncatedQuery = question.Query.length > 80 ? `${question.Query.slice(0, 80)}...` : query;
  return (
    <div className="px-20 py-5 rounded-[12px] bg-[#0D1418] h-max">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-around w-10/12">
          <div className="flex flex-col gap-6">
            <h2 className="font-code text-2xl font-semibold tracking-[0.05em] text-left text-[#FFFCF9]">
              {question.Title}
            </h2>
            <p className="h-max">
            <span className="text-[#1BEFA0]  pt-8">Query {index+1} :</span>{" "}
              <span className="text-[#FFFCF9]">
                {truncatedQuery}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-12">
            <Common_Button
              textcolour="text-[#0C0C0C]"
              colour={"bg-[#EEAA2B]"}
              children={question.Cost+" COINS"}
            />
            <Common_Button
              textcolour="text-[#FFFCF9]"
              colour={"bg-[#262B30]"}
              children={"DUE ON "+question.Due}
            />
          </div>
        </div>
        <div className="flex flex-col justify-around w-max my-4">
          <Common_Button
            textcolour="text-[#0C0C0C]"
            colour={"bg-[#FFFCF9]"}
            children={"VIEW MORE"}
            // onClick={handleClick}
          />
          <Common_Button
            textcolour="text-[#0C0C0C]"
            colour={"bg-[#1BEFA0]"}
            children={"SOLVE QUERY"}
          />
        </div>
      </div>
      {/* <div className="flex flex-col gap-5">
        <div>
          <Common_Button
            textcolour="text-[#0C0C0C]"
            colour={"bg-[#FFFCF9]"}
            children={"VIEW MORE"}
          />
        </div>
        <div>
          <Common_Button
            textcolour="text-[#0C0C0C]"
            colour={"bg-[#1BEFA0]"}
            children={"SOLVE QUERY"}
          />
        </div>
      </div> */}
    </div>
  );
};

export default QuestionBox;
