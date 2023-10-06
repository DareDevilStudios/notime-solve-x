import Chat_box from "@/common/components/Chat_box";
import Common_Button from "@/common/components/Common_Button";
import Disclaimer from "@/common/components/Disclaimer";
import Image from "next/image";
import React from "react";

const Individual = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black flex flex-row">
        <div className="flex flex-col w-1/2 p-8 justify-between">
          <div className="flex flex-col">
            <div className="mb-9">
              <h1 className="text-4xl font-black text-[#1BEFA0] mb-4">
                Query 1
              </h1>
              <h1>
                Delete the node at a given position in a linked list and return
                a reference to the head node. The head is at position 0. The
                list may be empty after you delete the node. In that case,
                return a null value.
              </h1>
            </div>
            <div className="flex gap-4 items-center">
              <h1>Posted by @haroldas</h1>
              <Image
                src={"/website_screenshots/person.png"}
                width={35}
                height={35}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="">
              <Common_Button
                children="TECH STACK/LANGUAGE: C++ 11"
                colour="bg-[#262B30]"
              />
            </div>
            <div className="flex flex-row justify-between gap-4">
              <Common_Button children="25 coins" colour="bg-[#EEAA2B]" />
              <Common_Button children=" due on oct 25 " colour="bg-[#262B30]" />
            </div>
            <div>
              <Common_Button
                children="sent request to solve"
                colour="bg-[#1BEFA0]"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-80">
          <Chat_box />
        </div>
      </div>
      <Disclaimer/>
    </div>
  );
};

export default Individual;
