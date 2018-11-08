'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstitutoInvestigador = sequelize.define('InstitutoInvestigador', {
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE
  }, {
    freezeTableName: true,
  });
  InstitutoInvestigador.associate = function(models) {
    // associations can be defined here
  };
  return InstitutoInvestigador;
};
