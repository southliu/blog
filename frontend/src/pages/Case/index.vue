<template>
  <div v-if="!loading" class="container case">
    <div v-for="item in list" :key="item.id" class="item">
      <h1 class="year">{{ item.year }}</h1>
      <router-link
        v-for="child in item.items"
        :key="child.id"
        :to="child.url"
        class="date_item"
      >
        <div class="title">{{ child.title }}</div>
        <div class="date">{{ child.date }}</div>
      </router-link>
    </div>
  </div>

  <div v-if="loading" class="placeholder-glow container case">
    <div class="col-12">
      <h3 class="placeholder col-3"></h3>
      <div class="date_item">
        <div class="title placeholder col-3"></div>
        <div class="date placeholder col-2"></div>
      </div>
      <div class="date_item">
        <div class="title placeholder col-3"></div>
        <div class="date placeholder col-2"></div>
      </div>
    </div>
    <div class="col-12">
      <h3 class="placeholder col-3"></h3>
      <div class="date_item">
        <div class="title placeholder col-3"></div>
        <div class="date placeholder col-2"></div>
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
    const loading = ref(false)

    onMounted(() => {
      handleGetList()
    })

    // 获取列表数据
    const handleGetList = () => {
      loading.value = true
      API.find_case().then((response: IResponseData<ICaseResult[]>) => {
        if (response.code === 200) {
          list.value = response.data
        }
      }).finally(() => {
        loading.value = false
      })
    }

    return {
      list,
      loading
    }
  }
})
</script>

<style scoped>
  .container {
    min-height: calc(100vh - 417px);
    max-width: 800px;
  }
  .case {
    padding: 20px 10px;
  }
  .date_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
  }
</style>
