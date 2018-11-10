'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    college_id: {
        type: DataTypes.INTEGER,
        references: 'college',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Department.associate = function(models) {
    Department.belongsTo(models.College, {
        foreignKey: 'college_id',
        as: 'college',
    });
    Department.belongsToMany(models.Researcher, {
        through: models.DepartmentResearcher,
        foreignKey: 'department_id',
        as: 'researchers',
    });
  };
  return Department;
};
