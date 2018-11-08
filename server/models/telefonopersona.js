'use strict';
module.exports = (sequelize, DataTypes) => {
  const TelefonoPersona = sequelize.define('TelefonoPersona', {
    telefono: DataTypes.INTEGER
  }, {
    freezeTableName: true,
  });
  TelefonoPersona.associate = function(models) {
    TelefonoPersona.belongsTo(models.Persona, {
        foreignKey: 'id_persona',
        as: 'persona',
    });
  };
  return TelefonoPersona;
};
