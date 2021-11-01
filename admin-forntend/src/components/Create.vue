<template>
  <el-dialog
    v-model="isVisible"
    :title="updateId ? '编辑' : '新增'"
    :width="width || 550"
    :close-on-click-modal="false"
    @close="handleClose(false)"
  >
    <el-form
      ref="formRef"
      class="box"
      status-icon
      :model="formData"
      :label-width="labelWidth || 120"
    >
      <el-form-item
        v-for="item in data"
        :key="item.key"
        :label="item.label"
        :prop="item.key"
        :required="!!item.isRequired"
        :rules="[{ required: !!item.isRequired, message: `请输入${item.label}`, trigger: 'blur' }]"
      >
        <el-input placeholder="请输入" v-model="formData[item.key]" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleClose(false)">关闭</el-button>
      <el-button type="primary" @click="onSubmit()">确认</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { ElLoading } from 'element-plus'
import { defineComponent, PropType, ref, unref, watch } from 'vue'

export default defineComponent({
  name: 'Create',
  props: {
    data: {
      type: Array as PropType<ICreateData[]>,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    formData: {
      type: Array as PropType<ICreateData[]>,
      required: true
    },
    updateId: {
      type: Number,
      required: false
    },
    isVisible: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      required: false
    },
    labelWidth: {
      type: Number,
      required: false
    },
    handleSubmit: {
      type: Function,
      required: true
    },
    handleClose: {
      type: Function as PropType<(isVisible: boolean) => void>,
      required: true
    }
  },
  setup(props) {
    const { isLoading, formData, handleSubmit } = props
    const formRef = ref()
    const isFormLoading = ref(false)

    console.log('props:', props)

    watch(() => isLoading, () => {
      isFormLoading.value = isLoading
      console.log('isLoading:', isLoading)
      ElLoading.service({
        lock: !!isLoading,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.2)'
      })
    })
    
    // 提交事件
    const onSubmit = (): void | false => {
      console.log('onSubmit:', formData)
      const form = unref(formRef)
      if (!form) return false
      form.validate((valid: boolean): void | false => {
        if (valid) {
          handleSubmit(formData)
        } else {
          return false
        }
      })
    }

    return {
      isFormLoading,
      formRef,
      formData,
      onSubmit
    }
  }
})
</script>
