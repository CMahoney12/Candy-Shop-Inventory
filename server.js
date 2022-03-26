// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require("path")
const routes = require('./controllers');
const sequelize = require('./config/connection');
// var exphbs = require("express-handlebars");
var session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Requiring passport as we've configured it
// var passport = require("./config/passport");

// Compress
// var compression = require('compression')

// session
const sess = {
  secret: 'Super secret secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8090;

// compress all responses
// app.use(compression())

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(passport.session());

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));
});
