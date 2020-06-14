import { Router } from 'express'
import { UserController } from '../controller/userController'

export class UserRoutes {
    router: Router

    constructor () {
      this.router = Router()
      this.routes()
    }

    routes () {
      // For TEST only ! In production, you should use an Identity Provider !!
      this.router.post('/register', UserController.registerUser)
      this.router.post('/login', UserController.authenticateUser)
    }
}
