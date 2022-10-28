const express = require('express');
const router = express.Router();

let nodemailer = require('nodemailer');


router
    .get('/', (req, res, next) => {
        res.render('contact', {
            title: "Contact",
            active: "contact"
        });
    })
    .post('/message', (req, res, next) => {
        console.log(req.body);
        let name = req.body.name;
        let email = req.body.email;
        let msg = req.body.msg;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'jfdickson25@gmail.com',
              pass: 'Oz2@Pw6NX*zL7&iE'
            }
          });
          
        let mailOptions = {
            from: 'jfdickson25@gmail.com',
            to: 'jfdickson25@gmail.com',
            subject: 'Email from portfolio',
            html: `<h1>From: ${name}</h1><h2>Email: ${email}</h2><p>${msg}</p>`
          };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
          
    });

module.exports = router;