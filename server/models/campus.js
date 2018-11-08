'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define('Campus', {
    nombre: DataTypes.STRING,
    id_estado: {
        type: DataTypes.INTEGER,
        references: 'estados',
        referencesKey: 'id'
    },
    id_institucion: {
        type: DataTypes.INTEGER,
        references: 'instituciones',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Campus.associate = function(models) {
    Campus.hasMany(models.Instituto, {
        as: 'institutos',
    });
    Campus.hasMany(models.Colegio, {
        as: 'colegios',
    });
    Campus.belongsTo(models.Institucion, {
        foreignKey: 'id_institucion',
        as: 'institucion',
    });
    Campus.belongsTo(models.Estado, {
        foreignKey: 'id_estado',
        as: 'estado',
    });
  };
  return Campus;
};
