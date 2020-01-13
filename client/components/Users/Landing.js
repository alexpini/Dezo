import React from "react";
import { connect } from "react-redux";
import { me } from "../../store";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  state = {
    options: [
      { id: 1, name: "Buy", url: "/purchase" },
      { id: 2, name: "Find Dezo", url: "/buy" },
      { id: 3, name: "My Account", url: "/account" }
    ]
  };
  render() {
    const { user } = this.props;
    return (
      <div style={{ paddingTop: "10rem" }}>
        <h1 style={{ textAlign: "center" }}>Welcome {user.fName}</h1>
        <label style={{ fontSize: "3rem" }}>What would you like to do?</label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "2.5rem"
          }}
        >
          {this.state.options.map(o => {
            return (
              <Link to={o.url} key={o.id}>
                {o.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mS = ({ user }) => ({ user });
const mD = { me };

export default connect(mS, mD)(Landing);
