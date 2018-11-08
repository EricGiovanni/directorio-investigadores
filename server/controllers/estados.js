var db = require("../models/index");
const Estado = require('../models/estado')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Estado
            .create({
                nombre: req.body.nombre,
                id_pais: req.body.id_pais,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(estado => res.status(201).send(estado))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Estado
            .all()
            .then(estados => {
                return res.status(200).send(estados);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Estado
            .findByPk(req.params.estadoId)
            .then(estado => {
                if (!estado)
                    return res.status(404).send({
                        message: 'Estado no encontrado',
                    });
                return estado
                    .update({
                        nombre: req.body.nombre || estado.nombre,
                        id_pais: req.body.id_pais || estado.id_pais,
                    })
                    .then(() => res.status(200).send(estado))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Estado
            .findByPk(req.params.estadoId)
            .then(estado => {
                if (!estado) {
                    return res.status(404).send({
                        message: 'Estado no encontrado',
                    });
                }
                return estado
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Estado
            .findByPk(req.params.estadoId)
            .then(estado => {
                if (!estado) {
                    return res.status(404).send({
                        message: 'Estado no encontrado',
                    });
                }
                return res.status(200).send(estado);
            })
            .catch(error => res.status(400).send(error));
    },
};
