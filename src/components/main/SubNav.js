import React from "react";
import "../../styles/main/SubNav/SubNav.css";
import { NavLink } from "react-router-dom";

function SubNav() {
  return (
    <section className="subnav-wrapper">
      <div className="subnav-item">
        <NavLink to="tips">tips</NavLink>
      </div>
      <div className="vertical-line"></div>
      <div className="subnav-item">
        <NavLink to="flossary">flossary</NavLink>
      </div>
      <div className="vertical-line"></div>
      <div className="subnav-item">
        <NavLink to="faqs">faqs</NavLink>
      </div>
    </section>
  );
}

export default SubNav;
