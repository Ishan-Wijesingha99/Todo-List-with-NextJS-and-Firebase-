import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoggingIn, setIsLoggingIn] = useState(true)

  const submitHandler = () => {
    if(!email || !password) {
      setError('Please enter email and password')
      return
    }
  }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-4'>

      <h1 className='font-extrabold text-2xl sm:text-4xl select-none'>
        {isLoggingIn ? "LOGIN" : "REGISTER"}
      </h1>

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

      <h2
      className='duration-300 hover:scale-110 cursor-pointer'
      onClick={() => setIsLoggingIn(prev => !prev)}
      >
        {isLoggingIn ? "REGISTER" : "LOGIN"}
      </h2>

    </div>
  )
}
