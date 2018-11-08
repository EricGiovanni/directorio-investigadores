'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneUser = sequelize.define('PhoneUser', {
    phone: DataTypes.INTEGER,
    user_id: {
        type: DataTypes.INTEGER,
        references: 'user',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  PhoneUser.associate = function(models) {
    PhoneUser.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
    });
  };
  return PhoneUser;
};
