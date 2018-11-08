'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alumno = sequelize.define('Alumno', {
    becario: DataTypes.BOOLEAN,
    grado_academico: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Alumno.associate = function(models) {
    Alumno.belongsTo(models.Persona, {
        foreignKey: 'id_persona',
        as: 'persona',
    });
  };
  return Alumno;
};
