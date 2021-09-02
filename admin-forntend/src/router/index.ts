import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('@pages/home/index.vue')
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@pages/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router