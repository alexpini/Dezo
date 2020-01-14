import React from "react";
import { Press } from "./Press";
import { getPressArticles } from "../../store";
import { connect } from "react-redux";

class PressMaster extends React.Component {
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
        id="press"
        className="parallax"
        style={{
          backgroundImage: "url(../../assets/images/forest-water.jpg)"
        }}
      >
        {articles.map(p => {
          return (
            <div key={p.id} style={{ paddingTop: "5rem" }}>
              <a href={p.link} target="_blank">
                <img src={p.imgURL} height="100" width="100" />
              </a>
              <h4>{p.name}</h4>
              <div>{p.description}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mS = ({ press }) => ({ press });
const mD = { getPressArticles };

export default connect(mS, mD)(PressMaster);
