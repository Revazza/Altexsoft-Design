import React, { useState, useEffect } from "react";
import "../../../styles/main/GlossaryAttr/GlossaryAttributes.css";

const items = [
  "Botnet",
  "Breach",
  "Cloud",
  "DDoS",
  "Domain",
  "Endpoint",
  "Exploit",
  "Firewall",
  "IP Address",
  "Malware",
  "Penetration Test",
  "Phishing/Spearphishing",
  "Ransomware",
  "Session Hijacking",
  "Social Engineering",
  "Software",
  "SOC",
  "Trojan Horse",
  "VPN",
  "Virus",
  "Worm",
];

function GlossaryAttributes(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState();
  const [itemOffSett, setItemOffSett] = useState(0);
  const [nextBtnClass, setNextBtnClass] = useState("gloss-next-btn");
  const [prevBtnClass, setPrevBtnClass] = useState(
    "gloss-prev-btn gloss-disabled"
  );

  const handleAttributeClick = (event) => {
    props.onChangeSection(event.target.id);
  };

  let itemsPerPage = 15;

  useEffect(() => {
    const slicedItems = items.slice(0, itemsPerPage);
    setCurrentItems(slicedItems);
  }, [itemsPerPage, items]);
  useEffect(() => {
    if (currentItems?.includes(items[items.length - 1])) {
      setNextBtnClass("gloss-next-btn gloss-disabled");
    }
    if (currentPage === 1) {
      setPrevBtnClass("gloss-prev-btn gloss-disabled");
    }
  }, [currentItems]);

  const handleNextBtnClick = () => {
    if (prevBtnClass.includes("disabled")) {
      setPrevBtnClass("gloss-prev-btn");
    }
    if (nextBtnClass.includes("disabled")) {
      return;
    }
    const slicedItems = items.slice(
      itemOffSett + itemsPerPage,
      itemsPerPage * (currentPage + 1)
    );

    setItemOffSett(itemOffSett + itemsPerPage);
    setCurrentPage((prevState) => ++prevState);
    setCurrentItems(slicedItems);
  };
  const handlePrevBtnClick = () => {
    if (nextBtnClass.includes("disabled")) {
      setNextBtnClass("gloss-next-btn");
    }
    if (currentPage === 1) {
      return;
    }

    const slicedItems = items.slice(
      itemOffSett - itemsPerPage,
      itemsPerPage * (currentPage - 1)
    );
    setItemOffSett(itemOffSett - itemsPerPage);
    setCurrentPage((prevState) => --prevState);
    setCurrentItems(slicedItems);
  };

  return (
    <section className="gloss-attr-wrapper">
      <div className={nextBtnClass} onClick={handleNextBtnClick}>
        <img src="./assets/next-btn.png" alt="next" />
      </div>
      <div className={prevBtnClass} onClick={handlePrevBtnClick}>
        <img src="./assets/next-btn.png" alt="prev" />
      </div>
      <div className="gloss-attr-list">
        <div className="gloss-list">
          <ul>
            {currentItems?.map((item) => (
              <div
                className={
                  props.currentSection === item
                    ? "gloss-list-item gloss-item-selected"
                    : "gloss-list-item"
                }
                key={item}
              >
                <li id={item} onClick={handleAttributeClick}>
                  {item}
                </li>
                <div className="gloss-list-item-line"></div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GlossaryAttributes;
