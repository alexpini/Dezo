import React from "react";
import Products from "../Products/Products";
import ConnectWith from "../Connect/ConnectWIth";
import Press from "../Press/Press";


class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <section className="about-container" onClick={this.scrollToRef}>
          <div>
            What's
            <br /> dezo?
          </div>
          <div>
            <span>
              Dezo is derived from the French phrase "Des Eaux" meaning "of the
              waters."
            </span>
            <span>
              Story Story Story Story Story Story Story Story Story Story Story
              Story
            </span>
          </div>
        </section>
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
        <Products />
        <Press />
        <ConnectWith />
      </div>
    );
  }
}

export default About;
