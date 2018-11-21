var express = require('express');
var router = express.Router();
var passport = require('passport');




router.get('/', function(req,res,next){
    if (req.isUnauthenticated()){
        res.redirect('/')
    } else {
        res.render('signup');
    }
});

module.exports = router;