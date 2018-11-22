'use strict';
var faker = require('faker');
faker.locale = "es_MX";
module.exports = {
  up: (queryInterface, Sequelize) => {
    var institution_r = [];
    for(var i=0; i< 60; i++){
      institution_r[i]={
        start_date: faker.date.between('1930-01-01', '2018-11-10'),
        end_date: faker.date.between('1930-03-01','2018-11-10'),
        institute_id: faker.random.number({min:1, max:100}),
        researcher_id: faker.random.number({min:1, max:30}),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
    return queryInterface.bulkInsert('InstituteResearcher', institution_r,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('InstituteResearcher', null, {});
  }
};
