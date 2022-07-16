import React from "react";
import "../../styles/main/SubNav/SubNav.css";

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
        <a href="#faqsSection">faqs</a>
      </div>
    </section>
  );
}

export default SubNav;
