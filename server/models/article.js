'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    name: DataTypes.STRING,
    area: DataTypes.STRING
  }, {
    freezeTableName: true,
  });
  Article.associate = function(models) {
    Article.belongsToMany(models.Researcher, {
        through: models.ArticleResearcher,
        foreignKey: 'article_id',
        as: 'researchers',
    })
  };
  return Article;
};
