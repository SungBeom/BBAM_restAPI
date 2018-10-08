export default (sequelize, DataType) => sequelize.define('USR_PRB', {
    UP_UID: {
        type: DataType.STRING(10),
        primaryKey: true,
        allowNull: false
    },
    UP_PID: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    UP_SSEQ: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    UP_CRCT: {
        type: DataType.TINYINT(1)
    },
    UP_DTM: {
        type: DataType.DATE(3),
        defaultValue: DataType.literal('CURRENT_TIMESTAMP(3)')
    }
});