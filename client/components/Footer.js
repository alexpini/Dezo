import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-subcontainer">
          <img
            src="../../assets/images/white-logo-18.png"
            alt="logo"
            style={{ width: "10vw", height: "auto" }}
          />
          <div class="social-icons">
            <li><a className="navbar-brand mr-auto" href="https://www.instagram.com/drinkdezo/"><img src="../assets/images/instagram.svg" href="https://www.instagram.com/drinkdezo/"></img></a></li>
            <li><a className="navbar-brand mr-auto" href="https://www.facebook.com/drinkdezo/"><img src="../assets/images/facebook.svg" href="https://www.facebook.com/drinkdezo/"></img></a></li>
            <li><a className="navbar-brand mr-auto" href="https://www.linkedin.com/company/vitalize-holdings-inc/"><img src="../assets/images/linkedin.svg" href="https://www.linkedin.com/company/vitalize-holdings-inc/"></img></a></li>
        </div>
        <p>&copy; 2020 Vitalize Holdings</p>
        </div>
      </div>
    );
  }
}
