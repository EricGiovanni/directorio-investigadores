'use strict';
module.exports = (sequelize, DataTypes) => {
  const College = sequelize.define('College', {
    name: DataTypes.STRING,
    is_faculty: DataTypes.BOOLEAN,
    campus_id: {
        type: DataTypes.INTEGER,
        references: 'campus',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  College.associate = function(models) {
    College.hasMany(models.Department, {
        as: 'departments',
    });
    College.hasMany(models.PhoneCollege, {
        as: 'phones',
    });
    College.hasMany(models.Posgraduate, {
        as: 'posgraduates',
    });
    College.belongsTo(models.Campus, {
        foreignKey: 'campus_id',
        as: 'campus',
    });
  };
  return College;
};
