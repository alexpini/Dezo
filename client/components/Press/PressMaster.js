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
        className="new"
        style={{
          // backgroundImage: "url(../../assets/images/LA-skyline.jpg)",
          backgroundColor: "white",
          width: "100%"
        }}
      >
       <section className="about-press" id="new">
        <h1>Press</h1>
    </section>
    <div id="press" className="press">

        {articles.map(p => {
          return (
            <div className="press-child" key={p.id} style={{
            textAlign: "center"}}>
              <a href={p.link} target="_blank">
                <img src={p.imgURL} height="120vh" width="150vh" />
              </a>
              <h4
              style={{
          paddingTop: "1rem"
        }}>{p.name}</h4>
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

export default connect(mS, mD)(PressMaster);
