'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institucion = sequelize.define('Institucion', {
    nombre: DataTypes.STRING,
    es_publica: DataTypes.BOOLEAN,
    es_independiente: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
  });
  Institucion.associate = function(models) {
    Institucion.hasMany(models.Campus, {
        as: 'campus',
        onDelete: 'CASCADE',
    });
    Institucion.hasMany(models.TelefonoInstitucion, {
        as: 'telefonos',
        onDelete: 'CASCADE',
    });
  };
  return Institucion;
};
