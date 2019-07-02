const express = require('express');
const controller = require('../../controllers/auth.controller');
const router = express.Router();


/*
User Registeration & Login route
*/
router.route('/register')
  .post(controller.userdetails); 

  router.route('/login')
  .post(controller.logindetails); 


module.exports = router;
