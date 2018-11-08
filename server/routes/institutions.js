var express = require('express');
var router = express.Router();
var institutionsRouter = require("../controllers/institutions.js");

router.get('/', institutionsRouter.list);
router.post('/', institutionsRouter.create);
router.put('/:institutionId', institutionsRouter.update);
router.delete('/:institutionId', institutionsRouter.delete);
router.get('/:institutionId', institutionsRouter.show);

module.exports = router;
