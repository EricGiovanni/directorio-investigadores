'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    aprobado: DataTypes.BOOLEAN,
  }, {
    freezeTableName: true,
  });
  Persona.associate = function(models) {
      Persona.hasMany(models.TelefonoPersona, {
         as: 'telefonos',
         onDelete: 'CASCADE',
      });
  };
  return Persona;
};
