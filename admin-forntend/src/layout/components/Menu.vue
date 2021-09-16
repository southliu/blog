<template>
  <div class="menu">
    <div v-for="item in data" :key="item.path" class="menu_item"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { menus } from '@/router/menus';
import { RouteMeta, RouteRecordRaw } from 'vue-router';
import { handleRecursion } from '@utils/utils'

interface IMenuDatas {
  title: string;
  path: string;
  iconfont: string;
}

interface IMetaData extends RouteMeta, IMenuDatas {
  isNotShow: boolean;
}

export default defineComponent({
  name: 'Menu',
  setup() {
    const data = ref<IMenuDatas[]>([])

    onMounted(() => {
      const data: IMenuDatas[] = handleMenus()
      console.log('handleMenus:', data)
    })

    // 处理菜单数据
    const handleMenus = (): IMenuDatas[] => {
      const values: IMenuDatas[] = handleRecursion<IMenuDatas, RouteRecordRaw> (menus, item => {
        console.log('item:', item)
        if (!item.meta) return undefined
        const meta = item.meta as IMetaData
        const { title, path, iconfont, isNotShow } = meta
        const data: IMenuDatas = { title, path, iconfont }
        const result = !isNotShow ? data : undefined
        console.log('result:', result)

        return result
      })

      console.log('values:', values)

      return values
    }
    
    return {
      data
    }
  }
})
</script>

<style lang="scss" scoped>
  .menu {
    width: 250px;
    min-height: calc(100vh - 35px);
    border-right: 1px solid #999;
  }
</style>