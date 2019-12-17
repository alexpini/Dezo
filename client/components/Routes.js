import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./Products/Products";
import About from "./About/About";
import Press from "./Press/Press";
import ConnectWith from "./Connect/ConnectWIth";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/about" />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ConnectWith} />
        <Route exact path="/press" component={Press} />
      </Switch>
    );
  }
}

export default Routes;
