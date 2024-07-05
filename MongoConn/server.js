const express = require('express')
const path = require('path');
const app = express();

const { get } = require('https');

app.set('view engine', 'ejs');

const insertRecord = require('./insertMongo');

//For submitting data from webpage to nodejs.
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, 'public');


app.get('/', function(req, res)
{
    res.sendFile(`${staticPath}/Index.html`);
    console.log(req.query.name);
    console.log(req.ip);
    //getData();
});

app.get("/about", function(req, res)
{
    const user = {
        name: "Vishal",
        company: "Winjit",
        position: "Software Developer"
    }
    res.render('about', {user});
})

app.post("/submitForm", function(req, res){
    console.log(req.body);
    insertRecord(req.body);
    res.send("Data submitted");
})

app.get("*", function(req, res)
{
    res.sendFile(`${staticPath}/nopage.html`);
})


app.listen(3000);