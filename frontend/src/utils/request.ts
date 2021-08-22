import axios from 'axios'

const prefixUrl = process.env.VUE_APP_BASE_API || 'http://192.168.1.102:5000'

console.log('prefixUrl:', prefixUrl)

const service = axios.create({
  baseURL: prefixUrl,
  timeout: 30000
})

export default service