import React from "react";
import { ConnHeaders, ConnLinks } from "./ConnHeaders";

export default class ConnectWith extends React.Component {
  render() {
    return (
      <section style={{ marginTop: "15rem", height: "auto", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>Connect With Us</h1>
        <ConnHeaders />
        <ConnLinks />
      </section>
    );
  }
}
