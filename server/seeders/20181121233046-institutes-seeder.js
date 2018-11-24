'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
    var institutes =[];
    for(var i = 0; i < 100; i++){
      institutes[i]={
        name: faker.company.companyName(),
        street: faker.address.streetName(),
        number_street:faker.random.number({min: 30, max: 2938}),
        campus_id:faker.random.number({min: 1, max: 100}),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
    return queryInterface.bulkInsert('Institute', institutes,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Institute', null, {});
  }
};
