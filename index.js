const express = require('express');
const routes = require('./routes');
var app = express();

const PORT = process.env.PORT || 3000;

// set where are dynamic views will be stored
app
    .set('views', __dirname + '/views')
    // set default view engine
    .set('view engine', 'ejs')
    // set up directory for static files
    .use(express.static(__dirname + '/public'))
    .use(routes)
    // run localhost
    .listen(PORT, function () {
        console.log('Listening on port: ' + PORT);
    });