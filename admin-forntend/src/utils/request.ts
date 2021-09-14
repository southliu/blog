import axios from 'axios'
// import { ElLoading } from 'element-plus'
import { useToken } from '@/hooks'

const prefixUrl = (import.meta.env.VITE_BASE_API as string)

const service = axios.create({
  baseURL: prefixUrl,
  timeout: 30000
})

service.interceptors.request.use(
  config => {
    config.headers.token = useToken()
    return config
  },
  error => {
    console.log('错误信息:', error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res && res.code !== 200) {
      console.log('错误信息:', res.message || '服务器错误！')
    }

    return res
  },
  error => Promise.reject(error)
)

export default service