import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="logo"></span>
        <NavLink
          to="/about"
          activeClassName="active"
          style={{ textDecoration: "none", color: "black" }}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          activeClassName="active"
          style={{ textDecoration: "none", color: "black" }}
        >
          Products
        </NavLink>
        <NavLink
          to="/press"
          activeClassName="active"
          style={{ textDecoration: "none", color: "black" }}
        >
          Press
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="active"
          style={{ textDecoration: "none", color: "black" }}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/buy"
          activeClassName="active"
          style={{ textDecoration: "none", color: "black" }}
        >
          Where To Buy
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
