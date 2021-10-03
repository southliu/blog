<template>
  <el-dialog
    v-model="isVisible"
    :title="updateId ? '编辑' : '新增'"
    width="30%"
  >
    <el-form
      :model="formData"
      class="box"
    >
      <el-form-item
        v-for="item in data"
        :key="item.key"
        :label="item.label"
      >
        <el-input placeholder="请输入" v-model="formData[item.key]"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose(false)">关闭</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'Create',
  props: {
    data: {
      type: Array as PropType<ICreateData[]>,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    },
    handleClose: {
      type: Function as PropType<(isVisible: boolean) => void>,
      required: true
    }
  },
  setup() {
    const formData = ref({})
    const updateId = ref<string | number>('')

    // 提交
    const onSubmit = () => {
      // formData.value
      console.log('onSubmit:', formData.value)
    }

    return {
      formData,
      updateId,
      onSubmit
    }
  }
})
</script>
