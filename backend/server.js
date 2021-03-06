const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const API_PORT = 3001;
const flash = require('connect-flash')
const cookie = require('cookie-parser')
const message = require('express-messages')
const session = require('express-session')
require('dotenv').config();
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'public')))


// Connect flash Middleware-----------------------------------------------------------------------------------------------
app.use(cookie())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());

const route = require('./Route/farmerroute')
const admin = require('./Route/adminroute')

app.use("/", route);
app.use('/admin', admin)








//Set Public 
//app.set(express.static(path.join(__dirname,"/public")))



// append /api for our http requests


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));