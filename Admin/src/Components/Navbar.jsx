import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="cc w-screen h-[5rem] fixed top-0 z-50 bg-white">
    <div className="container flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://prescripto-admin.vercel.app/assets/admin_logo-BYur65Lc.svg"
          alt="the logo of Prescripto"
          className="w-[10rem]"
        />
        <span className='border rounded-full px-2 border-black text-sm cc py-[.1rem]'>Admin</span>
      </Link>
      <div  className="bg-blue text-white px-[2.5rem] py-2 md:rounded-3xl rounded-lg text-[.9rem] cursor-pointer">Logout</div>
    </div>
  </div>
  )
}

export default Navbar