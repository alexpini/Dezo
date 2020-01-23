import React, { Component } from "react";
import { HashLink as Link, Redirect } from "react-router-hash-link";
import store, { me, logout } from "../store";
import { connect } from "react-redux";
import Products from "./Products/Products";
import About from "./About/About";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//links solid orange and webkit enlarge when hovered
// import ScrollspyNav from "react-scrollspy-nav";

class Nav extends Component {
  async componentDidMount() {
    await this.props.me();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark primary-color">
        <a id="logo" className="navbar-brand mr-auto" href="/">
          <img src="../assets/images/white-logo-15.png" href="/about"></img>
        </a>
        <div class="social-icons">
          <li>
            <a
              className="navbar-brand mr-auto"
              href="https://www.instagram.com/drinkdezo/"
            >
              <img
                src="../assets/images/instagram.svg"
                href="https://www.instagram.com/drinkdezo/"
              ></img>
            </a>
          </li>
          <li>
            <a
              className="navbar-brand mr-auto"
              href="https://www.facebook.com/drinkdezo/"
            >
              <img
                src="../assets/images/facebook.svg"
                href="https://www.facebook.com/drinkdezo/"
              ></img>
            </a>
          </li>
          <li>
            <a
              className="navbar-brand mr-auto"
              href="https://www.linkedin.com/company/vitalize-holdings-inc/"
            >
              <img
                src="../assets/images/linkedin.svg"
                href="https://www.linkedin.com/company/vitalize-holdings-inc/"
              ></img>
            </a>
          </li>
        </div>

        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>

</button> */}

        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#basicExampleNav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Our Story</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PRODUCTS
              </a>
              <div
                className="dropdown-menu dropdown-primary"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  className="dropdown-item"
                  id="dropdown-item-coconut"
                  href="#"
                >
                  Spiked Coconut Water
                </a>
                <a className="dropdown-item" id="dropdown-item-cactus" href="#">
                  Spiked Cactus Water
                </a>
                <a
                  className="dropdown-item"
                  id="dropdown-item-watermelon"
                  href="#"
                >
                  Spiked Watermelon Water
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Press</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>Contact</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/buy/">
                <span id="find-dezo">Find Dezo</span>
              </a>
            </li>
          </ul>

          {/* <form className="form-inline">
    <div className="md-form my-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
    </div>
  </form> */}
        </div>
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

//   render() {
//     return (
//       <nav className="navbar nav-bar-fixed-top navbar-light navbar-expand-sm">
//       {/* <div className="container-fluid"> */}
//               <a className="navbar-brand" href="/"><img src="../assets/images/dezo-logo.png"></img></a>
//       <div className="d-flex flex-row order-2 order-sm-3">
//       <ul className="navbar-nav flex-row">
//         <li className="nav-item"><a className="nav-link px-2">HELLO<i className="fab fa-facebook"></i></a></li>
//       </ul>
//       </div>

//         <div>
//           <ScrollspyNav
//             scrollTargetIds={[
//               "home",
//               "about",
//               "products",
//               "press",
//               "contact",
//               "find"
//             ]}
//             activeNavClass="active"
//             scrollDuration="1000"
//           >
//             <ul className="nav-inner">

//               <li>
//                 <a className="nav-links" href="/">
//                   <span>Home</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-links" href="#about">
//                   <span>About</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-links" href="#products">
//                   <span>Products</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-links" href="#press">
//                   <span>Press</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-links" href="#contact">
//                   <span>Contact</span>
//                 </a>
//               </li>
//               <li>
//                 <a className="nav-links" href="#find-dezo">
//                   <span>Find Dezo</span>
//                 </a>
//               </li>
//             </ul>
//           </ScrollspyNav>
//         </div>
//       </nav>
//     );
//   }
// }

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
