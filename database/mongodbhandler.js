const config = require('../config.js')
const mongoose = require('mongoose');

const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// mongoDB cloud
const CloudURI = 'mongodb+srv://karim:<291299>@cluster0.tm9mys7.mongodb.net/?retryWrites=true&w=majority';
//config.DB_CONNECTION +'+srv://' + config.DB_USERNAME + ':' + config.DB_PASSWORD + '@'+ config.DB_DATABASE +'.tm9mys7.mongodb.net/'+ config.DB_DATABASE;
// mongoDB compass
const CompassURI = config.DB_CONNECTION +'://127.0.0.1:'+ config.DB_PORT; // mongodb://localhost:27017

 mongoose.connect(CompassURI , options)
//    .then((result) => console.log('Connection success'))
   .catch((err) => console.log(err));

module.exports = CompassURI;