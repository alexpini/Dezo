import React, { Component } from "react";
import { HashLink as Link, Redirect } from "react-router-hash-link";
import store, { me, logout } from "../store";
import { connect } from "react-redux";
import Products from "./Products/Products";
import About from "./About/About";

//links solid orange and webkit enlarge when hovered
import ScrollspyNav from "react-scrollspy-nav";

class Nav extends Component {
  async componentDidMount() {
    await this.props.me();
  }
  render() {
    return (
      <div className="navbar">
        <div>
          <ScrollspyNav
            scrollTargetIds={[
              "home",
              "about",
              "products",
              "press",
              "contact",
              "find"
            ]}
            activeNavClass="active"
            scrollDuration="1000"
          >
            <ul className="nav-links">
              <li>
                <a className="nav-links" href="/">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a className="nav-links" href="#about">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a className="nav-links" href="#products">
                  <span>Products</span>
                </a>
              </li>
              <li>
                <a className="nav-links" href="#press">
                  <span>Press</span>
                </a>
              </li>
              <li>
                <a className="nav-links" href="#contact">
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a className="nav-links" href="#find-dezo">
                  <span>Find Dezo</span>
                </a>
              </li>
            </ul>
          </ScrollspyNav>
        </div>
      </div>
    );
  }
}

const mS = ({ user }) => ({ user });

const mD = {
  me,
  logout
};

export default connect(mS, mD)(Nav);

// class Nav extends Component {
//   async componentDidMount() {
//     await this.props.me();
//   }

//   render() {
//     const { user } = this.props;
//     return (
//       <nav className="navbar navbar-expand-lg" id="nav">
//         <span className="logo"></span>
//         <Link
//           to="/about"
//           activeclassname="active"
//           className="nav-links"
//           style={{
//             textDecoration: "none",
//             color: "#fff",
//             fontWeight: "bolder"
//           }}
//         >
//           About
//         </Link>
//         <Link
//           to="/about#product"
//           className="nav-links"
//           activeclassname="active"
//           style={{
//             textDecoration: "none",
//             color: "#fff",
//             fontWeight: "bolder"
//           }}
//         >
//           Products
//         </Link>
//         <Link
//           to="/press"
//           className="nav-links"
//           activeclassname="active"
//           style={{
//             textDecoration: "none",
//             color: "#fff",
//             fontWeight: "bolder"
//           }}
//         >
//           Press
//         </Link>
//         <Link
//           to="/contact"
//           className="nav-links"
//           activeclassname="active"
//           style={{
//             textDecoration: "none",
//             color: "#fff",
//             fontWeight: "bolder"
//           }}
//         >
//           Contact
//         </Link>
//         <Link
//           to="/buy"
//           className="nav-links"
//           activeclassname="active"
//           style={{
//             textDecoration: "none",
//             color: "#fff",
//             fontWeight: "bolder"
//           }}
//         >
//           Find Dezo
//         </Link>
//         {user.email ? (
//           <a
//             onClick={() => this.props.logout()}
//             href="#"
//             className="nav-links"
//             style={{
//               textDecoration: "none",
//               color: "#fff",
//               fontWeight: "bolder"
//             }}
//           >
//             Logout
//           </a>
//         ) : (
//           <Link
//             to="/dezo/admin"
//             className="nav-links"
//             activeclassname="active"
//             style={{
//               textDecoration: "none",
//               color: "#fff",
//               fontWeight: "bolder"
//             }}
//           >
//             SignUp/Login
//           </Link>
//         )}
//         <div className="nav-toggle"><a href="#" data-toggle="collapse" data-target=".inner-navigation"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></a></div>
//       </nav>
//     );
//   }
// }

// const mS = ({ user }) => ({ user });

// const mD = {
//   me,
//   logout
// };

// export default connect(mS, mD)(Nav);
