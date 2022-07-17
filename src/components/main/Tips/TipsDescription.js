import React from "react";
import "../../../styles/main/TipsDescription/TipsDescription.css";

const TipsDescription = (props) => {
  return (
    <section className="tips-description">
      <div className="tips-photo">
        <div className="tips-title">
          <h3>{props.title}</h3>
        </div>
        <div className="tips-img-wrapper">
          <img src="./assets/circle.png" alt="tips" />
        </div>
      </div>
      <article className="tips-article">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor.
          <br />
          <br /> at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC.
        </p>
        <div className="after-article">
          <div className="tip-after-oval">
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
