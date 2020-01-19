import React from "react";
import { connect } from "react-redux";
import { createStoreLocation } from "../../store";
import { getAllStores } from "../../store";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import { Pointer } from "./Pointer";
import axios from "axios";

console.log(process.env.GOOG_KEY);

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
      show: false,
      storeName: "",
      goog:
        process.env.GOOG_KEY ||
        "wwwwAIvjnsdzaSyAmr2BCU8-PycL9HHxbhLrQVV5gg9Q92CM",
      coords: {}
    };
  }
  mouseMaker = (props, marker, e) => {
    this.setState({ show: true, storeName: props.name });
  };

  async componentDidMount() {
    this.props.getAllStores();
    await window.navigator.geolocation.getCurrentPosition(async position => {
      let obj = {};
      obj.lat = position.coords.latitude;
      obj.lng = position.coords.longitude;

      if ((!obj.lng || !obj.lat) && this.props.stores.length) {
        obj.lng = this.props.stores[0].lng;
        obj.lat = this.props.stores[0].lat;
      }
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
    this.setState({ name: "", address1: "", city: "", state: "", zip: "" });
  };
  render() {
    const { stores, user } = this.props;
    const fName = user.fName || "";
    const { name, address1, city, state, zip, show, storeName } = this.state;
    let store = {};
    if (show) {
      store = stores.find(s => s.name === storeName);
    }
    if (!this.state.coords.lat) {
      return <div style={{ height: "60vh", width: "70vw" }}> Loading .. </div>;
    } else {
      return (
        <div style={{ paddingTop: "5rem", height: "auto" }}>
          <div>
            <h1>Locations</h1>
            {user.isAdmin && (
              <form onSubmit={this.handleSubmit} className="form add-store">
                <h4 style={{ textAlign: "center" }}>Add New Store, {fName}</h4>
                <label>Name: </label>
                <input
                  value={name}
                  name="name"
                  placeholder="store name"
                  onChange={this.handleChange}
                />
                <label>Address Line 1: </label>
                <input
                  value={address1}
                  name="address1"
                  placeholder="address line 1"
                  onChange={this.handleChange}
                />
                <label>City: </label>
                <input
                  value={city}
                  name="city"
                  placeholder="city"
                  onChange={this.handleChange}
                />
                <label>State: </label>
                <input
                  value={state}
                  name="state"
                  placeholder="state"
                  onChange={this.handleChange}
                  maxLength="2"
                />
                <label>Zip: </label>
                <input
                  value={zip}
                  name="zip"
                  placeholder="zip"
                  onChange={this.handleChange}
                  maxLength="5"
                />
                <button type="submit">Create Location</button>
              </form>
            )}

            <div style={{ height: "auto", width: "100%" }}>
              {this.state.show && <Pointer store={store} />}
            </div>
            {/* please do not remove div below. this is so the maps position: absolute can be 'faked.' if you change the size of the map, you must change these accordingly to equal the same size ALLLEEEXXXAANNDDRRRRRAAA */}
            <div
              style={{
                height: "40vh",
                width: "40vw"
              }}
            >
              {stores.length && (
                <Map
                  google={this.props.google}
                  initialCenter={this.state.coords}
                  zoom={7}
                  style={{
                    height: "40vh",
                    width: "40vw",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  {stores.map(s => {
                    return (
                      <Marker
                        key={s.id}
                        onMouseover={this.mouseMaker}
                        title={s.name}
                        name={s.name}
                        position={{ lat: s.lat, lng: s.lng }}
                        icon={{
                          url: "../../assets/images/dezo-logo.png",
                          anchor: new google.maps.Point(32, 32),
                          scaledSize: new google.maps.Size(35, 35)
                        }}
                      />
                    );
                  })}
                </Map>
              )}
            </div>
          </div>
        </div>
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

// export default WhereToBuyCreate;

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmr2BCU8-PycL9HHxbhLrQVV5gg9Q92CM"
})(WhereToBuyCreate);
