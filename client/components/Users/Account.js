import React from "react";
import { connect } from "react-redux";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  componentDidMount() {
    const { lName, fName, email } = this.props.user;
    this.setState({ fName, lName, email });
  }

  render() {
    return (
      <form className="form" style={{ paddingTop: "41rem" }}>
        <input
          name="lName"
          value={this.state.lName}
          onChange={this.handleChange}
        />
        <input
          name="fName"
          value={this.state.fName}
          onChange={this.handleChange}
        />
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit">Change Info</button>
      </form>
    );
  }
}

const mS = ({ user }) => ({ user });

export default connect(mS)(Account);
