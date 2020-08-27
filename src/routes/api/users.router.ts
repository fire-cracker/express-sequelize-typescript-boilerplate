import express from 'express'
import { fetchAllUsers } from '../../controllers/users.controller'

const userRoutes = express.Router()

userRoutes.get('/', fetchAllUsers)

export default userRoutes
