'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
    var colleges =[];
    var t = [true,false];
    for(var i= 0; i< 100; i++){
      colleges[i]={
        name: faker.company.companyName(),
        is_faculty: t[faker.random.number({min: 0, max:1})],
        campus_id: faker.random.number({min:1, max: 40}),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
      return queryInterface.bulkInsert('College', colleges,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('College', null,{});
  }
};
