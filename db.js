const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "express_mongo_ninja";

// Use connect method to connect to the server
async function connect() {
    let client;
    try {
        let data = [];
        client = await MongoClient.connect(url, {
            useUnifiedTopology: true,
        });

        console.log("Connected successfully to server");

        const db = client.db(dbName);

        const collection = db.collection("ninjas");

        let cursor = collection.find({});

        await cursor.forEach(function (item, err) {
            assert(err == null);

            data.push(item);
        });

        return data;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    } // make sure to close your connection after
}

module.exports = connect;
