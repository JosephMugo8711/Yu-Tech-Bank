import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-[80vh]'>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout