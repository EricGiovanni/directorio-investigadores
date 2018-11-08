'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institution = sequelize.define('Institution', {
    name: DataTypes.STRING,
    is_public: DataTypes.BOOLEAN,
    is_independent: DataTypes.BOOLEAN
  }, {
    freezeTableName: true,
  });
  Institution.associate = function(models) {
    Institution.hasMany(models.Campus, {
        as: 'campus',
        onDelete: 'CASCADE',
    });
    Institution.hasMany(models.PhoneInstitution, {
        as: 'phones',
        onDelete: 'CASCADE',
    });
  };
  return Institution;
};
