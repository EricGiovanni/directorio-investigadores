'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define('Pais', {
    nombre: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Pais.associate = function(models) {
    Pais.hasMany(models.Estado, {
        as: 'estados',
    });
  };
  return Pais;
};
