'use strict';
module.exports = (sequelize, DataTypes) => {
  const Workresearcher = sequelize.define('workresearcher', {
    work_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    researcher_id: {
      type: DataTypes.INTEGER,
      references:'reseacher',
      referencesKey:'id',
    },
  }, {
    freezeTableName: true,
  });
  Workresearcher.associate = function(models) {
    Workresearcher.belongsTo(models.Researcher,{
      foreignKey: 'researcher_id',
      as:'reseacher',
    });
  };
  return Workresearcher;
};
