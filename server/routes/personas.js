var express = require('express');
var router = express.Router();
var personasRouter = require("../controllers/personas.js");

router.get('/', personasRouter.list);
router.post('/', personasRouter.create);
router.put('/:personaId', personasRouter.update);
router.delete('/:personaId', personasRouter.delete);

module.exports = router;
