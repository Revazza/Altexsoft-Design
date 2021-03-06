import React, { useState } from "react";
import "../../../styles/main/Glossary/Glossary.css";
import GlossaryAttributes from "./GlossaryAttributes";

function Glossary() {
  const [currentSection, setCurrentSection] = useState("Botnet");

  const handleSectionChange = (newSection) => {
    setCurrentSection(newSection);
  };

  return (
    <section className="glossary-wrapper" >
      <h3>
        Skout <span>Glossary</span>
      </h3>

      <section className="glossary-topic">
        <div className="glossary-description">
          <h3>{currentSection}</h3>
          <div className="glossary-topic-description">
            <div className="glossary-vertical-line"></div>
            <article className="glossary-article">
              <p>
                Code that is masked so that a human or computer unintentionally
                allows it to replicate itself to spread for the purpose of
                compromising, corrupting, or destroying a system.
              </p>
            </article>
          </div>
        </div>
      </section>

      <GlossaryAttributes onChangeSection={handleSectionChange} currentSection={currentSection}/>
    </section>
  );
}

export default Glossary;
