// const { dirname } = require('path');
// const dir = dirname(require.main.filename);

// const express = require('express');
// const app = express();
// // const port = process.env.port || 8000;
// // app.listen(port , () => console.log('Server running on 127.0.0.1:'+ port)); // Port
// /**
//  * Database connection
//  */
// // require(dir + '/server');
// /**
//  * Routes
//  */
//  const routes = require(dir + '/routes/web');
//  app.use(routes);
//  /**
//   * statics for allow access files to the browser
//   */
//  app.use(express.static(dir+ '/public/css'));
//  /**
//   * Helmet :
//   * Morgan :
//   */
//   const helmet = require("helmet");
//   const morgan = require('morgan');
//   app.use(helmet());
//   app.use(morgan('dev'));
//   app.use(express.urlencoded({extended:true}));

//   // EJS View Engine
//   /*
//   * Template engine
//   */
//   app.set('view engine' , 'ejs');
//   app.set('views' , 'views');