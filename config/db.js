const { MongoClient } = require('mongodb');
let mongodb;

const connect = (cb) => {
    MongoClient.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@jewoo.xbkwj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,(err, client)=>{
        if(err) return console.log(err);

        mongodb = client.db('todoapp');

        cb();
    })
}

const get = () => {
    return mongodb;
}


module.exports = {
    connect,
    get
}