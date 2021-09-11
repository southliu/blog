<template>
  <el-card class="card">
    <el-form
      :model="formData"
      status-icon
      :rules="rules"
      ref="formRef"
      label-width="100px"
      class="form"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="formData.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="formData.password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue'

export default defineComponent({
  setup(ctx) {
    // 规则
    const rules = reactive({})
    // formData数据
    const formData = reactive({
      username: '',
      password: ''
    })

    // 提交事件
    const submitForm = () => {
      // getCurrentInstance().ctx.$refs.formRef.validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }

    return {
      rules,
      formData,
      submitForm
    }
  }
})
</script>


<style lang="scss" scoped>
  .card {
    width: 480px;
    padding: 10px;
  }
</style>