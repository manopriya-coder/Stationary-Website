import React from 'react'
import './Latestblog.css'
import blog1 from "../../../assets/blog1.jpg"
import blog2 from "../../../assets/blog2.jpg"
import blog3 from "../../../assets/blog3.jpg"

const Latestblog = () => {
  return (
    <div className='blogMain'>
        <h1>Latest Blog</h1>
        <div className='blogGrid'>
            <div className='subBlogGrid'>
                <div className='blog'>
                    <img src={blog1} alt="" />
                    <button>Our stylish stationary</button>
                </div>
                <div className='blog'>
                    <img src={blog2} alt="" />
                    <button>Write with confidence</button>

                </div>
                <div className='blog'>
                    <img src={blog3} alt="" />
                    <button>Essential tool essential thought</button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Latestblog