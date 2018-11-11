var express = require('express');
var router = express.Router();
var statesRouter = require("../controllers/states.js");

router.get('/', statesRouter.list);
router.post('/', statesRouter.create);
router.put('/:stateId', statesRouter.update);
router.delete('/:stateId', statesRouter.delete);
router.get('/:stateId', statesRouter.show);

module.exports = router;
