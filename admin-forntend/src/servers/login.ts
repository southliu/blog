import request from '@/utils/request'
import { AxiosResponse } from 'axios'

// 登录
interface ILogin {
  username: string;
  password: string;
}
function login(data: ILogin): Promise<AxiosResponse<IResponseData<boolean>>> {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}

export default {
  login
}