import React from "react";
import { connect } from "react-redux";
import { createPressArticles } from "../../store";

class Press extends React.Component {
  state = {
    name: "",
    description: "",
    link: "",
    imgURL: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPressArticles(this.state);
  };

  render() {
    const { user } = this.props;
    return (
      <div id="press" style={{ paddingTop: "5rem" }}>
        {/* {user.isAdmin && ( */}
        <form>
          <label>Image</label>
          <input name="imgURL" onChange={this.handleChange} />
          <label>Name</label>
          <input name="name" onChange={this.handleChange} />
          <label>Desc</label>
          <input
            name="description"
            onChange={this.handleChange}
            type="textarea"
          />
          <label>Link</label>
          <input name="link" onChange={this.handleChange} type="textarea" />

          <button onClick={this.handleSubmit} type="submit">
            ENTER
          </button>
        </form>
        {/* )} */}
      </div>
    );
  }
}

const mS = ({ user }) => ({ user });
const mD = { createPressArticles };

export default connect(mS, mD)(Press);
