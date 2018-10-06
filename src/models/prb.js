module.exports = (sequelize, DataType) => sequelize.define('PRB',
  {
    PRB_ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    PRB_DIFF: {
      type: DataType.TINYINT(1),
    },
    PRB_CLS: {
      type: DataType.STRING(10),
    },
    PRB_CNT: {
      type: DataType.STRING(500),
    },
    PRB_HNT: {
      type: DataType.STRING(500),
    },
    PRB_IN: {
      type: DataType.STRING(100),
    },
    PRB_OUT: {
      type: DataType.STRING(100),
    },
    PRB_RTN: {
      type: DataType.INTEGER,
    },
  });
