import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const menus: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        meta: {
          title: '首页'
        },
        component: () => import('@pages/dashboard/index.vue'),
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录',
      isNotShow: true
    },
    component: () => import('@pages/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: menus
})

export default router