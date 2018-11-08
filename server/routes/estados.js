var express = require('express');
var router = express.Router();
var estadosRouter = require("../controllers/estados.js");

router.get('/', estadosRouter.list);
router.post('/', estadosRouter.create);
router.put('/:estadoId', estadosRouter.update);
router.delete('/:estadoId', estadosRouter.delete);
router.get('/:estadoId', estadosRouter.show);

module.exports = router;
