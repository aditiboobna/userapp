var MongoClient = require('mongodb').MongoClient;
var User = require('../models/request.model');
var loginUser = require('../models/login.model');
var url = ("mongodb://localhost:27017/users");
var jwt = require('jsonwebtoken')


/*
User Registeration
*/

exports.userdetails = async (req, res, next) => {
  try {
    var newUser = new User(req.body);
    MongoClient.connect(url, function (err, db) {
      db.userdetails.save(newUser)
    })
    return newUser
  } catch (error) {
    return res.json("Error")
  }
}


/*
User Login
*/

exports.logindetails = async (req, res, next) => {
  try {
    var loginDetail = new loginUser(req.body)
    MongoClient.connect(url, function (err, db) {
      db.userdetails.find({ "email": loginDetailemail }).toArray(function (err, userdetail) {
        if (err) throw err;
        if (userdetail.length == 0) {
          res.status(401).json({ message: 'Authentication failed' });
        }
        else if (userdetail.email == loginDetail.email && userdetail.password == loginDetail.password) {
        return res.json({token: jwt.sign({ email: userdetail.email, password:userdetail.password})
        }) 
      }
        else {
          return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }
      })
    })
  } catch (error) {
    return res.json("Error")
  }
}





