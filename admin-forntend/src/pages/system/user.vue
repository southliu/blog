<template>
  <router-link to="/system/role">跳转角色</router-link>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="role" label="角色"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SystemUser',
  setup() {
    const tableData = [
      {
        id: '1',
        name: '王小虎',
        role: '技术',
      },
      {
        id: '2',
        name: '王小虎',
        role: '技术',
      },
      {
        id: '3',
        name: '王小虎',
        role: '技术',
      },
      {
        id: '4',
        name: '王小虎',
        role: '技术',
      },
    ]

    return {
      tableData
    }
  }
})
</script>
