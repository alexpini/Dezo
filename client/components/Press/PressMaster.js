import React from "react";
import { Press } from "./Press";

export default class PressMaster extends React.Component {
  render() {
    return (
      <div
        className="parallax"
        style={{
          backgroundImage: "url(../../assets/images/forest-water.jpg)"
        }}
      >

        <Press />

      </div>
    );
  }
}
