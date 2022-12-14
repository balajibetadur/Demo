import React from 'react'
import './ServicesCard.css'

function ServicesCard({ title, subTitle, image}) {
  return (
    <div className='servicescard'>
        <div className="servicescard__image__division">
            <img src={image} alt="" className="servicescard__image" />
        </div>
        <div className="servicecard__details">
            <p className="servicescard__title">{title}</p>
            <p className="servicescard__subtitle">{subTitle}</p>
        </div>
    </div>
  )
}

export default ServicesCard