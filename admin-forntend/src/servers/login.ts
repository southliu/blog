import request from '@/utils/request'
import { AxiosResponse } from 'axios'
import { ILoginData, ILoginResult } from '@/types'

// 登录
function login(data: ILoginData): Promise<AxiosResponse<IResponseData<ILoginResult>>> {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}

export default {
  login
}