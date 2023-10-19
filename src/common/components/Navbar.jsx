import Image from 'next/image'
import React from 'react'

const Navbar = () => (
    
<nav class="bg-gray-950 border-gray-200  justify-center items-center py-5 sticky top-0 z-50">

  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <div>
    <a href="https://flowbite.com/" class="flex items-center">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">
          <Image src="/icon.svg" alt="Solvex Logo" width={200} height={200} />
        </span>
    </a>
    </div>
    
    <div class="w-full md:block md:w-auto justify-center items-center py-1 px-3">
      <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-950 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-950">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white md:hover:text-blue-700 bg-blue-700 rounded md:bg-transparent  md:p-0 font-code font-medium">Notime</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-code font-medium">
            <span class="text-emerald-400 font-black">&lt;</span>
            <span class="text-white font-black mx-1
            ">Home</span>
            <span class="text-emerald-400 font-black">&gt;</span>
          </a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-code font-medium">Notifications</a>
        </li>
      </ul>
    </div>

    <div className='justify-start items-center flex mr'>
      <span className='text-white mr-2'>John</span>
      <Image src="/profile-pic.svg" className='rounded-full'  width={50} height={50}/>
    </div>

  </div>
</nav>

)


export default Navbar