import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage, ElLoading } from 'element-plus'
import { useToken } from '@/hooks'

const prefixUrl = (import.meta.env.VITE_BASE_API as string)

// loading
let loading: { close: () => void; };

// 创建axios实例
const service = axios.create({
  baseURL: prefixUrl,
  timeout: 30000
})

// 异常处理
const handleError = (error: string): Promise<string> => {
  loading.close()
  console.log('错误信息:', error)
  ElMessage.closeAll()
  ElMessage({ type: 'error', message: error || '服务器错误!' })
  return Promise.reject(error)
}

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 开启loading
    loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.4)'
    })

    // 头部添加token
    const token = useToken()
    if (token) config.headers['Authorization'] = token
    return config
  },
  error => handleError(error)
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse<IPublicResponse>) => {
    loading.close()
    const res = response.data
    if (res?.code === 601) {
      ElMessage({ type: 'warning', message: res.message || '权限不足,请重新登录!' })
      return Promise.reject(res)
    }

    if (res?.code !== 200) {
      const message = res.message || '服务器错误!'
      handleError(message)
      return Promise.reject(res)
    }

    return Promise.resolve(response)
  },
  error => handleError(error)
)

export default service