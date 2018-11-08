var express = require('express');
var router = express.Router();
var institucionesRouter = require("../controllers/instituciones.js");

router.get('/', institucionesRouter.list);
router.post('/', institucionesRouter.create);
router.put('/:institucionId', institucionesRouter.update);
router.delete('/:institucionId', institucionesRouter.delete);
router.get('/:institucionId', institucionesRouter.show);

module.exports = router;
