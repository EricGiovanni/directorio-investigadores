var db = require("../models/index");
const Researcher = require('../models/researcher')(db.sequelize, db.Sequelize);

module.exports={
  create(req, res){
    return Researcher
      .create({
        CV: req.body.CV,
        user_id: req.body.user_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .then(researcher => res.status(201).send(researcher))
      .catch(error => res.status(400).send(error));
  },
  list(req, res){
    return Researcher
      .all()
      .then(researchers => {
        return res.status(200).send(researchers);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res){
    return Researcher
    .findByPk(req.params.researcherId)
    .then(researcher => {
      if(!researcher)
        return res.status(404).send({
          message: 'Researcher not found'
        });
      return researcher
        .update({
          CV: req.body.CV || researcher.CV,
          user_id: req.body.user_id || researcher.user_id,
        })
        .then(()=> res.status(200).send(researcher))
        .catch((error)=> res.status(400).send(error));
    })
    .catch((error)=> res.status(400).send(error));
  },
  delete(req, res){
    return Researcher
    .findByPk(req.params.researcherId)
    .then(researcher => {
      if(!researcher){
        return res.status(404).send({
          message: 'Researcher not found :C',
        });
      }
      return researcher
        .destroy()
        .then(()=> res.status(200).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
  show(req, res){
    return Researcher
    .findByPk(req.params.researcherId)
    .then(researcher => {
      if(! researcher){
        return res.status(404).send({
          message: 'Researcher not found',
        });
      }
      return res.status(200).send(researcher);
    })
    .catch(error => res.status(400).send(error));
  },
};
