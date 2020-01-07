import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store, { auth } from "../../store";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
class AuthForm extends React.Component {
  constructor() {
    super();
    this.state = {
      pwCheck: false,
      error: "",
      login: "Login"
    };
  }

  handleChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (
      this.state.password !== this.state.passwordCheck &&
      this.state.login === false
    ) {
      this.setState({ error: "passwords don't match" });
    } else {
      await this.setState({
        email: this.state.email.toLowerCase()
      });
      try {
        const name = this.state.login === "Login" ? "login" : "signup";
        await store.dispatch(auth(this.state, name));
        if (!this.props.user.id) {
          this.setState({ error: "No user" });
        } else {
          this.props.history.push("/about");
        }
      } catch (er) {
        console.log(er);
      }
    }
  };

  render() {
    const { name, displayName, user } = this.props;

    return (
      <div
        style={{
          paddingTop: "20rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "200px",
          height: "auto",
          backgroundColor: "lightgrey",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <div
          style={{ textAlign: "center" }}
          onClick={() =>
            this.setState({
              login: this.state.login === "Login" ? "Signup" : "Login"
            })
          }
        >
          {this.state.login === "Login" ? "Login" : "SignUp"}
        </div>
        <form name={name} className="home-body form" autoComplete="off">
          {this.state.login === "Login" ? (
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" onChange={this.handleChange} />
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input
                onFocus={() => this.setState({ error: "" })}
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" onChange={this.handleChange} />
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input
                onFocus={() => this.setState({ error: "" })}
                name="password"
                type="password"
                onChange={this.handleChange}
              />
              <label htmlFor="passwordChecker">
                <small>Re-Type Password</small>
              </label>
              <input
                onFocus={() => this.setState({ error: "" })}
                name="passwordCheck"
                type="password"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="fName">
                <small>First Name</small>
              </label>
              <input
                name="fName"
                type="text"
                placeholder="first name"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="lName">
                <small>Last Name</small>
              </label>
              <input
                name="lName"
                type="text"
                placeholder="last name"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="Secret Code">
                <small>Code</small>
              </label>
              <input
                name="code"
                type="text"
                placeholder="code"
                onChange={this.handleChange}
              />
            </div>
          )}

          {this.state.error !== null && <div>{this.state.error}</div>}
          {user.error && user.error.response && (
            <div> {user.error.response.data} </div>
          )}
          <div
            onClick={this.handleSubmit}
            className="choice types"
            style={{ marginTop: 0, color: "#B8B8B3" }}
            disabled={this.state.pwCheck}
          >
            {this.state.login === "Login" ? "Login" : "SignUp"}
          </div>
        </form>
      </div>
    );
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mS = ({ user }) => ({ user });

// export const Login = connect(mapLogin)(AuthForm);
// export const Signup = connect(mapSignup)(AuthForm);
export default connect(mS)(AuthForm);
/**
 * PROP TYPES
 */
// AuthForm.propTypes = {
//   // name: PropTypes.string.isRequired,
//   // displayName: PropTypes.string.isRequired,
//   error: PropTypes.object
// };
