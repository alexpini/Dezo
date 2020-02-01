const db = require("../db");
const Sequelize = require("sequelize");
const id = {
  type: Sequelize.UUID,
  primaryKey: true,
  unique: true,
  defaultValue: Sequelize.UUIDV4
};

const Store = db.define("store", {
  id: id,
  name: {
    type: Sequelize.STRING
  },
  address1: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.STRING
  },
  lat: {
    type: Sequelize.FLOAT
  },
  lng: {
    type: Sequelize.FLOAT
  },
  flavors: {
    type: Sequelize.STRING
  }
});

Store.geo = async function(address1, city, state, zip, googleMapsClient) {
  const oldLocation = await this.findOne({
    where: {
      address1,
      city,
      state,
      zip
    },
    attributes: ["lat", "lng"]
  });
  if (oldLocation) {
    return {
      lat: oldLocation.lat,
      lng: oldLocation.lng
    };
  } else {
    const location = await googleMapsClient
      .geocode({
        address: `${address1}, ${city}, ${state} ${zip}`
      })
      .asPromise();
    return location.json.results[0].geometry.location;
  }
};

module.exports = Store;
