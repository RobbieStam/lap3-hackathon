import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/superheros">Super Heros</NavLink>
          <NavLink className="navlink" to="/search">Search</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default NavBar
