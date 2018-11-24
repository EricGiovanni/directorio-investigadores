var db = require("../models/index");
const State = require('../models/state')(db.sequelize, db.Sequelize);

module.exports = {
    create(req, res) {
        return State
            .create({
                nombre: req.body.nombre,
                abbr: req.body.abbr,
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
                        abbr: req.body.abbr || state.abbr,
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
    getResearchersByState(req,res){
        db.sequelize.query("select S.abbr as State, COUNT(R.id) as ResearcherCount FROM Researcher R INNER JOIN InstituteResearcher I ON R.id=I.researcher_id INNER JOIN Institute Ins ON I.institute_id=Ins.id INNER JOIN Campus C ON Ins.campus_id=C.id INNER JOIN State S ON C.state_id=S.id GROUP BY S.abbr"
        ,{
            type: db.Sequelize.QueryTypes.SELECT
        }).then(states => {
            return res.status(200).send(states);
        })
        .catch(error => res.status(400).send(error));
    }

};
