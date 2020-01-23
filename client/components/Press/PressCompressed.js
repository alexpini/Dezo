import React from "react";
import { getPressArticles } from "../../store";
import { connect } from "react-redux";

class PressCompressed extends React.Component {
  componentDidMount() {
    this.props.getPressArticles();
  }
  render() {
    let { press } = this.props;
    let articles = [];
    if (this.props.about) {
      articles = press.slice(0, 3);
    } else {
      articles = press.slice();
    }
    return (
      <div
        className="new"
        style={{
          backgroundColor: "white",
          width: "100%"
        }}
      >
        <div className="press-compressed">
          {articles.map(p => {
            return (
              <div
                className="press-child"
                key={p.id}
                style={{
                  textAlign: "center"
                }}
              >
                <a href={p.link} target="_blank">
                  <img src={p.imgURL} height="120vh" width="150vh" />
                </a>
                <h4
                  style={{
                    paddingTop: "1rem"
                  }}
                >
                  {p.name}
                </h4>
                <div>{p.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mS = ({ press }) => ({ press });
const mD = { getPressArticles };

export default connect(mS, mD)(PressCompressed);






// import React from "react";
// import { connect } from "react-redux";
// import { createPressArticles } from "../../store";

// class Press extends React.Component {
//   state = {
//     name: "",
//     description: "",
//     link: "",
//     imgURL: ""
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.createPressArticles(this.state);
//   };

//   render() {
//     const { user } = this.props;
//     return (
//       <div id="press" style={{ paddingTop: "5rem" }}>
//         {/* {user.isAdmin && ( */}
//         <form>
//           <label>Image</label>
//           <input name="imgURL" onChange={this.handleChange} />
//           <label>Name</label>
//           <input name="name" onChange={this.handleChange} />
//           <label>Desc</label>
//           <input
//             name="description"
//             onChange={this.handleChange}
//             type="textarea"
//           />
//           <label>Link</label>
//           <input name="link" onChange={this.handleChange} type="textarea" />

//           <button onClick={this.handleSubmit} type="submit">
//             ENTER
//           </button>
//         </form>
//         {/* )} */}
//       </div>
//     );
//   }
// }

// const mS = ({ user }) => ({ user });
// const mD = { createPressArticles };

// export default connect(mS, mD)(Press);
