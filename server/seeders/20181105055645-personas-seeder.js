'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Personas', [{
        nombre: 'Persona',
        apellido_paterno: 'Prueba',
        apellido_materno: 'Prueba',
        correo_electronico: 'prueba@prueba.com',
        contrasena: 'abeurp',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Personas', null, {});
  }
};
