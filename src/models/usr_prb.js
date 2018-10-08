module.exports = (sequelize, DataType) => sequelize.define('USR_PRB', {
    UP_UID: {
        type: Sequelize.STRING(10),
        primaryKey: true,
        allowNull: false
    },
    UP_PID: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    UP_SSEQ: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false
    },
    UP_CRCT: {
        type: Sequelize.TINYINT(1)
    },
    UP_DTM: {
        type: Sequelize.DATE(3),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    }
});