var express = require('express');
var router = express.Router();
var db =  require('../models/index');
const Op = db.Sequelize.Op;
var userModel = require('../models/user')(db.sequelize,db.Sequelize);
var institutionModel = require('../models/institution')(db.sequelize,db.Sequelize);


router.get('/busquedarapida/:arg',function(req,res,next){
    var searchArg = '%' + req.params.arg + '%';
    
    var userPromise = userModel.findAll({
        where: {   
            [Op.or]: [
                {names: {
                    [Op.like]: searchArg
                }},
                {last_names: {
                    [Op.like]: searchArg
                }},
            ],
        },
    });

    var institutionPromise = institutionModel.findAll({
        where: {   
            name: {
                [Op.like]: searchArg
            }
        }
    });

    Promise.all([userPromise, institutionPromise]).then(function(values){
        var users = values[0];
        var institutions = values[1];
        res.render('search',{
            users: users,
            institutions: institutions
        });
    });
    
});

module.exports = router;