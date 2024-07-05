const dbConnect = require('./readMongo')

const update = async ()=>{
    const db = await dbConnect();
    db.updateMany({name: "MongoDB"}, {$set: {Company: "TCS"}});
}

update();