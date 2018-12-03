var express = require('express');
var router = express.Router();

var db = require('../models/index');
var userModel = require('../models/user')(db.sequelize,db.Sequelize);

router.get('/usuario/:id/:user',function(req,res,next){
    userModel.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        if (!user){
            res.redirect('/');
        } else {
            var isOwner = req.isAuthenticated() ? req.params.id == req.user.id : false;
            res.render('profile',{
                isOwner: isOwner,
                user: user
            })
        }
    })
    
});

module.exports = router;