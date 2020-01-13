import React, { Component } from "react";
import { HashLink as Link, Redirect } from "react-router-hash-link";
import store, { me, logout } from "../store";
import { connect } from "react-redux";

//links solid orange and webkit enlarge when hovered

class Nav extends Component {
  async componentDidMount() {
    await this.props.me();
  }

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg">
        <span className="logo"></span>
        <Link
          to="/about"
          activeclassname="active"
          className="nav-links"
          style={{
            textDecoration: "none",
            color: "#fff",
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
            color: "#fff",
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
            color: "#fff",
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
            color: "#fff",
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
            color: "#fff",
            fontWeight: "bolder"
          }}
        >
          Find Dezo
        </Link>
        {user.email ? (
          <a
            onClick={() => this.props.logout()}
            href="#"
            className="nav-links"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bolder"
            }}
          >
            Logout
          </a>
        ) : (
          <Link
            to="/dezo/admin"
            className="nav-links"
            activeclassname="active"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "bolder"
            }}
          >
            SignUp/Login
          </Link>
        )}
        <div className="nav-toggle"><a href="#" data-toggle="collapse" data-target=".inner-navigation"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></a></div>
      </nav>
    );
  }
}

const mS = ({ user }) => ({ user });

const mD = {
  me,
  logout
};

export default connect(mS, mD)(Nav);
