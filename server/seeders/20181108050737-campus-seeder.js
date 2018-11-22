'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var campus = [];
      for (var i = 0; i < 100; i++) {
          campus[i] = {
              name: faker.company.companyName(),
              state_id: faker.random.number({min:1, max: 32}),
              institution_id: faker.random.number({min:1, max: 50}),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      return queryInterface.bulkInsert('Campus', campus, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Campus', null, {});
  }
};
