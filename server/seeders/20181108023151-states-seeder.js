'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var states = [];
      var estados_mexico =['Aguascalientes','Baja California', 'Baja California Sur',
                            'Campeche','Chiapas','Chihuahua','Ciudad de México',
                            'Coahuila','Colima','Durango','Guanajuato','Guerrero','Hidalgo',
                            'Jalisco','México','Michoacán', 'Morelos', 'Nayarit',
                            'Nuevo León', 'Oaxaca','Puebla','Querétaro','Quintana Roo',
                            'San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas',
                            'Tlaxcala','Veracruz', 'Yucatán','Zacatecas'];
      for (var i = 0; i < 32; i++) {
          states[i] = {
              name: estados_mexico[i],
              country_id: 10,
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
