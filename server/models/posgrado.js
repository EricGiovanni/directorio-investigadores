'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posgrado = sequelize.define('Posgrado', {
    nombre: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Posgrado.associate = function(models) {
    Posgrado.belongsTo(models.Colegio, {
        foreignKey: 'id_colegio',
        as: 'colegio',
    });
  };
  return Posgrado;
};
