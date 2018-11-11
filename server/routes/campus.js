var express = require('express');
var router = express.Router();
var campusRouter = require("../controllers/campus.js");

router.get('/', campusRouter.list);
router.post('/', campusRouter.create);
router.put('/:campusId', campusRouter.update);
router.delete('/:campusId', campusRouter.delete);
router.get('/:campusId', campusRouter.show);

module.exports = router;
