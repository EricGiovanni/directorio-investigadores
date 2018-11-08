'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    user_id: {
        type: DataTypes.INTEGER,
        references: 'admin',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Admin.associate = function(models) {
    Admin.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
    });
  };
  return Admin;
};
