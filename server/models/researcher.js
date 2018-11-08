'use strict';
module.exports = (sequelize, DataTypes) => {
  const Researcher = sequelize.define('Researcher', {
    CV: DataTypes.STRING,
    user_id: {
        type: DataTypes.INTEGER,
        references: 'user',
        referencesKey: 'id'
    },
  }, {
    freezeTableName: true,
  });
  Researcher.associate = function(models) {
    Researcher.belongsToMany(models.Institute, {
        through: models.InstituteResearcher,
        foreignKey: 'researcher_id',
        as: 'institutes'
    });
    Researcher.belongsToMany(models.Department, {
        through: models.DepartmentResearcher,
        foreignKey: 'researcher_id',
        as: 'departments',
    });
    Researcher.belongsToMany(models.Article, {
        through: models.ArticleResearcher,
        foreignKey: 'researcher_id',
        as: 'articles',
    });
    Researcher.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
    });
  };
  return Researcher;
};
