'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Colegios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      numero_calle: {
        type: Sequelize.STRING
      },
      esFacultad: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      esEscuela: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      id_campus: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'Campus',
            key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Colegios');
  }
};
