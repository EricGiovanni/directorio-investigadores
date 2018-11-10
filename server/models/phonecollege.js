'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneCollege = sequelize.define('PhoneCollege', {
    phone: DataTypes.INTEGER,
    college_id: {
        type: DataTypes.INTEGER,
        references: 'college',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  PhoneCollege.associate = function(models) {
    PhoneCollege.belongsTo(models.College, {
        foreignKey: 'college_id',
        as: 'college',
    });
  };
  return PhoneCollege;
};
