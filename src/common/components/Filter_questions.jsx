import Image from 'next/image'
import React from 'react'

const Filter_questions = () => {
  return (
    <div className='bg-black h-[50px]'>

      <form>

        <div className="relative flex flex-row">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-2.5 h-4 text-gray-500 ml-4 mt-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" class=" mt-3 ml-5 block w-[150px] p-1 pl-6 text-[8px]     bg-white   bg-opacity-[7%] rounded " placeholder="Search" />
          <select className='ml-5 mt-3  w-[130px] p-1  text-[8px] text-white     bg-white   bg-opacity-[12%] rounded '>
            <option>HTML</option>
            <option>Tailwindcss</option>
            <option>Javascript</option>
            <option>flask</option>
            <option>React</option>
            <option>next</option>
          </select>
          <select className='ml-6 mt-3  w-[127px] p-1  text-[8px] text-white     bg-white   bg-opacity-[12%] rounded'>
            <option>25 Coins</option>
            <option>50 Coins</option>
            <option>75 Coins</option>
            <option>100 Coins</option>
          </select>

          <input
            type="date"
            id="date"
            class="mt-3 ml-6 block w-[135px] p-1 pl-6 text-[8px] text-white bg-white bg-opacity-[12%] rounded calendar-icon-white"
          />


        </div>
      </form>
    </div>
  )
}

export default Filter_questions