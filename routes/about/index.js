const express = require('express');
const router = express.Router();

// set default route and content
router
    .get('/', (req, res, next) => {
        res.status(200).render('about', {
            title: "About",
            active: "about"
        });
    });

module.exports = router;