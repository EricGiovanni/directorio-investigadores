'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var personas = [];
      for (var i = 0; i < 50; i++) {
          personas[i] = {
              nombres: faker.name.findName(),
              apellidos: faker.name.lastName() + " " + faker.name.lastName(),
              correo_electronico: faker.internet.email(),
              contrasena: faker.internet.password(),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      return queryInterface.bulkInsert('Personas', personas, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Personas', null, {});
  }
};
