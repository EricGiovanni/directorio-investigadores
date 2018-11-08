'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('Estado', {
    nombre: DataTypes.STRING,
    id_pais: {
        type: DataTypes.INTEGER,
        references: 'paises',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Estado.associate = function(models) {
    Estado.belongsTo(models.Pais, {
        foreignKey: 'id_pais',
        as: 'pais',
    });
    Estado.hasMany(models.Campus, {
        as: 'campus',
    });
  };
  return Estado;
};
