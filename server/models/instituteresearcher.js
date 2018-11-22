'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstituteResearcher = sequelize.define('InstituteResearcher', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    institute_id: {
        type: DataTypes.INTEGER,
        references: 'institute',
        referencesKey: 'id'
    },
    researcher_id: {
        type: DataTypes.INTEGER,
        references: 'researcher',
        referencesKey: 'id'
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    freezeTableName: true,
  });
  InstituteResearcher.associate = function(models) {
  };
  return InstituteResearcher;
};
