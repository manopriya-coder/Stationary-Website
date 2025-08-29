import React from "react";
import "./Products.css";
import bag from "../../../assets/bag.jpg";
import bowce from "../../../assets/bowce.jpg";
import puncher from "../../../assets/puncher.jpg";
import stabler from "../../../assets/stabler.jpg";
import clock from "../../../assets/clock.jpg";
import marker from "../../../assets/marker.jpg";
import pen from "../../../assets/penStand.jpg";
import pencil from "../../../assets/pencil.jpg";

const Products = () => {
  return (
    <div className="mainProduct">
      <h1>Top products</h1>
      <div className="grid">
        <div className="products">
          <div className="img">
            <img src={bag} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>School bag</h3>
              <h4>Rs: 800</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="img">
            <img src={bowce} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>School pouch</h3>
              <h4>Rs: 100</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="img">
            <img src={pen} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>Pen Container</h3>
              <h4>Rs: 150</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="img">
            <img src={clock} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>Table clock</h3>
              <h4>Rs: 250</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="img">
            <img src={marker} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>Marker</h3>
              <h4>Rs: 150</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="img">
            <img src={puncher} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>Paper punch</h3>
              <h4>Rs: 300</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="img">
            <img src={stabler} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>Stabler</h3>
              <h4>Rs: 150</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="img">
            <img src={pencil} alt="" />
          </div>
          <div className="content">
            <div className="innerContent">
              <h3>Pencil</h3>
              <h4>Rs: 200</h4>
            </div>
            <div className="contentIcon">
              <i class="ri-shopping-bag-4-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
