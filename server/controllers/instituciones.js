var db = require("../models/index");
const Institucion = require('../models/institucion')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Institucion
            .create({
                nombre: req.body.nombre,
                es_publica: req.body.es_publica,
                es_independiente: req.body.es_independiente,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(institucion => res.status(201).send(institucion))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Institucion
            .all()
            .then(instituciones => {
                return res.status(200).send(instituciones);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Institucion
            .findByPk(req.params.institucionId)
            .then(institucion => {
                if (!institucion)
                    return res.status(404).send({
                        message: 'Institucion no encontrada',
                    });
                return institucion
                    .update({
                        nombre: req.body.nombre || institucion.nombre,
                        es_publica: req.body.es_publica || institucion.es_publica,
                        es_independiente: req.body.es_independiente || institucion.es_independiente,
                    })
                    .then(() => res.status(200).send(institucion))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Institucion
            .findByPk(req.params.institucionId)
            .then(institucion => {
                if (!institucion) {
                    return res.status(404).send({
                        message: 'Institucion no encontrada',
                    });
                }
                return institucion
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Institucion
            .findByPk(req.params.institucionId)
            .then(institucion => {
                if (!institucion) {
                    return res.status(404).send({
                        message: 'Institucion no encontrada',
                    });
                }
                return res.status(200).send(institucion);
            })
            .catch(error => res.status(400).send(error));
    },
};
