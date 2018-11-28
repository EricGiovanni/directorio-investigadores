var db = require("../models/index");
const User = require('../models/user')(db.sequelize, db.Sequelize);
var bcrypt = require('bcrypt-node');
const sgMail = require('@sendgrid/mail');

module.exports = {
    logInIndex(req, res) {
        if (req.isAuthenticated())
            res.redirect('/')
        else
            res.render('login');
    },
    logIn(req, res) {
        User.findOne({
            where: {
                email: req.body.email,
            },
        })
        .then((user) => {
            if (user === null || !bcrypt.compareSync(req.body.password, user.password))
                res.render('login', {
                    error: 'El correo electrónico o la contraseña son incorrectos'
                });
            else
                req.login(user, function(err) {
                    res.redirect('/');
                });
        });
    },
    signUpIndex(req, res) {
        if (req.isAuthenticated())
            res.redirect('/')
        else
            res.render('signup');
    },
    signUp(req, res) {
        User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then((existingUser) => {
            if (existingUser) {
                return res.render('signup', {
                    error: 'El correo electrónico ya ha sido registrado'
                });
            }
            else if (req.body.password != req.body.passwordMatch) {
                return res.render('signup', {
                    error: 'Las contraseñas no coinciden'
                });
            }
        })
        .then(() => {
            User.create({
                names: req.body.names,
                last_names: req.body.last_names,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            .then((user) => {
                sgMail.setApiKey(process.env.sendgrid_api_key);
                sgMail.send({
                    to: user.email,
                    from: process.env.support_email,
                    subject: user.names + ', activa tu cuenta',
                    html: '<strong>Activar cuenta</strong>',
                });
                res.render('login');
            })
            .catch(error => res.status(400).send(error));
        });
    },
};
