import React from 'react'
import {Link} from 'react-router-dom'
//import {BsFillHeartPulseFill} from 'react-icons/bs'
import { BiHome } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div>
    <nav className=' flex flex-row flex-wrap py-4 items-center bg-black pb-1 gap-12' >
        <div className=' ml-12 text-white flex flex-col mr-16'>
            <p className='ml-6 flex flex-row items-center font-semibold text-white text-2xl'>Yutek <span className='text-red-500 ml-1 mr-1'>< BiHome size={50} /></span> Bank</p>
        </div>
        <div className=' text-[#FFFFFF] font-semibold flex flex-wrap justify-between gap-9 mr-5 text-xl'>
            
              <Link to='/'>Home</Link >
              <Link to='/about'>About us</Link>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/contactus'>Contact Us</Link>
              <Link to='/signup'>Sign up</Link>
              <Link to='login'>Login</Link>
          
        </div>
        <hr className=' bg-black'/>
    </nav>
    </div>
  )
}

export default Navbar