import React from "react";
import { ConnHeaders, ConnLinks } from "./ConnHeaders";

export default class ConnectWith extends React.Component {
  render() {
    return (
      <section style={{ paddingTop: "15rem" }}>
        <h1 style={{ textAlign: "center" }}>Connect With Us</h1>
        <ConnHeaders />
        <ConnLinks />
      </section>
    );
  }
}
