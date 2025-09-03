import React from "react";
import "../Followinsta/Followinsta.css";
import insta1 from "../../../assets/insta1.jpg";
import insta2 from "../../../assets/insta2.jpg";
import insta3 from "../../../assets/insta3.jpg";
import insta4 from "../../../assets/insta4.jpg";
import insta5 from "../../../assets/insta5.jpg";
import delivery from "../../../assets/delivery.png";
import safety from "../../../assets/safety.png";
import ship from "../../../assets/shipped.png";
import exchange from "../../../assets/exchange.png";

const Followinsta = () => {
  return (
    <div className="followMain">
      <div className="head">
        <h1>Follow instagram</h1>
      </div>
      <div className="profile">
        <div className="instaGrid">
          <div className="insta hide">
            <img src={insta1} alt="" />
            <div className="hoverIcon">
              <i class="ri-instagram-line"></i>
            </div>
          </div>
          <div className="insta">
            <img src={insta2} alt="" />
            <div className="hoverIcon">
              <i class="ri-instagram-line"></i>
            </div>
          </div>
          <div className="insta">
            <img src={insta3} alt="" />
            <div className="hoverIcon">
              <i class="ri-instagram-line"></i>
            </div>
          </div>
          <div className="insta">
            <img src={insta4} alt="" />
            <div className="hoverIcon">
              <i class="ri-instagram-line"></i>
            </div>
          </div>
          <div className="insta">
            <img src={insta5} alt="" />
            <div className="hoverIcon">
              <i class="ri-instagram-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="subBen">
          <div className="ben">
            <img className='benImg' src={delivery} alt="" />
            <h4>Safe delivery</h4>
            <p>Express delivery worldwidefrom our blog company</p>
          </div>
          <div className="ben">
            <img className='benImg' src={safety} alt="" />
            <h4>Safe payment</h4>
            <p>Payment in without fees from $100 of purchase</p>
          </div>
          <div className="ben">
            <img className='benImg' src={ship} alt="" />
            <h4>Shipping delivery</h4>
            <p>Express delivery worldwidefrom our blog company</p>
          </div>
          <div className="ben">
            <img className='benImg' src={exchange} alt="" />
            <h4>Free exchange</h4>
            <p>Free return for 7 days for any order delivered in france</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followinsta;
