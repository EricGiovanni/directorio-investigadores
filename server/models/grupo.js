'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grupo = sequelize.define('Grupo', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE
  }, {
    freezeTableName: true,
  });
  Grupo.associate = function(models) {
    Grupo.hasOne(models.Investigador, {
        foreignKey: 'id_creador',
        as: 'creador',
    });
    Grupo.hasMany(models.Investigador, {
        as: 'administradores',
    });
  };
  return Grupo;
};
