import React, { useState } from "react";
import "../../../styles/main/TipsItem/TipsItem.css";
import TipsDescription from "./TipsDescription";

import Collapsible from "react-collapsible";

function TipsItem(props) {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    if (showDescription) {
      setTimeout(() => {
        setShowDescription((prevState) => !prevState);
      }, 500);
    } else {
      setShowDescription((prevState) => !prevState);
    }
  };

  const myElement = (
    <React.Fragment>
      {!showDescription && (
        <div className="tips-header" onClick={handleShowDescription}>
          <div className="tips-number">
            <p>{props.itemNum}</p>
          </div>
          <div className="tips-title">
            <p>{props.title}</p>
          </div>
        </div>
      )}
      <div className="tips-oval" onClick={handleShowDescription}>
        <div className="crossX"></div>
        {!showDescription && <div className="crossY"></div>}
      </div>
    </React.Fragment>
  );

  return (
    <div className="tips-item">
      <Collapsible trigger={myElement} openedClassName="showItem">
        <TipsDescription itemNum={props.itemNum} title={props.title} />
      </Collapsible>
    </div>
  );
}

export default TipsItem;
