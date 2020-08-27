import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize'
import * as Sequelize from 'sequelize'

import { UserAttributes, UserInstance } from '../database/models/users'

type SequelizeAttribute = string | DataTypeAbstract | DefineAttributeColumnOptions

export type SequelizeAttributes<T extends { [key: string]: any }> = {
  [P in keyof T]: SequelizeAttribute
}

export interface DbInterface {
  sequelize: Sequelize.Sequelize
  Sequelize: Sequelize.SequelizeStatic
  User: Sequelize.Model<UserInstance, UserAttributes>
}
