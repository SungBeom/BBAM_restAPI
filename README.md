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
JWT_SECRET : 
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
DB_MAX_IDLETIME=30   \
JWT_SECRET=your_secret_key npm run dev

# Start production server:
PORT=8080            \
DB_NAME=bbam         \
DB_USERNAME=maestro  \
DB_PASSWORD=1234567  \
DB_HOST=127.0.0.1    \
DB_PORT=3306         \
DB_DBMS=mysql        \
DB_MAX_CONNECTIONS=5 \
DB_MAX_IDLETIME=30   \
JWT_SECRET=your_secret_key npm start
```
------
# JWT(JWON Web Token)
* /api/auth/login (When unauthenticated user comes in)
```sh
headers: {
  content-type: application/x-www-form-urlencoded
}

request body: {
  username: USR_NM,
  password: USR_PW
}

response: {
  success: true,
  message: null, (When authentication is passed)
  errors: null, (When authentication is passed)
  data: <JWT_TOKEN>
}
```

* /api/auth/me (Retrive User's data using JWT token)
```sh
headers: {
  content-type: application/x-www-form-urlencoded
  x-access-token: <JWT_TOKEN>
}

response: {
  success: true,
  message: null, (If valid user)
  errors: null, (If valid user)
  data: {
    USR_ID: userid,
    USR_PW: password,
    USR_NM: username,
    USR_ADDR_ST: ,
    USR_ADDR_CT: ,
    USR_ADDR_STRT: ,
    USR_SCHL: ,
    USR_GRD: ,
    USR_JNDT: ,
  }
}
```

* /api/auth/refresh (Referch JWT token's expired date)
```sh
headers: {
  content-type: application/x-www-form-urlencoded
  x-access-token: <JWT_TOKEN>
}

response: {
  success: true,
  message: null, (When authentication is passed)
  errors: null, (When authentication is passed)
  data: <JWT_TOKEN>
}
```
-----
