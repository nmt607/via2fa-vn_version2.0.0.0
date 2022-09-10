require("dotenv").config()
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.PASSWORDSQL,
    "database": "via2fa.vn_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions": {
      "useUTC": false
    },
    "timezone": "+07:00",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
