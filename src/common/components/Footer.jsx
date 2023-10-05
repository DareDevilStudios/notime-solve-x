import Image from 'next/image'
import React from 'react'

const Footer = () => (
    
<footer class="bg-gray-900 shadow h-32 justify-center items-center flex py-11 px-24">

  <div className='justify-center items-center flex gap-72'>

  <div class=" p-4 flex items-center justify-between">
      <span class="text-xs text-gray-600 sm:text-center font-bold font-poppins tracking-widest">© Copyright 2023 SOLVEX - All Rights Reserved
    </span>
    </div>

    <div>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li className='text-amber-500 text-lg'>
            <a href="#" class="mr-4 hover:underline md:mr-6 font-bold font-code track">NOTIME</a>
        </li>
    </ul>
    </div>
    
    <div className='w-[200px] justify-center items-center text-white'>
     button 
    </div>

  </div>  

</footer>


  )


export default Footer