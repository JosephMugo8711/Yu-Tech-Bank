import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className=' mb-0 min-h-[5vh] flex flex-row bg-white text-black text-xl text-center justify-center py-5  '>
      <p className='mr-1'> ALl rights reserved</p>
      <AiOutlineCopyrightCircle size={30}/>
       <p className='ml-1'>2023</p>
    </div>
  )
}

export default Footer