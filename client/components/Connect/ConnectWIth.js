import React from "react";
import { ConnHeaders, ConnLinks } from "./ConnHeaders";

const press = [
  { name: "Tom", phone: "123-456-7890" },
  { name: "Alex", phone: "123-456-7890" },
  { name: "Marc", phone: "123-456-7890" },
  { name: "Matt", phone: "123-456-7890" },
  { name: "Eliot", phone: "123-456-7890" },
  { name: "Jonathan", phone: "123-456-7890" }
];

export default class ConnectWith extends React.Component {
  state = {
    press: []
  };
  componentDidMount() {
    this.setState({ press });
  }
  render() {
    return (
      <div id="press" style={{ padding: "15rem" }}>
        <h1 style={{ textAlign: "center" }}>Contact</h1>
        <div className="press-container">
          {this.state.press.map((p, idx) => {
            return (
              <div key={idx}>
                {p.name}
                <br />
                {p.phone}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// export default class ConnectWith extends React.Component {
//   render() {
//     return (
//       <section id="contact" style={{ marginTop: "15rem", height: "600px", margin: "auto" }}>
//         <div className='connect'>
//           <h1 style={{ textAlign: "center" }}>Connect With Us</h1>
//           <ConnHeaders />
//           <ConnLinks />
//         </div>
//       </section>
//     );
//   }
// }
