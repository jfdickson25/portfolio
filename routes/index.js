const express = require('express');
const router = express.Router();

const home = require('./home');
const about = require('./about');
const projects = require('./projects');

// set default route and content
router
    .use('/', home)
    .use('/about', about)
    .use('/projects', projects);

router.get('/contact', (req, res, next) => {
    res.render('contact', {
        title: "Contact",
        active: "contact"
    });
});
router.get('/experience', (req, res, next) => {
    res.render('experience', {
        title: "Experience",
        active: "experience"
    });
});

module.exports = router;