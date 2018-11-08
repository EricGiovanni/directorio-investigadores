'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var institutions = [];
      for (var i = 0; i < 50; i++) {
          institutions[i] = {
              name: faker.company.companyName(),
              is_public: faker.random.boolean(),
              is_independent: faker.random.boolean(),
              createdAt: new Date(),
              updatedAt: new Date(),
          };
      }
      return queryInterface.bulkInsert('Institution', institutions, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Institution', null, {});
  }
};
