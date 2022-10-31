const express = require('express');
const router = express.Router();

// set default route and content
router.get('/', (req, res, next) => {
    res.send(200).render('home', {
        title: "Home",
        active: "home"
    });
});

module.exports = router;