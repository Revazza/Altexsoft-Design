import React from "react";
import "../../styles/footer/Footer.css";
import FooterLocation from "./FooterLocation";

function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div className="footer-link-wrapper">
          <div className="footer-link" id='firstFooterLink'>
            <a href="#">Blog</a>
          </div>
          <div className="footer-link">
            <a href="#">Company</a>
          </div>
          <div className="footer-link">
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer-link">
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-link">
            <a href="#">Careers</a>
          </div>
          <div className="footer-link">
            <a href="#">Better Call Saul</a>
            <p>1-855-838-4500</p>
          </div>
        </div>
        <div className="footer-locations">
          <FooterLocation
            title="New York"
            phoneNumber="+1 631-203-6600"
            address="423 W 55th St. 7th Floor
New York, NY, 10019"
          />
          <FooterLocation
            title="Corporate Headquarters"
            phoneNumber="+1 631-203-6600"
            address="270 S. Service Road, Suite 55
            Melville, NY, 11747"
          />
          <FooterLocation
            title="EMEA"
            phoneNumber="+353-1-6600800"
            address="IDA Business and Technology Park, Mountrath Road, Unit 2
            Portlaoise, Ireland"
          />
        </div>
      </div>
      <div className="footer-social">
        <div className="footer-social-icons">
          <div className="social-icon">
            <img src="./assets/twitter.png" alt="twitter" />
          </div>
          <div className="social-icon">
            <img src="./assets/facebook.png" alt="facebook" />
          </div>
          <div className="social-icon">
            <img src="./assets/youtube.png" alt="youtube" />
          </div>
          <div className="social-icon">
            <img src="./assets/linkedin.png" alt="linkedin" />
          </div>
        </div>
        <div className="footer-website-title">
          <h3>skout</h3>
          <span>cybersecur</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
