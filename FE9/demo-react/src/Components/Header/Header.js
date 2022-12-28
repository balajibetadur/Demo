import React from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Header</p>
      <NavLink className = 'light' to = '/login'>Login</NavLink>
      <NavLink className='dark' to = '/signup'>SignUp</NavLink>
      <button onClick={() => {setCount(count + 1)}} >Click</button>
      <p>{count}</p>
    </div>
  )
}

export default Header