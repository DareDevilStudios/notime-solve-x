import Common_Button from '@/common/components/Common_Button'
import Filter_questions from '@/common/components/Filter_questions'
import QuestionBox from '@/common/components/Question_box'
import React from 'react'

const SolveQuestion = () => {
  return (
    <>
      <div className="px-24 flex flex-col gap-4">
        <h1 className='text-3xl font-black'>Solve Coding <span className='text-green-600' >Queries</span> </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga quasi temporibus distinctio corporis quae.
        </p>
        <Filter_questions/>
        <div className="flex flex-col gap-5">

          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <div className='flex gap-[5rem]'>
          <Common_Button  textcolour="text-[#0C0C0C]"
            colour={"bg-[#1BEFA0]"}
            children={"SOLVE QUERY"}/>
             <Common_Button  textcolour="text-[#0C0C0C]"
            colour={"bg-[#EEAA2B]"}
            children={"SOLVE QUERY"}/>
        </div>
        </div>
      </div>
    </>
  )
}

export default SolveQuestion