import React from 'react'
import './LandingHero.css'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';

function LandingHero() {
  return (
    <div className='landinghero'>
        <div className="landinghero__title">
            Zomato
        </div>
        <div className="landinghero__prompt">
            Discover the best food & drinks in Bengaluru
        </div>
        <div className="landinghero__searchbar">
            <PlaceIcon className='icon landinghero__icon landinghero__icon__location'/>
            <input type="text" placeholder='Banglore' className="landinghero__searchbar__input__location" />
            <span className="landinghero__input__divider">|</span>
            <SearchIcon className='icon landinghero__icon landinghero__icon__searchicon'/>
            <input placeholder='Search for restaurants, dishes etc...' type="text" className="landinghero__searchbar__input__restaurant" />
        </div>
    </div>
  )
}

export default LandingHero