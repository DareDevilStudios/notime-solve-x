import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/icon.svg"
import leftImage from "../../../../public/Group.svg"
import rightImage from "../../../../public/Windows.svg"
import behindImage from "../../../../public/Group-1.svg"
import DotHeading from '@/common/components/DotHeading'

const HomePage = () => {
  return (
    <div className=''>
        <h1 className='text-4xl font-[900] w-full text-center mb-[36px]'>Welcome to  by <Image className='inline w-1/6' src={logo} width={200} height={200} alt={"solveX logo"}></Image> <span className='text-[#1BEFA0]'>NOTIME</span></h1>
        <h2 className='w-full text-xl text-center'>Code Together, Solve Together - Post, <span className='text-[#EEAA2B]'>Solve</span>, and <span className='text-[#1BEFA0]'>Learn</span> </h2>
        <Image src={leftImage}></Image>
        <Image src={rightImage}></Image>
        <div className='border-[3px] border-[#]'>
          <DotHeading></DotHeading>
        </div>
        <Image src={behindImage}></Image>
    </div>
  )
}

export default HomePage