import { RouteRecordRaw } from 'vue-router';

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
        component: () => import('@/pages/dashboard/index.vue'),
      },
      {
        name: 'System',
        path: '/system',
        meta: {
          title: '系统管理'
        },
        redirect: '/system/user',
        component: () => import('@/pages/system/user.vue'),
        children: [
          {
            name: 'SystemUser',
            path: 'user',
            meta: {
              title: '用户管理'
            },
            component: () => import('@/pages/system/user.vue'),
          },
        ]
      },
    ]
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录',
      isNotShow: true
    },
    component: () => import('@/pages/login/index.vue')
  }
]
