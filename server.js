// require('./vendor/Kernel/Components/Server/server')
const express = require('express');
const app = express();
const port = process.env.port || 8000;
app.listen(port , () => console.log('Server running on 127.0.0.1:'+ port)); // Port
/**
 * Database connection
 */
require('./vendor/Kernel/Components/Database/Databasehandler');
/**
 * Routes
 */
 const routes = require('./routes/web');
 app.use(routes);
 /**
  * statics for allow access files to the browser
  */
 app.use(express.static('public/css'));
 /**
  * Helmet :
  * Morgan :
  */
  const helmet = require("helmet");
  const morgan = require('morgan');
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.urlencoded({extended:true}));

  /*
  * EJS View Engine
  * Template engine
  */
  app.set('view engine' , 'ejs');
  app.set('views' , 'views');