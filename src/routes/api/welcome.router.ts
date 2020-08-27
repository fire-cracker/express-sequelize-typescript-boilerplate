import { Router, Request, Response } from 'express'

const welcomeRouter = Router()

welcomeRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json({
    success: true,
    message:
      'Welcome to my simple typescript-express-sequelize-mocha Template. Read the READMe for a better understanding of how to implement the project'
  })
)

export default welcomeRouter
