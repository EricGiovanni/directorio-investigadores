var express = require('express');
var router = express.Router();
var countryRouter = require("../controllers/countries.js");

router.get('/', countryRouter.list);
router.post('/', countryRouter.create);
router.put('/:countryId', countryRouter.update);
router.delete('/:countryId', countryRouter.delete);
router.get('/:countryId', countryRouter.show);

module.exports = router;
