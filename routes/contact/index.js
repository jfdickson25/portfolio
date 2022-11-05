const express = require('express');
const router = express.Router();
require('dotenv').config();

let nodemailer = require('nodemailer');


router
    .get('/', (req, res, next) => {
        res.render('contact', {
            title: "Contact",
            active: "contact"
        });
    })
    .post('/message', (req, res, next) => {
        let name = req.body.name;
        let email = req.body.email;
        let msg = req.body.msg;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'jfdickson25@gmail.com',
              pass: 'qyesxoyvjzdvcgsz'
            }
          });
          
        let mailOptions = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: 'Email from portfolio',
            html: `<h1>From: ${name}</h1><h2>Email: ${email}</h2><p>${msg}</p>`
          };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.send(false);
            } else {
                res.send(true);
            }
        });
          
    });

module.exports = router;