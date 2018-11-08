var db = require("../models/index");
const State = require('../models/state')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return State
            .create({
                nombre: req.body.nombre,
                country_id: req.body.country_id,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(state => res.status(201).send(state))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return State
            .all()
            .then(states => {
                return res.status(200).send(states);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return State
            .findByPk(req.params.stateId)
            .then(state => {
                if (!state)
                    return res.status(404).send({
                        message: 'State not found',
                    });
                return state
                    .update({
                        nombre: req.body.nombre || state.nombre,
                        country_id: req.body.country_id || state.country_id,
                    })
                    .then(() => res.status(200).send(state))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return State
            .findByPk(req.params.stateId)
            .then(state => {
                if (!state) {
                    return res.status(404).send({
                        message: 'State not found',
                    });
                }
                return state
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return State
            .findByPk(req.params.stateId)
            .then(state => {
                if (!state) {
                    return res.status(404).send({
                        message: 'State not found',
                    });
                }
                return res.status(200).send(state);
            })
            .catch(error => res.status(400).send(error));
    },
};
