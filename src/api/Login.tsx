import React, { useState } from 'react';
const Login: React.FC = () => {

  
    return (
      <form className="m-auto mt-28 bg-white w-full max-w-7xl p-4 rounded-lg relative">
        
        <div className='mt-5 ml-5 w-full flex justify-center  flex-col'>
          <label className='w-24 inline-block' htmlFor="email">Email:</label>
          <input className='ml-5 border border-solid border-black max-w-6xl mt-4 p-4 h-11 rounded-lg' placeholder='Email' type="email" id="email" name="email"  required />
        </div>
        <div className='mt-5 ml-5 w-full flex justify-center  flex-col'>
          <label  className='w-24 inline-block' htmlFor="password">Password:</label>
          <input className='ml-5 border border-solid border-black max-w-6xl mt-4 p-4 h-11 rounded-lg' placeholder='Password' type="password" id="password" name="password"  required />
        </div>
        <div className='w-full flex justify-center'>
        <button className='mt-5 ml-5 w-52 h-11 bg-cyan-700 text-white rounded-lg' type="submit">Login</button>
  
        </div>
      </form>
    );
  };
  export default Login
  