<template>
  <Tables
    :data="tableData"
    :total="pageOptions.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { IUserRequestData } from '@/types'
import Tables from '@/components/Table.vue'
import API from '@api/system/user'

export default defineComponent({
  name: 'SystemUser',
  components: {
    Tables
  },
  setup() {
    const tableData = ref<IUserRequestData[]>([])
    const pageOptions = reactive<IPageDate>({
      page: 1,
      pageSize: 20,
      total: 0
    })

    onMounted(() => {
      handleGetPage()
    })

    // 获取分页数据
    const handleGetPage = () => {
      API.find_page(pageOptions).then(response => {
        const res = response.data

        if (res.code === 200) {
          const { items, total } = res.data
          tableData.value = items
          pageOptions.total = total
        }
      })
    }
    
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
    }


    return {
      tableData,
      pageOptions,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>
