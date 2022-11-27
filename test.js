require('dotenv').config();
/**
 * MongoDB Connection
 */
const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);


async function find(database, collection, query){
    try {
        const result = await client.db(database).collection(collection).findOne(query);
        console.log(result);

    } finally {
        await client.close();
    }
}

module.exports = {
     find
 }