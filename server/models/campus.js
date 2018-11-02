'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define('Campus', {
    nombre: DataTypes.STRING,
    estado: DataTypes.STRING,
    municipio: DataTypes.STRING
  }, {});
  Campus.associate = function(models) {
    Campus.hasMany(models.Instituto, {
        as: 'institutos',
    });
    Campus.hasMany(models.Colegio, {
        as: 'colegios',
    });
    Campus.belongsTo(models.Institucion, {
        foreignKey: 'id_institucion',
        as: 'institucion',
    });
  };
  return Campus;
};
