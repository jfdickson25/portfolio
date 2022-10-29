const express = require('express');
const router = express.Router();

// set default route and content
router
    .get('/', (req, res, next) => {
        res.status(200).render('projects/projects', {
            title: "Projects",
            active: "projects"
        });
    })
    .get('/whereToWatch', (req, res, next) => {
        res.status(200).render('projects/project', {
            title: "Where to Watch",
            active: "projects",
            projectImg: "/img/projects/where-to-watch-iphone.png",
            header: "Where to Watch",
            overview: "Web application for searching where movies and television shows can be viewed with a subscription. " +
            "This app is a backend application using EJS as a template for creating components to display HMTL with the flexability " +
            "of using Javascript logic.<br><br>This application is also a PWA (Progressive web application) so it can be downloaded " +
            "and used as if it were a mobile application.",
            tech: "Node, Express, EJS, PWA",
            linkName: "Where to Watch",
            link: "https://where-to-watch.onrender.com"
        });
    })
    .get('/weeklyGoals', (req, res, next) => {
        res.status(200).render('projects/project', {
            title: "Weekly Goals",
            active: "projects",
            projectImg: "/img/projects/weekly-goals-iphone.png",
            header: "Weekly Goals",
            overview: "Web application for tracking weekly goals. The user can create goals " +
            "and attach them to specific days of the week. The main screen will display the goals " +
            "of the day with a progress bar to track how many have been completed. At the end of each " +
            "day the ratio will be recorded in the database and a running percentage is available in the settings " +
            "section.<br><br>This application schedules cloud functions to run each night at 11:59pm to consistently " +
            "keep track of goals for all users.",
            tech: "Vue, Node, Firebase, PWA, Firebase cloud functions",
            linkName: "Weekly Goals",
            link: "https://weekly-goals.onrender.com"
        });
    })
    .get('/ourLists', (req, res, next) => {
        res.status(200).render('projects/project', {
            title: "Our Lists",
            active: "projects",
            projectImg: "/img/projects/our-lists-iphone.png",
            header: "Our Lists",
            overview: "A web application for sharing lists across users. The user can create lists " +
            "afterwhich they will receive a share code. With this share code another user can join their " +
            "list.<br><br>This application uses Socket.io for communicating changes to a list between devices. " +
            "changes that one user makes will be seen without refreshing to page on another users device.",
            tech: "Node, Express, EJS, PWA, MongoDB, Socket.io",
            linkName: "Our Lists",
            link: "https://our-lists.onrender.com"
        });
    })

module.exports = router;