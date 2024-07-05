const express = require('express')

const app = express();

var jwt = require('jsonwebtoken');
//var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//console.log(token);

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const cookieP = require('cookie-parser');

app.use(cookieP());

const data = {
    "Name": "Vishal Kharde",
    "Company": "Winjit Technologies"
}

app.get('/data', (req, res)=>{
    return res.status(200).json(data);
});

const secretKey = "SignedByVishal";

app.post('/', (req, res)=>{
    console.log(req.body);
    token = jwt.sign(req.body, secretKey, {expiresIn: 60 * 10});
    console.log(token);
    res.cookie("Token", token);
    jwt.verify(token, secretKey, function(err, decoded){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(decoded);
        }
    })
    return res.send('/');
});

app.get('/verify', (req, res)=>{
    jwt.verify(req.cookies.Token, secretKey, function(err, decoded){
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(decoded);
        }
    })
    return res.send('Hello');
});

app.get('*', (req, res)=>{
    return res.status(404).send('Page not found');
});

app.listen(3000);