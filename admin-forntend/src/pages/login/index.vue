<template>
  <div class="bg">
    <el-card class="card">
      <h3 class="title">账户登录</h3>
      <el-form
        :model="formData"
        status-icon
        :rules="rules"
        ref="formRef"
        label-width="100px"
        class="form"
      >
        <el-form-item
          label="账号"
          prop="username"
          :rules="[{ required: true, message: '账号不能为空!'}]"
        >
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :required="true"
        >
          <el-input
            type="password"
            v-model="formData.password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="btn"
            @click="submitForm()"
          >
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from 'vue'
import { Rules } from 'async-validator';
import { useTitle } from '@/hooks'

type IValidateCallBack = (error: string | string[] | void) => void

// 校验密码
const validatePassword = (rule: Rules, value: string, callback: IValidateCallBack): void => {
  const reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,18}$/;
  if (!value) callback('请输入密码!')
  if (!reg.test(value)) callback('密码长度6-18位必须同时包含字母和数字!')
  callback()
}

export default defineComponent({
  setup() {
    useTitle()

    const formRef = ref()
  
    // 规则
    const rules = reactive({
      password: [{ validator: validatePassword, trigger: 'blur' }],
    })
    // formData数据
    const formData = reactive({
      username: '',
      password: ''
    })

    // 提交事件
    const submitForm = (): void | false => {
      const form = unref(formRef)
      if (!form) return false
      form.validate((valid: boolean) => {
        console.log('valid:', valid)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    return {
      formRef,
      rules,
      formData,
      submitForm
    }
  }
})
</script>


<style lang="scss" scoped>
  .title {
    margin-bottom: 30px;
  }
  .bg {
    @include absolute-center;
    background-color: $primary-bg;
  }
  .card {
    width: 480px;
    padding:0 10px;
  }
  .btn {
    width: 300px;
    margin-top: 20px;
  }
</style>