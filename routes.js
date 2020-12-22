const express = require('express');
const router = express.Router();

// set default route and content
router.get('/', (req, res, next) => {
    res.render('home', {
        title: "Home",
        active: "home"
    });
});

router.get('/about', (req, res, next) => {
    res.render('about', {
        title: "About",
        active: "about"
    });
});

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
router.get('/projects', (req, res, next) => {
    res.render('projects', {
        title: "Projects",
        active: "projects"
    });
});

module.exports = router;