'use strict'

module.exports = {
  //@ts-ignore
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      firstname: {
        allowNull: {
          args: false,
          msg: 'Please enter a username'
        },
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: {
          args: false,
          msg: 'Please enter a username'
        },
        type: Sequelize.STRING
      },
      username: {
        allowNull: {
          args: false,
          msg: 'Please enter a username'
        },
        type: Sequelize.STRING,
        unique: {
          args: true,
          msg: 'Username already exist'
        }
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        allowNull: {
          args: false,
          msg: 'Please enter a password'
        },
        type: Sequelize.STRING,
        validate: {
          len: [8, 72]
        }
      },
      role: {
        allowNull: false,
        type: Sequelize.TEXT,
        defaultValue: 'customer'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    })},
  //@ts-ignore
  down: queryInterface => queryInterface.dropTable('user')
}
