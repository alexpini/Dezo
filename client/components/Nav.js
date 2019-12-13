import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/press">Press</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    );
  }
}

export default Nav;
