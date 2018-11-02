'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investigador = sequelize.define('Investigador', {
    CV: DataTypes.STRING
  }, {});
  Investigador.associate = function(models) {
    Investigador.belongsToMany(models.Instituto, {
        through: models.InstitutoInvestigador,
        foreignKey: 'id_investigador',
        as: 'institutos'
    });
    Investigador.belongsToMany(models.Departamento, {
        through: models.DeptoInvestigador,
        foreignKey: 'id_investigador',
        as: 'departamentos',
    });
    Investigador.hasMany(models.Articulo, {
        through: models.ArticuloInvestigador,
        foreignKey: 'id_investigador',
        as: 'articulos',
    });
    Investigador.belongsTo(models.Persona, {
        foreignKey: 'id_persona',
        as: 'persona',
    });
  };
  return Investigador;
};
