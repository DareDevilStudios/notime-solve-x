import Image from "next/image";
import React from "react";
import { BsFillSendFill } from 'react-icons/bs';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {BsThreeDots} from 'react-icons/bs'

const Chat_box = () => {
  return (
    <>
    
    <div className= "w-[578px]  bg-[#0D1418] ">
    
     
      
      
      
  <div className="w-[575px] h-[60px] bg-black flex flex-row ">
  <Image
          className=" ml-5 h-[2.5rem] mt-3"
          src="/website_screenshots/person.png"
          alt="photo"
          width={35}
          height={10}
          
        /> 
          
        <p className= "text-white text-xl  ml-3  mt-2">Harold Das</p>
        <p className="text-white text-xs mt-[2rem] mx-[-6rem]  ">@harold_das</p>
        <BsThreeDotsVertical className=" w-[3rem] fill-white ml-[30rem]  mt-[1rem]"/>
      
  </div>
  <div className="w-[5rem] h-[1.5rem] bg-gray-800 mt-[12rem]  rounded-xl text-white mx-auto my-auto pt-0.5 text-center text-xs ">Today</div>
<div className="w-[25rem] h-[2.5rem] bg-[#1BEFA0] ml-[10rem] rounded-md mt-[2.5rem] pl-3 pt-2">Found a Solution!</div>
<div className="w-[5rem] h-[2.5rem] mb-[1.5rem] bg-gray-800 rounded ml-[1rem] mt-[2.5rem]">
<BsThreeDots className="fill-white w-[3rem] my-auto mx-auto h-[2.5rem]"/>
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
    </>
    
  );
};

export default Chat_box;
