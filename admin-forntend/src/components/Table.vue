<template>
  <el-table :data="data" style="width: 100%">
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
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Table',
  props: {
    data: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    handleSizeChange: {
      type: Function,
      required: true
    },
    handleCurrentChange: {
      type: Function,
      required: true
    }
  },
  setup() {
  }
})
</script>
