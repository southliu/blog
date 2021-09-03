<template>
  <div class="container">
    <DetailCon
      :data="detailData"
      :loading="loading"
      :handleNext="handleNext"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useTitle } from '@/hooks'
import { useRoute, useRouter } from 'vue-router'
import { IHomeDetailResult, IResponseData } from '@/types'
import DetailCon from './components/DetailCon.vue'
import API from '@/services'

export default defineComponent({
  name: 'BlogDetail',
  components: {
    DetailCon
  },
  setup() {
    useTitle()
    const route = useRoute()
    const router = useRouter()
    const loading = ref(false)
    const detailData = ref<IHomeDetailResult>({
      id: '',
      title: '',
      date: '',
      content: '',
      prev: '',
      next: ''
    })

    onMounted(() => {
      const { id } = route.params
      if (id) handleGetDetail(id as string)
    })
  
    // 获取详情
    const handleGetDetail = (id: string) => {
      loading.value = true
      API.find_detail(id).then((response: IResponseData<IHomeDetailResult>) => {
        if (response.code === 200) {
          const { data } = response
          detailData.value = data
        }
      }).finally(() => {
        loading.value = false
      })
    }

    // 点击换页
    const handleNext = (id: string) => {
      handleGetDetail(id)
      router.push(`/blog/detail/${id}`)
    }

    return {
      detailData,
      loading,
      handleNext
    }
  }
})
</script>
