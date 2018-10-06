Starter project for an ES6 RESTful Express API. http://git.io/express-es6-rest-api

* Environment Variables
```
PORT : Port number of express server. default 8080
DB_NAME : Schema name of database.
DB_USERNAME : User name of database.
DB_PASSWORD : Password of database.
DB_HOST
DB_PORT : default 3306
DB_DBMS : default mysql (support mysql, sqlite, postgres, and mssql)
DB_MAX_CONNECTIONS : The maximum number of db connections. default 5
DB_MAX_IDLETIME : Maximum db connection idle time (sec). default 30
```
------
```sh
# Install dependencies
npm install

# Start development live-reload server
PORT=8080            \
DB_NAME=bbam         \
DB_USERNAME=maestro  \
DB_PASSWORD=1234567  \
DB_HOST=127.0.0.1    \
DB_PORT=3306         \
DB_DBMS=mysql        \
DB_MAX_CONNECTIONS=5 \
DB_MAX_IDLETIME=30 npm run dev

# Start production server:
PORT=8080            \
DB_NAME=bbam         \
DB_USERNAME=maestro  \
DB_PASSWORD=1234567  \
DB_HOST=127.0.0.1    \
DB_PORT=3306         \
DB_DBMS=mysql        \
DB_MAX_CONNECTIONS=5 \
DB_MAX_IDLETIME=30 npm start
```
------
