import React from 'react'

const SignUp = () => {
  return (
    <div className='h-screen'>
      <div className='h-1/2 bg-[#282828]'></div>
      <div className='absolute inset-0 w-[600px] h-[500px] mx-auto mt-32 rounded-3xl bg-white flex flex-col items-center justify-center shadow-xl shadow-black'>
        <p className='font-bold mb-2 text-2xl underline'>LOGIN</p>
        <form className='flex flex-col'>
           <label className='mb-2 mt-2 font-semibold text-white'>Email</label>
           <input type="email" className='h-10 rounded-lg p-3 border-2 border-blue-500 outline-none' placeholder='youremail@gmail.com' data-lpignore="true"/>
           <label className='mb-2 mt-2 font-semibold text-white'>Password</label>
           <input type="password" className='h-10 rounded-lg p-3 border-2 border-blue-500 outline-none' placeholder='password#####1233' data-lpignore="true"/>
           <a className='mb-2 mt-3 text-blue'>Forgot Password?</a>
           <button className='rounded-full bg-[#38a6fb] hover:bg-red-600 text-white font-semibold text-xl px-6 py-2 mt-2'>Log In</button>
        </form>
    
        <p className='mb-3'>Have an account? <a>Login</a></p>
      </div>
      <div className='h-1/2 bg-white'></div>
    </div>
  )
}

export default SignUp



// import React from 'react';

// const Login = () => {
//   return (
//     <div className='h-screen flex justify-center items-center'>
//       <div className='h-1/2 bg-black'></div>
//       <div className='w-96 h-96 rounded-3xl bg-cyan-600 flex flex-col items-center justify-center shadow-xl'>
//         <p className='font-bold mb-2 text-2xl underline'>LOGIN</p>
//         <form className='flex flex-col'>
//           <label className='mb-2 mt-2 font-semibold text-white'>Email</label>
//           <input type="email" className='h-10 rounded-lg p-3 border-2 border-blue-500 outline-none' placeholder='youremail@gmail.com' data-lpignore="true"/>
//           <label className='mb-2 mt-2 font-semibold text-white'>Password</label>
//           <input type="password" className='h-10 rounded-lg p-3 border-2 border-blue-500 outline-none' placeholder='password#####1233' data-lpignore="true"/>
//           <a className='mb-2 mt-3 text-red-500'>Forgot Password?</a>
//           <button className='rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-xl px-6 py-2 mt-2'>Log In</button>
//         </form>
//         <p className='mt-4 text-white'>Don't have an account? <a className='underline'>create account</a></p>
//       </div>
//       <div className='h-1/2 bg-white'></div>
//     </div>
//   );
// }

// export default Login;
