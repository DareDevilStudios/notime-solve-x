import DotHeading from '@/common/components/DotHeading'
import React from 'react'
import { IoCodeSlash } from 'react-icons/io5'
import { RiText } from 'react-icons/ri'
import { BiLink } from 'react-icons/bi'
import { BsImages } from 'react-icons/bs'
import Common_Button from '@/common/components/Common_Button'

const PostQuestion = () => {
  return (

    <div className="bg-black flex flex-col p-[4rem] text-white">
      <h1 className="text-3xl font-black">Post Your Coding <span className="text-[#1BEFA0]">Query</span></h1>
      <p className="pt-[1rem] text-xs">Submit your coding queries, specify your technology stack, and reward solvers with coins</p>
      <div className="flex flex-col pt-[3rem] gap-[2rem]">
        <DotHeading title="TITLE"/>
        <input type="text" className="bg-[#0D1418] text-xs p-3 rounded-lg border-2 border-gray-800 ..." placeholder="Enter your coding doubt here..."></input>
        <DotHeading title="DESCRIPTION"/>


        <div class="w-full mb-4 border-2 border-gray-800 rounded-lg bg-[#262B30]">
          <div class="flex items-center justify-between px-3 py-2 border-b">
            <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x">
              <div class="flex items-center space-x-8 sm:pr-4">
                <RiText className="fill-[#1BEFA0]" />
                <IoCodeSlash className="fill-white" />
                <BiLink className="fill-white" />
                <BsImages className="fill-white" />




              </div>

            </div>


          </div>
          <div class="px-4 py-2 bg-[#0D1418] rounded-b-lg">

            <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-[#0D1418] border-0" placeholder="Provide additional context or details about your doubt" required></textarea>
          </div>
        </div>
        <DotHeading title="LANGUAGE / TECH STACK"/>

        <select className="p-2.5 text-white w-[18rem]    bg-white   bg-opacity-[12%] rounded ">
          <option>HTML</option>
          <option>Tailwindcss</option>
          <option>Javascript</option>
          <option>flask</option>
          <option>React</option>
          <option>next</option>
        </select>
        <DotHeading title="DUE TIME"/>
        <input
          type="date"
          id="date"
          class="block px-3 py-1 w-[19rem] text-white bg-white bg-opacity-[12%] rounded calendar-icon-white"
        />
        <DotHeading title="REWARD YOUR SOLVER"/>


        <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />

      </div>
      <div className="pt-[3rem]">
        <Common_Button textcolour="text-[#0C0C0C]" colour={"bg-[#1BEFA0]"} children={"POST QUERY"} />
      </div>
    </div>

  )
}

export default PostQuestion