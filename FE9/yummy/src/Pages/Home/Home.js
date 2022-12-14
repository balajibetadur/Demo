import React, { useState } from 'react'
import Landing from '../../Components/Landing/Landing'
import ServicesCard from '../../Components/ServicesCard/ServicesCard'
import './Home.css'
import serviceCards from '../../Data/ServiceCards'

function Home() {


  return (
    <div className='home'>
        <Landing/>
        <div className="home__services__cards">
          {
            serviceCards && serviceCards.map((value, index) => {
              return <ServicesCard title = {value.title} subTitle = {value.subTitle} image = {value.image} key = {index}/>
            })
          }
        </div>
    </div>
  )
}

export default Home