import React from 'react'

const SignUp = () => {
  return (
    <div className='h-screen'>
      <div className='h-1/2 bg-[#282828]'></div>
      <div className='absolute inset-0 w-[600px] h-[500px] mx-auto mt-32 rounded-3xl bg-white flex flex-col items-center justify-center shadow-xl shadow-black'>
        <p className='font-bold mb-2 text-2xl underline'>SIGN UP</p>
        <form className='flex flex-col'>
          <label className='mb-2 mt-2 font-semibold'>Firstname</label>
          <input type="text" className=' h-9 rounded-lg p-3 border border-blue-500 border-1 outline-none' placeholder='firstname' data-lpignore="true"/>
          <label className='mb-2 mt-2 font-semibold'>Surname</label>
          <input type="text" className=' h-9 rounded-lg p-3 border border-blue-500 border-1 outline-none' placeholder='surname' data-lpignore="true"/>
          <label className='mb-2 mt-2 font-semibold'>Email</label>
          <input type="email" className=' h-9 rounded-lg p-3 border border-blue-500 border-1 outline-none' placeholder='youremail@gmail.com' data-lpignore="true"/>
          <label className='mb-2 mt-2 font-semibold'>PassWord</label>
          <input type="password" className=' h-9 rounded-lg p-3 border border-blue-500 outline-none' placeholder='password#####1233' data-lpignore="true"/>
          
          <button className='rounded-full bg-[#38a6fb] mb-2 mt-3 font-semibold text-2xl text-white'>Register</button>
        </form>
        <p className='mb-3'>Have an account? <a>Login</a></p>
      </div>
      <div className='h-1/2 bg-white'></div>
    </div>
  )
}

export default SignUp
