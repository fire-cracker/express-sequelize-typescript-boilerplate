export interface TimeStampInterface {
  createdAt: Date
  updatedAt: Date
}

export interface UserInterface extends TimeStampInterface {
  id: string
  firstname: string
  lastname: string
  username: string
  email: string
  password: string
  role: string
}
