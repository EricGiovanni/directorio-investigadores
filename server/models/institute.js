'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institute = sequelize.define('Institute', {
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    number_street: DataTypes.STRING,
    campus_id: {
        type: DataTypes.INTEGER,
        references: 'campus',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Institute.associate = function(models) {
    Institute.belongsTo(models.Campus, {
        foreignKey: 'campus_id',
        as: 'campus',
    });
    Institute.belongsToMany(models.Researcher, {
        through: models.InstituteResearcher,
        foreignKey: 'institute_id',
        as: 'researchers',
    });
  };
  return Institute;
};
