import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/superheros">SuperHeros</NavLink>
          <NavLink to="/search">Home</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default NavBar
