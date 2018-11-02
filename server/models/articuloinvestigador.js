'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticuloInvestigador = sequelize.define('ArticuloInvestigador', {
  }, {});
  ArticuloInvestigador.associate = function(models) {
    // associations can be defined here
  };
  return ArticuloInvestigador;
};
