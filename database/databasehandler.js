const db = require('./mongodbhandler')
module.exports = db.CloudURI ;
// const config = require('../config.js')

// const { MongoClient } = require("mongodb");

// const uri = config.DB_CONNECTION + '://' + process.env.APP_ENV + ':' + config.DB_PORT; //mongodb://localhost:27017
// const client = new MongoClient(uri);

// module.exports = client;