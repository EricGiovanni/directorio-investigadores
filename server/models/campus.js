'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define('Campus', {
    name: DataTypes.STRING,
    state_id: {
        type: DataTypes.INTEGER,
        references: 'state',
        referencesKey: 'id'
    },
    institution_id: {
        type: DataTypes.INTEGER,
        references: 'institution',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Campus.associate = function(models) {
    Campus.hasMany(models.Institute, {
        as: 'institutes',
    });
    Campus.hasMany(models.College, {
        as: 'colleges',
    });
    Campus.belongsTo(models.Institution, {
        foreignKey: 'institution_id',
        as: 'institution',
    });
    Campus.belongsTo(models.State, {
        foreignKey: 'state_id',
        as: 'state',
    });
  };
  return Campus;
};
