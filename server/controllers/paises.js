var db = require("../models/index");
const Pais = require('../models/pais')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Pais
            .create({
                nombre: req.body.nombre,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(pais => res.status(201).send(pais))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Pais
            .all()
            .then(paiss => {
                return res.status(200).send(paiss);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Pais
            .findByPk(req.params.paisId)
            .then(pais => {
                if (!pais)
                    return res.status(404).send({
                        message: 'Pais no encontrado',
                    });
                return pais
                    .update({
                        nombre: req.body.nombre || pais.nombre,
                    })
                    .then(() => res.status(200).send(pais))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Pais
            .findByPk(req.params.paisId)
            .then(pais => {
                if (!pais) {
                    return res.status(404).send({
                        message: 'Pais no encontrado',
                    });
                }
                return pais
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Pais
            .findByPk(req.params.paisId)
            .then(pais => {
                if (!pais) {
                    return res.status(404).send({
                        message: 'Pais no encontrado',
                    });
                }
                return res.status(200).send(pais);
            })
            .catch(error => res.status(400).send(error));
    },
};
