'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articulo = sequelize.define('Articulo', {
    nombre: DataTypes.STRING,
    area: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Articulo.associate = function(models) {
    Articulo.belongsToMany(models.Investigador, {
        through: models.ArticuloInvestigador,
        foreignKey: 'id_articulo',
        as: 'investigadores',
    })
  };
  return Articulo;
};
