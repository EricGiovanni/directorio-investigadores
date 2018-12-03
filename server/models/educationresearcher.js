'use strict';
module.exports = (sequelize, DataTypes) => {
  const EducationResearcher = sequelize.define('EducationResearcher', {
    level_education: DataTypes.STRING,
    description: DataTypes.TEXT,
    researcher_id:{
      type: DataTypes.INTEGER,
      references:'reseacher',
      referencesKey:'id',
    },
  }, {
    freezeTableName: true,
  });
  EducationResearcher.associate = function(models) {
    EducationResearcher.belongsTo(models.Researcher,{
      foreignKey:'researcher_id',
      as:'reseacher',
    });
  };
  return EducationResearcher;
};
