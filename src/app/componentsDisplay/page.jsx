import React from 'react'
import DotHeading from '../../common/components/DotHeading.jsx'
import Common_Button from '@/common/components/Common_Button.jsx'
import Question_box from '@/common/components/Question_box.jsx'
import Home_screen_main from '@/common/components/home_screen_main.jsx'
import Filter_questions from '@/common/components/Filter_questions.jsx'
import Chat_box from '@/common/components/Chat_box.jsx'

const page = () => {
  return (
    <div>
        <h1 className='text-lg text-blue-700'>All Components are here</h1>
        <ul type="square" className='ml-24'>
            <li>
                <DotHeading/>
            </li>
            <li>
                <Common_Button children={'click'} colour="#1BEFA0"/>
            </li>
            <li>
                <Question_box/>
            </li>
            <li>
                <Home_screen_main/>
            </li>
            <li>
                <Filter_questions/>
            </li>
            <li>
                <Chat_box/>
            </li>
        </ul>
    </div>
  )
}

export default page