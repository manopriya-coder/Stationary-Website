import React from 'react'
import './HomeBanner.css'
import bg from '../../../assets/bg.jpg'

const HomeBanner = () => {
  return (
    <div className='bgImg'>
        <img src={bg} alt="" />
        <p>Sale upto 20% off</p>
        <h3>Learning starts <br />with rigth tools</h3>
        <div className="btn">
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default HomeBanner