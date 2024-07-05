const dbConnect = require('./readMongo');

// console.log(dbConnect);

const insertRecord = async(dataObject)=>{
    const db = await dbConnect();
    db.insertOne(dataObject);
    //collectionW.insert({name: "MongoDB"});
    console.log("Data Inserted Successfully");
};

module.exports = insertRecord;
//console.log(dbConnect);