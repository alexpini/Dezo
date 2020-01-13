import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../store";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      email: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.props;
    if (!user.id) {
      this.setState({ error: "Nope" });
    }
    const { fName, lName, email } = this.state;
    const obj = { fName, lName, email };
    this.props.updateUser(obj, user.id);
  };

  componentDidMount() {
    const { lName, fName, email } = this.props.user;
    this.setState({ fName, lName, email });
  }

  render() {
    return (
      <div style={{ paddingTop: "10rem" }}>
        <h1>Update Account Info</h1>
        <form className="form add-store">
          <label></label>
          <input
            name="fName"
            value={this.state.fName}
            onChange={this.handleChange}
          />
          <input
            name="lName"
            value={this.state.lName}
            onChange={this.handleChange}
          />
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Change Info
          </button>
        </form>
      </div>
    );
  }
}

const mS = ({ user }) => ({ user });
const mD = { updateUser };

export default connect(mS, mD)(Account);
