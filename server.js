// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const passport = require('passport');
var bodyParser = require('body-parser')
// const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const path = require("path");
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// session
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 120000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sess));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));
});