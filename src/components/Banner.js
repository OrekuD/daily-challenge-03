import React from "react";
import Img from "../images/img.jpg";
import { Play } from "../svg/Svg";

const Banner = () => (
  <div className="banner">
    <img src={Img} alt="Background" />
    <div className="banner-container">
      <div className="section-1">
        <p> Beauty </p>
        <p>
          is Power<span>.</span>
        </p>
      </div>
      <hr />
      <div className="section-2">
        <p> The best part of beauty is that which </p>
        <p> no picture can express </p>
      </div>
      <div className="section-3">
        <Play size="15px" color="#ff6724" />
        <p> Watch video </p>
      </div>
    </div>
  </div>
);

export default Banner;
