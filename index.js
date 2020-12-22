const express = require('express');
var bodyParser = require("body-parser");
const routes = require('./routes');
var app = express();
const session = require('express-session');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.json()) //support json encoded bodies
app.use(express.urlencoded({
    extended: true
})) // support url encoded bodies
app.set('port', process.env.PORT || 5000)
// set up directory for static files
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(routes);

// set where are dynamic views will be stored
app.set('views', __dirname + '/views');
// set default view engine
app.set('view engine', 'ejs');

// run localhost
app.listen(app.get('port'), function () {
    console.log('Listening on port: ' + app.get('port'));
});