import React from "react";
import Products from "../Products/Products";
// import ConnectWith from "../Connect/ConnectWIth";
import { Link } from "react-router-dom";
// import CreateProduct from "../Products/CreateProduct";
import { Page2 } from "./Page2";
import { Page22 } from "./Page2-2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import PressMaster from "../Press/PressMaster";
import { PictureGrid } from "./PictureGrid";

class About extends React.Component {
  render() {
    return (
      <div
        className="parallax"
        style={{
          backgroundImage: "url(../../assets/images/forest-water.jpg)"
        }}
      >
        {/* <div onClick={() => this.myRef.current.scrollIntoView(false)}> */}
        {/* <section className="about-container"> */}
        {/* <img src="../../assets/images/landing-photo.png" width="100%" /> */}
        {/* </section> */}
        {/* <section id='about-slogan' onClick={this.scrollToRef}>
          <div>
            <h2 id=''>
              The World's Most Vitalizing Spiked Fruit Water
            </h2>
          </div>
        </section> */}
        {/* not sure if you want this here for the scroll thingy
            if you do, we could just import a bunch of components
            here and they will display in order or whatever */}
        <Page2 />
        <Page22 />
        <div>
          <Products />
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

        <PressMaster about={true} />
      </div>
    );
  }
}

export default About;
