'use strict';
module.exports = (sequelize, DataTypes) => {
  const TelefonoColegio = sequelize.define('TelefonoColegio', {
    telefono: DataTypes.INTEGER
  }, {
    freezeTableName: true,
  });
  TelefonoColegio.associate = function(models) {
    TelefonoColegio.belongsTo(models.Colegio, {
        foreignKey: 'id_colegio',
        as: 'colegio',
    });
  };
  return TelefonoColegio;
};
