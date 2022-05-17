import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/084 crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/shop" className="option">
            CONTACT
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Header;
