import React from "react";
import PressCompressed from "./PressCompressed";
import { Link } from "react-router-dom";

export const PressAbout = props => {
  return (
    <div>
    <h1>Articles</h1>
      <PressCompressed
            about={true}
            style={{
              backgroundColor: "white !important",
              height:  "50% !important"
            }}
            />
        <div id="wrapper">
          <Link to="/press"><button id="press-button" type="submit">VIEW MORE</button></Link>
        </div>
    </div>
  );
};
