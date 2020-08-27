import db from '../database/models'
import { UserInstance } from '../database/models/users'

/**
 * @export
 * @function getUsers
 * @returns {Object} object
 */
export const getUsers = async (): Promise<UserInstance[]> => {
  const users = (await db.User.findAll()) as UserInstance[]
  return users
}
