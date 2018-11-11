'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posgraduate = sequelize.define('Posgraduate', {
    name: DataTypes.STRING,
    college_id: {
        type: DataTypes.INTEGER,
        references: 'college',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Posgraduate.associate = function(models) {
    Posgraduate.belongsTo(models.College, {
        foreignKey: 'college_id',
        as: 'college',
    });
  };
  return Posgraduate;
};
