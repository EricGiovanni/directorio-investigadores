var express = require('express');
var router = express.Router();
var db = require("../models/index");
const Persona = require('../models/persona')(db.sequelize, db.Sequelize);

router.get('/:personaId', function(req, res, next) {
    return Persona
        .findByPk(req.params.personaId)
        .then(persona => {
            if (!persona) {
                return res.status(404).send({
                    message: 'Persona no encontrada',
                });
            }
            else {
                return res.status(200).send(persona);
            }
        })
        .catch(error => res.status(400).send(error));
});

module.exports = router;
