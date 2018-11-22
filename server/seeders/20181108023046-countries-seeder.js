'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var countries = [];
      for (var i = 0; i < 10; i++) {
          countries[i] = {
              name: faker.address.country(),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      countries[10]={
        name: 'México',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return queryInterface.bulkInsert('Country', countries, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Country', null, {});
  }
};
