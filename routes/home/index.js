const express = require('express');
const router = express.Router();

// set default route and content
router.get('/', (req, res, next) => {
    res.render('home', {
        title: "Home",
        active: "home"
    });
});

module.exports = router;