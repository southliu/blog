<template>
  <div class="blog container">
    <Card :data="lists" :handleClick="handleClick" />
    <Pagination
      :page="pageOptions.page"
      :total="pageOptions.total"
      :pageSize="pageOptions.pageSize"
      @onChange="handleChangePagination"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { useTitle } from '@/hooks'
import { useRouter } from 'vue-router'
import { IHomeResult } from '@/types'
import Card from './components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import API from '@/services'
import { IPageResponseData } from '@/types'

export default defineComponent({
  components: {
    Card,
    Pagination
  },
  setup() {
    useTitle()
    const router = useRouter()
    const lists = ref<IHomeResult[]>([])
    const pageOptions = reactive({
      page: 1,
      pageSize: 10,
      total: 0
    })

    onMounted(() => {
      handleGetPage()
    })

    // 获取数据
    const handleGetPage = () => {
      const { page, pageSize } = pageOptions
      API.find_page({ page, pageSize }).then((response: IPageResponseData<IHomeResult[]>) => {
        if (response.code === 200) {
          const { items, total } = response.data
          lists.value = items || []
          pageOptions.total = total || 0
        }
      })
    }

    // 点击博客
    const handleClick = (id: string) => {
      router.push(`/blog/detail/${id}`)
    }

    // 处理分页
    const handleChangePagination = (page: number) => {
      console.log('handleChangePagination:', page)
    }
  
    return {
      lists,
      pageOptions,
      handleClick,
      handleChangePagination
    }
  }
})
</script>

<style lang="less" scoped>
  .blog {
    text-align: left;
  }
</style>