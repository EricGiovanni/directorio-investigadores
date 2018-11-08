var db = require("../models/index");
const Persona = require('../models/persona')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Persona
            .create({
                nombre: req.body.nombre,
                apellido_paterno: req.body.apellido_paterno,
                apellido_materno: req.body.apellido_materno,
                correo_electronico: req.body.correo_electronico,
                // TODO: Encrypt password using bcrypt
                contrasena: req.body.contrasena,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(persona => res.status(201).send(persona))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Persona
            .all()
            .then(personas => {
                return res.status(200).send(personas);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Persona
            .findByPk(req.params.personaId)
            .then(persona => {
                if (!persona)
                    return res.status(404).send({
                        message: 'Persona no encontrada',
                    });
                return persona
                    .update({
                        nombre: req.body.nombre || persona.nombre,
                        apellido_paterno: req.body.apellido_paterno || persona.apellido_paterno,
                        apellido_materno: req.body.apellido_materno || persona.apellido_materno,
                        correo_electronico: req.body.correo_electronico || persona.correo_electronico,
                        // TODO: Encrypt password using bcrypt
                        contrasena: req.body.contrasena || persona.contrasena,
                    })
                    .then(() => res.status(200).send(persona))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Persona
            .findByPk(req.params.personaId)
            .then(persona => {
                if (!persona) {
                    return res.status(404).send({
                        message: 'Persona no encontrada',
                    });
                }
                return persona
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Persona
            .findByPk(req.params.personaId)
            .then(persona => {
                if (!persona) {
                    return res.status(404).send({
                        message: 'Persona no encontrada',
                    });
                }
                return res.status(200).send(persona);
            })
            .catch(error => res.status(400).send(error));
    },
};
