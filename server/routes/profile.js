var express = require('express');
var router = express.Router();
var passport = require('passport');

var db = require('../models/index');
var User = require('../models/user')(db.sequelize,db.Sequelize);

router.get('/',function(req,res,next){
    if(req.isUnauthenticated()){
        res.redirect('/');
    } else {
        console.log(req.user);
        name = req.user.names;
        res.render('profile', {
            nombre: name
        });
    }
});

module.exports = router;