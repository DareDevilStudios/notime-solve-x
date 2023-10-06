import Image from 'next/image'
import React from 'react'


const Common_Button = ({textcolour,colour,children}) => {
  return (
        <button className={`${colour} py-1 w-full h-9 rounded-md font-semibold ${textcolour} shadow-inner`}>{children}</button>
  )
}

export default Common_Button