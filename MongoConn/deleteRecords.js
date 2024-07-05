const dbConnect = require('./readMongo');

const deleteFunc = async ()=>{
    const db = await dbConnect();
    db.deleteOne({name: 'MongoDB'});
}

deleteFunc();