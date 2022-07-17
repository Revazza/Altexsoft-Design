import React, { useState } from "react";
import "../../../styles/main/FaqsItem/FaqsItem.css";
import Collapsible from "react-collapsible";

function FaqsItem(props) {
  const [showAnswer, setShowAnser] = useState(false);

  const handleShowAnswer = () => {
    setShowAnser((prevState) => !prevState);
  };

  const faqsHeader = (
    <React.Fragment>
      <div className="faqs-item-header" onClick={handleShowAnswer}>
        <div className="faqs-item-question">
          <p>Q</p>
        </div>
        <div className="faqs-item-question-wrapper">
          <div className="faqs-item-ques-title">
            <p>{props.title}</p>
          </div>
          <div className="faqs-item-arrow">
            <img
              className={showAnswer ? "rotate-arrow":""}
              src="./assets/dropdown-arrow.png"
              alt="open answer"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  return (
    <div className="faqs-item-wrapper">
      <Collapsible trigger={faqsHeader}>
        <div className="faqs-answer">
          <div className="faqs-item-question" id="faqsItemAnswer">
            <p id="faqsAnswer">A</p>
          </div>
          <article className="faqs-article">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover
            </p>
          </article>
        </div>
      </Collapsible>
    </div>
  );
}

export default FaqsItem;
