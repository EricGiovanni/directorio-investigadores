var db = require("../models/index");
const Institution = require('../models/institution')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Institution
            .create({
                name: req.body.name,
                is_public: req.body.is_public,
                is_independent: req.body.is_independent,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(institution => res.status(201).send(institution))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Institution
            .all()
            .then(institutions => {
                return res.status(200).send(institutions);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Institution
            .findByPk(req.params.institutionId)
            .then(institution => {
                if (!institution)
                    return res.status(404).send({
                        message: 'Institution not found',
                    });
                return institution
                    .update({
                        name: req.body.name || institution.name,
                        is_public: req.body.is_public || institution.is_public,
                        is_independent: req.body.is_independent || institution.is_independent,
                    })
                    .then(() => res.status(200).send(institution))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Institution
            .findByPk(req.params.institutionId)
            .then(institution => {
                if (!institution) {
                    return res.status(404).send({
                        message: 'Institution not found',
                    });
                }
                return institution
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Institution
            .findByPk(req.params.institutionId)
            .then(institution => {
                if (!institution) {
                    return res.status(404).send({
                        message: 'Institution not found',
                    });
                }
                return res.status(200).send(institution);
            })
            .catch(error => res.status(400).send(error));
    },
};
