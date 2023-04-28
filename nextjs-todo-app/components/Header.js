import React, { useState } from 'react'
import Modal from './Modal'



export default function Header() {
  // set up modals by using state, pretty simple
  const [openModal, setOpenModal] = useState(false)
  
  return (
    <>
      {/* if openModal is true, then display the modal, toggle this on and off by alternating true and false */}
      {openModal && <Modal setOpenModal={setOpenModal}/>}

      <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
        <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>

        <i
        className="fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"
        // make buttons toggle modal on and off
        onClick={() => setOpenModal(true)}
        ></i>
      </div>
    </>
  )
}
