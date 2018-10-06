module.exports = (sequelize, DataType) => sequelize.define('GM',
  {
    GM_ID: {
      type: DataType.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
    GM_LV: {
      type: DataType.TINYINT,
      defaultValue: 1,
    },
    GM_EXP: {
      type: DataType.INTEGER,
      defaultValue: 0,
    },
    GM_RTN: {
      type: DataType.INTEGER,
    },
  });
