'use strict';
module.exports = (sequelize, DataTypes) => {
  const DepartmentResearcher = sequelize.define('DepartmentResearcher', {
      department_id: {
          type: DataTypes.INTEGER,
          references: 'department',
          referencesKey: 'id'
      },
      researcher_id: {
          type: DataTypes.INTEGER,
          references: 'researcher',
          referencesKey: 'id'
      },
  }, {
    freezeTableName: true,
  });
  DepartmentResearcher.associate = function(models) {
    // associations can be defined here
  };
  return DepartmentResearcher;
};
