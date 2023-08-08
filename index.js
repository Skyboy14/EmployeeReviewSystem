const express = require('express');
const port = 8000;
const app = express();
const expressLayout = require('express-ejs-layouts');
const path = require('path')

//  DataBase
const db = require('./config/mongoose');

const bodyParser = require('body-parser');

// Creating session
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

const MongoStore = require('connect-mongo');

app.use(bodyParser.urlencoded({ extended: false }));

// static file location
app.use(express.static('./public'));

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('layout', './layouts/_layout')

app.set('views', path.join(__dirname, 'views'))

app.use(expressLayout);

app.use(session({
    name: "ERS",
    secret: "employeeReviewSystem",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://yadavakash224ay:bLzBl8vcXXK4claR@cluster0.g31rbfx.mongodb.net/?retryWrites=true&w=majority',
        autoRemove: 'disabled'
    },
        (err) => {
            console.log(err);
        }
    )
}))

// Using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Routes
app.use('/', require('./routes/index'));


// Setting up the server 
app.listen(port, function (err) {
    if (err) {
        console.log("Error while connecting to port", err);
        return;
    }
    console.log("Server is up & running at port :", port);
});