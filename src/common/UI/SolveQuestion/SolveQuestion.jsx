import Filter_questions from '@/common/components/Filter_questions'
import QuestionBox from '@/common/components/Question_box'
import React from 'react'

const SolveQuestion = () => {
  return (
    <>
      <div className="px-24 flex flex-col gap-4 my-10">
        <h1 className='text-3xl font-black'>Solve Coding <span className='text-green-600' >Queries</span> </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga quasi temporibus distinctio corporis quae.
        </p>
        <Filter_questions/>
        <div className="flex flex-col gap-5 my-7">

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
        </div>
      </div>
    </>
  )
}

export default SolveQuestion