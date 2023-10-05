import Image from 'next/image'
import React from 'react'


const Common_Button = ({textcolour,colour,children}) => {
  return (
    <button className={`bg-[${colour}] py-1 px-10 m-3 h-9 rounded-md font-semibold text-[${textcolour}] shadow-inner`}>{children}</button>
  )
}

export default Common_Button