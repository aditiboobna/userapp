var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");
var port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});


app.listen(port);

app.listen(port, () => console.info(`server started on port ${port}`));

module.exports = app;