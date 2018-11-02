'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstitutoInvestigador = sequelize.define('InstitutoInvestigador', {
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE
  }, {});
  InstitutoInvestigador.associate = function(models) {
    // associations can be defined here
  };
  return InstitutoInvestigador;
};