import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'



export default function Login() {
  // react form using state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // error string should use state
  const [error, setError] = useState(null)
  
  // this is just to see if they are on the login component or register component
  const [isLoggingIn, setIsLoggingIn] = useState(true)

  // export firebase functions from useAuth()
  const { login, signup } = useAuth()



  const submitHandler = async () => {
    // if email or password field is empty, return out of this function and change error state
    if(!email || !password) return setError('Please enter email and password')

    // if user is trying to log in, log them in and return out of this function
    if(isLoggingIn) {
      try {
        return await login(email, password) 
      } catch (error) {
        setError("Incorrect email or password")
      }
    }

    // if not logging in, then they can only signup, so sign them up and return out of this function
    try {
      await signup(email, password)      
    } catch (error) {
      setError("Incorrect email or password")
    }
  }



  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-4'>

      <h1 className='font-extrabold text-2xl sm:text-4xl select-none'>
        {/* change header based on if they're registering or logging in */}
        {isLoggingIn ? "LOGIN" : "REGISTER"}
      </h1>

      {/* conditionally render error message */}
      {error && <div className='w-full max-w-[40ch] border border-solid border-rose-400 text-rose-400 py-2 text-center'>{error}</div>}

      <input
      type="text" 
      placeholder="Email Address"
      className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300'
      value={email}
      onChange={e => setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="Password"
      className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300'
      value={password}
      onChange={e => setPassword(e.target.value)}
      />

      <button
      onClick={submitHandler}
      className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'
      >
        <h2 className='relative z-20'>SUBMIT</h2>
      </button>

      {/* change button based on if they are registering or logging in */}
      <h2
      className='duration-300 hover:scale-110 cursor-pointer'
      onClick={() => setIsLoggingIn(prev => !prev)}
      >
        {isLoggingIn ? "REGISTER" : "LOGIN"}
      </h2>

    </div>
  )
}
