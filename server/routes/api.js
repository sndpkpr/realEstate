var express = require('express');
var router = express.Router();
//var login = require('./../controller/login_Ctrl');
var usersCtrl = require('./../controller/usersCtrl');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


/* 
@functionality:login regular users
*/
router.post('/login', usersCtrl.loginUser)


/* 
@functionality: registering users
*/
router.post('/signup', usersCtrl.registerUser);


/* 
@functionality: emailed user link click set flag TRUE
*/
router.get('/activateAccount', usersCtrl.verifyUserEmail)



module.exports = router;