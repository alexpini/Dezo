const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const app = express();
const PORT = process.env.PORT || 42069;
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const { User, Press, Store } = require("./db/models");
const sessionStore = new SequelizeStore({ db });
// require("dotenv").config();
//so we can read environment variables
if (process.env.NODE_ENV !== "production") {
  require("../secrets");
}
require("dotenv").config();

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const createApp = () => {
  // logging middleware
  app.use(volleyball);

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // compression middleware
  // app.use(compression())

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "my best friend is Cody",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // api routes
  app.use("/api", require("./api"));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, "..", "public")));

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // sends index.html
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = async () => {
  // start listening (and create a 'server' object representing our server)
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
};
const seed = async () => {
  try {
    await User.findOrCreate({
      where: {
        email: "dezo@email.com",
        fName: "Marc",
        lName: "W.",
        isAdmin: true
      },
      defaults: {
        password: "1"
      }
    });
    await Press.findOrCreate({
      where: {
        name: "Dezo Article One"
      },
      defaults: {
        description: "Small blurb about the article goes here.",
        imgURL: "https://jooinn.com/images/fresh-150.jpg",
        link: "https://www.instagram.com/drinkdezo/"
      }
    });
    await Press.findOrCreate({
      where: {
        name: "Dezo Article Two"
      },
      defaults: {
        description: "Small blurb about the article goes here.",
        imgURL: "https://jooinn.com/images/fresh-150.jpg",
        link: "https://www.instagram.com/drinkdezo/"
      }
    });
    await Press.findOrCreate({
      where: {
        name: "Dezo Article Three"
      },
      defaults: {
        description: "Small blurb about the article goes here.",
        imgURL: "https://jooinn.com/images/fresh-150.jpg",
        link: "https://www.instagram.com/drinkdezo/"
      }
    });
    await Press.findOrCreate({
      where: {
        name: "Dezo Article Four"
      },
      defaults: {
        description: "Small blurb about the article goes here.",
        imgURL:
          "https://cdn.artaic.com/wp-content/uploads/2015/03/artaic-orange-nature-poppy-tangerine-splash-tile-0300810-900x600.jpg",
        link: "https://www.instagram.com/drinkdezo/"
      }
    });
    await Press.findOrCreate({
      where: {
        name: "Dezo Article Five"
      },
      defaults: {
        description: "Small blurb about the article goes here.",
        imgURL: "https://jooinn.com/images/fresh-150.jpg",
        link: "https://www.instagram.com/drinkdezo/"
      }
    });
    await Press.findOrCreate({
      where: {
        name: "Dezo Article Six"
      },
      defaults: {
        description: "Small blurb about the article goes here.",
        imgURL: "https://jooinn.com/images/fresh-150.jpg",
        link: "https://www.instagram.com/drinkdezo/"
      }
    });
    await Store.findOrCreate({
      where: {
        name: "Pini's Pizzeria"
      },
      defaults: {
        address1: "749 Boston RD",
        city: "Billerica",
        state: "MA",
        zip: "01821",
        flavors: "Spiked Coconut Water, Spiked Cactus Water",
        lat: 42.5584,
        lng: -71.2689
      }
    });

    await Store.findOrCreate({
      where: {
        name: "Toms Tacos"
      },
      defaults: {
        address1: "1150 Laurel Ln",
        city: "San Luis Obispo",
        state: "CA",
        zip: "93401",
        flavors: "Spiked Watermelon Water",
        lat: 35.2828,
        lng: -120.6596
      }
    });
    await Store.findOrCreate({
      where: {
        name: "House"
      },
      defaults: {
        address1: "2458 Walnut St",
        city: "Walnut Park",
        state: "CA",
        zip: "90255",
        flavors: "Any Flavor",
        lat: 34.0522,
        lng: -118.2437
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const syncDb = async () => {
  db.sync({ force: true });
  // db.sync();
};

async function bootApp() {
  await sessionStore.sync();
  await syncDb();
  // await seed();
  await createApp();
  await startListening();
}

bootApp();

module.exports = app;
