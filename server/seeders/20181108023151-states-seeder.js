'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var states = [];
      for (var i = 0; i < 50; i++) {
          states[i] = {
              name: faker.address.state(),
              country_id: faker.random.number({min:1, max: 10}),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      return queryInterface.bulkInsert('State', states, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('State', null, {});
  }
};
