'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    nombre: DataTypes.STRING,
    apellido_paterno: DataTypes.STRING,
    apellido_materno: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    aprobado: DataTypes.BOOLEAN,
  }, {});
  Persona.associate = function(models) {
      Persona.hasMany(models.TelefonoPersona, {
         as: 'telefonos',
         onDelete: 'CASCADE',
      });
  };
  return Persona;
};
