<template>
  <div class="container">
    <div v-for="item in list" :key="item.id" class="item">
      <h1 class="year">{{ item.year }}</h1>
      <div v-for="child in item.items" :key="child.id" class="date_item">
        <div class="title">{{ child.title }}</div>
        <div class="date">{{ child.date }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useTitle } from '@/hooks'
import { ICaseResult, IResponseData } from '@/types'
import API from '@/services'

export default defineComponent({
  setup() {
    useTitle()
    const list = ref<ICaseResult[]>([])

    onMounted(() => {
      handleGetList()
    })

    // 获取列表数据
    const handleGetList = () => {
      API.find_case().then((response: IResponseData<ICaseResult[]>) => {
        if (response.code === 200) {
          list.value = response.data
        }
      })
    }

    return {
      list
    }
  }
})
</script>

<style scoped>
  .date_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
