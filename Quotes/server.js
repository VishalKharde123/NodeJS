const express = require('express');

const app = new express();

app.set('view engine', 'ejs'); //This specifies we are using ejs engine in our project.

app.use(express.static('public')); //This specifies path of static file is 'public'.

const fetchQuote = require('./fetchQuotes');  //Fetching fetchQuote method from fetchQuotes.js file.

app.get('/', async (req, res)=>{
    await fetchQuote.fetchQuote();
    const quote = await fetchQuote.generateRandom();
    //console.log(quote);
    res.render('index', {quote});
})

app.listen(3000);
