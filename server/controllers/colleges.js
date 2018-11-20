var db = require("../models/index");
const College = require('../models/college')(db.sequelize, db.Sequelize);

module.exports ={
  //Save to MYSQL database
  create(req, res){
    return College
      .create({
        name: req.body.name;
        is_faculty: req.body.is_faculty;
        is_school: req.body.is_school;
        campus_id: req.body.campus_id;
        createdAt: new Date()
        updatedAt: new Date()
      })
      .then(colleges => res.status(201).send(colleges))
      .catch(error => res.status(400).send(error));
  };
  //Fetch all colleges
  list(req, res){
    return College
      .all()
      .then(colleges =>{
          return res.status(200).send(colleges);
      })
      .catch(error => res.status(400).send(error));
  },
  //Update a college
  update(req, res){
    return College
      .findByPk(req.params.collegeId)
      .then(college =>{
        if(!college)
          return res.status(404).send({
            message: 'College not found',
          });
        return college
          .update({
            name:req.body.name || college.name,
            is_faculty: req.body.is_faculty || college.is_faculty
            is_school: req.body.is_school || college.is_school
          })
          .then(() => res.status(200).send(institution))
          -cath((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res){
    return College
    .findByPk(req.params.collegeId)
    .then(college =>{
        if(!college){
          return res.status(404).send({
            message: 'College not found',
          });
        }
        return college
          .destroy()
          .then(()=> res.status(200).send())
          .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  },
  show(req, res){
    return College
      .findByPk(req.params.collegeId)
      .then(college => {
        if(!college){
          return res.status(404).send({
            message: 'Institution not found',
          });
        }
        return res.status(200).send(college);
      })
      .catch(error => res.status(400).send(error));
  },
};
