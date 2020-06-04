import React from "react";

const Header = () => (
  <div className="header">
    <div className="logo-section">
      <div className="logo">
        <div />
        <span className="mask" />
      </div>
      <span>
        <span className="title" > Smile</span>
        <span>.</span>
      </span>
    </div>
    <div className="menu-section">
      <h4> About </h4>
      <h4> Blog </h4>
      <h4> Help </h4>
      <h4 className="account"> Account </h4>
    </div>
  </div>
);

export default Header;
