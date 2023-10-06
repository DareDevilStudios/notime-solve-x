"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/icon.svg";
import video from "../../../../public/video.svg";
import leftImage from "../../../../public/Group.svg";
import rightImage from "../../../../public/Windows.svg";
// import behindImage from "../../../../public/Group-1.svg";
import DotHeading from "@/common/components/DotHeading";
import Link from "next/link";
import { useState } from "react";
import Common_Button from "@/common/components/Common_Button";

const HomePage = () => {
  const [showBook, setShowBook] = useState(true)
  const [showPostSolve, setShowPostSolve] = useState(false)
  const handleClick=()=>{
    setShowBook(false)
    setShowPostSolve(true)  
  }
  return (
    <div className="pt-[41px]">
      <h1 className="text-4xl font-[900] w-full text-center mb-[36px]">
        Welcome to{" "}
        <Image
          className="inline w-1/6"
          src={logo}
          width={200}
          height={200}
          alt={"solveX logo"}
        ></Image>{" "} by {" "}
        <span className="text-[#1BEFA0]">NOTIME</span>
      </h1>
      <h2 className="w-full text-xl text-center mb-[36px]">
        Code Together, Solve Together - Post,{" "}
        <span className="text-[#EEAA2B]">Solve</span>, and{" "}
        <span className="text-[#1BEFA0]">Learn</span>{" "}
      </h2>
      <p className="w-full text-center mb-[60px]">
        Join a vibrant community of coders, share your coding challenges, find
        expert solutions, and level up your skills together!
      </p>
      <div className="w-full">
        <div className="flex w-full justify-center gap-6 mb-[93px]">
          <Image src={leftImage}></Image>
          <div className="border-[3px] w-max border-[#262B30] rounded-2xl px-[22px] py-[24px] bg-[#0C0C0C]">
            <DotHeading></DotHeading>
            <Image className="pt-[13px]" src={video}></Image>
            {showBook && <div onClick={handleClick}>
              <Common_Button
                colour={"bg-[#1BEFA0]"}
                textcolour={"text-[#0C0C0C]"}
                >
                BOOK YOUR SLOT
              </Common_Button>
            <p className=" w-full text-center">
              <span className="text-[#1BEFA0]">99 Slots</span> Remaining! Hurry
              Up.
            </p>
            </div>}
            {showPostSolve && <div className="flex justify-around">
              <Link href="/solve-question">
                <Common_Button
                  colour={"bg-[#1BEFA0]"}
                  textcolour={"text-[#0C0C0C]"}
                >
                  SOLVE
                </Common_Button>
              </Link>
              <Link href="/post-question">
                <Common_Button
                  colour={"bg-[#EEAA2B]"}
                  textcolour={"text-[#0C0C0C]"}
                >
                  POST
                </Common_Button>
              </Link>
            </div>}
          </div>
          <Image src={rightImage}></Image>
        </div>
        {/* <Image src={behindImage}></Image> */}
      </div>
    </div>
  );
};

export default HomePage;
