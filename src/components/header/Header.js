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
              <NavLink
                to="why-skout"
                state={{
                  section: "why skout",
                }}
              >
                Why Skout
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink
                to="products"
                state={{
                  section: "products",
                }}
              >
                Products
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink
                to="partners"
                state={{
                  section: "partners",
                }}
              >
                Partners
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink
                to="company"
                state={{
                  section: "company",
                }}
              >
                Company
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink
                to="tips-tools"
                state={{
                  section: "Tips&Tools",
                }}
              >
                Tips & Tools
              </NavLink>
            </div>
            <div className="nav-link">
              <NavLink
                to="blog"
                state={{
                  section: "blog",
                }}
              >
                Blog
              </NavLink>
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
