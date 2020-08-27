require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DATABASE_URL_DEV,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: false
  }
}
