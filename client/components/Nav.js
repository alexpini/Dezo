import React, { Component } from "react";
import { HashLink as Link, Redirect } from "react-router-hash-link";

//links solid orange and webkit enlarge when hovered

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="logo"></span>
        <Link
          to="/about"
          activeclassname="active"
          className="nav-links"
          style={{
            textDecoration: "none",
            color: "transparent",
            fontWeight: "bolder"
          }}
        >
          About
        </Link>
        <Link
          to="/about#product"
          className="nav-links"
          activeclassname="active"
          style={{
            textDecoration: "none",
            color: "transparent;",
            fontWeight: "bolder"
          }}
        >
          Products
        </Link>
        <Link
          to="/press"
          className="nav-links"
          activeclassname="active"
          style={{
            textDecoration: "none",
            color: "transparent",
            fontWeight: "bolder"
          }}
        >
          Press
        </Link>
        <Link
          to="/contact"
          className="nav-links"
          activeclassname="active"
          style={{
            textDecoration: "none",
            color: "transparent",
            fontWeight: "bolder"
          }}
        >
          Contact
        </Link>
        <Link
          to="/buy"
          className="nav-links"
          activeclassname="active"
          style={{
            textDecoration: "none",
            color: "transparent",
            fontWeight: "bolder"
          }}
        >
          Find Dezo
        </Link>
      </nav>
    );
  }
}

export default Nav;
