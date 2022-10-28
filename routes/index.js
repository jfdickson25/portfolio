const express = require('express');
const router = express.Router();

const home = require('./home');
const about = require('./about');
const projects = require('./projects');
const contact = require('./contact')
const experience = require('./experience');

// set default route and content
router
    .use('/', home)
    .use('/about', about)
    .use('/projects', projects)
    .use('/contact', contact)
    .use('/experience', experience);

module.exports = router;