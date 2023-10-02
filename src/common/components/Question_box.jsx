import Image from 'next/image'
import React from 'react'

const Question_box = () => {
  return (
    <div>
        <h1>Question_box</h1>
        <div className="w-full">
        <Image className='w-full' src="/website_screenshots/question_box.png" alt="Next.js" width={600} height={160} />
        </div>
    </div>
  )
}

export default Question_box