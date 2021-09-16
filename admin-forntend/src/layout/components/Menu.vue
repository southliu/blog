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

export default defineComponent({
  name: 'Menu',
  setup() {
    const data = ref<IMenuDatas[]>([])

    onMounted(() => {
      handleMenus()
    })

    // 处理菜单数据
    const handleMenus = (): IMenuDatas[] => {
      // const values: IMenuDatas[] = []
      const values: IMenuDatas[] = handleRecursion<IMenuDatas, RouteRecordRaw> (menus, item => {
        console.log('item:', item)
        let data: IMenuDatas = {
          title: '',
          path: '',
          iconfont: ''
        }

        return data
      })

      return values
    }

    // function handleRecursion<T, Y extends IRecursionData<Y>>(data: Y[], callback: (item: Y) => T): T[] {
    //   let result: T[] = []
    //   data?.length > 0 && data.forEach((item: Y & IRecursionData<Y>) => {
    //     result.push(callback(item))

    //     if (item.children && item.children.length > 0) {
    //       handleRecursion(item.children, callback)
    //     }
    //   })

    //   return result
    // }
    
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