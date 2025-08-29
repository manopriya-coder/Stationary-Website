import React from "react";
import "../Rightside/Rightside.css";
import Rbanner from "../../../assets/Right Banner.jpg";
import Product from "../../../Reusable/Product";

const Rightside = () => {
  return (
    <>
      <div className="mainRight">
        <div className="rightBanner">
          <img src={Rbanner} alt="" />
         
        </div>
        <p className="para">
          Care for fiber: 30% more recycled polyester. We label garments
          manufactured using environmentally friendly technologies and raw
          materials with the Join Life label.
        </p>
       <div className="rightMenu">
        <div className="menuIcon">
          <i class="ri-layout-grid-line"></i>
          <i class="ri-menu-line"></i>
        </div>
        <div className="filter">
          <div className="totalCount">
              <p>241 Products</p>
          </div>
          <div className="sorting">
            <h4>Sorted by :</h4>
            <p>A-Z</p>
          </div>
          <div className="dropIcon">
            <i class="ri-arrow-drop-down-line"></i>
          </div>
        </div>
       </div>
       <div className="productsReuse">
        <Product/>
       </div>
       
      </div>
    </>
  );
};

export default Rightside;
