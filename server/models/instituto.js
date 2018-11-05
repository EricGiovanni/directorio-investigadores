'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instituto = sequelize.define('Instituto', {
    nombre: DataTypes.STRING,
    entidad: DataTypes.STRING,
    municipio: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero_calle: DataTypes.STRING,
    es_instituto: DataTypes.BOOLEAN,
    es_centro: DataTypes.BOOLEAN,
  }, {});
  Instituto.associate = function(models) {
    Instituto.belongsTo(models.Campus, {
        foreignKey: 'id_campus',
        as: 'campus',
    });
    Instituto.belongsToMany(models.Investigador, {
        through: models.InstitutoInvestigador,
        foreignKey: 'id_instituto',
        as: 'investigadores',
    });
  };
  return Instituto;
};
