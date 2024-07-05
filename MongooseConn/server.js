const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://127.0.0.1:27017/Users').then(() => {
    console.log('MongoDB Connected');
});

const User = require('./models/User.js');

//Import Routers
const UserRouter = require('./routes/routes.js');
const LoginRouter = require('./routes/login.js');
const ProductRouter = require('./routes/products.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/getcookie', (req, res) => {
    res.clearCookie("Session_Details");
    console.log('Cookies: ', req.cookies); // Debugging statement
    res.send(`Cookie Value: `);
});
app.use('/login', LoginRouter);
app.use('/user', UserRouter);
app.use('/product', ProductRouter);


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
