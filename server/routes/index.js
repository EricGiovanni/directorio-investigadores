var express = require('express');
var router = express.Router();
var passport = require('passport');

var db = require('../models/index');
var User = require('../models/user')(db.sequelize,db.Sequelize);


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);                 //debugging logs
  console.log(req.isAuthenticated());
  res.render('index');
});


router.post('/logIn',function(req,res,next){
  var email = req.body.email;
  var password = req.body.password;

  console.log(req.body);     //debugging log
  User.findOne({
    where: {
      email: email
    },
    })
    .then(user => {
      if (user===null) {
        res.send('Usuario o contraseña inválida.');
      } else {
        req.login(user, function(err){
          res.redirect('/')
        });
                
      }
    });
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then(user => {
    done(null, user);
  });
});


module.exports = router;
