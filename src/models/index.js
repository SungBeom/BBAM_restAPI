const Sequelize = require('sequelize');
const GM = require('./gm');
const USR = require('./usr');
const PRB = require('./prb');

const {
  DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DBMS, DB_MAX_CONNECTIONS, DB_MAX_IDLETIME,
} = process.env;

const sequelize = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    port: DB_PORT || 3306,
    dialect: DB_DBMS || 'mysql',
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    pool: {
      maxConnections: DB_MAX_CONNECTIONS || 5,
      maxIdleTime: DB_MAX_IDLETIME || 30,
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to database', err);
  });

const models = {
  GM: GM(sequelize, Sequelize.DataTypes),
  USR: USR(sequelize, Sequelize.DataTypes),
  PRB: PRB(sequelize, Sequelize.DataTypes),
};

const db = {
  ...models,
  sequelize,
};

export default db;
