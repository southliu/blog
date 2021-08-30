<template>
  <div class="container">
    <DetailCon :data="detailData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { useTitle } from '@/hooks'
import { useRoute } from 'vue-router'
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
    const detailData = ref<IHomeDetailResult>({
      id: '',
      title: '',
      date: '',
      content: '',
      prev: '',
      next: ''
    })

    onMounted(() => {
      console.log('onMounted')
      const { id } = route.params
      if (id) handleGetDetail(id as string)
    })

    // onUpdated(() => {
    //   console.log('onUpdated')
    //   const { id } = route.params
    //   if (id) handleGetDetail(id as string)
    // })

    // 获取详情
    const handleGetDetail = (id: string) => {
      API.find_detail(id).then((response: IResponseData<IHomeDetailResult>) => {
        if (response.code === 200) {
          const { data } = response
          detailData.value = data
        }
      })
    }

    return {
      detailData
    }
  }
})
</script>

<style lang="less" scoped>
</style>
