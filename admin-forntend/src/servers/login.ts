import request from '@/utils/request'
import { ILoginData, ILoginResult } from '@/types'

// 登录
function login(data: ILoginData): IAPIResult<ILoginResult> {
  return request.post('/login', data)
}

export default {
  login
}