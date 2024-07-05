const express = require('express')

const router = express.Router();

const upload = require('../controllers/uploadBlog');

const BlogModel = require('../models/BlogModel');

const sessionMiddleware = require('../controllers/sessionManage');

router.get('/', sessionMiddleware, (req, res)=>{
    res.render('blogPage');
});

router.post('/add', upload.single('blogImg'),async (req, res, next) => {
    // console.log(req.file.path);
    //console.log(req.body);
    //console.log(req.cookies.BlogApplication.name);
    var str = req.file.destination;
    str = str.replace('./uploads','');

    await BlogModel.create({
        title: req.body.title,
        desc: req.body.desc,
        imgUrl: str + '/' + req.file.filename,
        createdBy: req.cookies.BlogApplication.name,
        timeStamp: new Date()
    }
    );
    return res.redirect('/');
});

module.exports = router;