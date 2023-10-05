import Chat_box from '@/common/components/Chat_box'
import Common_Button from '@/common/components/Common_Button'
import React from 'react'

const Individual = () => {
  return (
    <>
      <div className='bg-black flex flex-row'>
        <div className='flex flex-col w-1/2 px-8'>
          <div>
            <h1 className='text-4xl font-black text-[#1BEFA0]'>Query 1</h1>
            <h1>Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.</h1>
          </div>
          <div>Posted by @haroldas</div>
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