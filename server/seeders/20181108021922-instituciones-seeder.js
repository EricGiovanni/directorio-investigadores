'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var instituciones = [];
      for (var i = 0; i < 50; i++) {
          instituciones[i] = {
              nombre: faker.company.companyName(),
              es_publica: faker.random.boolean(),
              es_independiente: faker.random.boolean(),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      return queryInterface.bulkInsert('Instituciones', instituciones, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Instituciones', null, {});
  }
};
