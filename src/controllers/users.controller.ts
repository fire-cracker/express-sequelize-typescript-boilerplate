import { Request, Response } from 'express'

import { getUsers } from '../services/users.service'
import { UserInterface } from '../types/userTypes'

export const fetchAllUsers = async (_req: Request, res: any): Promise<UserInterface[]> => {
  try {
    const users = await getUsers()
    if (!users) res.status(404).send({ err: 'No users found' })

    return res.status(200).send({ data: { users, count: users.length } })
  } catch (error) {
    return res.status(500).send({ error: 'Server error' })
  }
}
