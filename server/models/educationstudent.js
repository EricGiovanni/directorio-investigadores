'use strict';
module.exports = (sequelize, DataTypes) => {
  const EducationStudent = sequelize.define('EducationStudent', {
    level_education: DataTypes.STRING,
    description: DataTypes.TEXT,
    student_id:{
      type: DataTypes.INTEGER,
      references:'student',
      referencesKey: 'id',
    },
  }, {
    freezeTableName:true,
  });
  EducationStudent.associate = function(models) {
    EducationStudent.belongsTo(models.Student,{
      foreignKey:'student_id',
      as:'student',
    });
  };
  return EducationStudent;
};
