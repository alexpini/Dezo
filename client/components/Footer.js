import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-subcontainer">
          <img
            src="../../assets/images/dezo-logo.png"
            alt="logo"
            style={{ width: "10vw", height: "10vw" }}
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              About Dezo
            </Link>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              Products
            </Link>
            <Link
              to="/press"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              Press
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "1vw"
              }}
            >
              Contact
            </Link>
          </div>
          <div class="social-icons">
    <li><a className="navbar-brand mr-auto" href="https://www.instagram.com/drinkdezo/"><img src="../assets/images/instagram.svg" href="https://www.instagram.com/drinkdezo/"></img></a></li>
     <li><a className="navbar-brand mr-auto" href="https://www.facebook.com/drinkdezo/"><img src="../assets/images/facebook.svg" href="https://www.facebook.com/drinkdezo/"></img></a></li>
    <li><a className="navbar-brand mr-auto" href="https://www.linkedin.com/company/vitalize-holdings-inc/"><img src="../assets/images/linkedin.svg" href="https://www.linkedin.com/company/vitalize-holdings-inc/"></img></a></li>
  </div>
        </div>
      </div>
    );
  }
}
