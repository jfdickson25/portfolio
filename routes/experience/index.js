const express = require('express');
const router = express.Router();

router
    .get('/', (req, res, next) => {
        res.render('experience', {
            title: "Experience",
            active: "experience"
        });
    });

module.exports = router;