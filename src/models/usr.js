module.exports = (sequelize, DataType) => sequelize.define('USR', {
  USR_ID: {
    type: Sequelize.STRING(10),
    primaryKey: true,
    allowNull: false
  },
  USR_PW: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  USR_NM: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  USR_ADDR_ST: {
    type: Sequelize.STRING(10)
  },
  USR_ADDR_CT: {
    type: Sequelize.STRING(20)
  },
  USR_ADDR_STRT: {
    type: Sequelize.STRING(20)
  },
  USR_SCHL: {
    type: Sequelize.STRING(20)
  },
  USR_GRD: {
    type: Sequelize.TINYINT(1).UNSIGNED
  },
  USR_JNDT: {
    type: Sequelize.DATE(3),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
  }
});