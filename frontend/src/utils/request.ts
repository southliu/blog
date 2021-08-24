import axios, { AxiosResponse } from 'axios'

export type IResponse<T> = {
  code: number;
  message?: string;
  data: T
}

/**
 * TODO process.env
 */
const prefixUrl = (import.meta.env.VITE_BASE_API as string)
console.log('prefixUrl:', prefixUrl)
console.log('env:', import.meta.env)

const service = axios.create({
  baseURL: prefixUrl,
  timeout: 30000
})

service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res && res.code !== 200) {
      console.log('错误信息:', res.message || '服务器错误！')
    }

    return res
  }
)

export default service