var db = require("../models/index");
const Institute= require('../models/institute')(db.sequelize, db.Sequelize);

module.exports = {
  create(req, res){
    return Institute
      .create({
        name:req.body.name,
        street: req.body.street,
        number_street: req.body.number_street,
        campus_id: req.body.campus_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .then(institute => res.status(201).send(institute))
      .catch(error => res.status(400).send(error));
  },
  list(req, res){
    return Institute
      .all()
      .then(institutes => {
          return res.status(200).send(institutes);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res){
    return Institute
      .findByPk(req.params.instituteId)
      .then(institute => {
        if(! institute)
          return res.status(404).send({
            message: 'Institute not found ',
          });
        return institute
          .update({
              name: req.body.name || institute.name,
              street: req.body.street || institute.street,
              number_street: req.body.number_street || institute.number_street,
              campus_id: req.body.campus_id || institute.campus_id,
          })
          .then(()=> res.status(200).send(institute))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error)=> res.status(400).send(error));
  },
  delete(req, res){
    return Institute
      .findByPk(req.params.instituteId)
      .then(institute => {
        if(!institute){
          return res.status(404).send({
            message: 'Institute not found',
          });
        }
        return institute
          .destroy()
          .then(() => res.status(200).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error));
  },
  show(req, res){
    return Institute
      .findByPk(req.params.instituteId)
      .then(institute => {
          if(!institute){
            return res.status(404).send({
              message: 'Institute not found',
            });
          }
          return res.status(200).send(institute);
      })
      .catch(error => res.status(400).send(error));
  },
};
