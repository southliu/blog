<template>
  <el-menu
    class="menu"
    default-active="/system/user"
    :default-openeds="[0]"
    :unique-opened="true"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu
      v-for="(item, index) in data"
      :key="index"
      class="menu_item"
      :index="index"
    >
      <template #title>
        <i :class="`iconfont ${item.iconfont}`" />
        <span>{{ item.title }}</span>
      </template>

      <el-menu-item
        v-for="menu in item.children"
        :key="menu.path"
        :index="menu.path"
        @click="handleGoPath(menu.path)"
      >
        {{ menu.title || '' }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { menus } from '@/router/menus';
import { RouteMeta, RouteRecordRaw, useRouter } from 'vue-router';

interface IPublicMetaData {
  title: string;
  iconfont: string;
}

interface IMenuDatas extends IPublicMetaData, IChildrenData<IMenuDatas> {
  path: string;
}

interface IMetaData extends RouteMeta, IPublicMetaData {
  isHidden?: boolean;
}

interface IRecursionChildrenData<T> {
  children?: T[];
  isHidden?: boolean;
} 

export default defineComponent({
  name: 'Menu',
  setup() {
    const data = ref<IMenuDatas[]>([])
    const isCollapse = ref(false);
    const router = useRouter()

    onMounted(() => {
      handleMenus()
    })

    // 过滤菜单数据
    function handleFilterMenu<T, Y extends IRecursionChildrenData<Y>>(data: Y[], callback: (item: Y) => T | undefined): T[] {
      const result: T[] = []
      data?.length > 0 && data.forEach((item: Y & IRecursionChildrenData<Y>) => {
        const callbackData = callback(item)
        if (callbackData && !item.isHidden && item.children && item.children.length > 0) {
          (callbackData as IRecursionChildrenData<T>).children = handleFilterMenu(item.children, callback)
        }
        callbackData && result.push(callbackData)
      })

      return result
    }

    // 处理菜单数据
    const handleMenus = (): void => {
      const values: IMenuDatas[] = handleFilterMenu<IMenuDatas, RouteRecordRaw> (menus, item => {
        if (!item.meta) return undefined
        const meta = item.meta as IMetaData
        const { path } = item
        const { isHidden, title, iconfont } = meta
        const data: IMenuDatas = { title, path, iconfont }
        const result = !isHidden ? data : undefined

        return result
      })

      data.value = values
    }
    
    // 菜单打开
    const handleOpen = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };

    // 菜单关闭
    const handleClose = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };

    // 跳转路由
    const handleGoPath = (path: string) => {
      router.push(path)
    }
    
    return {
      data,
      isCollapse,
      handleOpen,
      handleClose,
      handleGoPath
    }
  }
})
</script>

<style lang="scss" scoped>
  .menu:not(.el-menu--collapse) {
    width: 250px;
    min-height: calc(100vh - 35px);
    border-right: 1px solid #999;
  }
  .iconfont {
    margin-right: 5px;
  }
</style>