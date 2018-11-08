'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var paises = [];
      for (var i = 0; i < 10; i++) {
          paises[i] = {
              nombre: faker.address.country(),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      return queryInterface.bulkInsert('Pais', paises, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pais', null, {});
  }
};
