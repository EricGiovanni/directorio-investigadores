var db = require("../models/index");
const User = require('../models/user')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return User
            .create({
                names: req.body.names,
                last_names: req.body.last_names,
                email: req.body.email,
                // TODO: Encrypt password using bcrypt
                password: req.body.password,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return User
            .all()
            .then(users => {
                return res.status(200).send(users);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return User
            .findByPk(req.params.userId)
            .then(user => {
                if (!user)
                    return res.status(404).send({
                        message: 'User not found',
                    });
                return user
                    .update({
                        names: req.body.names || user.names,
                        last_names: req.body.last_names || user.last_names,
                        email: req.body.email || user.email,
                        // TODO: Encrypt password using bcrypt
                        password: req.body.password || user.password,
                        approved: req.body.approved || user.approved,
                    })
                    .then(() => res.status(200).send(user))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return User
            .findByPk(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User not found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(200).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        return User
            .findByPk(req.params.userId)
            .then(user => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User not found',
                    });
                }
                return res.status(200).send(user);
            })
            .catch(error => res.status(400).send(error));
    },
};
