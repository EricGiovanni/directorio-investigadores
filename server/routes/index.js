var express = require('express');
var router = express.Router();
var indexRouter = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/logIn',indexRouter.confirmLogIn);

module.exports = router;
