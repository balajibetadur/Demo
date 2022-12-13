import React from 'react'
import './Landing.css'
import HomeImage from '../../Assets/Images/Landing.avif'
import LandingHeader from '../LandingHeader/LandingHeader'
import LandingHero from '../LandingHero/LandingHero'

function Landing() {
  return (
    <div className='landing'>
      <div className="landing__image__division">
        <LandingHeader/>
        <LandingHero/>
        <img className='landing__image' src={HomeImage} alt="" />
      </div>
    </div>
  )
}

export default Landing