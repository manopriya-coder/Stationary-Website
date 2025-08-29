import React from "react";
import "../Footer/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="footerLogo">
        <img src={logo} alt="" />
      </div>
      <div className="details">
        <div className="subDetails">
          <div className="gridDetails">
            <h4>Contact us</h4>
            <div className="address">
              <i class="ri-map-pin-line"></i>
              <p>100 Bleecker st, new york, NY 10013, USA</p>
            </div>
            <div className="address">
              <i class="ri-phone-line"></i>
              <p>123456789</p>
            </div>
            <div className="address">
              <i class="ri-mail-line"></i>
              <p>demo@demo.com</p>
            </div>
          </div>
          <div className="gridDetails">
            <h4>Information</h4>
            <p>About us</p>
            <p>Contact us</p>
            <p>FAQs</p>
            <p>News</p>
          </div>
          <div className="gridDetails">
            <h4>Customer Service</h4>
            <p>Contact us</p>
            <p>Privacy policy</p>
            <p>Refund policy</p>
            <p>Faq's</p>
          </div>
          <div className="gridDetails">
            <h4>My acount</h4>
            <p>Manage account</p>
            <p>Shopping cart</p>
            <p>My wishlist</p>
            <p>Terms & condition</p>
          </div>
          <div className="gridDetails">
            <h4>Newsletter</h4>
            <div className="subcribe">
              <input type="text" placeholder="Enter your email" />
              <p>SUBCRIBE</p>
            </div>
            <div className="subIcon">
              <i class="ri-instagram-line"></i>
              <i class="ri-facebook-fill"></i>
              <i class="ri-twitter-x-fill"></i>
              <i class="ri-pinterest-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="lastFooter">
        <p>© 2025, Copy all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
