import React, { useState } from "react";
import "../../../styles/main/TipsItem/TipsItem.css";
import TipsDescription from "./TipsDescription";

function TipsItem(props) {
  const [showDescription, setShowDescription] = useState(true);

  const handleShowDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  return (
    <div className="tips-item">
      {!showDescription && (
        <React.Fragment>
          <div className="tips-header" onClick={handleShowDescription}>
            <div className="tips-number">
              <p>1</p>
            </div>
            <div className="tips-title">
              <p>Some Title</p>
            </div>
          </div>
        </React.Fragment>
      )}
      <div className="tips-oval" onClick={handleShowDescription}>
        <div className="crossX"></div>
        {!showDescription && <div className="crossY"></div>}
      </div>
      {showDescription && <TipsDescription />}
    </div>
  );
}

export default TipsItem;
