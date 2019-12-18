import React from "react";
import Products from "../Products/Products";
import ConnectWith from "../Connect/ConnectWIth";
import Press from "../Press/Press";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <section className="about-container" onClick={this.scrollToRef}>
          <div onClick={() => this.myRef.current.focus()}>
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
        {/* not sure if you want this here for the scroll thingy
            if you do, we could just import a bunch of components 
            here and they will display in order or whatever */}
        <div id="prod-cont" ref={this.myRef}>
          <Products />
        </div>
        <Press />
        <ConnectWith />
        <h2 style={{ textAlign: "center" }}>General Questions?</h2>
        <div style={{ textAlign: "center" }}>
          <Link to="/connect">Ask Away!</Link>
        </div>
      </div>
    );
  }
}

export default About;
