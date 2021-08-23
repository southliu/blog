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
import { IBlogCard } from '@/utils/types'
import Card from './components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import API from '@/services'

export default defineComponent({
  components: {
    Card,
    Pagination
  },
  setup() {
    useTitle()

    const router = useRouter()
    const lists = ref<IBlogCard[]>([])

    onMounted(() => {
      handleGetPage()
    })

    // 获取数据
    const handleGetPage = () => {
      API.find_page({}).then((response: any) => {
        console.log('response:', response)
        if (response.code === 200) {
          lists.value = response.data
        }
      })
    }
    const pageOptions = reactive({
      page: 1,
      pageSize: 10,
      total: 40
    })

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