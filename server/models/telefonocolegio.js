'use strict';
module.exports = (sequelize, DataTypes) => {
  const TelefonoColegio = sequelize.define('TelefonoColegio', {
    telefono: DataTypes.INTEGER
  }, {});
  TelefonoColegio.associate = function(models) {
    TelefonoColegio.belongsTo(models.Colegio, {
        foreignKey: 'id_colegio',
        as: 'colegio',
    });
  };
  return TelefonoColegio;
};
