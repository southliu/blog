import 'reflect-metadata'
import { RequestHandler } from 'express'
import { Methods } from './request'
import router from '../router'

export function controller(root: string) {
  return function(target: new (...arg: any[]) => any) {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata('path', target.prototype, key)
      const method: Methods = Reflect.getMetadata('method', target.prototype, key)
      const middlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target.prototype, key)
      const handler = target.prototype[key]
      if (path && method) {
        const fillPath: string = root === '/' ? path : `${root}${path}`
        if (middlewares && middlewares.length) {
          router[method](fillPath, ...middlewares, handler)
        } else {
          router[method](fillPath, handler)
        }
      }
    }
  }
}