import Sequelize from 'sequelize'

import { DbInterface } from '../../types/databaseTypes'
import { UserModel } from './users'

const env = process.env.NODE_ENV || 'development'
const config = require('../config')[env]

const url = config.url || process.env.DATABSE_URL

const sequelize = new Sequelize(url, { ...config, query: { raw: true } })

const db: DbInterface = {
  sequelize,
  Sequelize,
  User: UserModel(sequelize, Sequelize)
}

// Object.values(db).forEach((model: any) => {
//     if (model.associate) {
//       model.associate(db)
//     }
//   })

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db)
  }
})

export default db
