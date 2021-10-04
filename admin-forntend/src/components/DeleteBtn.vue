<template>
  <el-popover v-model:visible="isDelVisible" placement="top" :width="160">
    <p>您确认删除吗?</p>
    <div style="text-align: right; margin: 0">
      <el-button
        size="mini"
        @click="isDelVisible = false"
      >
        取消
      </el-button>
      <el-button
        type="primary"
        size="mini"
        @click="onDelete"
      >
        确认
      </el-button>
    </div>
    <template #reference>
      <el-button
        type="danger"
        size="mini"
        @click="isDelVisible = true"
      >
        删除
      </el-button>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'DeleteBtn',
  props: {
    id: {
      type: Number,
      required: true
    },
    handleDelete: {
      type: Function as PropType<(id: number) => void>,
      required: true
    }
  },
  setup(props) {
    const { id, handleDelete } = props

    const onDelete = (): void | false => {
      if (!id) return false
      handleDelete(id)
    }
    
    return {
      isDelVisible: ref(false),
      onDelete
    }
  }
})
</script>
