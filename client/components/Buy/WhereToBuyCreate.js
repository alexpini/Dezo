import React from "react";
import { connect } from "react-redux";
import { createStoreLocation } from "../../store";
import { Pointer } from "./Pointer";
import { getAllStores } from "../../store";
import GoogleMapReact from "google-map-react";

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
      coords: {},
      googKey: process.env.GOOG_KEY
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
    const fName = user.fName || "";
    const { lat, lng } = this.state.coords;
    // if (!this.state.coords.lat) {
    //   return <div style={{ height: "80vh", width: "100vw" }}> Loading .. </div>;
    // } else {
    return (
      <div style={{ paddingTop: "5rem", height: "auto" }}>
        {/* <h1>Your Location: </h1>
        <h3>
          Lat: {lat}, Long: {lng}
        </h3> */}
        {user.isAdmin && (
          <form onSubmit={this.handleSubmit} className="form add-store">
            <h4 style={{ textAlign: "center" }}>Add New Store, {fName}</h4>
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

        <div style={{ height: "auto", width: "100%" }}>
          {stores.length && (
            // <GoogleMapReact
            //   bootstrapURLKeys={{ key: this.state.googKey }}
            //   defaultCenter={this.state.coords}
            //   defaultZoom={11}
            // >
            <div>
              {stores.map(s => {
                return (
                  <Pointer
                    // lat={s.lat}
                    // lng={s.lng}
                    // name={s.name}
                    store={s}
                    key={s.id}
                  />
                );
              })}
            </div>
            // </GoogleMapReact>
          )}
        </div>
      </div>
    );
  }
  // }
}

const mD = {
  createStoreLocation: createStoreLocation,
  getAllStores: getAllStores
};

const mS = ({ stores, user }) => ({ stores, user });
const WhereToBuyCreate = connect(mS, mD)(_WhereToBuyCreate);

export default WhereToBuyCreate;
