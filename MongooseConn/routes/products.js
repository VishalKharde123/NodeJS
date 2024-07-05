const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.cookies.length);
    if (!req.cookies.Session_Details) {
        return res.redirect('/login');
    }
    return res.send('Products page');
})

module.exports = router;