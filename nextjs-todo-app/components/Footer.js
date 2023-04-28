import React from 'react'



export default function Footer() {
  return (
    <div className='flex justify-center items-center gap-3 py-3'>
      <a href="https://www.instagram.com/">
        <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>

      <a href="https://www.linkedin.com/in/ishan-wijesingha-497222239/">
        <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>

      <a href="https://github.com/Ishan-Wijesingha99">
        <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
    </div>
  )
}
