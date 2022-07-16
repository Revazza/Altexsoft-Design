import React, { useState } from "react";
import "../../../styles/main/TipsItem/TipsItem.css";
import TipsDescription from "./TipsDescription";

import Collapsible from "react-collapsible";

function TipsItem(props) {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  const myElement = (
    <React.Fragment>
      <div className="tips-header" onClick={handleShowDescription}>
        <div className="tips-number">
          <p>{props.itemNum}</p>
        </div>
        <div className="tips-title">
          <p>{props.title}</p>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div className="tips-item">
      <Collapsible trigger={myElement} openedClassName="showItem">
        <TipsDescription itemNum={props.itemNum} title={props.title} />
      </Collapsible>
      <div className="tips-oval" >
        <div className="crossX"></div>
        {!showDescription && <div className="crossY"></div>}
      </div>
    </div>
  );
}

export default TipsItem;
