import Image from 'next/image'
import React from 'react'


const Common_Button = ({textcolour,colour,children}) => {
  return (
    <div>
      

       
        <button className={`${colour} py-1 px-10 m-3 h-9 rounded-md font-semibold ${textcolour} shadow-inner`}>{children}</button>
        
        
    </div>
  )
}

export default Common_Button