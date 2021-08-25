import axios, { AxiosRequestConfig } from 'axios'

const prefixUrl = (import.meta.env.VITE_BASE_API as string)

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

    return response
  }
)

export default function(config: AxiosRequestConfig) {
  return service(config).then(responses => responses.data).catch(error => console.log('error:', error))
}