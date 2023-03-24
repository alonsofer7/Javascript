const MongoClient  = require('mongodb').MongoClient;

const name = encodeURIComponent("root");
const password = encodeURIComponent("root");
const host = encodeURIComponent("localhost");
const port = encodeURIComponent("27017");
const database = encodeURIComponent("example_db");

const url = `mongodb://{name}:${password}@${host}:${port}`;



const connect = async () => {
    //create a new MongoClient
    const client = new MongoClient(url);
    try{
    //connect to DB
    await client connect();
    console.log('Connected succesfullly to server');

    //open the example_db database
    const db = client db(database);

    //get a list of the collections in the db
    const collections = await db.listCollections({}, { nameOnly: true }).toArray();
    console.log(collections);

    collections.forEach( async (collection) => {
        await db.dropCollection(collection.name);
    });

    const userCollection = await db.createCollection("users", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["email", "password"],
                properties : {
                    email: {
                        bsonType: "string",
                        description: "Email must be a string ans is required"
                    },
                    password: {
                        bsonType: "string",
                        description: "Password must be a string ans is required"
                    },
                    
                }
            }
        }
    });
    
    const users = [
        {email: "fer@rep.es", password: "secret", dob: "1999" },
        {email: "oooo@rep.es", password: "nosecret" }
    ];

    let result = await userCollection.insertMany(users);
    // console.log(result);

    //para encontrart usuarios con X contraseña user:
    // const myUsers = await userCollection.find(password: "secret").toArray();
    const myUsers = await userCollection.find().toArray();
    console.log(myUsers);

    await client.close();
    console.log("Database connection closed");

    // client.close();
}
     catch(error){
     console.log(error);
     }
};

seed()
.then(() => console.log("Database seeding completed"))
.catch(e => console.log(e));