import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import calculator from "../assets/category-icon-1.png";
import file from "../assets/category-icon-2.png";
import note from "../assets/category-icon-3.png";
import brush from "../assets/category-icon-4.png";
import tool from "../assets/category-icon-5.png";
import dairy from "../assets/category-icon-6.png";
import pad from "../assets/category-icon-7.png";
import pen from "../assets/category-icon-8.png";
import photo from "../assets/category-icon-9.png";
import color from "../assets/category-icon-10.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigator = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleDropdown2 = () => setIsOpen2(!isOpen);

  return (
    <div className="baseNav">
      <div className="navBar">
        <div className="top">
          <div className="logoDiv">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="search">
            <h4>Search Products</h4>
          </div>
          <div className="navBarIcon">
            <p>12344545</p>
            <i class="ri-user-3-line"></i>
            <i class="ri-heart-line"></i>
            <i class="ri-shopping-bag-4-line"></i>
          </div>
        </div>
        <div className="bottom">
          <div className="navCategory" onClick={toggleDropdown}>
            <i class="ri-menu-line"></i>
            <h4>Browse Categories</h4>
            <i class="ri-arrow-down-s-line"></i>
            {isOpen && (
              <div className="navCategoryList">
                <div className="list">
                  <img src={calculator} alt="" />
                  <p>Calculator</p>
                </div>
                <div className="list">
                  <img src={file} alt="" />
                  <p>File & folder</p>
                </div>
                <div className="list">
                  <img src={note} alt="" />
                  <p>Notebooks</p>
                </div>
                <div className="list">
                  <img src={brush} alt="" />
                  <p>Painting brush</p>
                </div>
                <div className="list">
                  <img src={tool} alt="" />
                  <p>Tools</p>
                </div>
                <div className="list">
                  <img src={dairy} alt="" />
                  <p>dairy book</p>
                </div>
                <div className="list">
                  <img src={pad} alt="" />
                  <p>Clipboard</p>
                </div>
                <div className="list">
                  <img src={pen} alt="" />
                  <p>Ballpen</p>
                </div>
                <div className="list">
                  <img src={photo} alt="" />
                  <p>Photo paper</p>
                </div>
                <div className="list">
                  <img src={color} alt="" />
                  <p>Color palette</p>
                </div>
              </div>
            )}
          </div>

          <div className="menuItem">
            <div className="menus">
              <h3 className="pink" onClick={() => navigator("/")}>Home</h3>
              <i  class="ri-arrow-down-s-line pink"></i>
            </div>
            <div className="menus">
              <h3 className="pink" onClick={() => navigator("/shop")}>Shop</h3>
              <i class="ri-arrow-down-s-line pink"></i>
            </div>
            <div className="menus">
              <h3 className="pink">Collection</h3>
              <i class="ri-arrow-down-s-line pink"></i>
            </div>
            <div className="menus">
              <h3 className="pink">Blogs</h3>
              <i class="ri-arrow-down-s-line pink"></i>
            </div>
            <div className="menus">
              <h3 className="pink">Page</h3>
              <i class="ri-arrow-down-s-line pink"></i>
            </div>
          </div>
          <div className="dealsOffer">
            <i class="ri-bookmark-line hide"></i>
            <h3 className="hide">Deals & Offer</h3>
          </div>
          <div className="phMenu" onClick={toggleDropdown2}>
            <p>Menu</p>
            {isOpen2 && (
              <div className="navCategoryList2">
                <div className="list2">
                  
                  <p onClick={() => navigator("/")}>Home</p>
                </div>
                <div className="list2">
                 
                  <p onClick={() => navigator("/shop")}>Shop</p>
                </div>
                <div className="list2">
               
                  <p>Collection</p>
                </div>
                <div className="list2">
                 
                  <p>Blog</p>
                </div>
                <div className="list2">
                
                  <p>Contact</p>
                </div>
                              
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
