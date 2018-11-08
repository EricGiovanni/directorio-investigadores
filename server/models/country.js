'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Country.associate = function(models) {
    Country.hasMany(models.State, {
        as: 'states',
    });
  };
  return Country;
};
