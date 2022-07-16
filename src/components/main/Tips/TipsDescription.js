import React from "react";
import "../../../styles/main/TipsDescription/TipsDescription.css";

const TipsDescription = (props) => {
  return (
    <section className="tips-description">
      <div className="tips-photo">
        <div className="tips-title">
          <h3>System Patching</h3>
          <div className="tips-img-wrapper">
            <img src="./assets/circle.png" alt="tips" />
          </div>
        </div>
      </div>
      <article className="tips-article">
        <p>
          Theres nothing hackers love more than a dismissed update reminder. We
          keep our teams computers in shape and up to date so that they arent
          subject to attacks that could otherwise be avoided. <br />
          <br /> Not properly updating your systems makes you an easy to reach
          target and hackers will often go after the lowest hanging fruit. When
          it comes to maintaining a strong cybersecurity network the best thing
          a user can do is to prevent problems before they occur, and the
          easiest way to do that is by making sure that all systems are updated
          and updated regularly.
        </p>
        <div className="after-article">
          <div className="tip-oval">
            <span>&#8520;</span>
          </div>
          <div className="tip-report">
            <p>Based on the 2018 Verizon Data Breach Report</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TipsDescription;
