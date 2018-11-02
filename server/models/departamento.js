'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define('Departamento', {
    nombre: DataTypes.STRING
  }, {});
  Departamento.associate = function(models) {
    Departamento.belongsTo(models.Colegio, {
        foreignKey: 'id_colegio',
        as: 'colegio',
    });
    Departamento.hasMany(models.Investigador, {
        through: models.DeptoInvestigador,
        foreignKey: 'id_departamento',
        as: 'investigadores',
    });
  };
  return Departamento;
};
