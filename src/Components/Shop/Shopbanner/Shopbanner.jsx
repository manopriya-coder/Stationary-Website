import React from 'react'
import ShopBg from '../../../assets/ShopbannerBg.jpg'
import '../Shopbanner/Shopbanner.css'


const Shopbanner = () => {
  return (
    <div className='shopBg'>
        <img src={ShopBg} alt="" />
        <p>HOME-PRODUCTS</p>
        <h1>Products</h1>

    </div>
  )
}

export default Shopbanner