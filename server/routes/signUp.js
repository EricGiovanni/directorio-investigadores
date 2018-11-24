var express = require('express');
var router = express.Router();
var passport = require('passport');

var usersRouter = require("../controllers/users.js");

router.get('/', function(req,res,next){
    if (req.isAuthenticated())
        res.redirect('/')
    else
        res.render('signup');
});

router.post('/', usersRouter.signUp);

module.exports = router;
