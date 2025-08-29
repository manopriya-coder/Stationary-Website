import React from "react";
import Leftside from "../Leftside/Leftside";
import Rightside from "../Rightside/Rightside";
import './Shopbody.css'

const Shopbody = () => {
  return (
    <>
      <div className="combination">
        <Leftside />
        <Rightside />
      </div>
    </>
  );
};

export default Shopbody;
