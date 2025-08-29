import React from "react";
import "./Testimonials.css";
import testimonial1 from "../../../assets/testimonial1.jpg";

const Testimonials = () => {
  return (
    <div className="mainTestimonial">
      <h1>Testimonials</h1>
      <div className="testimonial">
        <div className="contentTest">
          <div className="testImg">
            <img src={testimonial1} alt="" />
          </div>
          <div className="insideContent">
            <div className="icon">
              <i class="ri-double-quotes-l"></i>
              <div className="starIcon">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
            </div>
            <div className="pTag">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit, quisquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                eos neque voluptas dolore.
              </p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="nameRoll">
              <h4>Michal Smith</h4>
            <h5>Product designer</h5>

            </div>
          </div>
        </div>
        <div className="dots">
          <div className="threeDot1"></div>
          <div className="threeDot2"></div>
          <div className="threeDot3"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
