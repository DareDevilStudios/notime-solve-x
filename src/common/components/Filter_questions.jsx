import Image from "next/image";
import React from "react";

const Filter_questions = () => {
  return (
    <div className="bg-black h-[4rem] my-8">
      <form className="w-full h-full flex items-center gap-12 justify-center">
        <div class="flex py-2 items-center justify-center gap-x-3  pointer-events-none bg-white bg-opacity-[12%] px-3 rounded-md">
          <svg
            class="w-2.5 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>

          <input
            type="search"
            id="default-search"
            class="w-[18rem] rounded bg-transparent"
            placeholder="Search"
          />
        </div>
        <select className="p-2.5 text-white w-[18rem] bg-white bg-opacity-[12%] rounded ">
          <option>HTML</option>
          <option>Tailwindcss</option>
          <option>Javascript</option>
          <option>flask</option>
          <option>React</option>
          <option>next</option>
        </select>
        <select className="px-3 py-2 w-[19rem] text-white     bg-white   bg-opacity-[12%] rounded">
          <option>25 Coins</option>
          <option>50 Coins</option>
          <option>75 Coins</option>
          <option>100 Coins</option>
        </select>

        <input
          type="date"
          id="date"
          class="block px-3 py-1 w-[19rem] text-white bg-white bg-opacity-[12%] rounded calendar-icon-white"
        />
      </form>
    </div>
  );
};

export default Filter_questions;
