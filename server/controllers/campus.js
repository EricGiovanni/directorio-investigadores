var db = require("../models/index");
const Campus = require('../models/campus')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Campus
            .create({
                name: req.body.name,
                state_id: req.body.state_id,
                institution_id: req.body.institution_id,
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
                        message: 'Campus not found',
                    });
                return campus
                    .update({
                        name: req.body.name || campus.name,
                        state_id: req.body.state_id || campus.state_id,
                        institution_id: req.body.institution_id || campus.institution_id,
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
                        message: 'Campus not found',
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
                        message: 'Campus not found',
                    });
                }
                return res.status(200).send(campus);
            })
            .catch(error => res.status(400).send(error));
    },
};
