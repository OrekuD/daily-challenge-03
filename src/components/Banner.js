import React from "react";
import Img from "../images/img.jpg";

const Banner = () => (
  <div className="banner">
    <img src={Img} alt="Background" />
    <div className="banner-container"></div>
  </div>
);

export default Banner;
