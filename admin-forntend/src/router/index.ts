import { useToken } from '@/hooks'
import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { menus } from './menus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(),
  routes: menus
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  document.title = (to.meta.title as string) || '后台管理'
  const token = useToken()
  NProgress.start()

  if (to.path === '/login') {
    // 有token情况返回首页
    if (token) next({ path: '/dashboard' })
  }

  next()
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})

export default router