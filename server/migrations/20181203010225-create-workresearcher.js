'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workResearchers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      work_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      researcher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references:{
          model:'Researcher',
          key:'id',
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
    return queryInterface.dropTable('workResearchers');
  }
};
