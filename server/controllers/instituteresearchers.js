var db = require("../models/index");
const InstituteResearcher = require('../models/instituteresearcher')(db.sequelize, db.Sequelize);

module.exports = {
  create(req, res){(
    return InstituteResearcher
    .create({
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      institute_id: req.body.institute_id,
      researcher_id: req.body.researcher_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .then(instituteresearchers => res.status(201).send(instituteresearchers))
    .catch(error => res.status(400).send(error));
  },
  list(req, res){
    return InstituteResearcher
    .all()
    .then(instituteresearchers => {
      return res.status(200).send(instituteresearchers);
    })
    .catch(error => res.status(400).send(error));
  },
  update(req, res){
    return InstituteResearcher
    .findByPk(req.params.instituteresearcherId)
    .then(instituteresearcher => {
      if(!instituteresearcher)
        return res.status(404).send({
          message: 'InstituteResearcher not found',
        });
      return instituteresearcher
        .update({
          start_date: req.body.start_date || instituteresearcher.start_date,
          end_date: req.body.end_date || instituteresearcher.end_date,
          institute_id: req.body.institute_id || instituteresearcher.institute_id,
          researcher_id: req.body.researcher_id || instituteresearcher.researcher_id,
        })
        .then(()=> res.status(200).send(instituteresearcher))
        .catch((error) => res.status(400).send(error));
    })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res){
    return InstituteResearcher
      .findByPk(req.params.instituteresearcherId)
      .then(instituteresearcher => {
        if(!instituteresearcher){
          return res.status(404).send({
              message: 'InstituteResearcher not found',
          });
        }
        return instituteresearcher
          .destroy()
          .then(()=> res.status(200).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  show(req, res){
      return InstituteResearcher
        .findByPk(req.params.instituteresearcherId)
        .then(instituteresearcher => {
          if(! instituteresearcher){
              return res.status(404).send({
                  message: 'InstituteResearcher not found',
              });
          }
          return res.status(200).send(instituteresearcher);
        })
        .catch(error => res.status(400).send(error));
    },
}
