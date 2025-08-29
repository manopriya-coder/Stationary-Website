import React from 'react'
import './Category.css'
import one from '../../../assets/1.jpg'
import two from '../../../assets/2.jpg'
import three from '../../../assets/3.jpg'
import four from '../../../assets/4.jpg'
const Category = () => {
  return (
    <div className='main'>
        <div className='box1'>
            <img src={one} alt="" />
            <p>15 Products</p>
            <h4>Notebooks</h4>
            <h6>SHOP NOW</h6>
        </div>
         <div className='box2'>
            <img src={two} alt="" />
            <p>12 Products</p>
            <h4>Office File</h4>
            <h6>SHOP NOW</h6>
        </div>
         <div className='box3'>
            <img src={four} alt="" />
             <p>17 Products</p>
            <h4>Color pencil</h4>
            <h6>SHOP NOW</h6>

        </div>
         <div className='box4'>
            <img src={three} alt="" />
             <p>11 Products</p>
            <h4>Color dish</h4>
            <h6>SHOP NOW</h6>

        </div>
    </div>
  )
}

export default Category