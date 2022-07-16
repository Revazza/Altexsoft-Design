import React from "react";
import "../../styles/footer/FooterLocation.css";
function FooterLocation(props) {
  return (
    <div className="footer-location">
      <div className="footer-loc-title">
        <label>{props.title}</label>
      </div>
      <div className="footer-loc-phone">
        <label>{props.phoneNumber}</label>
      </div>
      <div className="footer-loc-address">
        <label>
          {props.address}
        </label>
      </div>
      <div className="footer-loc-map">
        <a href="#">View Map</a>
      </div>
    </div>
  );
}

export default FooterLocation;
