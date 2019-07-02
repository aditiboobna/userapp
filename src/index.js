

//const { port, env } = require('./config/vars');
const app = require('./config/express');
const mongoose = require('./config/mongoose');
//logger module included


const port = 3000
logger.info("Listening on " + port);


//app.listen(port, () => console.info(`server started on port ${port} (${env})`));

app.listen(port, () => console.info(`server started on port ${port}`));



// var express = require("express");
// var expressConfiguration = require("./express-configuration");
// // Logging
// var logger = require("winston-express-request-logger").getLogger();

// logger.info(req,"Get the user's details"); 
// // prints 2015-08-26T13:59:16.659Z - info: pId:9677 - uId:cidsul8ry000pgt3ugwebvei5 - cId:55dc48232a8708a3078e995a - cIP: 127.0.0.1 - cAction: GET /api/user/55dc48232a8708a3078e995a Get user details

// logger.info("Get the user's details");
// // prints 2015-08-26T13:59:16.659Z - info: Get the user's details

// logger.info("configuring express....");
// expressConfiguration.init(app, express);
// logger.info("Express configured");


var express = require('express');
var expressWinston = require('express-winston');
var winston = require('winston');


// var app = module.exports = express();

var logger = winston.createLogger({
    transports: [
       new winston.transports.File({
      level: 'debug',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
      timestamp: true
    }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
}),

    loggerstream = {
        write: function (message, encoding) {
            logger.info(message);
        }
    };

app.use(require("morgan")("combined", { "stream": loggerstream }));





// app.use('/logout', function (req, res) {
//     res.send('Hi there..you have logged in')
// })

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!')
// })

module.exports = app;
