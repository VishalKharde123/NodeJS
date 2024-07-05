const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

router.get('/', (req, res) => {
    return res.render('index');
});

router.get('/:name',async (req, res) => {
    const name = req.params.name;
    
    const foundedRecord = await User.find({firstName: name});
    console.log(foundedRecord);
    return res.send(foundedRecord);
});

router.get('/delete/:name',async (req, res) => {
    const name = req.params.name;

    const foundedRecord = await User.deleteOne({firstName: name});
    //console.log(foundedRecord);
    return res.send('Deleted');
});

router.post('/submit_form',async (req, res)=>{
    //console.log(req.body);
    await User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }).then(()=>{
        return res.end('OK');
    })
    .catch(err => res.end('Account exists'));
    
});

router.get('/getCookies', (req, res) => {
    console.log(req.cookies);
});


module.exports = router;