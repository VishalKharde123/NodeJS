const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost/27017';

const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db("Vishal");
    return db.collection("Winjit");
}

dbConnect().then((resp) => {
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    })
});

module.exports = dbConnect;

