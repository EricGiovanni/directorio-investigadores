'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrador = sequelize.define('Administrador', {
    es_investigador: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
  });
  Administrador.associate = function(models) {
    Administrador.belongsTo(models.Persona, {
        foreignKey: 'id_persona',
        as: 'persona',
    });
  };
  return Administrador;
};
