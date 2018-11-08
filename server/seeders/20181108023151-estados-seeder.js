'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var estados = [];
      for (var i = 0; i < 50; i++) {
          estados[i] = {
              nombre: faker.address.state(),
              id_pais: faker.random.number({min:1, max: 10}),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      return queryInterface.bulkInsert('Estados', estados, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Estados', null, {});
  }
};
