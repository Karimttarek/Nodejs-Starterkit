const mongoose = require('mongoose');
require('dotenv').config();
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// mongoDB cloud
const CloudURI = 'mongodb+srv://' + process.env.DB_USERNAME + ':<' + process.env.DB_PASSWORD + '>@' + process.env.DB_DATABASE + '.tm9mys7.mongodb.net/?retryWrites=true&w=majority';
//config.DB_CONNECTION +'+srv://' + config.DB_USERNAME + ':' + config.DB_PASSWORD + '@'+ config.DB_DATABASE +'.tm9mys7.mongodb.net/'+ config.DB_DATABASE;
// mongoDB compass
const CompassURI = process.env.DB_CONNECTION +'://127.0.0.1:'+ process.env.DB_PORT; // mongodb://localhost:27017

mongoose.connect(CompassURI , options)
//    .then((result) => console.log('Connection success'))
   .catch((err) => console.log(err));

   
module.exports = {
    CloudURI,
    CompassURI
};