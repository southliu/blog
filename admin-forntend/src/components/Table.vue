<template>
  <el-table :data="data" style="width: 100%">
    <template
      v-for="item in columns"
      :key="item.key"
    >
      <el-table-column
        v-if="!item.isNotShow"
        :prop="item.key"
        :label="item.label"
      />
    </template>
    <slot name="options"></slot>
  </el-table>

  <el-pagination
    background
    class="pagination"
    layout="prev, pager, next, sizes"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="20"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Table',
  props: {
    data: {
      type: Array as PropType<{ [key: string]: allDataType }[]>,
      required: true
    },
    columns: {
      type: Array as PropType<ITableColumns[]>,
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

<style lang="scss" scoped>
  .pagination {
    margin-top: 10px;
  }
</style>