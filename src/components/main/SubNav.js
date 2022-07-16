import React from "react";
import "../../styles/main/SubNav/SubNav.css";
import { NavLink } from "react-router-dom";

function SubNav() {
  return (
    <section className="subnav-wrapper">
      <div className="subnav-item">
        <a href="#tipsSection">tips</a>
      </div>
      <div className="vertical-line"></div>
      <div className="subnav-item">
        <a href="#glossarySection">glossary</a>
      </div>
      <div className="vertical-line"></div>
      <div className="subnav-item">
        <a href="faqs">faqs</a>
      </div>
    </section>
  );
}

export default SubNav;
