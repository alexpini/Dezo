import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./Products/Products";
import About from "./About/About";
import Press from "./Press/Press";
import PressMaster from "./Press/PressMaster";
import ConnectMaster from "./Connect/ConnectMaster";
import WhereToBuy from "./Buy/WhereToBuy";
import WhereToBuyMaster from "./Buy/WhereToBuyMaster";
import Landing from "./Users/Landing";
import CreateProduct from "./Products/CreateProduct";
import AuthForm from "./Users/CreateAdmin";
import axios from "axios";
import Account from "./Users/Account";

class Routes extends Component {
  state = {
    isLoggedIn: false
  };
  async componentDidMount() {
    const { data } = await axios.get("/api/auth/me");
    if (data) {
      await this.setState({ isLoggedIn: true });
    }
  }
  render() {
    const { isLoggedIn } = this.state;

    return (
      <Switch>
        <Redirect exact from="/" to="/about" />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ConnectMaster} />
        <Route exact path="/press" component={PressMaster} />
        <Route exact path="/buy" component={WhereToBuyMaster} />
        <Route exact path="/dezo/admin/" component={AuthForm} />
        <Route exact path="/articles" component={Press} />
        {/* <Route exact path="/dezo/admin" component={Login} /> */}
        {isLoggedIn && (
          <Switch>
            {/* <Route exact path="/products/create" component={CreateProduct} /> */}
            <Route exact path="/userhome" component={Landing} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/articles" component={Press} />
          </Switch>
        )}
      </Switch>
    );
  }
}

export default Routes;
