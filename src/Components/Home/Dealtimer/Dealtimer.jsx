import React from "react";
import "./Dealtimer.css";
import bg from "../../../assets/timerBg.jpg";

const Dealtimer = () => {
  return (
    <div className="dealMain">
      <div className="banner">
        <img src={bg} alt="" />
        <h3 className="heading">Deals of the week</h3>
        <p className="sub">
          Stationery products with good prices, delivery within{" "}
        </p>
        <p className="sub2">2 hours, quality products</p>
        <div className="mainGrid">
          <div className="timerGrid">
            <div className="time">
              <div className="circle"></div>
              <h4>64</h4>
              <p>Dys</p>
            </div>
            <div className="time">
              <div className="circle"></div>
              <h4>52</h4>
              <p>Hrs</p>
            </div>
            <div className="time">
              <div className="circle"></div>
              <h4>11</h4>
              <p>Min</p>
            </div>
            <div className="time">
              <div className="circle"></div>
              <h4>15</h4>
              <p>Sec</p>
            </div>
          </div>
          
        </div>
        <div className="btn2">
            <button>Shop now</button>
          </div>
      </div>
    </div>
  );
};

export default Dealtimer;
