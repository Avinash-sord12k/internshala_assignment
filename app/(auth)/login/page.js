"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'; 
import { useEffect } from 'react';

function Login() {
  const { push } = useRouter();
  const goToDashBoard = (e) => {
    e.preventDefault();
    push('/')
  };

  return (
    <article className='flex items-stretch rounded-lg overflow-hidden gap-0 shadow-lg'>
      <div className="image-wrapper max-w-sm object-cover flex-1">
        <img src="/download.png" alt="login-wallpaper" className="w-full h-full" />
      </div>
      <form className="flex-1 bg-gray-50" onSubmit={goToDashBoard}>
        <div className="p-6 overflow-hidden">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="mt-2 text-gray-500">Login to your account</p>

          <div className="mt-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="border border-gray-300 rounded-md px-4 py-2" placeholder="enter email" />
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" className="border border-gray-300 rounded-md px-4 py-2"
                placeholder="enter password" />
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <Link href={"/forget-password"}>forgot password?</Link>
          </div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-3 w-full">
            Login
          </button>
          <div className="flex items-center gap-2 mt-6">
            <div className='h-0 border-t border-gray-400 flex-1' />
            <span className='text-gray-500 text-xs'>or</span>
            <div className='h-0 border-t border-gray-400 flex-1' />
          </div>

          <button className="w-full border rounded-md border-gray-500 p-2 mt-3 ">
            register
          </button>
        </div>

      </form>
    </article>
  )
}

export default Login
