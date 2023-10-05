import Chat_box from '@/common/components/Chat_box'
import Common_Button from '@/common/components/Common_Button'
import Image from 'next/image'
import React from 'react'

const Individual = () => {
  return (
    <>
      <div className='bg-black flex flex-row'>
        <div className='flex flex-col w-1/2 p-8'>
          <div className='mb-9'>
            <h1 className='text-4xl font-black text-[#1BEFA0] mb-4'>Query 1</h1>
            <h1>Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.</h1>
          </div>
          <div className='flex gap-4 items-center'>
            <h1>Posted by @haroldas</h1>
            <Image src={"/website_screenshots/person.png"} width={35} height={35} />
          </div>
          <div>
            <Common_Button children='TECH STACK/LANGUAGE: C++ 11' colour="#262B30" />
          </div>
          <div className='flex flex-row justify-between'>
            <Common_Button children="25 coins" colour="#EEAA2B" />
            <Common_Button children=" due on oct 25 " colour="#262B30" />
          </div>
          <div>
            <Common_Button children="sent request to solve" colour="#1BEFA0" />
          </div>
        </div>
        <div className='w-1/2'>
          <Chat_box />
        </div>
      </div>
    </>
  )
}

export default Individual