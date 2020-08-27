import * as Sequelize from 'sequelize'
import bcrypt from 'bcrypt'

import { SequelizeAttributes } from '../../types/databaseTypes'

export interface UserAttributes {
  id?: number
  firstname: string
  lastname: string
  username: string
  email: string
  password: string
  role: string
  createdAt?: Date
  updatedAt?: Date
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {}

export const UserModel = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<UserInstance, UserAttributes> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    firstname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastname: {
      allowNull: true,
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'customer'
    }
  }

  const User = sequelize.define<UserInstance, UserAttributes>('user', attributes)

  User.beforeCreate(async user => {
    const salt = await bcrypt.genSaltSync()
    user.password = await bcrypt.hashSync(user.password, salt)
  })

  User.associate = models => {
    // User.hasMany(models.Comment, { foreignKey: 'AuthorId', as: 'comments' })
    // User.hasMany(models.Post, { foreignKey: 'AuthorId', as: 'posts' })
    // User.belongsToMany(models.Comment, {
    //   through: 'PostUpvotes',
    //   as: 'upvotedComments'
    // })
  }

  return User
}
