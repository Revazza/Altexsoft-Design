import React from "react";
import "../../../styles/main/Faqs/Faqs.css";
import FaqsItem from "./FaqsItem";

function Faqs() {
  return (
    <section className="faqs-wrapper" id="faqsSection">
      <h3>
        Skout <span>FAQs</span>
      </h3>

      <div className="faqs-list">
        <FaqsItem title="What are your system requirements?" />
        <FaqsItem title="Is SKOUT windows and Mac compatible?" />
        <FaqsItem title="Do I need an MSP or Technology provider to get SKOUT?" />
        <FaqsItem title="Is there a trial program?" />
        <FaqsItem title="Can I get a Demo?" />
        <FaqsItem title="Can I create my own security package?" />
        <FaqsItem title="Is SKOUT only for businesses? Or can I get SKOUT for personal use?" />
      </div>
    </section>
  );
}

export default Faqs;
