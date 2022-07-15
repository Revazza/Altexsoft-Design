import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/header/Header.css";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="nav-wrapper">
        <div className="logo">
          <h1>SKOUT</h1>
        </div>
        <div className="nav-list-wrapper">
          <nav className="nav-list">
            <div className="nav-link">
              <NavLink to="why-skout" >
                Why Skout
              </NavLink>
              <div className="underline"></div>
            </div>
            <div className="nav-link">
              <NavLink to="products">Products</NavLink>
              <div className="underline"></div>
            </div>
            <div className="nav-link">
              <NavLink to="partners">Partners</NavLink>
              <div className="underline"></div>
            </div>
            <div className="nav-link">
              <NavLink to="company">Company</NavLink>
              <div className="underline"></div>
            </div>
            <div className="nav-link">
              <NavLink to="tips-tools">Tips & Tools</NavLink>
              <div className="underline"></div>
            </div>
            <div className="nav-link">
              <NavLink to="blog">Blog</NavLink>
              <div className="underline"></div>
            </div>
          </nav>
          <div className="nav-btn-wrapper">
            <div className="nav-btn">
              <button>Get Skout</button>
            </div>
            <div className="nav-btn" id="secondNavBtn">
              <button>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
