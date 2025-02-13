import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar';

const Layout = () => {
  return (
    <div>
       <Navbar />
       <div className='flex gap-2'>
       <SideBar />
        <Outlet />
       </div>
    </div>
  )
}

export default Layout