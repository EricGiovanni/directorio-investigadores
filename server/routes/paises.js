var express = require('express');
var router = express.Router();
var paisRouter = require("../controllers/paises.js");

router.get('/', paisRouter.list);
router.post('/', paisRouter.create);
router.put('/:paisId', paisRouter.update);
router.delete('/:paisId', paisRouter.delete);
router.get('/:paisId', paisRouter.show);

module.exports = router;
