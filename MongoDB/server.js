const MongoClient  = require('mongodb').MongoClient;

const name = encodeURIComponent("root");
const password = encodeURIComponent("root");
const host = encodeURIComponent("localhost");
const port = encodeURIComponent("27017");
const database = encodeURIComponent("example_db");

const url = `mongodb://{name}:${password}@${host}:`;



const connect = async () => {
    //create a new MongoClient
    const client = new MongoClient(url);

    //connect to DB
    await client connect();
    console.log('Connected succesfullly to server');

    //open the example_db database
    const db = client db(database);

    //get a list of the collections in the db
    const collections = await db.listCollections({}, { nameOnly: true }).toArray();
    console.log(collections);
};

connect();