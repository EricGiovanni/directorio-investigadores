'use strict';
module.exports = (sequelize, DataTypes) => {
  const Colegio = sequelize.define('Colegio', {
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero_calle: DataTypes.STRING,
    esFacultad: DataTypes.BOOLEAN,
    esEscuela: DataTypes.BOOLEAN
  }, {});
  Colegio.associate = function(models) {
    Colegio.hasMany(models.Departamento, {
        as: 'departamentos',
    });
    Colegio.hasMany(models.TelefonoColegio, {
        as: 'telefonos',
    });
    Colegio.hasMany(models.Posgrado, {
        as: 'posgrados',
    });
    Colegio.belongsTo(models.Campus, {
        foreignKey: 'id_campus',
        as: 'campus',
    });
  };
  return Colegio;
};
