import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
      <p>Header</p>
      <NavLink to = '/login'>Login</NavLink>
      <NavLink to = '/signup'>SignUp</NavLink>
      <p></p>
    </div>
  )
}

export default Header