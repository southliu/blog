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
          title: '首页',
          isNotShow: true
        },
        component: () => import('@/pages/dashboard/index.vue'),
      },
      {
        name: 'System',
        path: '/system',
        meta: {
          title: '系统管理',
          iconfont: 'icon-system'
        },
        redirect: '/system/user',
        component: () => import('@/pages/system/user.vue'),
        children: [
          {
            name: 'SystemUser',
            path: 'user',
            meta: {
              title: '用户管理',
              iconfont: 'icon-yonghuguanli'
            },
            component: () => import('@/pages/system/user.vue'),
          },
          {
            name: 'SystemRole',
            path: 'role',
            meta: {
              title: '角色管理',
              iconfont: 'icon-jiaoseguanli'
            },
            component: () => import('@/pages/system/role.vue'),
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
