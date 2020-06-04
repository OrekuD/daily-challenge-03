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
      <a href="/"> About </a>
      <a href="/"> Blog </a>
      <a href="/"> Help </a>
      <a href="/" className="account"> Account </a>
    </div>
  </div>
);

export default Header;
