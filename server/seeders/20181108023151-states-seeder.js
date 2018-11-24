'use strict';
var faker = require('faker');
faker.locale = "es_MX";

module.exports = {
  up: (queryInterface, Sequelize) => {
      var states = [];
      var estates_mexico =['Aguascalientes','Baja California', 'Baja California Sur',
                            'Campeche','Chiapas','Chihuahua','Ciudad de México',
                            'Coahuila','Colima','Durango','Guanajuato','Guerrero','Hidalgo',
                            'Jalisco','México','Michoacán', 'Morelos', 'Nayarit',
                            'Nuevo León', 'Oaxaca','Puebla','Querétaro','Quintana Roo',
                            'San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas',
                            'Tlaxcala','Veracruz', 'Yucatán','Zacatecas'];
      var abrev_states=['AGU','BCN','BCS','CAM','CHP','CHH','COA','COL','CDMX','DUR','GUA','GRO',
                        'HID','JAL','MEX','MIC','MOR','NAY','NLE','OAX','PUE','QUE',
                        'ROO','SLP','SIN','SON','TAB','TAM','TLA','VER','YUC','ZAC'];
      for (var i = 0; i < 32; i++) {
          states[i] = {
              name: estates_mexico[i],
              abbr: abrev_states[i],
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
