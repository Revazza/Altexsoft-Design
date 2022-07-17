import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header/Header.css";

function Header() {
  //changing header background
  const [headerClass, setHeaderClass] = useState("header-wrapper");
  const [showSlider, setShowSlider] = useState(false);
  const [sliderID, setSliderID] = useState("");
  const [menuID,setMenuID] = useState();
  const changeBackground = () => {
    if (window.scrollY > 150 && !headerClass.includes("header-active-bckg")) {
      setHeaderClass("header-wrapper header-active-bckg");
    } else if (window.scrollY < 150) {
      setHeaderClass("header-wrapper");
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleMenuClick = () => {
    if (!showSlider) {
      setSliderID("showSlider");
      setMenuID('menuAnimation');
      setShowSlider(true);
    } else {
      setSliderID("hideSlider");
      setMenuID('menuCloseAnimation');
      setTimeout(() => {
        setShowSlider(false);
      }, 700);
    }
  };

  return (
    <header className={headerClass}>
      <div className="nav-wrapper">
        <div className="logo">
          <h1>SKOUT</h1>
        </div>
        <div className="nav-list-wrapper" id={sliderID}>
          <nav className="nav-list">
            <div className="nav-link">
              <NavLink
                to="why-skout"
                state={{
                  section: "why skout",
                }}
                onClick={handleMenuClick}
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
                onClick={handleMenuClick}
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
                onClick={handleMenuClick}
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
                onClick={handleMenuClick}
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
                onClick={handleMenuClick}
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
                onClick={handleMenuClick}
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
        <div className="hamburger-menu" onClick={handleMenuClick} id={menuID}>
          <div
            className="hamburger-line"
            id={showSlider ? "burgerFirstLine" : ""}
          ></div>
          <div
            className="hamburger-line"
            id={showSlider ? "burgerMiddleLine" : ""}
          ></div>

          <div
            className="hamburger-line"
            id={showSlider ? "burgerThirdLine" : ""}
          ></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
