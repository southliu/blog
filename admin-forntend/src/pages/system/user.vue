<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="username" label="用户名"> </el-table-column>
    <el-table-column prop="roleIds" label="角色"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { IUserRequestData } from '@/types'
import API from '@api/system/user'

export default defineComponent({
  name: 'SystemUser',
  setup() {
    const tableData = ref<IUserRequestData[]>([])
    const pageOptions = ref<IPageDate>({
      page: 1,
      pageSize: 20
    })

    onMounted(() => {
      handleGetPage()
    })

    // 获取分页数据
    const handleGetPage = () => {
      API.find_page(pageOptions.value).then(response => {
        const res = response.data

        if (res.code === 200) {
          tableData.value = res.data
        }
      })
    }

    return {
      tableData,
      pageOptions
    }
  }
})
</script>
