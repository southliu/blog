import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/init.css'
import '@/assets/css/iconfont.css'
// import { useTitle } from '@/hooks'

const app = createApp(App)
// app.mixin({
//   methods: {
//     useTitle
//   }
// })
app.use(router)
app.mount('#content')
