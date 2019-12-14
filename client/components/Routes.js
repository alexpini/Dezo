import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./Products/Products";
import About from "./About/About";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
      </Switch>
    );
  }
}

export default Routes;
