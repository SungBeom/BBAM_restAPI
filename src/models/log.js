export default (sequelize, DataType) => sequelize.define('LOG', {
    LOG_DTM: {
        type: DataType.DATE(3),
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.literal('CURRENT_TIMESTAMP(3)')
    },
    LOG_UID: {
        type: DataType.STRING(10),
        primaryKey: true,
        allowNull: false
    },
    LOG_PID: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    LOG_SSEQ: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    LOG_SEQ: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    LOG_ETP: {
        type: DataType.STRING(10)
    },
    LOG_BID: {
        type: DataType.INTEGER.UNSIGNED
    },
    LOG_BUPID: {
        type: DataType.INTEGER.UNSIGNED
    },
    LOG_BTP: {
        type: DataType.STRING(20)
    },
    LOG_BVL: {
        type: DataType.STRING(200)
    }
});