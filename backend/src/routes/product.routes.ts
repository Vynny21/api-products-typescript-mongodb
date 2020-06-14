import { Router } from 'express'
import { ProductController } from '../controller/ProductController'
import { AuthController } from '../controller/AuthController'

export class ProductRoutes {
  public router: Router

  constructor () {
    this.router = Router()
    this.routes()
  }

  routes () {
    this.router.get('/', ProductController.getProducts)
    this.router.get('/:id', ProductController.getProduct)
    this.router.post('/', AuthController.authenticateJWT, ProductController.createProduct)
    this.router.put('/:id', AuthController.authenticateJWT, ProductController.updateProduct)
    this.router.delete('/:id', AuthController.authenticateJWT, ProductController.deleteProduct)
  }
}
