import Common_Button from '@/common/components/Common_Button'
import Filter_questions from '@/common/components/Filter_questions'
import QuestionBox from '@/common/components/Question_box'
import React from 'react'
const sampleQuestions = [
  {
    Title: "Algorithms",
    Query: "How to handle a 'Stack Overflow' error when implementing quicksort algorithm efficiently in C++? Provide guidance on optimizing the recursive function calls and avoiding excessive memory usage.",
    Due: "15 OCT",
    Cost: 30,
    TechStack: "Algorithm"
  },
  {
    Title: "JavaScript",
    Query: "Explain common 'TypeError' and 'ReferenceError' messages in JavaScript. Provide examples of scenarios leading to these errors and suggest debugging techniques to resolve them.",
    Due: "20 OCT",
    Cost: 20,
    TechStack: "JavaScript"
  },
  {
    Title: "Web Development",
    Query: "How to troubleshoot 'Mixed Content' error in web development projects when migrating from HTTP to HTTPS? Explain why this error occurs and suggest solutions to ensure a secure website.",
    Due: "25 OCT",
    Cost: 25,
    TechStack: "Web Development"
  },
  {
    Title: "Data Science",
    Query: "Handling 'Memory Error' and 'ResourceExhaustedError' in machine learning projects. Provide strategies for managing memory issues, optimizing code, and using resources efficiently in deep learning models.",
    Due: "10 OCT",
    Cost: 35,
    TechStack: "Data Science"
  },
  {
    Title: "React.js",
    Query: "Resolving 'Infinite Loop' error in React.js components. Explain the causes of infinite loops in React applications and suggest debugging techniques, including the use of hooks like 'useEffect' and 'useMemo'.",
    Due: "5 OCT",
    Cost: 15,
    TechStack: "React.js"
  },
  {
    Title: "Databases",
    Query: "Troubleshooting 'Deadlock' and 'Timeout Expired' errors in database transactions. Provide insights into detecting and resolving concurrency-related issues in SQL databases, including lock contention and isolation levels.",
    Due: "30 OCT",
    Cost: 40,
    TechStack: "Database"
  },
];


// You can access the updated sampleQuestions array with additional queries for each question.


// Accessing the sample questions with the specified 'Due' format
// sampleQuestions.forEach((question, index) => {
//   console.log(`Question ${index + 1}:`);
//   console.log("Topic: " + question.Topic);
//   console.log("Queries: " + question.Queries.join(", "));
//   console.log("Due: " + question.Due);
//   console.log("Cost: " + question.Cost + " Coins");
//   console.log("\n");
// });


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
          {sampleQuestions.map((question,index)=>(
            <QuestionBox key={index} question={question} index={index}></QuestionBox>
          ))}
          {/* <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/>
          <QuestionBox/> */}
          <div className='flex gap-[3rem] py-7 w-full'>
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