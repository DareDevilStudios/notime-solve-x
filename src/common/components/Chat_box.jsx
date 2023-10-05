import Image from "next/image";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import Common_Button from "./Common_Button";
import DotHeading from "./DotHeading";

const Chat_box = () => {
  return (
    <>
      <div className="bg-[#0D1418] w-full gap-4 ">
        <div className="">
          <DotHeading />
        </div>
        <div className="h-[60px] bg-black flex justify-between px-5">
          <div className="flex items-center gap-4">
            <Image
              className="h-[2.5rem]"
              src="/website_screenshots/person.png"
              alt="photo"
              width={35}
              height={10}
            />

            <div className="flex flex-col">
              <p className="text-white text-xl">Harold Das</p>
              <p className="text-white text-xs">@harold_das</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </div>
        <div className="h-full">
          <div className="w-[5rem] h-[1.5rem] bg-gray-800 rounded-xl text-white mx-auto my-auto pt-0.5 text-center text-xs ">
            Today
          </div>
          <div className="flex justify-end w-1/2">
            <Common_Button children="found a solution" colour="bg-[#1BEFA0]" />
          </div>
          <div className="w-[5rem] h-[2.5rem] mb-[1.5rem] bg-gray-800 rounded ml-[1rem] mt-[2.5rem]">
            <BsThreeDots className="fill-white w-[3rem] my-auto mx-auto h-[2.5rem]" />
          </div>
          <div className="flex items-center px-3 mt-[2.5] py-2 rounded-lg ">
            <input
              type="text"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-800  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="inline-flex justify-center  p-2  text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 absolute right-2"
            />
            <div className="w-[30px] h-[28px] bg-[#1BEFA0] rounded ml-[-2.6rem]">
              <BsFillSendFill className="text-white ml-2 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat_box;
