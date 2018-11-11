'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    founder_id: {
        type: DataTypes.INTEGER,
        references: 'user',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Group.associate = function(models) {
    Group.hasOne(models.Researcher, {
        foreignKey: 'founder_id',
        as: 'founder',
    });
    Group.hasMany(models.Researcher, {
        as: 'admins',
    });
  };
  return Group;
};
