const express = require('express');

const router = express.Router();

//Import model
const User = require('../models/User.js');

//Usign uuid as a session id
const { v4 } = require('uuid');

router.get('/', (req, res) => {
    return res.render('login');
});

router.post('/validateLogin', async (req, res) => {
    //console.log(req.body);
    const foundUser = await User.findOne({ 'email': req.body.email });
    // console.log(fountUser);
    if (foundUser == undefined) {
        return res.send('Invalid user');
    }
    if (foundUser.password == req.body.password) {
        res.cookie("Session_Details", v4());
        return res.send('Homepage');
    }
    else {
        return res.send('Invalid password');
    }
    //return res.send("Done");
});

module.exports = router;