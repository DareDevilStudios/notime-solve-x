import Filter_questions from '@/common/components/Filter_questions'
import Navbar from '@/common/components/Navbar'
import QuestionBox from '@/common/components/Question_box'
import React from 'react'

const SolveQuestion = () => {
  return (
    <>
  
    <div className='bg-black p-[5rem] flex flex-col gap-5'>
    <h1 className='text-white text-3xl font-black ' >Solving Coding<span className='text-[#1BEFA0]'> Queries</span></h1>
    <p className='text-white pt-7'>Solve queries from fellow developers, earn rewards in coins, and contribute your expertise to a thriving community of problem solvers.</p>
    <Filter_questions/>
    <QuestionBox/>
    
    <QuestionBox/>
    <QuestionBox/>
    <QuestionBox/>
    <QuestionBox/>
    </div>
    </>
  )
}

export default SolveQuestion