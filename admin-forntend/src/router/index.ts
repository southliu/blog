import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const menus: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'Home',
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('@pages/home/index.vue'),
      }
    ]
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
  routes: menus
})

export default router