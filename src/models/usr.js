module.exports = (sequelize, DataType) => sequelize.define('USR', {
  USR_ID: {
    type: DataType.STRING(10),
    primaryKey: true,
    allowNull: false
  },
  USR_PW: {
    type: DataType.STRING(20),
    allowNull: false
  },
  USR_NM: {
    type: DataType.STRING(20),
    allowNull: false
  },
  USR_ADDR_ST: {
    type: DataType.STRING(10)
  },
  USR_ADDR_CT: {
    type: DataType.STRING(20)
  },
  USR_ADDR_STRT: {
    type: DataType.STRING(20)
  },
  USR_SCHL: {
    type: DataType.STRING(20)
  },
  USR_GRD: {
    type: DataType.TINYINT(1).UNSIGNED
  },
  USR_JNDT: {
    type: DataType.DATE(3),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
  }
});