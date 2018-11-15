import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import FontAwesome from "react-fontawesome";
import SideNav from "./SideNav/SideNav";

const Header = props => {
  const navBars = () => (
    <div className="bars">
      <FontAwesome
        name="bars"
        onClick={props.onOpenNav}
        style={{
          color: "#dfdfdf",
          padding: "12px",
          cursor: "pointer"
        }}
      />
    </div>
  );

  const logo = () => (
    <Link to="/" className="logo">
      <img alt="nba logo" src="/images/nba_logo.png" />
    </Link>
  );

  return (
    <header className="header">
      <SideNav {...props} />
      <div className="headerOpt">
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;
