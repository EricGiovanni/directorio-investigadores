var db = require("../models/index");
const Campus = require('../models/campus')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Campus
            .create({
                nombre: req.body.nombre,
                id_estado: req.body.id_estado,
                id_institucion: req.body.id_institucion,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(campus => res.status(201).send(campus))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Campus
            .all()
            .then(campus => {
                return res.status(200).send(campus);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Campus
            .findByPk(req.params.campusId)
            .then(campus => {
                if (!campus)
                    return res.status(404).send({
                        message: 'Campus no encontrado',
                    });
                return campus
                    .update({
                        nombre: req.body.nombre || campus.nombre,
                        id_estado: req.body.id_estado || campus.id_estado,
                        id_institucion: req.body.id_institucion || campus.id_institucion,
                    })
                    .then(() => res.status(200).send(campus))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Campus
            .findByPk(req.params.campusId)
            .then(campus => {
                if (!campus) {
                    return res.status(404).send({
                        message: 'Campus no encontrado',
                    });
                }
                return campus
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Campus
            .findByPk(req.params.campusId)
            .then(campus => {
                if (!campus) {
                    return res.status(404).send({
                        message: 'Campus no encontrado',
                    });
                }
                return res.status(200).send(campus);
            })
            .catch(error => res.status(400).send(error));
    },
};
