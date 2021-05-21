const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ejs = require('ejs');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
const dotenv = require("dotenv");// env variables
dotenv.config();
const path = require('path');


// server init
const app = express();
const PORT = process.env.PORT || 5000;


// Connection to mongodb
const CONNECTION_DB = process.env.CONNECTION_DB;
mongoose.connect(CONNECTION_DB, { useNewUrlParser: true , useUnifiedTopology: true});


// Routes imports
const auth_routes = require('./routes/auth_routes.js');
const home_routes = require('./routes/home_routes.js');
const post_routes = require('./routes/post_routes.js');
const article_routes = require('./routes/article_routes.js');


// middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());


// Here all AUTH Routes
app.use('/', auth_routes);

// middleware to authorize user via jwt token (every time a route is hit, except for login and signup Route)
// dont call middleware before login because you cant get any tokens
app.use(require('./middlewares/checkAuth.js'));

// HERE ALL ROOT ROUTES
app.use('/home', home_routes);
app.use('/post', post_routes);
app.use('/article', article_routes);

app.listen(PORT);