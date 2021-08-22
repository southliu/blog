import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home/index.vue'
import About from '@/pages/About/index.vue'
import Case from '@/pages/Case/index.vue'
import BlogDetail from '@/pages/Home/detail.vue'

export const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'BlogDetail',
    path: '/blog/detail/:id',
    component: BlogDetail,
    meta: {
      title: '详情'
    }
  },
  {
    name: 'Case',
    path: '/case',
    component: Case,
    meta: {
      title: '项目'
    }
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      title: '关于我们'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router