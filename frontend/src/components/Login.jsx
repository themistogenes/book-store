import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, watch, formState: {errors} } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleGoogleSignIn = () => {

  }

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="email"
            >
              Email
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="e.g. youremail@gmail.com" 
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" 
              {...register("email", { required: true})}
            />
          </div>
          <div className="mb-4">
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="password"
            >
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="password" 
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" 
              {...register("password", { required: true})}
            />
          </div>
          {
            message && <p className="text-red-500 text-xs italic mb-3">{message}</p>
          }
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          First time user? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register here</Link>
        </p>

        {/* google sign-in */}
        <div className="mt-4">
          <button 
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded outline-none"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Login