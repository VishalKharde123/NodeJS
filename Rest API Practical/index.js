const express = require('express');

const app = new express();

const fs = require('fs');

//Import json data from MOCK_DATA.json
const jsonData = require('./MOCK_DATA.json');

app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log("Middleware");
    next();
});

app.get('/users', (req, res)=>{
    return res.json(jsonData);
});

app.get('/users/:id',(req, res) => {
    const idNum = Number(req.params.id);
    var flag = false;
    const userFetched = jsonData.find((user)=>{
        {    
            if(user != undefined)if(user.id == idNum)
            {
                flag = true;
                return user;
            }
        }
    })
    //console.log(userFetched);
    if(flag == false)
        return res.send("Invalid userid");
    return res.json(userFetched);
});

app.delete('/users/:id', (req, res) => {
    const idParam = Number(req.params.id);
    
    const userToDelete = jsonData.findIndex((user)=>{
        if(user != undefined)
        {
            if(user.id == idParam)
            {
                return user;
            }    
        }    
    })

    delete jsonData[userToDelete];
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(jsonData));
    //console.log(jsonData[idParam]);
    return res.send("Data deleted");
});

app.post('/users', (req, res)=>{
    const jsonObj = req.body;
    jsonObj["id"] = jsonData.length + 1;
    var l = jsonData.length;
    
    jsonData[l] = jsonObj;
    console.log(jsonData.length);

    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(jsonData));

    return res.send('Data Submitted');
})

app.patch('/users/:id', (req, res)=>{
    const idParam = Number(req.params.id);

    const updatedObj = req.body;

    const prevObj = jsonData.find((user)=>{
        if(user != undefined){
            if(user.id = idParam)
            {
                return user;
            }
        }
    });

    console.log(prevObj);

    const mergedObj = {...prevObj, ...updatedObj};
    console.log(mergedObj);
    jsonData[idParam - 1] = mergedObj;

    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(jsonData));

    return res.send("Data Updated" + jsonData.length);
});


app.listen(3000);