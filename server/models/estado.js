'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('Estado', {
    nombre: DataTypes.STRING
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
