'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhoneInstitution = sequelize.define('PhoneInstitution', {
    phone: DataTypes.INTEGER,
    institution_id: {
        type: DataTypes.INTEGER,
        references: 'institution',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  PhoneInstitution.associate = function(models) {
    PhoneInstitution.belongsTo(models.Institution, {
        foreignKey: 'institution_id',
        as: 'institution',
    });
  };
  return PhoneInstitution;
};
