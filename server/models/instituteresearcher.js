'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstituteResearcher = sequelize.define('InstituteResearcher', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    institution_id: {
        type: DataTypes.INTEGER,
        references: 'institution',
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
    // associations can be defined here
  };
  return InstituteResearcher;
};
