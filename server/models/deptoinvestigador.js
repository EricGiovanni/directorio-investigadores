'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeptoInvestigador = sequelize.define('DeptoInvestigador', {
  }, {});
  DeptoInvestigador.associate = function(models) {
    // associations can be defined here
  };
  return DeptoInvestigador;
};
