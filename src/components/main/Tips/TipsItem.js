import React, { useState } from "react";
import "../../../styles/main/TipsItem/TipsItem.css";
import TipsDescription from "./TipsDescription";

function TipsItem(props) {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  return (
    <div className="tips-item" onClick={handleShowDescription}>
      {!showDescription && (
        <React.Fragment>
          <div className="tips-header">
            <div className="tips-number">
              <p>1</p>
            </div>
            <div className="tips-title">
              <p>Some Title</p>
            </div>
          </div>
          <div className="tips-oval">
            <div className="crossX"></div>
            {!showDescription && <div className="crossY"></div>}
          </div>
        </React.Fragment>
      )}
      {showDescription && <TipsDescription />}
    </div>
  );
}

export default TipsItem;
