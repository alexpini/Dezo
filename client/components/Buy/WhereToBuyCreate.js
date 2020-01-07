import React from "react";
import { connect } from "react-redux";
import { createStoreLocation } from "../../store";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Pointer } from "./Pointer";
import { getAllStores } from "../../store";

class _WhereToBuyCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address1: "",
      city: "",
      state: "",
      zip: "",
      loading: true,
      coords: {}
      // googKey: "AIzaSyCJblvO7be-wNH0eobhQLL6cY06OWCV5Go"
    };
  }
  async componentDidMount() {
    this.props.getAllStores();
    await window.navigator.geolocation.getCurrentPosition(async position => {
      const obj = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      await this.setState({ coords: obj });
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.createStoreLocation(this.state);
  };
  render() {
    const { stores, user } = this.props;
    const email = user.email || "";
    const { lat, lng } = this.state.coords;
    if (!this.state.coords.lat) {
      return <div style={{ height: "80vh", width: "100vw" }}> Loading .. </div>;
    } else {
      return (
        <section style={{ paddingTop: "20rem" }}>
          <h1>Your Location: </h1>
          <h3>
            Lat: {lat}, Long: {lng}
          </h3>
          {user.isAdmin && (
            <form onSubmit={this.handleSubmit} className="form">
              <h4>Add New Store, {email}</h4>
              <label>Name: </label>
              <input
                name="name"
                placeholder="store name"
                onChange={this.handleChange}
              />
              <label>Address Line 1: </label>
              <input
                name="address1"
                placeholder="address line 1"
                onChange={this.handleChange}
              />
              <label>City: </label>
              <input
                name="city"
                placeholder="city"
                onChange={this.handleChange}
              />
              <label>State: </label>
              <input
                name="state"
                placeholder="state"
                onChange={this.handleChange}
                maxLength="2"
              />
              <label>Zip: </label>
              <input
                name="zip"
                placeholder="zip"
                onChange={this.handleChange}
                maxLength="5"
              />
              <button type="submit">Create Location</button>
            </form>
          )}

          <div>
            {stores.length && (
              // <Map
              //   google={this.props.google}
              //   initialCenter={this.state.coords}
              //   zoom={11}
              //   style={{ height: "100vh", width: "100%" }}
              // >
              <div>
                {stores.map(s => {
                  return (
                    <Pointer
                      position={{ lat: s.lat, lng: s.lng }}
                      name={s.name}
                      key={s.id}
                    />
                  );
                })}
              </div>
              // </Map>
            )}
          </div>
        </section>
      );
    }
  }
}

const mD = {
  createStoreLocation: createStoreLocation,
  getAllStores: getAllStores
};

const mS = ({ stores, user }) => ({ stores, user });
const WhereToBuyCreate = connect(mS, mD)(_WhereToBuyCreate);

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCJblvO7be-wNH0eobhQLL6cY06OWCV5Go"
// })(WhereToBuyCreate);

export default WhereToBuyCreate;
