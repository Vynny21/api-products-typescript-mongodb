/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import passport from 'passport'
import '../middleware/passportHandler'

export class AuthController {
  public static authenticateJWT (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', function (err, user, info) {
      if (err) {
        console.log(err)
        return res.status(401).json({ status: 'error', code: 'unauthorized' })
      }
      if (!user) {
        return res.status(401).json({ status: 'error', code: 'unauthorized' })
      } else {
        return next()
      }
    })(req, res, next)
  }

  public static authorizeJWT (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', function (err, user, jwtToken) {
      if (err) {
        console.log(err)
        return res.status(401).json({ status: 'error', code: 'unauthorized' })
      }
      if (!user) {
        return res.status(401).json({ status: 'error', code: 'unauthorized' })
      } else {
        const scope = req.baseUrl.split('/').slice(-1)[0]
        const authScope = jwtToken.scope
        if (authScope && authScope.indexOf(scope) > -1) {
          return next()
        } else {
          return res.status(401).json({ status: 'error', code: 'unauthorized' })
        }
      }
    })(req, res, next)
  }
}
