import React from 'react'
import './LandingHeader.css'

function LandingHeader() {
  return (
    <div className='landingheader'>
        <div className="landingheader__left__division">
            <p className="landingheader__left__option">Get the app</p>
        </div>
        <div className="landingheader__right__division">
            <p className="landingheader__right__option">Investor Relations</p>
            <p className="landingheader__right__option">Add restaurant</p>
            <p className="landingheader__right__option">SignUp</p>
            <p className="landingheader__right__option">Login</p>
        </div>
    </div>
  )
}

export default LandingHeader