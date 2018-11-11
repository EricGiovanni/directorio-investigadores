var db = require("../models/index");
const Country = require('../models/country')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return Country
            .create({
                name: req.body.name,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(country => res.status(201).send(country))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Country
            .all()
            .then(countries => {
                return res.status(200).send(countries);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Country
            .findByPk(req.params.countryId)
            .then(country => {
                if (!country)
                    return res.status(404).send({
                        message: 'Country not found',
                    });
                return country
                    .update({
                        name: req.body.name || country.name,
                    })
                    .then(() => res.status(200).send(country))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return Country
            .findByPk(req.params.countryId)
            .then(country => {
                if (!country) {
                    return res.status(404).send({
                        message: 'Country not found',
                    });
                }
                return country
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return Country
            .findByPk(req.params.countryId)
            .then(country => {
                if (!country) {
                    return res.status(404).send({
                        message: 'Country not found',
                    });
                }
                return res.status(200).send(country);
            })
            .catch(error => res.status(400).send(error));
    },
};
