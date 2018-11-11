var express = require('express');
var router = express.Router();
var usersRouter = require("../controllers/users.js");

router.get('/', usersRouter.list);
router.post('/', usersRouter.create);
router.put('/:userId', usersRouter.update);
router.delete('/:userId', usersRouter.delete);
router.get('/:userId', usersRouter.show);

module.exports = router;
