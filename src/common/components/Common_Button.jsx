import Image from 'next/image'
import React from 'react'


const Common_Button = ({textcolour,colour,children}) => {
  return (
    <div>
        {/* <h1>Common_Button</h1> */}
        {/* <Image src="/website_screenshots/common_button.png" alt="Next.js" width={200} height={160} /> */}
        {/* <div className="mt-[10px] bg-black h-[40px] w-[200px]">
        <button className={`h-[27px] w-[180px] rounded-sm font-inter m-[6px] text-xs font-bold
                bg-[#1BEFA0] text-black`}>BETA TEST</button></div> */}
        <button className={`w-full ${colour} py-1 px-10 my-4 h-9 rounded-md font-semibold ${textcolour} shadow-inner`}>{children}</button>
        {/* <button type={type? type : "button"} varient={varient} className={className? `btn-component ${className}`: "btn-component" } id={id} onClick={onClick}>{children}</button> */}
        
    </div>
  )
}

export default Common_Button