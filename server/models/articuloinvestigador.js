'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticuloInvestigador = sequelize.define('ArticuloInvestigador', {
  }, {
    freezeTableName: true,
  });
  ArticuloInvestigador.associate = function(models) {
    // associations can be defined here
  };
  return ArticuloInvestigador;
};
