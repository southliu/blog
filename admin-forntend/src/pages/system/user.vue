<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="username" label="用户名"> </el-table-column>
    <el-table-column prop="role_ids" label="角色"> </el-table-column>
  </el-table>

  <el-pagination
    background
    layout="prev, pager, next, sizes"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="20"
    :total="pageOptions.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { IUserRequestData } from '@/types'
import API from '@api/system/user'

export default defineComponent({
  name: 'SystemUser',
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
