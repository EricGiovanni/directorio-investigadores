'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleResearcher = sequelize.define('ArticleResearcher', {
      article_id: {
          type: DataTypes.INTEGER,
          references: 'article',
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
  ArticleResearcher.associate = function(models) {
    // associations can be defined here
  };
  return ArticleResearcher;
};
