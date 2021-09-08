import 'reflect-metadata'

export enum Methods {
  get = 'get',
  post = 'post',
  put = 'put', // 更新全部内容
  patch = 'patch', // 更新部分内容
  del = 'delete'
}

function getRequestDecorator(type: string) {
  return function (path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', type, target, key)
    }
  }
}

export const get = getRequestDecorator(Methods.get)
export const post = getRequestDecorator(Methods.post)
export const put = getRequestDecorator(Methods.put)
export const patch = getRequestDecorator(Methods.patch)
export const del = getRequestDecorator(Methods.del)