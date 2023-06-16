import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout() {

  
  return (
    <div>
        <Sidebar/>
      <div className="container py-5">
      <Outlet></Outlet>
      </div>
    </div>
  )
}
