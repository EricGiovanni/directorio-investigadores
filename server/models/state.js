'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING,
    abbr: DataTypes.STRING,
    country_id: {
        type: DataTypes.INTEGER,
        references: 'country',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  State.associate = function(models) {
    State.belongsTo(models.Country, {
        foreignKey: 'country_id',
        as: 'country',
    });
    State.hasMany(models.Campus, {
        as: 'campus',
    });
  };
  return State;
};
