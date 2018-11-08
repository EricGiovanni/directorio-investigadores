'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define('Departamento', {
    nombre: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Departamento.associate = function(models) {
    Departamento.belongsTo(models.Colegio, {
        foreignKey: 'id_colegio',
        as: 'colegio',
    });
    Departamento.belongsToMany(models.Investigador, {
        through: models.DeptoInvestigador,
        foreignKey: 'id_departamento',
        as: 'investigadores',
    });
  };
  return Departamento;
};
