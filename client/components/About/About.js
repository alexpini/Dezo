import React from "react";
import {Products} from "../Products/Products";
// import ConnectWith from "../Connect/ConnectWIth";
import { Link } from "react-router-dom";
// import CreateProduct from "../Products/CreateProduct";
import { Page2 } from "./Page2";
import { Page22 } from "./Page2-2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import {PressAbout} from "../Press/PressAbout";

class About extends React.Component {
  render() {
    return (
      <div
        className="parallax"
        style={{
          backgroundImage: "url(../../assets/images/dezo-product-resize.png)",
          width: "100% !important"
        }}
      >
        <Page2 />
        <Page22 />
        <div>
          <Products/>
        </div>

        <Page3 />
        <Page4 />
        <div className="about-container-2"></div>

        <div className="about-page-">
          {/* <h1>
            Follow us on IG{" "}
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.instagram.com/drinkdezo/"
              target="_blank"
            >
              @DrinkDezo
            </a>
          </h1> */}
          {/* <PictureGrid /> */}
        </div>
        <div
          id="embedded-press"
          style={{
            backgroundColor: "white"
          }}
        >
          <PressAbout/>


        </div>
      </div>
    );
  }
}

export default About;
