import axios from 'axios'

/**
 * TODO process.env
 */
const prefixUrl = process.env.VUE_APP_BASE_API || 'http://0.0.0.0:5000'
console.log('process:', process)

const service = axios.create({
  baseURL: prefixUrl,
  timeout: 30000
})

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res && res.code !== 200) {
      console.log('错误信息:', res.message || '服务器错误！')
    }

    return res
  }
)

export default service